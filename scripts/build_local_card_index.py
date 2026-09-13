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


def printed_species_of(stem: str) -> str:
    """Prefixo impresso da carta: o stem sem o sufixo `_set-numero`.

    `m-absol-ex_B1-151` → `m-absol-ex`; `abra_base1-32` → `abra`."""
    return stem.rsplit("_", 1)[0].lower() if "_" in stem else stem.lower()


def is_on_species(folder_name: str, stem: str) -> bool:
    """A frente impressa pertence à espécie da pasta?

    Compara por TOKEN exato separado por hífen — não substring, que já colocou
    Crabrawler dentro de abra/ (substring "abra" ⊂ "crabrawler") e Volcarona em aron/.
    `m-absol-ex`/`absol`, `team-magma-s-groudon`/`groudon`, `castform-rain-form`/`castform`
    e `alakazam-e4-lv-x`/`alakazam` passam; `crabrawler`/`abra` não."""
    printed = printed_species_of(stem)
    return printed == folder_name or folder_name in printed.split("-")


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
        "collection": "",
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
    skipped = []
    for folder in sorted(p for p in CARD_ROOT.iterdir() if p.is_dir()):
        for image in sorted(folder.glob("*.png")):
            stem = image.stem
            if "_common_normal" in stem or not is_on_species(folder.name, stem):
                skipped.append(f"{folder.name}/{image.name}")
                continue
            entries.append(extract_metadata(folder.name, image.name))

    entries.sort(key=lambda item: (item["pokemon"], item["set"], item["number"], item["file"]))
    INDEX_PATH.write_text(json.dumps(entries, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"catalog_entries={len(entries)}")
    if skipped:
        print(f"skipped={len(skipped)} (fora da espécie da pasta ou legado sem número):")
        for name in skipped[:20]:
            print(f"  {name}")
        if len(skipped) > 20:
            print(f"  ... +{len(skipped) - 20}")
    print(f"index_path={INDEX_PATH}")


if __name__ == "__main__":
    main()
