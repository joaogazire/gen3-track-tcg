# Scripts antigos (não usar)

Ficam aqui só como referência histórica. Nenhum faz parte do fluxo atual, e
rodar qualquer um deles sobre os dados de hoje estraga o catálogo.

| Script | Por que saiu |
| --- | --- |
| `normalize_card_catalog.py` | Reescreve `assets/cards/index.json` com regras antigas (coleção fixa "Hoenn / Generation 3"); substituído por `build_local_card_index.py` + `build_card_database.py` |
| `enrich_card_metadata.py` | Enriquecia o `index.json` com a TCGdex só para a série EX; o `build_card_database.py` faz isso para todas as eras |
| `download_gen3_cards.py` | Baixava da pokemontcg.io (com chave de API) para outra pasta (`pokemon_gen3_cards/`); substituído por `sync_missing_cards.py` |
