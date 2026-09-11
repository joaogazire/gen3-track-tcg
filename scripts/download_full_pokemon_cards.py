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

ROSTER = [
    "Treecko", "Grovyle", "Sceptile", "Torchic", "Combusken", "Blaziken", "Mudkip", "Marshtomp",
    "Swampert", "Poochyena", "Mightyena", "Zigzagoon", "Linoone", "Wurmple", "Silcoon", "Beautifly",
    "Cascoon", "Dustox", "Lotad", "Lombre", "Ludicolo", "Seedot", "Nuzleaf", "Shiftry",
    "Taillow", "Swellow", "Wingull", "Pelipper", "Ralts", "Kirlia", "Gardevoir", "Surskit",
    "Masquerain", "Shroomish", "Breloom", "Slakoth", "Vigoroth", "Slaking", "Abra", "Kadabra",
    "Alakazam", "Nincada", "Ninjask", "Shedinja", "Whismur", "Loudred", "Exploud", "Makuhita",
    "Hariyama", "Goldeen", "Seaking", "Magikarp", "Gyarados", "Azurill", "Marill", "Azumarill",
    "Geodude", "Graveler", "Golem", "Nosepass", "Skitty", "Delcatty", "Zubat", "Golbat",
    "Crobat", "Tentacool", "Tentacruel", "Sableye", "Mawile", "Aron", "Lairon", "Aggron",
    "Machop", "Machoke", "Machamp", "Meditite", "Medicham", "Electrike", "Manectric", "Plusle",
    "Minun", "Magnemite", "Magneton", "Voltorb", "Electrode", "Volbeat", "Illumise", "Oddish",
    "Gloom", "Vileplume", "Bellossom", "Doduo", "Dodrio", "Roselia", "Gulpin", "Swalot",
    "Carvanha", "Sharpedo", "Wailmer", "Wailord", "Numel", "Camerupt", "Slugma", "Magcargo",
    "Torkoal", "Grimer", "Muk", "Koffing", "Weezing", "Spoink", "Grumpig", "Sandshrew",
    "Sandslash", "Spinda", "Skarmory", "Trapinch", "Vibrava", "Flygon", "Cacnea", "Cacturne",
    "Swablu", "Altaria", "Zangoose", "Seviper", "Lunatone", "Solrock", "Barboach", "Whiscash",
    "Corphish", "Crawdaunt", "Baltoy", "Claydol", "Lileep", "Cradily", "Anorith", "Armaldo",
    "Igglybuff", "Jigglypuff", "Wigglytuff", "Feebas", "Milotic", "Castform", "Staryu", "Starmie",
    "Kecleon", "Shuppet", "Banette", "Duskull", "Dusclops", "Tropius", "Chimecho", "Absol",
    "Vulpix", "Ninetales", "Pichu", "Pikachu", "Raichu", "Psyduck", "Golduck", "Wynaut",
    "Wobbuffet", "Natu", "Xatu", "Girafarig", "Phanpy", "Donphan", "Pinsir", "Heracross",
    "Rhyhorn", "Rhydon", "Snorunt", "Glalie", "Spheal", "Sealeo", "Walrein", "Clamperl",
    "Huntail", "Gorebyss", "Relicanth", "Corsola", "Chinchou", "Lanturn", "Luvdisc", "Horsea",
    "Seadra", "Kingdra", "Bagon", "Shelgon", "Salamence", "Beldum", "Metang", "Metagross",
    "Regirock", "Regice", "Registeel", "Latias", "Latios", "Kyogre", "Groudon", "Rayquaza",
    "Jirachi", "Deoxys",
]

SET_LABELS = {
    "ex1": "EX Ruby & Sapphire",
    "ex2": "EX Sandstorm",
    "ex3": "EX Dragon",
    "ex4": "EX Team Magma vs Team Aqua",
    "ex5": "EX Hidden Legends",
    "ex6": "EX FireRed & LeafGreen",
    "ex7": "EX Team Rocket Returns",
    "ex8": "EX Deoxys",
    "ex9": "EX Emerald",
    "ex10": "EX Unseen Forces",
    "ex11": "EX Delta Species",
    "ex12": "EX Legend Maker",
    "ex13": "EX Holon Phantoms",
    "ex14": "EX Crystal Guardians",
    "ex15": "EX Dragon Frontiers",
}


def slug(value: str) -> str:
    value = str(value or "").strip().lower()
    value = re.sub(r"[^a-z0-9]+", "-", value)
    return value.strip("-") or "unknown"


