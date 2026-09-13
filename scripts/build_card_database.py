#!/usr/bin/env python3
"""Gera a base de dados do app a partir do catálogo local + TCGdex.

Camadas geradas em assets/data/:
  - catalog.min.json   : Tier 1 — todas as cartas locais (pós-dedup) com campos
                         de UI + campos baratos da API (hp, types, stage,
                         illustrator, rarity) + dicionário de sets.
  - details/<pokemon>.json : Tier 2 — campos pesados da API (attacks, abilities,
                         weaknesses, resistances, retreat, legal, pricing),
                         chaveados pelo caminho do PNG local. Fetch sob demanda.

Fonte de verdade dos arquivos locais: assets/cards/index.json (inalterado).
Cache de API: scripts/.tcgdex_cache.json (idempotente; re-execuções não re-hitam).
"""
import json
import re
import sys
import time
from pathlib import Path
from urllib.parse import quote

import requests

ROOT = Path(__file__).resolve().parents[1]
CARD_ROOT = ROOT / "assets" / "cards"
INDEX_PATH = CARD_ROOT / "index.json"
DATA_DIR = ROOT / "assets" / "data"
DETAILS_DIR = DATA_DIR / "details"
CATALOG_PATH = DATA_DIR / "catalog.min.json"
PRICES_PATH = DATA_DIR / "prices.min.json"
CACHE_PATH = Path(__file__).resolve().parent / ".tcgdex_cache.json"
API_BASE = "https://api.tcgdex.net/v2/en"
API_BASE_PT = "https://api.tcgdex.net/v2/pt"
REQUEST_TIMEOUT = 45
DETAIL_PAUSE = 0.15


def load_cache():
    if CACHE_PATH.exists():
        try:
            return json.loads(CACHE_PATH.read_text(encoding="utf-8"))
        except (json.JSONDecodeError, OSError):
            pass
    return {"sets": {}, "cards": {}}


def save_cache(cache):
    CACHE_PATH.write_text(json.dumps(cache, ensure_ascii=False), encoding="utf-8")


def fetch_with_retry(url, tries=4):
    for attempt in range(tries):
        try:
            response = requests.get(url, timeout=REQUEST_TIMEOUT)
            if response.status_code == 200:
                return response.json()
        except (requests.RequestException, ValueError):
            pass
        time.sleep(2 * (attempt + 1))
    return None


def derive_finish(detail):
    variants = detail.get("variants") or {}
    normal = bool(variants.get("normal"))
    holo = bool(variants.get("holo"))
    reverse = bool(variants.get("reverse"))

    if holo and not normal:
        return "holo"
    if reverse and not normal and not holo:
        return "reverse"
    if reverse and not normal:
        return "reverse holo"
    if holo:
        return "holo"
    return "normal"


def normalize_variants(payload):
    """Variantes brutas da API normalizadas em booleans (source of truth das
    opções de acabamento por carta)."""
    variants = payload.get("variants") or {}
    return {
        "normal": bool(variants.get("normal")),
        "holo": bool(variants.get("holo")),
        "reverse": bool(variants.get("reverse")),
    }


def finish_options_from_variants(variants):
    """Lista de acabamentos que a carta realmente possui (valores do catálogo):
    normal = sem brilho; holo = foil no corpo; reverse = reverse foil (bordas).
    Sem flags (cartas promo/indiretas) → cai em normal."""
    options = []
    if variants.get("normal"):
        options.append("normal")
    if variants.get("holo"):
        options.append("holo")
    if variants.get("reverse"):
        options.append("reverse")
    return options or ["normal"]


def printed_pokemon_from_file(file_path):
    """Prefixo do filename (ex.: 'kadabra' em abra/kadabra_a1-116.png)."""
    stem = Path(file_path).stem
    return stem.rsplit("_", 1)[0].lower() if "_" in stem else stem.lower()


