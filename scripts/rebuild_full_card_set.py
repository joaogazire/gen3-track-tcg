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
REQUEST_TIMEOUT = 45

ROSTER = [
    "Treecko", "Grovyle", "Sceptile", "Torchic", "Combusken", "Blaziken", "Mudkip", "Marshtomp", "Swampert",
    "Poochyena", "Mightyena", "Zigzagoon", "Linoone", "Wurmple", "Silcoon", "Beautifly", "Cascoon", "Dustox",
    "Lotad", "Lombre", "Ludicolo", "Seedot", "Nuzleaf", "Shiftry", "Taillow", "Swellow", "Wingull", "Pelipper",
    "Ralts", "Kirlia", "Gardevoir", "Surskit", "Masquerain", "Shroomish", "Breloom", "Slakoth", "Vigoroth", "Slaking",
    "Abra", "Kadabra", "Alakazam", "Meditite", "Medicham", "Electrike", "Manectric", "Plusle", "Minun", "Volbeat",
    "Illumise", "Roselia", "Gulpin", "Swalot", "Carvanha", "Sharpedo", "Wailmer", "Wailord", "Numel", "Camerupt",
    "Torkoal", "Spoink", "Grumpig", "Spinda", "Trapinch", "Vibrava", "Flygon", "Cacnea", "Cacturne", "Swablu",
    "Altaria", "Zangoose", "Seviper", "Lunatone", "Solrock", "Barboach", "Whiscash", "Corphish", "Crawdaunt",
    "Baltoy", "Claydol", "Lileep", "Cradily", "Anorith", "Armaldo", "Feebas", "Milotic", "Castform", "Kecleon",
    "Shuppet", "Banette", "Duskull", "Dusclops", "Tropius", "Chimecho", "Absol", "Wynaut", "Wobbuffet", "Snorunt",
    "Glalie", "Spheal", "Sealeo", "Walrein", "Clamperl", "Huntail", "Gorebyss", "Relicanth", "Luvdisc", "Bagon",
    "Shelgon", "Salamence", "Beldum", "Metang", "Metagross", "Regirock", "Regice", "Registeel", "Latias", "Latios",
    "Kyogre", "Groudon", "Rayquaza", "Jirachi", "Deoxys",
]


def normalize(value):
    text = str(value or "").strip().lower()
    text = re.sub(r"[^a-z0-9]+", "-", text)
    return text.strip("-") or "unknown"


def same_name(name_a, name_b):
    left = normalize(name_a)
    right = normalize(name_b)
    return left == right or left in right or right in left


def parse_filename_key(filename: str):
    match = re.search(r"(?:^|_)([a-z0-9.]+)-([a-z0-9]+)\.png$", filename, re.IGNORECASE)
    if match:
        return match.group(1).lower(), match.group(2).lower()
    match = re.search(r"(?:^|_)([a-z0-9.]+)_(\d+[a-z0-9]*)\.png$", filename, re.IGNORECASE)
    if match:
        return match.group(1).lower(), match.group(2).lower()
    return "unknown", "unknown"


def fetch_remote_cards(pokemon_name: str):
    url = f"{API_BASE}/cards?name={quote(pokemon_name)}"
    try:
        response = requests.get(url, timeout=REQUEST_TIMEOUT)
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

        card_name = str(item.get("name") or "").strip()
        if not card_name or not same_name(card_name, pokemon_name):
            continue

        card_id = str(item.get("id") or "").strip()
        if not card_id or card_id in seen_ids:
            continue
        seen_ids.add(card_id)

        detail_url = f"{API_BASE}/cards/{quote(card_id)}"
        try:
            detail_response = requests.get(detail_url, timeout=REQUEST_TIMEOUT)
            detail_response.raise_for_status()
            detail = detail_response.json()
        except (requests.RequestException, ValueError):
            continue

        if isinstance(detail, dict):
            details.append(detail)

    return details


def build_local_map(local_cards):
    index = {}
    for card in local_cards:
        if not isinstance(card, dict):
            continue

        pokemon = str(card.get("pokemon") or card.get("folder") or card.get("name") or "unknown").strip()
        card_set = str(card.get("set") or "unknown").strip()
        number = str(card.get("number") or "unknown").strip()
        index[(normalize(pokemon), normalize(card_set), normalize(number))] = card
    return index


