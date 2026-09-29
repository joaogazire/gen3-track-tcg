#!/usr/bin/env python3
"""Preenche o total impresso de cada coleção (`total`, o "106" de "57/106")
no cache da TCGdex e no catálogo já gerado, sem refazer o build inteiro.

O build (build_card_database.py) já grava `total` nas coleções novas; este
script é só pra atualizar um catálogo gerado antes disso. Uma requisição por
coleção sem total, com pausa entre elas.
"""

import json
import time

from build_card_database import CACHE_PATH, CATALOG_PATH, fetch_set_total, load_cache, save_cache


def main():
    cache = load_cache()
    catalog = json.loads(CATALOG_PATH.read_text(encoding="utf-8"))
    sets = catalog["sets"]

    missing = [set_id for set_id, info in sets.items() if "total" not in info]
    print(f"{len(missing)} de {len(sets)} coleções sem total")

    for i, set_id in enumerate(missing, 1):
        cached = cache["sets"].get(set_id)
        total = cached.get("total") if isinstance(cached, dict) and "total" in cached else fetch_set_total(set_id)
        sets[set_id]["total"] = total
        if isinstance(cached, dict):
            cached["total"] = total
        print(f"  [{i}/{len(missing)}] {set_id}: {total}")
        time.sleep(0.2)

    save_cache(cache)
    CATALOG_PATH.write_text(json.dumps(catalog, ensure_ascii=False, separators=(",", ":")) + "\n", encoding="utf-8")
    without = [s for s, info in sets.items() if not info.get("total")]
    print(f"pronto — {len(sets) - len(without)} com total; sem total: {', '.join(without) or 'nenhuma'}")


if __name__ == "__main__":
    main()