def sanitize_card_name(value: str) -> str:
    value = str(value or "").strip()
    value = value.replace("/", "-")
    value = re.sub(r"[^a-zA-Z0-9\-_. ]+", "", value)
    return value.strip() or "card"


def build_image_url(card: dict) -> str | None:
    image = card.get("image")
    if isinstance(image, str):
        url = image.rstrip("/")
        if url.startswith("http"):
            return f"{url}/high.png"
    if isinstance(image, dict):
        for key in ("high", "large", "normal", "small"):
            value = image.get(key)
            if value:
                return build_image_url({"image": value})
    return None


def fetch_pokemon_cards(name: str) -> list[dict]:
    url = f"{API_BASE}/cards?name={quote(name)}"
    try:
        response = requests.get(url, timeout=60)
        response.raise_for_status()
        data = response.json()
    except Exception as exc:
        print(f"Warning: {name} fetch failed -> {exc}")
        return []

    if not isinstance(data, list):
        return []

    filtered = []
    pokemon_key = slug(name)
    for card in data:
        if not isinstance(card, dict):
            continue
        title = str(card.get("name") or "").strip()
        if not title:
            continue
        title_key = slug(title)
        if pokemon_key in title_key or title_key in pokemon_key:
            filtered.append(card)

    unique = []
    seen_ids = set()
    for card in filtered:
        card_id = str(card.get("id") or "").strip()
        if not card_id or card_id in seen_ids:
            continue
        seen_ids.add(card_id)
        unique.append(card)
    return unique


def ensure_folder(path: Path) -> None:
    path.mkdir(parents=True, exist_ok=True)


def download_card_image(image_url: str, target_path: Path) -> bool:
    try:
        response = requests.get(image_url, timeout=60)
        response.raise_for_status()
    except Exception:
        return False

    target_path.write_bytes(response.content)
    return True


def main() -> None:
    CARD_ROOT.mkdir(parents=True, exist_ok=True)
    entries = []
    seen_files = set()

    for pokemon in ROSTER:
        folder = CARD_ROOT / slug(pokemon)
        ensure_folder(folder)
        cards = fetch_pokemon_cards(pokemon)
        print(f"{pokemon}: {len(cards)} API cards")

        for card in cards:
            card_name = str(card.get("name") or pokemon).strip()
            card_id = str(card.get("id") or "").strip()
            if not card_id:
                continue

            image_url = build_image_url(card)
            if not image_url:
                continue

            set_code = card_id.split("-")[0].lower() if "-" in card_id else "unknown"
            file_name = f"{slug(card_name)}_{card_id}.png"
            file_path = folder / file_name

            if not file_path.exists():
                download_card_image(image_url, file_path)

            if file_path.exists():
                relative_path = str(file_path.relative_to(ROOT)).replace("\\", "/")
                if relative_path in seen_files:
                    continue
                seen_files.add(relative_path)

                entry = {
                    "name": card_name,
                    "pokemon": pokemon,
                    "set": set_code,
                    "number": "",
                    "file": relative_path,
                    "source": "tcgdex",
                    "folder": slug(pokemon),
                    "collection": SET_LABELS.get(set_code, "Hoenn / Generation 3"),
                    "finish": str(card.get("finish") or "normal").lower() or "normal",
                    "cardType": str(card.get("cardType") or "Pokemon").strip() or "Pokemon",
                    "subtype": str(card.get("subtype") or "Pokemon").strip() or "Pokemon",
                    "category": str(card.get("category") or "Standard").strip() or "Standard",
                    "tags": ["hoenn", "generation-3"],
                    "rarity": str(card.get("rarity") or "common").strip().lower() or "common",
                    "standardName": f"{slug(card_name)}_{set_code}_{str(card.get('rarity') or 'common').strip().lower() or 'common'}"
                }
                entries.append(entry)

    INDEX_PATH.write_text(json.dumps(entries, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Saved {len(entries)} catalog entries")

    # Validation summary
    missing = []
    for pokemon in ROSTER:
        folder = CARD_ROOT / slug(pokemon)
        local_count = len([p for p in folder.glob("*") if p.is_file()]) if folder.exists() else 0
        cards = fetch_pokemon_cards(pokemon)
        if local_count != len(cards):
            missing.append((pokemon, local_count, len(cards)))

    print("Missing/uneven folders:", missing[:10])
    print(f"Total uneven folders: {len(missing)}")


if __name__ == "__main__":
    main()
