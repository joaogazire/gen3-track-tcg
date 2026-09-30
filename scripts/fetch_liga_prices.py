#!/usr/bin/env python3
"""Gera assets/data/liga-prices.min.json com o preço da Liga Pokemon por carta.

O site é estático e o visitante não consegue buscar na Liga (Cloudflare com
desafio em JavaScript + sem CORS). Este script faz a busca aqui, num Chrome de
verdade (headless, via Playwright, usando o Google Chrome instalado — o
Chromium do Playwright costuma ser barrado), e o site só lê o JSON gerado.

Uma busca por Pokémon (?view=cards/search&card=<nome>) traz mín./médio/máx. de
todas as impressões daquele nome. Cada carta do catálogo é casada pelo número
E total da coleção (só o número mistura coleções); sem total no catálogo
(promos) casa com os promos da Liga ("053/∞"). É a mesma regra da extensão.

Duas etapas: (1) a busca por Pokémon casa as impressões e dá uma faixa geral;
(2) a página de cada impressão (cards_editions) dá o preço por variante —
a busca mistura Normal/Foil/Reverse numa faixa só (Poochyena TWM 113: busca
R$ 0,83; Normal R$ 0,51, Reverse R$ 1,38). A 2ª etapa é uma página por carta
(~4.700): a primeira coleta leva algumas horas; depois só refaz as vencidas.

Na 2ª etapa também saem os anúncios da impressão (cards_stock): idioma,
qualidade, variante e preço. A Liga manda em texto só alguns preços; os outros
são dígitos recortados de uma imagem, lidos com o OCR da extensão
(scripts/liga_ocr, cópia de gen3-extension/ocr) rodando no próprio Chrome.

Saída: {"v":2, "generatedAt":..., "prices": {<file>: {"u": url da carta na
Liga, "s": [mín, méd, máx] da busca, "p": {"0": [...], "2": [...], "3": [...]}}}}
("p" = por variante: 0 normal, 2 Foil, 3 Reverse Foil; só depois da 2ª etapa;
"l" = menor anúncio por variante/idioma/qualidade: {"3": {"PT": {"NM": 1.5}}};
"o": 0 = algum preço oculto não foi lido, o menor pode estar faltando)

Cache em scripts/.liga_cache.json: uma execução interrompida continua de onde
parou; buscas com menos de --max-age horas e páginas de carta com menos de
--card-max-age horas não são refeitas.

Requisitos (uma vez):
    pip install playwright
    # usa o Google Chrome do sistema; sem ele: playwright install chromium

Uso:
    python3 scripts/fetch_liga_prices.py              # atualiza o que venceu
    python3 scripts/fetch_liga_prices.py --max-age 0  # refaz tudo
    python3 scripts/fetch_liga_prices.py --only Treecko Mudkip
"""
import argparse
import base64
import json
import re
import sys
import time
import unicodedata
from datetime import datetime, timezone
from pathlib import Path
from urllib.parse import parse_qs, quote, urlparse

from playwright.sync_api import Error as PlaywrightError, sync_playwright

ROOT = Path(__file__).resolve().parents[1]
SCRIPT_JS = ROOT / "src" / "script.js"
CATALOG_PATH = ROOT / "assets" / "data" / "catalog.min.json"
OUT_PATH = ROOT / "assets" / "data" / "liga-prices.min.json"
ART_PATH = ROOT / "assets" / "data" / "art.min.json"
# Arte JP de uma impressão (build_language_art.py): "L:tpc/SV1S/SV1S_83_R_JP.png"
# = coleção japonesa SV1S, nº 83 — na Liga, a versão japonesa é outra carta
# ("Ralts (083/078)", ed=sv1S), com os anúncios em japonês
JA_ART_RE = re.compile(r"tpc/([^/]+)/[^/_]+_([^_]+)_R_JP", re.I)
CACHE_PATH = Path(__file__).resolve().parent / ".liga_cache.json"
# OCR dos preços que a Liga esconde em imagem — cópia de gen3-extension/ocr
OCR_JS = Path(__file__).resolve().parent / "liga_ocr" / "liga-ocr.js"
OCR_REF = Path(__file__).resolve().parent / "liga_ocr" / "liga-digits-ref.jpg"
SPRITE_HOST = "repositorio.sbrauble.com"
# Idiomas da Liga que o site oferece (bandeiras BR/JP/EUA) e escala de qualidade
KEEP_LANGS = {"PT", "EN", "JP"}
# Extras (ids primos, o anúncio guarda o produto): 2 Foil, 3 Reverse Foil,
# 7 Promo (vem da edição, ignorado); qualquer outro (assinada, alterada,
# textless, 1ª edição, oversize...) é outra carta — fica fora
FOIL, REVERSE, PROMO = 2, 3, 7
OTHER_EXTRAS = (5, 11, 13, 17, 19, 23, 29, 31, 37)

