#!/usr/bin/env python3
"""Arte da carta em PT / JA (e cartas exclusivas do Japão) para o seletor de idioma.

Roda DEPOIS de build_card_database.py. Gera:
  - assets/data/art.min.json : por arquivo do catálogo, a URL da arte em PT e JA
    ({"pt": "...", "ja": "..."}; prefixos T:/L: expandem pelas bases em "base").
  - cartas JP-exclusivas anexadas ao catalog.min.json (entradas com "img" remoto
    e "lang": "ja"), mais seus sets ("jp-<código>") no dicionário de sets.

Fontes:
  PT → TCGdex (/pt/sets/<id>, mesmo id do EN); na falta, CDN da Limitless
       (…_R_PT… do mesmo print internacional, conferido por HEAD).
  JA → Limitless (sets JP da era BW em diante): cada carta JP lista seus
       "Int. Prints"; o print internacional equivalente leva a arte JA. Carta
       JP sem print internacional = exclusiva → entra no checklist.

Prints JP anteriores à era BW não têm imagem em nenhuma das fontes.
"""
import concurrent.futures as cf
import io
import json
import re
import sys
import time
import unicodedata
from datetime import datetime
from pathlib import Path

import requests
from PIL import Image

sys.path.insert(0, str(Path(__file__).resolve().parent))
import limitless  # noqa: E402

ROOT = Path(__file__).resolve().parents[1]
CARD_ROOT = ROOT / "assets" / "cards"
DATA_DIR = ROOT / "assets" / "data"
CATALOG_PATH = DATA_DIR / "catalog.min.json"
ART_PATH = DATA_DIR / "art.min.json"
TCGDEX = "https://api.tcgdex.net/v2"
BASES = {"T": "https://assets.tcgdex.net/", "L": f"{limitless.CDN}/"}
WORKERS = 6

TYPE_NAMES = {
    "G": "Grass", "R": "Fire", "W": "Water", "L": "Lightning", "P": "Psychic",
    "F": "Fighting", "D": "Darkness", "M": "Metal", "N": "Dragon", "C": "Colorless", "Y": "Fairy",
}
NON_POKEMON_TYPES = ("Item", "Supporter", "Stadium", "Tool", "Energy", "Technical Machine", "Trainer")


def get_json(url, tries=4):
    for attempt in range(tries):
        try:
            response = requests.get(url, timeout=60)
            if response.status_code == 200:
                return response.json()
            if response.status_code == 404:
                return None
        except (requests.RequestException, ValueError):
            pass
        time.sleep(2 * (attempt + 1))
    return None


def url_exists(url):
    for attempt in range(3):
        try:
            response = requests.head(url, timeout=30)
            if response.status_code in (200, 403, 404):
                return response.status_code == 200
        except requests.RequestException:
            pass
        time.sleep(2 * (attempt + 1))
    return False


def compact(url):
    for prefix, base in BASES.items():
        if url.startswith(base):
            return f"{prefix}:{url[len(base):]}"
    return url


def norm_artist(value):
    value = unicodedata.normalize("NFKD", str(value or "")).encode("ascii", "ignore").decode()
    return re.sub(r"[^a-z0-9]", "", value.lower())


def card_number(card):
    """Número da carta como a API conhece ("5-064" de arquivo → "064")."""
    number = str(card.get("number") or "").strip()
    if re.fullmatch(r"\d+-\d+", number):
        number = number.split("-", 1)[1]
    return number


def slug(value):
    return re.sub(r"[^a-z0-9]+", "-", str(value or "").lower()).strip("-")


# ---- Espécies: nome japonês (PokeAPI) → pasta --------------------------------

def species_ja_names(folders):
    cache = limitless._load()
    names = cache.get("ja_species") or {}
    missing = [folder for folder in folders if folder not in names]

    def fetch(folder):
        data = get_json(f"https://pokeapi.co/api/v2/pokemon-species/{folder}")
        found = {n["language"]["name"]: n["name"] for n in (data or {}).get("names", [])}
        return folder, found.get("ja-Hrkt") or found.get("ja")

    with cf.ThreadPoolExecutor(WORKERS) as pool:
        for folder, name in pool.map(fetch, missing):
            if name:
                names[folder] = name
    cache["ja_species"] = names
    return names