def resolve_card_id(card, cache):
    """Id da API para a carta, tentando o set como está e depois lowercase.

    Números com sub-numeração de arquivo ("5-064" de abra_sv03-5-064.png) não
    existem na API: o id correto é "sv03-064", então descarta o segmento do meio.
    """
    set_id = str(card.get("set") or "").strip()
    number = str(card.get("number") or "").strip()
    if not set_id or not number:
        return None
    if re.fullmatch(r"\d+-\d+", number):
        number = number.split("-", 1)[1]
    return f"{set_id}-{number}"


def fetch_card_detail(card_id):
    """Detalhe completo da carta na TCGdex (com retry)."""
    return fetch_with_retry(f"{API_BASE}/cards/{quote(card_id, safe='')}")


def build_sets_dictionary(cache, set_ids):
    """Nome/release/série (EN) + nome PT por set id, via /sets/{id} (com cache).

    Entradas antigas de cache sem name_pt são re-buscadas uma vez (PT)."""
    sets_out = {}
    for set_id in sorted(set_ids):
        cached = cache["sets"].get(set_id)
        if isinstance(cached, dict) and cached.get("name_pt"):
            sets_out[set_id] = cached
            continue
        payload = fetch_with_retry(f"{API_BASE}/sets/{quote(set_id, safe='')}")
        if isinstance(payload, dict):
            info = {
                "name": payload.get("name"),
                "release": payload.get("releaseDate"),
                "serie": (payload.get("serie") or {}).get("id")
                if isinstance(payload.get("serie"), dict)
                else payload.get("serie"),
            }
        else:
            info = {"name": None, "release": None, "serie": None}
        payload_pt = fetch_with_retry(f"{API_BASE_PT}/sets/{quote(set_id, safe='')}")
        info["name_pt"] = payload_pt.get("name") if isinstance(payload_pt, dict) else None
        cache["sets"][set_id] = info
        sets_out[set_id] = info
        time.sleep(0.2)
    return sets_out


def dedupe_entries(entries):
    """Nos grupos de standardName duplicado, mantém a entrada cujo prefixo do
    arquivo casa com o pokémon da pasta. Nunca apaga arquivos."""
    groups = {}
    for entry in entries:
        groups.setdefault(entry.get("standardName") or entry["file"], []).append(entry)

    kept = []
    dropped = 0
    for group in groups.values():
        if len(group) == 1:
            kept.append(group[0])
            continue
        folder = group[0].get("folder") or group[0]["file"].split("/")[0]
        best = None
        for candidate in group:
            prefix = candidate["file"].split("/")[-1].rsplit("_", 1)[0].lower()
            if prefix == str(folder).lower():
                best = candidate
                break
        kept.append(best or group[0])
        dropped += len(group) - 1
    kept.sort(key=lambda e: e["file"])
    return kept, dropped


def _tp_slot_price(slot):
    """marketPrice com fallback em midPrice; sanidade 0 < v < 5000."""
    if not isinstance(slot, dict):
        return None
    for key in ("marketPrice", "midPrice"):
        value = slot.get(key)
        if isinstance(value, (int, float)) and 0 < value < 5000:
            return round(float(value), 2)
    return None


# Slots de foil do TCGplayer, na ordem de preferência por acabamento.
TP_NORMAL_KEYS = ("normal", "unlimited", "1st-edition")
TP_HOLO_KEYS = ("holofoil", "unlimited-holofoil", "1st-edition-holofoil")
TP_REVERSE_KEYS = ("reverse-holofoil",)


def _first_product_id(obj, key):
    """Primeiro productId/idProduct útil: objeto com a chave, ou dict de slots."""
    if isinstance(obj, dict):
        value = obj.get(key)
        if isinstance(value, (int, str)) and str(value).strip():
            return value
        for slot in obj.values():
            if isinstance(slot, dict):
                value = slot.get(key)
                if isinstance(value, (int, str)) and str(value).strip():
                    return value
    return None


