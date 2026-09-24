"""Leitura do banco de cartas da Limitless TCG (limitlesstcg.com).

A Limitless cobre todos os sets internacionais (EN, com arte também em PT no
CDN) e os japoneses da era BW em diante — e, em cada carta JP, lista os prints
internacionais equivalentes ("Int. Prints"), que é o vínculo JA ↔ EN que a
TCGdex não tem. Tudo aqui é parse de HTML, com cache do resultado *parseado*
em scripts/.limitless_cache.json (re-execuções não re-baixam páginas).
"""
import html
import json
import re
import threading
import time
from pathlib import Path

import requests

SITE = "https://limitlesstcg.com"
CDN = "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com"
CACHE_PATH = Path(__file__).resolve().parent / ".limitless_cache.json"
HEADERS = {"User-Agent": "Mozilla/5.0 (gen3-track-tcg catalog builder)"}
REQUEST_TIMEOUT = 60

_cache = None
_cache_lock = threading.Lock()


def _load():
    global _cache
    if _cache is None:
        try:
            _cache = json.loads(CACHE_PATH.read_text(encoding="utf-8"))
        except (OSError, json.JSONDecodeError):
            _cache = {}
    return _cache


def save_cache():
    with _cache_lock:
        CACHE_PATH.write_text(json.dumps(_load(), ensure_ascii=False), encoding="utf-8")


def _cached(key, producer):
    cache = _load()
    with _cache_lock:
        if key in cache:
            return cache[key]
    value = producer()
    if value is not None:
        with _cache_lock:
            cache[key] = value
    return value


def _get(path, tries=4):
    for attempt in range(tries):
        try:
            response = requests.get(f"{SITE}{path}", headers=HEADERS, timeout=REQUEST_TIMEOUT)
            if response.status_code == 200:
                return response.text
            if response.status_code == 404:
                return None
        except requests.RequestException:
            pass
        time.sleep(3 * (attempt + 1))
    return None


def _text(fragment):
    return re.sub(r"\s+", " ", html.unescape(re.sub(r"<[^>]+>", " ", fragment))).strip()


def number_key(value):
    """"096" / "96" / "TG05" / "tg5" → mesma chave (sem zeros à esquerda, maiúsculo)."""
    raw = str(value or "").strip().upper()
    return re.sub(r"(?<![0-9])0+(?=[0-9])", "", raw)


_SET_ROW = re.compile(
    r'<a href="/cards/(?P<jp>jp/)?(?P<code>[A-Za-z0-9-]+)"><img class="set"[^>]*>\s*(?P<name>[^<]+?)\s*'
    r'<span class="code annotation">[^<]*</span></a></td>\s*<td><a [^>]*>(?P<date>[^<]*)</a>'
)


def list_sets(lang):
    """[{code, name, date}] dos sets EN (lang="en") ou JP (lang="jp")."""
    def produce():
        page = _get("/cards/jp" if lang == "jp" else "/cards")
        if not page:
            return None
        sets, seen = [], set()
        for match in _SET_ROW.finditer(page):
            if bool(match.group("jp")) != (lang == "jp") or match.group("code") in seen:
                continue
            seen.add(match.group("code"))
            sets.append({
                "code": match.group("code"),
                "name": html.unescape(match.group("name")).strip(),
                "date": match.group("date").strip(),
            })
        return sets
    return _cached(f"sets:{lang}", produce) or []


_CARD_ROW = re.compile(r'<tr data-hover="(?P<img>[^"]+)">(?P<body>.*?)</tr>', re.S)


def list_set_cards(lang, code):
    """[{number, name, image, type, rarity}] de um set, via lista (display=list).

    `image` é a URL XS do CDN (…_XS.png); troque o sufixo para _LG/tamanho cheio."""
    prefix = "/cards/jp" if lang == "jp" else "/cards"

    def produce():
        page = _get(f"{prefix}/{code}?display=list")
        if page is None:
            return None
        out = []
        for row in _CARD_ROW.finditer(page):
            cells = re.findall(r"<td[^>]*>(.*?)</td>", row.group("body"), re.S)
            if len(cells) < 5:
                continue
            href = re.search(r'href="/cards/(?:jp/|en/)?[^/"]+/([^"]+)"', cells[1])
            out.append({
                "number": href.group(1) if href else _text(cells[1]),
                "name": _text(cells[2]),
                "image": row.group("img"),
                "type": _text(cells[3]),
                "rarity": _text(cells[4]),
            })
        return out
    return _cached(f"list:{lang}:{code}", produce) or []