JA_PREFIXES = [
    # (prefixo japonês, prefixo do nome impresso em inglês)
    ("メガ", "mega-"), ("M", "m-"), ("かがやく", "radiant-"), ("ひかる", "shining-"),
    ("アローラ", "alolan-"), ("ガラル", "galarian-"), ("ヒスイ", "hisuian-"), ("パルデア", "paldean-"),
    ("ダーク", "dark-"), ("ライト", "light-"), ("ゲンシ", "primal-"),
]
JA_OWNERS = {"ロケット団": "team-rocket-s-", "マグマ団": "team-magma-s-", "アクア団": "team-aqua-s-"}
JA_SUFFIXES = [
    ("VMAX", "-vmax"), ("VSTAR", "-vstar"), ("V-UNION", "-v-union"), ("BREAK", "-break"),
    ("LV.X", "-lv-x"), ("GX", "-gx"), ("EX", "-ex"), ("ex", "-ex"), ("V", "-v"), ("◇", "-prism-star"),
]


def parse_ja_name(name, by_ja):
    """Nome impresso JP → (pastas das espécies, slug em inglês do nome impresso).

    "メガレックウザex" → (["rayquaza"], "mega-rayquaza-ex"); duplas "A&BGX" →
    as duas espécies; "マグマ団のグラードン" → groudon. Pastas vazias = não é
    do checklist (ou é outra espécie que só contém o nome, tipo ジバコイル)."""
    text = unicodedata.normalize("NFKC", name)
    text = re.sub(r"[(（].*?[)）]", "", text).replace(" ", "")
    suffix_slug = ""
    for ja, en in JA_SUFFIXES:
        if text.endswith(ja) and len(text) > len(ja):
            text, suffix_slug = text[: -len(ja)], en
            break
    folders, parts = [], []
    for part in re.split(r"[&＆]", text):
        owner, _, rest = part.rpartition("の")
        part, prefix_slug = rest, JA_OWNERS.get(owner, "")
        if part not in by_ja:
            for ja, en in JA_PREFIXES:
                if part.startswith(ja) and part[len(ja):] in by_ja:
                    part, prefix_slug = part[len(ja):], prefix_slug + en
                    break
        if part not in by_ja:
            return [], ""
        folders.append(by_ja[part])
        parts.append(prefix_slug + by_ja[part])
    return folders, "-".join(parts) + suffix_slug


# ---- PT ----------------------------------------------------------------------

def build_pt(cards, sets):
    art = {}
    set_ids = sorted({c["set"] for c in cards if c["set"] and not c.get("img")})

    def pt_set(set_id):
        payload = get_json(f"{TCGDEX}/pt/sets/{set_id}") or {}
        return set_id, {
            limitless.number_key(card.get("localId")): card["image"]
            for card in payload.get("cards") or [] if card.get("image")
        }

    with cf.ThreadPoolExecutor(WORKERS) as pool:
        tcgdex_pt = dict(pool.map(pt_set, set_ids))

    fallback = []
    for card in cards:
        if card.get("img"):
            continue
        image = tcgdex_pt.get(card["set"], {}).get(limitless.number_key(card_number(card)))
        if image:
            art[card["file"]] = f"{image}/high.png"
        else:
            fallback.append(card)

    def limitless_pt(card):
        code = limitless.tcgdex_to_limitless(card["set"], (sets.get(card["set"]) or {}).get("name"))
        if not code:
            return card["file"], None
        row = limitless.find_card(code, card_number(card), card.get("printedPokemon"))
        if not row:
            return card["file"], None
        url = limitless.localized(limitless.sized(row["image"], ""), "PT")
        # Sets antigos na Limitless apontam para imagens EN da pokemontcg.io, que
        # não têm variante PT — só vale URL do CDN com o marcador _R_PT.
        if "_R_PT" not in url:
            return card["file"], None
        return card["file"], url if url_exists(url) else None

    with cf.ThreadPoolExecutor(16) as pool:
        for file, url in pool.map(limitless_pt, fallback):
            if url:
                art[file] = url
    return art


# ---- Hash perceptual da arte (confirma que JP e EN são a MESMA ilustração) ----
# A Limitless agrupa em "Int. Prints" todas as versões com o mesmo texto: a
# Gyarados VMAX comum (EVS 29) e a rainbow (EVS 207) aparecem juntas, com o mesmo
# ilustrador. O dHash da janela da arte desempata: mesma ilustração em outro
# idioma (só muda textura holo/moldura) fica em ~15–90 bits de 256; artes
# diferentes ou promos JP carimbados, >= 100.
HASH_MAX_DISTANCE = 95