LIGA_SEARCH = "https://www.ligapokemon.com.br/?view=cards/search&tipo=1&card={}"
# A Liga bloqueia (erro 1015) com requisições demais: 1 página a cada ~2 s
PAUSE_S = 2.0
PAGE_TIMEOUT_MS = 60000
RESULT_WAIT_S = 30
COOLDOWN_START_S = 60
COOLDOWN_MAX_S = 600
RESULTS_PER_PAGE = 40
# --daily: buscas com mais de 12 h são refeitas (a do dia anterior) e o resto
# do catálogo, sem mudança na busca, se renova a cada 7 dias
DAILY_SEARCH_MAX_AGE_H = 12
WEEKLY_CARD_MAX_AGE_H = 168
MAX_EXTRA_PAGES = 50  # Pikachu passa de 16 páginas (cartas + produtos lacrados)

PREFIXED_NUMBER_RE = re.compile(r"^[A-Za-z]+\d+$")
CODE_RE = re.compile(r"\(\s*(#?[A-Z]{0,4}\d{1,4}[A-Za-z]{0,3})\s*/\s*([A-Z]{0,4}\d{1,4}|∞)\s*\)", re.I)

# Roda na página: lê os resultados da busca (mesmo parser da extensão)
EXTRACT_JS = """
() => {
  const priceOf = (el, sel) => {
    const node = el.querySelector(sel);
    if (!node) return null;
    const text = node.textContent.replace(/[^\\d.,]/g, '');
    const n = parseFloat(text.includes(',') ? text.replace(/\\./g, '').replace(',', '.') : text);
    return n > 0 ? n : null;
  };
  const out = [];
  document.querySelectorAll('.mtg-single').forEach(el => {
    const link = el.querySelector('a[href*="view=cards/card"]');
    if (!link) return;
    const url = new URL(link.getAttribute('href'), 'https://www.ligapokemon.com.br/');
    const name = url.searchParams.get('card');
    if (!name) return;
    out.push({ name, min: priceOf(el, '.price-min'), avg: priceOf(el, '.price-avg'),
               max: priceOf(el, '.price-max'), url: url.toString() });
  });
  return out;
}
"""


# Roda na página da carta: edições, anúncios (só os campos usados), tabelas
# de idioma/qualidade e o CSS da imagem de números
READ_CARD_JS = """
() => {
  if (typeof cards_editions === 'undefined') return null;
  const css = [...document.querySelectorAll('style')].map(s => s.textContent)
    .filter(t => t.includes('imgnum')).join('\\n');
  const stock = (typeof cards_stock !== 'undefined' ? cards_stock : []).map(s => ({
    id: s.id, p: s.p, idEdicao: s.idEdicao, num: s.num, idioma: s.idioma, qualid: s.qualid,
    extras: s.extras, precoFinal: s.precoFinal, precoCss: s.precoCss, is_graded: s.is_graded
  }));
  const table = name => (typeof window[name] !== 'undefined' ? window[name] : [])
    .map(x => ({ id: String(x.id), acron: String(x.acron).toUpperCase() }));
  return { editions: cards_editions, stock, css, langs: table('dataLanguage'), quals: table('dataQuality') };
}
"""

SPRITES_JS = """
({ css, stock }) => EmeraldLigaOcr.spriteUrls(stock, EmeraldLigaOcr.parseSpriteCss(css))
"""