def card_page(lang, code, number):
    """Detalhes de uma carta: ilustrador, HP, imagem cheia e prints internacionais.

    int_prints = [[código EN, número]] (só existe em cartas JP)."""
    prefix = "/cards/jp" if lang == "jp" else "/cards"

    def produce():
        page = _get(f"{prefix}/{code}/{number}")
        if page is None:
            return {"missing": True}
        artist = re.search(r'card-text-artist">.*?<a [^>]*>\s*([^<]+?)\s*</a>', page, re.S)
        hp = re.search(r"(\d+)\s*HP", _text(page[page.find("card-text-title"):][:600]))
        image = re.search(r'<img class="card[^"]*"[^>]*data-src="([^"]+)"', page)
        int_prints = []
        table = re.search(r'<table class="card-prints-versions">(.*?)</table>', page, re.S)
        if table:
            body = table.group(1)
            cut = body.find("JP. Prints")
            intl = body[:cut] if cut >= 0 else body
            for link in re.finditer(r'href="/cards/(?:en/)?([A-Za-z0-9-]+)/([A-Za-z0-9-]+)"', intl):
                int_prints.append([link.group(1), link.group(2)])
        return {
            "artist": artist.group(1).strip() if artist else None,
            "hp": int(hp.group(1)) if hp else None,
            "image": image.group(1) if image else None,
            "int_prints": int_prints,
        }
    return _cached(f"card:{lang}:{code}:{number}", produce)


# Set id TCGdex → código Limitless EN quando os nomes não batem (promos,
# galerias, Shiny Vault...). O resto casa pelo nome normalizado.
TCGDEX_TO_LIMITLESS = {
    "base1": "BS", "basep": "WP", "np": "NP", "ecard1": "E1",
    "dpp": "DPP", "hgss1": "HS", "hgssp": "HSP", "bwp": "BWP", "xyp": "XYP",
    "smp": "SMP", "sma": "HIF", "swshp": "SP", "swsh4.5sv": "SHF",
    "swsh10tg": "ASR", "swsh11tg": "LOR", "swsh12tg": "SIT", "swsh12.5gg": "CRZ",
    "cel25cc": "CEL", "sv03.5": "MEW", "svp": "SVP", "mep": "MEP",
    "30th-c": "30C",
}


def _norm_set_name(value):
    value = str(value or "").lower().replace("&", "and").replace("pokémon", "pokemon")
    return re.sub(r"[^a-z0-9]", "", value)


def tcgdex_to_limitless(set_id, set_name):
    """Código Limitless EN do set TCGdex (ou None se a Limitless não tem)."""
    if set_id in TCGDEX_TO_LIMITLESS:
        return TCGDEX_TO_LIMITLESS[set_id]
    by_name = {_norm_set_name(s["name"]): s["code"] for s in list_sets("en")}
    return by_name.get(_norm_set_name(set_name))


def _name_key(value):
    value = str(value or "").lower().replace("é", "e")
    return re.sub(r"[^a-z0-9]", "", value)


def find_card(code, number, name=None):
    """Linha da lista EN do set `code` para (número, nome).

    Confere o nome quando dado: algumas coleções têm numeração diferente entre
    TCGdex e Limitless (30th-c 016 = Limitless 30C CC19); aí cai pra busca pelo
    nome dentro do set, desde que o nome seja único lá."""
    rows = list_set_cards("en", code)
    key = number_key(number)
    # Promos: TCGdex "SM168"/"SWSH074" = Limitless "168"/"74" (sem o prefixo).
    keys = [key, re.sub(r"^[A-Z]+(?=\d)", "", key)]
    hit = next((row for k in keys for row in rows if number_key(row["number"]) == k), None)
    if hit and (not name or _name_key(hit["name"]) in _name_key(name) or _name_key(name) in _name_key(hit["name"])):
        return hit
    if name:
        same = [row for row in rows if _name_key(row["name"]) == _name_key(name)]
        if len(same) == 1:
            return same[0]
    return hit if hit and not name else None


def sized(image_url, size):
    """Troca o sufixo de tamanho da URL do CDN: size = "LG", "XS" ou "" (cheio)."""
    base = re.sub(r"_(XS|SM|LG)\.png$", ".png", image_url)
    return base if not size else base[:-4] + f"_{size}.png"


def localized(image_url, lang_code):
    """Mesma carta em outro idioma no CDN (…_R_EN_… → …_R_PT_…)."""
    return re.sub(r"_R_[A-Z]{2}(_|\.)", rf"_R_{lang_code}\1", image_url)