def art_hash(image):
    width, height = image.size
    gray = image.convert("RGBA").convert("L")
    window = gray.crop((int(width * .08), int(height * .11), int(width * .92), int(height * .52)))
    small = window.resize((17, 16), Image.LANCZOS)
    pixels = small.load()
    bits = 0
    for y in range(16):
        for x in range(16):
            bits = (bits << 1) | (pixels[x, y] > pixels[x + 1, y])
    return bits


def hash_of(key, opener):
    cache = limitless._load().setdefault("art_hash", {})
    if key not in cache:
        try:
            cache[key] = format(art_hash(opener()), "x")
        except Exception:  # imagem ausente/corrompida: sem hash, sem match
            cache[key] = ""
    return int(cache[key], 16) if cache[key] else None


def remote_hash(url):
    def opener():
        response = requests.get(url, timeout=60)
        response.raise_for_status()
        return Image.open(io.BytesIO(response.content))
    return hash_of(url, opener)


def local_hash(file):
    path = CARD_ROOT / file
    return hash_of(f"local:{file}:{int(path.stat().st_mtime)}", lambda: Image.open(path))


def distance(a, b):
    return 256 if a is None or b is None else bin(a ^ b).count("1")


# ---- JA ----------------------------------------------------------------------

def parse_date(value):
    try:
        return datetime.strptime(value, "%d %b %y").strftime("%Y-%m-%d")
    except ValueError:
        return None


def build_ja(cards, sets, folders):
    by_ja = {name: folder for folder, name in species_ja_names(folders).items()}

    # (código Limitless EN, número) → arquivos do catálogo (+ ilustrador p/ conferir)
    by_print = {}
    for card in cards:
        if card.get("img"):
            continue
        code = limitless.tcgdex_to_limitless(card["set"], (sets.get(card["set"]) or {}).get("name"))
        row = limitless.find_card(code, card_number(card), card.get("printedPokemon")) if code else None
        if row:
            by_print.setdefault((code, limitless.number_key(row["number"])), []).append(card)
    # Cartas JP que já estão no catálogo com a arte japonesa local (ex.: M6).
    local_jp = {(c["set"], limitless.number_key(card_number(c))) for c in cards if not c.get("img")}

    jp_sets = list(reversed(limitless.list_sets("jp")))  # mais antigo primeiro
    rows = []
    for jp_set in jp_sets:
        for row in limitless.list_set_cards("jp", jp_set["code"]):
            if any(word in row["type"] for word in NON_POKEMON_TYPES):
                continue
            species, printed = parse_ja_name(row["name"], by_ja)
            if species:
                rows.append((jp_set, row, species, printed))
    print(f"ja: {len(rows)} prints JP das espécies em {len(jp_sets)} sets")

    def page(item):
        jp_set, row, _, _ = item
        return limitless.card_page("jp", jp_set["code"], row["number"])

    with cf.ThreadPoolExecutor(WORKERS) as pool:
        pages = list(pool.map(page, rows))
    limitless.save_cache()

    # Candidatas EN de cada print JP: os Int. Prints mapeados no catálogo; sem
    # nenhum, as cartas da mesma espécie e mesmo ilustrador (reprints/variantes
    # que a Limitless não ligou). Toda candidata é confirmada pelo hash da arte.
    by_folder_artist = {}
    for card in cards:
        if not card.get("img") and card.get("illustrator"):
            key = (card["file"].split("/")[0], norm_artist(card["illustrator"]))
            by_folder_artist.setdefault(key, []).append(card)

    def candidates(item, detail):
        _, _, species, _ = item
        found = []
        for code, number in detail.get("int_prints") or []:
            found += by_print.get((code, limitless.number_key(number)), [])
        if not found and detail.get("artist"):
            for folder in species:
                found += by_folder_artist.get((folder, norm_artist(detail["artist"])), [])
        return found

    def verify(args):
        item, detail = args
        if not detail or detail.get("missing"):
            return []
        found = candidates(item, detail)
        if not found:
            return []
        jp_hash = remote_hash(limitless.sized(detail.get("image") or item[1]["image"], "XS"))
        scored = [(distance(jp_hash, local_hash(card["file"])), card) for card in found]
        return [(dist, card) for dist, card in scored if dist <= HASH_MAX_DISTANCE]

    with cf.ThreadPoolExecutor(WORKERS) as pool:
        matches = list(pool.map(verify, zip(rows, pages)))
    limitless.save_cache()

    best = {}  # arquivo EN → (distância, URL da arte JP)
    for (_, row, _, _), detail, accepted in zip(rows, pages, matches):
        image = (detail or {}).get("image") or limitless.sized(row["image"], "")
        for dist, card in accepted:
            if card["file"] not in best or dist < best[card["file"]][0]:
                best[card["file"]] = (dist, image)
    art = {file: image for file, (_, image) in best.items()}

    exclusives, new_sets = [], {}
    unmatched_intl = 0
    for (jp_set, row, species, printed), detail, accepted in zip(rows, pages, matches):
        if not detail or detail.get("missing") or accepted:
            continue
        image = detail.get("image") or limitless.sized(row["image"], "")
        if (jp_set["code"].lower(), limitless.number_key(row["number"])) in local_jp:
            continue
        if detail.get("int_prints"):
            unmatched_intl += 1  # tem print internacional, mas não com esta arte no catálogo

        set_id = f"jp-{jp_set['code'].lower()}"
        new_sets[set_id] = {
            "name": f"{jp_set['name']} (JP)",
            "release": parse_date(jp_set["date"]),
            "serie": "jp",
            "name_pt": f"{jp_set['name']} (JP)",
            "pt_checked": True,
        }
        type_parts = row["type"].split(" ", 1)
        for folder in species:
            exclusives.append({
                "pokemon": folder.replace("-", " ").title(),
                "set": set_id,
                "number": row["number"],
                "file": f"{folder}/{printed}_{set_id}-{row['number']}.png",
                "img": image,
                "lang": "ja",
                "printedPokemon": printed,
                "collection": new_sets[set_id]["name"],
                "finish": "normal",
                "rarity": row["rarity"] or None,
                "hp": detail.get("hp"),
                "types": [TYPE_NAMES[type_parts[0]]] if type_parts[0] in TYPE_NAMES else [],
                "stage": type_parts[1] if len(type_parts) > 1 else None,
                "illustrator": detail.get("artist"),
            })
    print(f"ja: arte JA para {len(art)} cartas do catálogo; {len(exclusives)} exclusivas JP"
          f" ({unmatched_intl} com print internacional fora do catálogo)")
    return art, exclusives, new_sets