def build_price_entry(pricing):
    """Preço compacto por carta: {"c": moeda, "d": data, "p": {n, h, r}, "u": url}.

    TCGplayer (USD) primeiro — tem preço por foil; fallback Cardmarket (EUR) com
    avg/avg-holo. None quando nenhuma fonte tem valor útil. "u" é o link direto
    da loja (product id da própria API) para o clique no preço da UI.
    """
    if not isinstance(pricing, dict):
        return None

    tp = pricing.get("tcgplayer")
    if isinstance(tp, dict):
        def pick(keys):
            for key in keys:
                price = _tp_slot_price(tp.get(key))
                if price is not None:
                    return price
            return None

        prices = {"n": pick(TP_NORMAL_KEYS), "h": pick(TP_HOLO_KEYS), "r": pick(TP_REVERSE_KEYS)}
        if any(v is not None for v in prices.values()):
            entry = {"c": tp.get("unit") or "USD", "d": (tp.get("updated") or "")[:10], "p": prices}
            product_id = _first_product_id(tp, "productId")
            if product_id:
                entry["u"] = f"https://www.tcgplayer.com/product/{product_id}"
            return entry

    cm = pricing.get("cardmarket")
    if isinstance(cm, dict):
        def cm_pick(*keys):
            for key in keys:
                value = cm.get(key)
                if isinstance(value, (int, float)) and 0 < value < 5000:
                    return round(float(value), 2)
            return None

        prices = {
            "n": cm_pick("avg", "trend"),
            "h": cm_pick("avg-holo", "trend-holo"),
            "r": None,
        }
        if any(v is not None for v in prices.values()):
            entry = {"c": cm.get("unit") or "EUR", "d": (cm.get("updated") or "")[:10], "p": prices}
            product_id = cm.get("idProduct")
            if product_id:
                entry["u"] = f"https://www.cardmarket.com/pt/Pokemon/Products/Singles?idProduct={product_id}"
            return entry

    return None