def build_remote_map(pokemon_name: str, remote_cards):
    index = {}
    for card in remote_cards:
        if not isinstance(card, dict):
            continue

        name = str(card.get("name") or "").strip()
        if name and not same_name(name, pokemon_name):
            continue

        set_payload = card.get("set") or {}
        set_id = str((set_payload.get("id") if isinstance(set_payload, dict) else set_payload) or "unknown").strip()
        if not set_id:
            set_id = "unknown"

        local_id = str(card.get("localId") or card.get("number") or "unknown").strip()
        if not local_id:
            local_id = "unknown"

        index[(normalize(pokemon_name), normalize(set_id), normalize(local_id))] = card
    return index


def rebuild_catalog():
    entries = []
    for folder in sorted(CARD_ROOT.iterdir()):
        if not folder.is_dir():
            continue

        for image in sorted(folder.glob("*.png")):
            set_id, number = parse_filename_key(image.name)
            entries.append({
                "name": folder.name.replace("-", " ").title(),
                "pokemon": folder.name.replace("-", " ").title(),
                "set": set_id,
                "number": number,
                "file": f"{folder.name}/{image.name}",
                "source": "local",
                "folder": folder.name,
                "collection": "Hoenn / Generation 3",
                "finish": "normal",
                "cardType": "Pokemon",
                "subtype": "Pokemon",
                "category": "Standard",
                "tags": ["hoenn", "generation-3"],
                "rarity": "common",
                "standardName": f"{folder.name}_{set_id}_{number or 'local'}",
            })

    return entries


def image_url_from_card(card):
    image = card.get("image")
    if isinstance(image, str) and image.startswith("http"):
        base = image.rstrip("/")
        if base.lower().endswith((".png", ".jpg", ".jpeg", ".webp")):
            return base
        return f"{base}/high.png"

    if isinstance(image, dict):
        for key in ("high", "large", "normal", "small", "low"):
            value = image.get(key)
            if isinstance(value, str) and value.startswith("http"):
                base = value.rstrip("/")
                if base.lower().endswith((".png", ".jpg", ".jpeg", ".webp")):
                    return base
                return f"{base}/high.png"

    set_info = card.get("set") or {}
    set_id = str((set_info.get("id") if isinstance(set_info, dict) else set_info) or "").strip()
    local_id = str(card.get("localId") or card.get("number") or "").strip()
    if set_id and local_id:
        return f"https://assets.tcgdex.net/en/{set_id}/{local_id}/high.png"
    return None


def download_image(image_url: str, destination: Path) -> bool:
    try:
        response = requests.get(image_url, timeout=REQUEST_TIMEOUT, allow_redirects=True)
        if response.status_code != 200 or not response.content:
            return False
        destination.write_bytes(response.content)
        return True
    except (requests.RequestException, OSError):
        return False


def main():
    CARD_ROOT.mkdir(parents=True, exist_ok=True)

    if INDEX_PATH.exists():
        try:
            with INDEX_PATH.open("r", encoding="utf-8") as handle:
                local_cards = json.load(handle)
        except (json.JSONDecodeError, OSError):
            local_cards = []
    else:
        local_cards = []

    if not isinstance(local_cards, list):
        local_cards = []

    local_map = build_local_map(local_cards)
    missing_by_pokemon = []
    downloaded = 0

    for pokemon in ROSTER:
        folder = CARD_ROOT / normalize(pokemon)
        folder.mkdir(parents=True, exist_ok=True)

        remote_cards = fetch_remote_cards(pokemon)
        remote_map = build_remote_map(pokemon, remote_cards)
        missing_keys = [key for key in remote_map if key not in local_map]

        if not missing_keys:
            continue

        missing_by_pokemon.append((pokemon, len(missing_keys)))

        for key in missing_keys:
            _, set_id, local_id = key
            file_name = f"{normalize(pokemon)}_{set_id}-{local_id}.png"
            target_path = folder / file_name

            if target_path.exists():
                continue

            card = remote_map[key]
            image_url = image_url_from_card(card)
            if not image_url:
                continue

            if download_image(image_url, target_path):
                downloaded += 1

    rebuilt = rebuild_catalog()
    with INDEX_PATH.open("w", encoding="utf-8") as handle:
        json.dump(rebuilt, handle, ensure_ascii=False, indent=2)
        handle.write("\n")

    print(f"downloaded_missing={downloaded}")
    print(f"missing_by_pokemon={missing_by_pokemon[:10]}")
    print(f"catalog_entries={len(rebuilt)}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
