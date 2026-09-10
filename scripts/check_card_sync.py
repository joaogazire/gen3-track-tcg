#!/usr/bin/env python3
import json
import re
from pathlib import Path
from urllib.parse import quote

import requests

ROOT = Path(__file__).resolve().parents[1]
CARD_ROOT = ROOT / "assets" / "cards"
INDEX_PATH = CARD_ROOT / "index.json"
API_BASE = "https://api.tcgdex.net/v2/en"


def normalize(value):
    text = str(value or "").strip().lower()
    text = re.sub(r"[^a-z0-9]+", "-", text)
    return text.strip("-") or "unknown"


def same_name(name_a, name_b):
    left = normalize(name_a)
    right = normalize(name_b)
    return left == right or left in right or right in left


def load_local_cards():
    if not INDEX_PATH.exists():
        raise FileNotFoundError(f"Local catalog not found: {INDEX_PATH}")

    with INDEX_PATH.open("r", encoding="utf-8") as handle:
        payload = json.load(handle)

    if not isinstance(payload, list):
        raise ValueError("Local catalog is not a valid list.")

    return payload


def fetch_remote_cards(pokemon_name: str):
    url = f"{API_BASE}/cards?name={quote(pokemon_name)}"
    try:
        response = requests.get(url, timeout=60)
        response.raise_for_status()
        payload = response.json()
    except (requests.RequestException, ValueError):
        return []

    if not isinstance(payload, list):
        return []

    details = []
    seen_ids = set()

    for item in payload:
        if not isinstance(item, dict):
            continue

        name = str(item.get("name") or "").strip()
        if not name or not same_name(name, pokemon_name):
            continue

        card_id = str(item.get("id") or "").strip()
        if not card_id or card_id in seen_ids:
            continue
        seen_ids.add(card_id)

        detail_url = f"{API_BASE}/cards/{quote(card_id)}"
        try:
            detail_response = requests.get(detail_url, timeout=60)
            detail_response.raise_for_status()
            detail = detail_response.json()
        except (requests.RequestException, ValueError):
            continue

        if isinstance(detail, dict):
            details.append(detail)

    return details


def build_local_index(local_cards):
    index = {}
    for card in local_cards:
        if not isinstance(card, dict):
            continue

        pokemon = str(card.get("pokemon") or card.get("folder") or card.get("name") or "unknown").strip()
        card_set = str(card.get("set") or "unknown").strip()
        number = str(card.get("number") or "unknown").strip()
        key = (normalize(pokemon), normalize(card_set), normalize(number))
        index[key] = card
    return index


def build_remote_index(pokemon_name: str, remote_cards):
    index = {}
    for card in remote_cards:
        if not isinstance(card, dict):
            continue

        name = str(card.get("name") or "").strip()
        if name and not same_name(name, pokemon_name):
            continue

        set_payload = card.get("set") or {}
        card_set = str((set_payload.get("id") if isinstance(set_payload, dict) else set_payload) or "unknown").strip()
        if not card_set:
            card_set = "unknown"

        number = str(card.get("localId") or "").strip()
        if not number:
            number = str(card.get("number") or "unknown").strip()

        key = (normalize(pokemon_name), normalize(card_set), normalize(number))
        index[key] = card
    return index


def main():
    local_cards = load_local_cards()
    local_index = build_local_index(local_cards)

    roster = []
    seen = set()
    for entry in local_cards:
        if not isinstance(entry, dict):
            continue
        pokemon = str(entry.get("pokemon") or entry.get("folder") or entry.get("name") or "").strip()
        if pokemon and pokemon not in seen:
            seen.add(pokemon)
            roster.append(pokemon)

    mismatches = []
    for pokemon in roster:
        remote_cards = fetch_remote_cards(pokemon)
        remote_index = build_remote_index(pokemon, remote_cards)

        local_keys = {key for key in local_index if key[0] == normalize(pokemon)}
        remote_keys = {key for key in remote_index if key[0] == normalize(pokemon)}
        missing_in_local = sorted(remote_keys - local_keys)
        missing_in_remote = sorted(local_keys - remote_keys)

        if missing_in_local or missing_in_remote:
            mismatches.append({
                "pokemon": pokemon,
                "missing_in_local": len(missing_in_local),
                "missing_in_remote": len(missing_in_remote),
            })

    if not mismatches:
        print("SYNC_OK: all local cards match the remote database.")
        return 0

    print("SYNC_MISMATCH: the following Pokémon have missing or extra cards:")
    for item in mismatches:
        print(f"- {item['pokemon']}: missing_in_local={item['missing_in_local']}, missing_in_remote={item['missing_in_remote']}")
    return 1


if __name__ == "__main__":
    raise SystemExit(main())