def main():
    cards = json.loads(INDEX_PATH.read_text(encoding="utf-8"))
    cache = load_cache()
    cache_dirty = False

    # --- dedup (apenas entradas; arquivos ficam no disco) ---
    cards, dropped = dedupe_entries(cards)
    print(f"entries: {len(cards) + dropped} -> {len(cards)} (dropped {dropped} duplicates)")

    # Entradas sem número (ex.: legado "*_common_normal") não resolvem card id na
    # API; entravam set_ids falsos no dicionário de sets. Descartar aqui, antes de tudo.
    total_in = len(cards)
    cards = [c for c in cards if str(c.get("number") or "").strip()]
    if total_in != len(cards):
        print(f"entries: {total_in} -> {len(cards)} (dropped {total_in - len(cards)} sem número)")

    # --- enriquecimento com a API ---
    failures = 0
    catalog_cards = []
    details_out = {}
    prices_out = {}
    set_ids = {str(c.get("set") or "").strip().lower() for c in cards if c.get("set")}

    for index, card in enumerate(cards, 1):
        card_id = resolve_card_id(card, cache)
        set_id = str(card.get("set") or "").strip().lower()
        file_path = card["file"]
        folder = file_path.split("/")[0]

        detail = None
        if card_id:
            cached = cache["cards"].get(card_id, "MISS")
            if isinstance(cached, dict) and "variants" in cached:
                detail = cached
            elif cached is None:
                pass  # falha conhecida na API — não re-hitamos
            else:
                # miss puro ou cache antigo (sem variantes brutas) → re-busca
                payload = fetch_card_detail(card_id)
                if isinstance(payload, dict):
                    detail = {
                        "rarity": payload.get("rarity"),
                        "finish": derive_finish(payload),
                        "variants": normalize_variants(payload),
                        "hp": payload.get("hp"),
                        "types": payload.get("types") or [],
                        "stage": payload.get("stage"),
                        "illustrator": payload.get("illustrator"),
                        "setName": (payload.get("set") or {}).get("name")
                        if isinstance(payload.get("set"), dict)
                        else None,
                        "heavy": {
                            "attacks": payload.get("attacks") or [],
                            "abilities": payload.get("abilities") or [],
                            "weaknesses": payload.get("weaknesses") or [],
                            "resistances": payload.get("resistances") or [],
                            "retreat": payload.get("retreat"),
                            "legal": payload.get("legal"),
                            "pricing": payload.get("pricing") or payload.get("item"),
                        },
                    }
                    cache["cards"][card_id] = detail
                    cache_dirty = True
                    time.sleep(DETAIL_PAUSE)
                else:
                    cache["cards"][card_id] = None
                    cache_dirty = True
        if card_id and detail is None and cache["cards"].get(card_id, "MISS") is None:
            detail = None

        if card_id and detail is None:
            failures += 1

        catalog_cards.append({
            "pokemon": card.get("pokemon") or card.get("name"),
            "set": set_id or card.get("set"),
            "number": card.get("number"),
            "file": file_path,
            "printedPokemon": printed_pokemon_from_file(file_path),
            "collection": (detail or {}).get("setName") or card.get("collection"),
            "finish": (detail or {}).get("finish") or card.get("finish") or "normal",
            "rarity": (detail or {}).get("rarity") or card.get("rarity"),
            "hp": (detail or {}).get("hp"),
            "types": (detail or {}).get("types") or [],
            "stage": (detail or {}).get("stage"),
            "illustrator": (detail or {}).get("illustrator"),
        })

        if detail and detail.get("heavy"):
            details_out.setdefault(folder, {})[file_path] = {
                "id": card_id,
                **detail["heavy"],
            }

        if detail:
            price = build_price_entry((detail.get("heavy") or {}).get("pricing"))
            if price:
                prices_out[file_path] = price

        if index % 200 == 0:
            print(f"  {index}/{len(cards)}")

    # --- dicionário de sets ---
    sets_out = build_sets_dictionary(cache, set_ids)
    for entry in catalog_cards:
        set_info = sets_out.get(entry["set"]) or {}
        if set_info.get("name"):
            entry["collection"] = set_info["name"]

    # --- escrita ---
    DATA_DIR.mkdir(parents=True, exist_ok=True)
    DETAILS_DIR.mkdir(parents=True, exist_ok=True)

    now = time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime())
    catalog = {
        "v": 1,
        "generatedAt": now,
        "sets": sets_out,
        "cards": catalog_cards,
    }
    CATALOG_PATH.write_text(
        json.dumps(catalog, ensure_ascii=False, separators=(",", ":")) + "\n",
        encoding="utf-8",
    )

    for folder, cards_map in details_out.items():
        shard = {"v": 1, "generatedAt": now, "cards": cards_map}
        (DETAILS_DIR / f"{folder}.json").write_text(
            json.dumps(shard, ensure_ascii=False, separators=(",", ":")) + "\n",
            encoding="utf-8",
        )

    prices_doc = {"v": 1, "generatedAt": now, "prices": prices_out}
    PRICES_PATH.write_text(
        json.dumps(prices_doc, ensure_ascii=False, separators=(",", ":")) + "\n",
        encoding="utf-8",
    )

    if cache_dirty:
        save_cache(cache)

    catalog_size = CATALOG_PATH.stat().st_size
    prices_size = PRICES_PATH.stat().st_size
    print(f"catalog: {len(catalog_cards)} cards, {catalog_size} bytes ({catalog_size // 1024} KB)")
    print(f"prices: {len(prices_out)} of {len(cards)} cards, {prices_size // 1024} KB")
    print(f"detail shards: {len(details_out)} files")
    print(f"failures: {failures}")
    return 0 if failures < len(cards) / 2 else 1


if __name__ == "__main__":
    raise SystemExit(main())
