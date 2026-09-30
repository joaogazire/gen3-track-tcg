#!/usr/bin/env python3
"""Grava no catálogo já gerado os acabamentos de cada impressão (`vr`, ex.:
"nr" = normal + reverse), lidos das variantes da TCGdex no cache, sem refazer
o build. O modal usa isso para apagar os botões N/F/R/H que a carta não tem.

O build (build_card_database.py) já grava `vr`; este script é só pra
atualizar um catálogo gerado antes disso. Não faz requisição: carta sem
variantes no cache fica sem `vr` (o site cai nos preços para deduzir).
"""

import json

from build_card_database import CATALOG_PATH, load_cache, variants_code

DETAILS_DIR = CATALOG_PATH.parent / "details"


def main():
    cache = load_cache()
    catalog = json.loads(CATALOG_PATH.read_text(encoding="utf-8"))

    # file -> id da TCGdex, pelos detalhes (Tier 2)
    ids = {}
    for path in DETAILS_DIR.glob("*.json"):
        for file, detail in json.loads(path.read_text(encoding="utf-8")).get("cards", {}).items():
            if detail.get("id"):
                ids[file] = detail["id"]

    filled = 0
    for entry in catalog["cards"]:
        detail = cache["cards"].get(ids.get(entry.get("file"), ""))
        vr = variants_code(detail.get("variants")) if isinstance(detail, dict) else ""
        if vr:
            entry["vr"] = vr
            filled += 1
        else:
            entry.pop("vr", None)

    CATALOG_PATH.write_text(json.dumps(catalog, ensure_ascii=False, separators=(",", ":")) + "\n", encoding="utf-8")
    print(f"pronto — {filled} de {len(catalog['cards'])} impressões com acabamentos")


if __name__ == "__main__":
    main()
