#!/usr/bin/env python3
"""Enriquece o index.json com dados reais da TCGdex.

Para cada entrada EX do catálogo:
  - "collection": nome oficial do set na API (ex.: ex4 -> "Team Magma vs Team Aqua")
  - "rarity":     string de raridade da API (ex.: "Holo Rare", "Common")
  - "finish":     acabamento derivado dos variants da API
                  ("Holo" se houver variante holo sem normal, "Reverse" se
                   a carta só existe como reverse, senão "Normal")

Mantém cache em scripts/.tcgdex_cache.json para permitir re-execuções baratas.
"""
import json
import sys
import time
from pathlib import Path

import requests

ROOT = Path(__file__).resolve().parents[1]
CARD_ROOT = ROOT / "assets" / "cards"
INDEX_PATH = CARD_ROOT / "index.json"
API_BASE = "https://api.tcgdex.net/v2/en"
CACHE_PATH = Path(__file__).resolve().parent / ".tcgdex_cache.json"
REQUEST_TIMEOUT = 45


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
    """Classifica o acabamento a partir dos variants da carta."""
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


def main():
    cards = json.loads(INDEX_PATH.read_text(encoding="utf-8"))
    cache = load_cache()
    cache_dirty = False

    ex_entries = [c for c in cards if str(c.get("set", "")).lower().startswith("ex")]
    ex_entries += [c for c in cards if str(c.get("set", "")).lower() == "exu"]
    print(f"EX entries to enrich: {len(ex_entries)}")

    failures = 0
    for index, card in enumerate(ex_entries, 1):
        set_id = str(card.get("set") or "").strip()
        number = str(card.get("number") or "").strip()
        card_id = f"{set_id}-{number}"

        # --- nome do set (coleção) ---
        if set_id not in cache["sets"]:
            payload = fetch_with_retry(f"{API_BASE}/sets/{set_id}")
            cache["sets"][set_id] = payload.get("name") if isinstance(payload, dict) else None
            cache["sets"][f"__fetched__{set_id}"] = True
            cache_dirty = True
            time.sleep(0.2)
        set_name = cache["sets"].get(set_id)
        if set_name:
            card["collection"] = set_name

        # --- raridade e finish ---
        if card_id not in cache["cards"]:
            detail = fetch_with_retry(f"{API_BASE}/cards/{requests.utils.quote(card_id, safe='')}")
            if isinstance(detail, dict):
                cache["cards"][card_id] = {
                    "rarity": detail.get("rarity"),
                    "finish": derive_finish(detail),
                }
            else:
                cache["cards"][card_id] = None
            cache_dirty = True

        info = cache["cards"].get(card_id)
        if info:
            if info.get("rarity"):
                card["rarity"] = info["rarity"]
            if info.get("finish"):
                card["finish"] = info["finish"]
        else:
            failures += 1

        if index % 100 == 0:
            print(f"  {index}/{len(ex_entries)}")

    INDEX_PATH.write_text(
        json.dumps(cards, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )
    if cache_dirty:
        save_cache(cache)

    print(f"enriched={len(ex_entries) - failures} failures={failures}")
    return 0 if failures < len(ex_entries) / 2 else 1


if __name__ == "__main__":
    raise SystemExit(main())
