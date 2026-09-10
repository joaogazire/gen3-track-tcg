#!/usr/bin/env python3
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
CARD_ROOT = ROOT / "assets" / "cards"
INDEX_PATH = CARD_ROOT / "index.json"


def title_case(value: str) -> str:
    value = (value or "").replace("-", " ").strip()
    return " ".join(part.capitalize() for part in value.split()) if value else "Unknown"


def extract_metadata(folder_name: str, file_name: str):
    stem = Path(file_name).stem
    pokemon = title_case(folder_name)

    set_code = "local"
    card_number = ""

    if "_" in stem:
        suffix = stem.split("_", 1)[1]
        if suffix:
            if "-" in suffix:
                head, tail = suffix.split("-", 1)
                set_code = head.strip()
                card_number = tail.strip() or ""
            else:
                set_code = suffix.strip()

    if not card_number:
        match = re.search(r"(\d+|[A-Z]+\d+[A-Z0-9]*)$", stem)
        if match:
            card_number = match.group(1)

    if set_code == "local" and card_number:
        set_code = "local"

    return {
        "name": pokemon,
        "pokemon": pokemon,
        "set": set_code,
        "number": card_number,
        "file": f"{folder_name}/{file_name}",
        "source": "local",
        "folder": folder_name,
        "collection": "Hoenn / Generation 3",
        "finish": "normal",
        "cardType": "Pokemon",
        "subtype": "Pokemon",
        "category": "Standard",
        "tags": ["hoenn", "generation-3"],
        "rarity": "common",
        "standardName": f"{re.sub(r'[^a-z0-9]+', '-', folder_name.lower()).strip('-')}_{set_code}_{card_number or 'local'}",
    }


def main():
    CARD_ROOT.mkdir(parents=True, exist_ok=True)
    entries = []
    for folder in sorted(p for p in CARD_ROOT.iterdir() if p.is_dir()):
        for image in sorted(folder.glob("*.png")):
            entry = extract_metadata(folder.name, image.name)
            entries.append(entry)

    entries.sort(key=lambda item: (item["pokemon"], item["set"], item["number"], item["file"]))
    INDEX_PATH.write_text(json.dumps(entries, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"catalog_entries={len(entries)}")
    print(f"index_path={INDEX_PATH}")


if __name__ == "__main__":
    main()