# Decifra com as imagens em base64 (baixadas pelo Python: a imagem é de outro
# domínio e "contaminaria" o canvas se a página a carregasse)
DECODE_JS = """
async ({ css, stock, sprites, ref }) => {
  const load = async b64 => {
    const bytes = Uint8Array.from(atob(b64), c => c.charCodeAt(0));
    const bitmap = await createImageBitmap(new Blob([bytes]));
    const canvas = document.createElement('canvas');
    canvas.width = bitmap.width;
    canvas.height = bitmap.height;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(bitmap, 0, 0);
    return ctx.getImageData(0, 0, canvas.width, canvas.height);
  };
  const templates = EmeraldLigaOcr.buildTemplates(await load(ref));
  const images = {};
  for (const [url, b64] of Object.entries(sprites)) images[url] = await load(b64);
  return EmeraldLigaOcr.decodeStock(stock, EmeraldLigaOcr.parseSpriteCss(css), images, templates);
}
"""


def words(text):
    text = unicodedata.normalize("NFD", str(text or "").lower())
    text = "".join(ch for ch in text if not unicodedata.combining(ch))
    text = re.sub(r"[-_&/]", " ", text)
    text = re.sub(r"[^a-z0-9\s]", "", text)
    return text.split()


def number_key(value):
    return re.sub(r"^0+(?=\w)", "", str(value or "").lstrip("#")).upper()


def pokemon_key(value):
    """Mesma normalização do site (normalizePokemonKey)."""
    text = unicodedata.normalize("NFD", str(value or "").strip().lower())
    text = "".join(ch for ch in text if not unicodedata.combining(ch))
    return re.sub(r"[^a-z0-9]+", "-", text).strip("-")


def grid_pokemon():
    """Os 202 nomes da grade, na ordem do site (hoennPokemon em script.js)."""
    source = SCRIPT_JS.read_text(encoding="utf-8")
    block = source[: source.index("];")]
    return re.findall(r'name: "([^"]+)"', block)


def asset_keys(asset):
    """Chaves que ligam uma carta do catálogo a um Pokémon da grade (getCardVariants)."""
    file = str(asset.get("file") or "")
    stem = file.split("/")[-1].rsplit(".", 1)[0].split("_")[0]
    keys = {
        pokemon_key(asset.get("pokemon")),
        pokemon_key(file.split("/")[0]),
        pokemon_key(asset.get("printedPokemon")),
        *[t for t in re.split(r"[^a-z0-9]+", stem.lower()) if t],
    }
    keys.discard("")
    return keys


def entry_edition(entry):
    """(código da edição, número) do resultado da busca, pelo link da carta."""
    query = parse_qs(urlparse(entry["url"]).query)
    return (query.get("ed") or [""])[0].upper(), number_key((query.get("num") or [""])[0])


def ja_prints():
    """{file: (coleção JP, número)} das impressões com arte japonesa."""
    if not ART_PATH.exists():
        return {}
    art = json.loads(ART_PATH.read_text(encoding="utf-8")).get("art") or {}
    out = {}
    for file, langs in art.items():
        found = JA_ART_RE.search(langs.get("ja") or "")
        if found:
            out[file] = (found.group(1).upper(), number_key(found.group(2)))
    return out


def match_ja(prints, entries, ja_map):
    """Carta japonesa na Liga para cada impressão: pela arte JP
    (coleção + número) ou, nas exclusivas japonesas do catálogo (set
    "jp-<código>"), pelo próprio set/número. {file: [entradas]}."""
    by_edition = {}
    for entry in entries:
        by_edition.setdefault(entry_edition(entry), []).append(entry)
    out = {}
    for asset in prints:
        key = ja_map.get(asset["file"])
        if not key and str(asset.get("set", "")).startswith("jp-"):
            key = (asset["set"][3:].upper(), number_key(asset["number"]))
        if key and by_edition.get(key):
            out[asset["file"]] = by_edition[key]
    return out


