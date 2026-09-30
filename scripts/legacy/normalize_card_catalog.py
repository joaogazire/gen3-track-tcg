#!/usr/bin/env python3
"""DEPRECADO — não rode este script.

Reescreve `assets/cards/index.json` com regras antigas (collection fixa "Hoenn /
Generation 3" e standardName por raridade) que conflitam com o fluxo atual:
`build_local_card_index.py` gera o índice a partir dos arquivos em disco e
`build_card_database.py` deriva coleção/raridade/preço da TCGdex. Rodar este
normalizador regride os dois.
"""
import json
import re
from pathlib import Path

root = Path(__file__).resolve().parents[1]
index_path = root / "assets" / "cards" / "index.json"

set_labels = {
    "ex1": "EX Ruby & Sapphire",
    "ex2": "EX Sandstorm",
    "ex3": "EX Dragon",
    "ex4": "EX Team Magma vs Team Aqua",
    "ex5": "EX Hidden Legends",
    "ex6": "EX FireRed & LeafGreen",
    "ex7": "EX Team Rocket Returns",
    "ex8": "EX Deoxys",
    "ex9": "EX Emerald",
}


def slug(value: str) -> str:
    value = value.strip().lower()
    value = re.sub(r"[^a-z0-9]+", "-", value)
    value = value.strip("-")
    return value


def normalize_entry(entry: dict) -> dict:
    name = str(entry.get("name") or "").strip()
    folder = str(entry.get("folder") or slug(name)).strip()
    set_code = str(entry.get("set") or "unknown").strip().lower()
    finish = str(entry.get("finish") or "normal").strip().lower()
    card_type = str(entry.get("cardType") or "Pokemon").strip()
    subtype = str(entry.get("subtype") or "Standard").strip()
    rarity = str(entry.get("rarity") or "unknown").strip().lower()
    category = str(entry.get("category") or "Standard").strip()
    tags = entry.get("tags") or ["hoenn", "generation-3"]

    if not rarity or rarity == "unknown":
        rarity = "common"

    entry["pokemon"] = name
    entry["folder"] = folder
    entry["set"] = set_code
    entry["collection"] = entry.get("collection") or set_labels.get(set_code, "Hoenn / Generation 3")
    entry["finish"] = finish
    entry["cardType"] = card_type
    entry["subtype"] = subtype
    entry["rarity"] = rarity
    entry["category"] = category
    entry["tags"] = list(tags)
    entry["standardName"] = f"{slug(name)}_{set_code}_{rarity}_{finish}"
    return entry


def main() -> None:
    data = json.loads(index_path.read_text(encoding="utf-8"))
    normalized = [normalize_entry(entry) for entry in data]
    index_path.write_text(json.dumps(normalized, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    print(f"normalized {len(normalized)} entries -> {index_path}")


if __name__ == "__main__":
    main()