def main():
    catalog = json.loads(CATALOG_PATH.read_text(encoding="utf-8"))
    # Idempotente: descarta as exclusivas/sets JP de uma execução anterior.
    cards = [c for c in catalog["cards"] if not c.get("img")]
    sets = {k: v for k, v in catalog["sets"].items() if not k.startswith("jp-")}
    folders = sorted(p.name for p in CARD_ROOT.iterdir() if p.is_dir())

    pt_art = build_pt(cards, sets)
    print(f"pt: {len(pt_art)} de {len(cards)} cartas")
    ja_art, exclusives, new_sets = build_ja(cards, sets, folders)
    limitless.save_cache()

    art = {}
    for file, url in pt_art.items():
        art.setdefault(file, {})["pt"] = compact(url)
    for file, url in ja_art.items():
        art.setdefault(file, {})["ja"] = compact(url)
    for card in exclusives:
        card["img"] = compact(card["img"])

    now = time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime())
    ART_PATH.write_text(
        json.dumps({"v": 1, "generatedAt": now, "base": BASES, "art": art},
                   ensure_ascii=False, separators=(",", ":")) + "\n",
        encoding="utf-8",
    )
    catalog["cards"] = sorted(cards + exclusives, key=lambda c: c["file"])
    catalog["sets"] = {**sets, **new_sets}
    catalog["base"] = BASES
    CATALOG_PATH.write_text(
        json.dumps(catalog, ensure_ascii=False, separators=(",", ":")) + "\n", encoding="utf-8"
    )
    print(f"art: {len(art)} arquivos, {ART_PATH.stat().st_size // 1024} KB")
    print(f"catalog: {len(catalog['cards'])} cartas ({len(exclusives)} JP exclusivas)")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