def match_prices(pokemon, prints, sets, entries):
    """Casa as impressões do catálogo com os resultados da busca da Liga.
    Devolve {file: [entradas da busca]} (mais de uma = mesma impressão em
    várias edições da Liga)."""
    wanted_words = words(pokemon)
    by_code = {}
    by_number = {}  # número -> [(total, entrada)]
    for entry in entries:
        if not entry.get("avg"):
            continue
        code = CODE_RE.search(entry["name"])
        if not code:
            continue
        entry_words = set(words(entry["name"].split("(")[0]))
        if not all(w in entry_words for w in wanted_words):
            continue
        num = number_key(code.group(1))
        by_code.setdefault(f"{num}/{number_key(code.group(2))}", []).append(entry)
        by_number.setdefault(num, []).append((number_key(code.group(2)), entry))

    out = {}
    for asset in prints:
        total = (sets.get(asset["set"]) or {}).get("total")
        key = f"{number_key(asset['number'])}/{number_key(total) if total else '∞'}"
        matches = by_code.get(key)
        # Número com prefixo de letras (XY66, SWSH029, BW47, TG20) é praticamente
        # único por Pokémon, mas a Liga usa outro total ("XY66/∞",
        # "SWSH029/71", "TG20/TG30"): casa pelo número se só um total aparece
        if not matches and PREFIXED_NUMBER_RE.match(str(asset["number"])):
            candidates = by_number.get(number_key(asset["number"]), [])
            if len({total for total, _ in candidates}) == 1:
                matches = [entry for _, entry in candidates]
        # Coleção de promos (svp, swshp, smp, xyp, bwp...): o catálogo dá um
        # total ("106/225"), a Liga cadastra como promo ("Pikachu ex (106/∞)")
        if not matches and str(asset.get("set", "")).endswith("p"):
            matches = [entry for total, entry in by_number.get(number_key(asset["number"]), []) if total == "∞"]
        # Exclusiva japonesa (set "jp-<código>", sem total): a edição da Liga
        # tem o mesmo código
        if not matches and str(asset.get("set", "")).startswith("jp-"):
            wanted = (asset["set"][3:].upper(), number_key(asset["number"]))
            matches = [e for e in entries if e.get("avg") and entry_edition(e) == wanted]
        if matches:
            out[asset["file"]] = matches
    return out


def search_signature(entry):
    """Mín./méd./máx. de um resultado da busca: se mudar, os anúncios mudaram."""
    return [entry.get("min"), entry.get("avg"), entry.get("max")]


def triple(values):
    """[mín, méd, máx] juntando várias edições: menor mínimo, média dos
    médios, maior máximo (como a extensão)."""
    return [round(min(v[0] for v in values), 2),
            round(sum(v[1] for v in values) / len(values), 2),
            round(max(v[2] for v in values), 2)]


def variant_prices(card_pages, matches):
    """Preço por variante ("0" normal, "2" Foil, "3" Reverse Foil...) das
    páginas das cartas; None se alguma página ainda não foi coletada."""
    by_extras = {}
    for entry in matches:
        page = card_pages.get(entry["url"])
        if page is None:
            return None
        for extras, value in page["prices"].items():
            by_extras.setdefault(extras, []).append(value)
    return {k: triple(v) for k, v in by_extras.items()} or None


def listing_minimums(card_pages, matches, ja_matches=()):
    """Menor preço dos anúncios por variante, idioma e qualidade:
    ({"3": {"PT": {"NM": 1.5}}}, completo?) — completo = nenhum preço ficou
    ilegível; None se alguma página ainda não foi coletada com anúncios.
    Os anúncios em japonês vêm da carta japonesa (`ja_matches`), quando há."""
    out = {}
    complete = True
    pages = [(entry, None) for entry in matches] + [(entry, "JP") for entry in ja_matches]
    ja_pages = [card_pages.get(e["url"]) for e in ja_matches]
    has_ja = any(page and "listings" in page for page in ja_pages)
    for entry, only_lang in pages:
        page = card_pages.get(entry["url"])
        if page is None or "listings" not in page:
            if only_lang:  # carta JP ainda não coletada: fica sem os anúncios JP
                continue
            return None
        complete = complete and page.get("ocr", True)
        for extras, lang, qual, price in page["listings"]:
            if only_lang and lang != only_lang:
                continue
            # A carta JP da Liga tem os anúncios japoneses; na página ocidental
            # os JP são raros e seriam de outra impressão
            if not only_lang and lang == "JP" and has_ja:
                continue
            if price is None:
                complete = False
                continue
            slot = out.setdefault(extras, {}).setdefault(lang, {})
            slot[qual] = round(min(price, slot.get(qual, price)), 2)
    return (out, complete) if out else None


def pick_editions(editions, url):
    """Edição da página que corresponde ao resultado da busca (ed= e num=)."""
    query = parse_qs(urlparse(url).query)
    ed = (query.get("ed") or [""])[0].upper()
    num = number_key((query.get("num") or [""])[0])
    chosen = [e for e in editions if ed and str(e.get("code", "")).upper() == ed]
    if len(chosen) > 1 and num:
        chosen = [e for e in chosen if number_key(e.get("num")) == num] or chosen
    if not chosen and num:
        chosen = [e for e in editions if number_key(e.get("num")) == num]
    return chosen or editions


def edition_prices(editions):
    """{"0": [mín, méd, máx], ...} a partir de cards_editions[].price
    (p = menor, m = médio, g = maior; variante sem preço vem como [])."""
    by_extras = {}
    for edition in editions:
        price = edition.get("price")
        # Só com a variante normal o PHP serializa como lista: [{...}] = {"0": {...}}
        if isinstance(price, list):
            price = {str(i): v for i, v in enumerate(price)}
        if not isinstance(price, dict):
            continue
        for extras, value in price.items():
            if not isinstance(value, dict):
                continue
            try:
                avg = float(value.get("m") or 0)
            except ValueError:
                continue
            if avg <= 0:
                continue
            low = float(value.get("p") or 0) or avg
            high = float(value.get("g") or 0) or avg
            by_extras.setdefault(str(extras), []).append([low, avg, high])
    return {k: triple(v) for k, v in by_extras.items()}


def load_cache():
    if CACHE_PATH.exists():
        try:
            data = json.loads(CACHE_PATH.read_text(encoding="utf-8"))
            if "search" not in data:  # formato antigo: só as buscas
                data = {"search": data, "cards": {}}
            return data
        except json.JSONDecodeError:
            pass
    return {"search": {}, "cards": {}}


def save_cache(cache):
    CACHE_PATH.write_text(json.dumps(cache, ensure_ascii=False), encoding="utf-8")


class Blocked(Exception):
    pass


def page_html(page):
    """HTML atual; "" enquanto a página ainda navega (o desafio do Cloudflare
    recarrega a página, e ler no meio disso dá erro)."""
    try:
        return page.content()
    except PlaywrightError:
        return ""


def check_rate_limit(html):
    if re.search(r"Error 1015|You are being rate limited|Too Many Requests", html, re.I):
        raise Blocked("erro 1015 (limite de requisições)")


def search(page, query):
    """Resultados da busca; Blocked se a Liga limitou/pediu verificação."""
    page.goto(LIGA_SEARCH.format(quote(query)), timeout=PAGE_TIMEOUT_MS, wait_until="domcontentloaded")
    deadline = time.time() + RESULT_WAIT_S
    while time.time() < deadline:
        html = page_html(page)
        check_rate_limit(html)
        # "Itens encontrados" = a página de resultados (mesmo com zero itens)
        if "Itens encontrados" in html or 'id="mtg-cards"' in html:
            load_all_results(page)
            return page.evaluate(EXTRACT_JS)
        page.wait_for_timeout(1000)  # desafio do Cloudflare ainda rodando
    raise Blocked("a página de resultados não carregou (verificação do Cloudflare?)")


def load_all_results(page):
    """A busca mostra 40 itens; o resto vem pelo botão "Exibir mais"
    (mcards.nextPage), 40 por vez. Clica até o botão sumir ou parar de crescer."""
    button = page.locator("#exibir_mais_cards input")
    for _ in range(MAX_EXTRA_PAGES):
        count = page.locator(".mtg-single").count()
        if count < RESULTS_PER_PAGE or not button.is_visible():
            return
        button.click()
        deadline = time.time() + 15
        while time.time() < deadline and page.locator(".mtg-single").count() == count:
            page.wait_for_timeout(500)
        if page.locator(".mtg-single").count() == count:
            return
        time.sleep(PAUSE_S / 2)


def listing_extras(value):
    """Variante do anúncio ("0" normal, "2" Foil, "3" Reverse) ou None se tem
    um extra que muda a carta (assinada, alterada, 1ª edição...)."""
    n = int(value or 0)
    if n <= 1:  # 0 = nenhum extra (e 0 é divisível por todos os ids)
        return "0"
    while n % PROMO == 0 and n > 1:
        n //= PROMO
    if any(n % extra == 0 for extra in OTHER_EXTRAS):
        return None
    if n % REVERSE == 0:
        return "3"
    if n % FOIL == 0:
        return "2"
    return "0"


def parse_price(value):
    try:
        price = float(str(value).replace(",", "."))
    except (TypeError, ValueError):
        return None
    return price if price > 0 else None


def decode_hidden(page, data):
    """Preços ocultos: {id: preço} e se a leitura passou na conferência."""
    if not any(s.get("precoFinal") is None and s.get("precoCss") for s in data["stock"]):
        return {}, True
    if not data["css"]:
        return {}, False
    page.add_script_tag(content=OCR_JS.read_text(encoding="utf-8"))
    sprites = {}
    for ref in page.evaluate(SPRITES_JS, {"css": data["css"], "stock": data["stock"]}):
        url = f"https:{ref}" if ref.startswith("//") else ref
        if urlparse(url).hostname != SPRITE_HOST:
            continue
        response = page.context.request.get(url, timeout=PAGE_TIMEOUT_MS)
        if not response.ok:
            return {}, False
        sprites[ref] = base64.b64encode(response.body()).decode()
    result = page.evaluate(DECODE_JS, {"css": data["css"], "stock": data["stock"], "sprites": sprites,
                                       "ref": base64.b64encode(OCR_REF.read_bytes()).decode()})
    if not result or not result.get("consistent"):
        return {}, False
    return {str(k): v for k, v in result["prices"].items()}, True


def card_page(page, url):
    """Página da carta: preço por variante (cards_editions) e os anúncios da
    impressão [variante, idioma, qualidade, preço ou None se ilegível]."""
    page.goto(url, timeout=PAGE_TIMEOUT_MS, wait_until="domcontentloaded")
    deadline = time.time() + RESULT_WAIT_S
    while time.time() < deadline:
        html = page_html(page)
        check_rate_limit(html)
        if "var cards_stock" in html or "var cards_editions" in html:
            data = page.evaluate(READ_CARD_JS)
            if not data:
                return {"prices": {}, "listings": [], "ocr": True}
            editions = pick_editions(data["editions"] or [], url)
            hidden, ocr_ok = decode_hidden(page, data)
            langs = {x["id"]: x["acron"] for x in data["langs"]}
            quals = {x["id"]: x["acron"] for x in data["quals"]}
            wanted = {(str(e.get("id")), number_key(e.get("num"))) for e in editions}
            listings = []
            for s in data["stock"]:
                if (str(s.get("idEdicao")), number_key(s.get("num"))) not in wanted or s.get("is_graded"):
                    continue
                extras = listing_extras(s.get("extras"))
                lang = langs.get(str(s.get("idioma")))
                qual = quals.get(str(s.get("qualid")))
                if extras is None or lang not in KEEP_LANGS or not qual:
                    continue
                price = parse_price(s["precoFinal"]) if s.get("precoFinal") is not None else hidden.get(str(s.get("id")))
                listings.append([extras, lang, qual, price])
            return {"prices": edition_prices(editions), "listings": listings, "ocr": ocr_ok}
        if "Itens encontrados" in html:  # caiu na busca: a Liga não abriu a carta
            return {"prices": {}, "listings": [], "ocr": True}
        page.wait_for_timeout(1000)
    raise Blocked("a página da carta não carregou (verificação do Cloudflare?)")


def light_page(browser):
    """Aba que só baixa o HTML/JS da Liga e do Cloudflare: sem imagens, fontes
    e anúncios (a página da carta fica bem mais leve)."""
    page = browser.new_page(locale="pt-BR")

    def route(request_route):
        request = request_route.request
        host = urlparse(request.url).hostname or ""
        allowed = host.endswith("ligapokemon.com.br") or host.endswith("cloudflare.com")
        if request.resource_type in ("image", "media", "font") or not allowed:
            return request_route.abort()
        return request_route.continue_()

    page.route("**/*", route)
    return page


def run_queue(page, jobs, label, fetch, store):
    """Busca cada job no ritmo da Liga, pausando (e dobrando a pausa) no
    bloqueio. Devolve False se a Liga seguiu bloqueando."""
    cooldown = COOLDOWN_START_S
    i = 0
    while i < len(jobs):
        job = jobs[i]
        try:
            result = fetch(page, job)
        except Blocked as err:
            print(f"  ! {job}: {err} — pausa de {cooldown}s", flush=True)
            time.sleep(cooldown)
            cooldown = min(cooldown * 2, COOLDOWN_MAX_S)
            if cooldown >= COOLDOWN_MAX_S:
                print("  A Liga continua bloqueando; rode de novo mais tarde (o progresso ficou salvo).")
                return False
            continue
        except Exception as err:  # rede/timeout: segue para o próximo
            print(f"  ! {job}: {err}", flush=True)
            i += 1
            continue
        cooldown = COOLDOWN_START_S
        store(job, result)
        i += 1
        print(f"  [{label} {i}/{len(jobs)}] {job if len(str(job)) < 60 else str(job)[:57] + '...'}", flush=True)
        time.sleep(PAUSE_S)
    return True


def main():
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("--max-age", type=float, default=20, help="refaz buscas por Pokémon com mais de N horas (padrão 20)")
    parser.add_argument("--card-max-age", type=float, default=72,
                        help="refaz páginas de carta (preço por variante) com mais de N horas (padrão 72)")
    parser.add_argument("--stale-before", type=float, default=0,
                        help="refaz também o que foi coletado antes deste instante (epoch em segundos) —"
                             " uma coleta completa interrompida retoma de onde parou passando o início dela")
    parser.add_argument("--daily", action="store_true",
                        help="atualização do dia: refaz as buscas (~15 min) e só abre as páginas das"
                             " cartas cujo mín./méd./máx. mudou na busca, as da --collection e as com"
                             " mais de --card-max-age (padrão 168 h nesse modo = o resto, semanal)")
    parser.add_argument("--collection",
                        help="arquivo JSON com a lista de `file` da coleção: essas páginas são refeitas"
                             " todo dia no --daily")
    parser.add_argument("--only", nargs="*", help="só estes Pokémon")
    parser.add_argument("--skip-cards", action="store_true", help="só a busca (sem preço por variante)")
    parser.add_argument("--headed", action="store_true", help="mostra a janela do Chrome")
    args = parser.parse_args()
    if args.daily:
        args.max_age = min(args.max_age, DAILY_SEARCH_MAX_AGE_H)
        if args.card_max_age == 72:  # o padrão fora do --daily
            args.card_max_age = WEEKLY_CARD_MAX_AGE_H
    collection_files = set()
    if args.collection:
        try:
            collection_files = set(json.loads(Path(args.collection).read_text(encoding="utf-8")))
        except (OSError, json.JSONDecodeError, TypeError) as err:
            print(f"  ! coleção ilegível ({err}) — segue sem ela", flush=True)

    catalog = json.loads(CATALOG_PATH.read_text(encoding="utf-8"))
    sets = catalog.get("sets") or {}
    assets = catalog.get("cards") or []
    for asset in assets:
        asset["__keys"] = asset_keys(asset)

    names = grid_pokemon()
    if args.only:
        wanted = {pokemon_key(n) for n in args.only}
        names = [n for n in names if pokemon_key(n) in wanted]

    cache = load_cache()
    searches, card_pages = cache["search"], cache["cards"]

    ja_map = ja_prints()

    def matched_for(pokemon_names):
        """({file: [entradas]}, {file: [entradas da carta japonesa]})"""
        matched, matched_ja = {}, {}
        for name in pokemon_names:
            if name in searches:
                key = pokemon_key(name)
                prints = [a for a in assets if key in a["__keys"]]
                entries = searches[name]["entries"]
                matched.update(match_prices(name, prints, sets, entries))
                matched_ja.update(match_ja(prints, entries, ja_map))
        return matched, matched_ja

    now = time.time()
    def stale(entry, max_age_h):
        at = (entry or {}).get("at", 0)
        return at < args.stale_before or now - at >= max_age_h * 3600

    # Detector de mudança: o mín./méd./máx. que a busca mostrava para cada
    # impressão quando a página dela foi coletada. Páginas coletadas antes
    # disso ganham a assinatura da busca atual (a de antes de atualizar)
    def signatures():
        return {e["url"]: search_signature(e) for v in searches.values() for e in v.get("entries", [])}

    previous = signatures()
    for url, page_data in card_pages.items():
        if "sig" not in page_data and url in previous:
            page_data["sig"] = previous[url]

    todo = [n for n in names if stale(searches.get(n), args.max_age)]
    print(f"{len(names)} Pokémon, {len(todo)} para buscar na Liga")

    with sync_playwright() as p:
        browser = None
        try:
            try:
                browser = p.chromium.launch(channel="chrome", headless=not args.headed,
                                            args=["--disable-blink-features=AutomationControlled"])
            except Exception:
                browser = p.chromium.launch(headless=not args.headed,
                                            args=["--disable-blink-features=AutomationControlled"])
            ok = True
            if todo:
                page = browser.new_page(locale="pt-BR")

                def store_search(name, entries):
                    searches[name] = {"at": time.time(), "entries": entries}
                    save_cache(cache)

                ok = run_queue(page, todo, "busca", search, store_search)
                page.close()

            if ok and not args.skip_cards:
                # 2ª etapa: a página de cada impressão casada, que separa o preço
                # por variante (a busca mistura normal/Foil/Reverse numa faixa só)
                matched, matched_ja = matched_for(names)
                urls = sorted({e["url"] for group in (matched, matched_ja) for ms in group.values() for e in ms})
                now = time.time()
                current = signatures()
                collection_urls = {e["url"] for group in (matched, matched_ja)
                                   for file, ms in group.items() if file in collection_files for e in ms}
                reasons = {"nova": 0, "vencida": 0, "coleção": 0, "mudou": 0}

                def needs_page(url):
                    page_data = card_pages.get(url, {})
                    # Páginas coletadas antes da leitura dos anúncios contam como vencidas
                    if "listings" not in page_data:
                        reasons["nova"] += 1
                        return True
                    if stale(page_data, args.card_max_age):
                        reasons["vencida"] += 1
                        return True
                    if not args.daily:
                        return False
                    if url in collection_urls and now - page_data.get("at", 0) >= DAILY_SEARCH_MAX_AGE_H * 3600:
                        reasons["coleção"] += 1
                        return True
                    if url in current and page_data.get("sig") != current[url]:
                        reasons["mudou"] += 1
                        return True
                    return False

                card_todo = [u for u in urls if needs_page(u)]
                detail = ", ".join(f"{n} {k}" for k, n in reasons.items() if n)
                print(f"{len(urls)} páginas de carta, {len(card_todo)} para buscar na Liga"
                      f" (~{round(len(card_todo) * (PAUSE_S + 1.5) / 3600, 1)} h)" + (f" — {detail}" if detail else ""))
                if card_todo:
                    page = light_page(browser)
                    pending = [0]

                    def store_card(url, result):
                        card_pages[url] = {"at": time.time(), "sig": current.get(url), **result}
                        pending[0] += 1
                        if pending[0] >= 20:
                            save_cache(cache)
                            pending[0] = 0

                    try:
                        run_queue(page, card_todo, "carta", card_page, store_card)
                    finally:
                        save_cache(cache)
        finally:
            if browser:
                browser.close()

    prices = {}
    with_variants = 0
    with_listings = 0
    matched, matched_ja = matched_for(grid_pokemon())
    for file, matches in matched.items():
        entry = {
            "u": matches[0]["url"],
            "s": triple([[m["min"] or m["avg"], m["avg"], m["max"] or m["avg"]] for m in matches]),
        }
        variants = variant_prices(card_pages, matches)
        if variants:
            entry["p"] = variants
            with_variants += 1
        offers = listing_minimums(card_pages, matches, matched_ja.get(file, ()))
        if offers:
            entry["l"], complete = offers
            if not complete:
                entry["o"] = 0
            with_listings += 1
        prices[file] = entry
    missing = sum(1 for n in grid_pokemon() if n not in searches)

    OUT_PATH.write_text(json.dumps({
        "v": 2,
        "generatedAt": datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
        "prices": prices,
    }, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")
    print(f"{len(prices)} de {len(assets)} cartas com preço da Liga ({with_variants} por variante,"
          f" {with_listings} por idioma/qualidade)"
          f" -> {OUT_PATH.relative_to(ROOT)}"
          + (f" ({missing} Pokémon ainda sem busca)" if missing else ""))
    return 0


if __name__ == "__main__":
    sys.exit(main())
