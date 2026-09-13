#!/usr/bin/env python3
"""Valida o catálogo local contra a série EX completa da TCGdex.

A query /cards?name=X da API não retorna cartas cujo nome difere do Pokémon
("X ex", "X δ", "Team Magma's X"), então este script percorre TODOS os sets
da série EX (/series/ex) e compara cada carta por set+localId, classificando
por dexId se pertence ao roster da Geração 3 (dex nacional 252-386).

Reporta:
  - cartas EX do roster ausentes no catálogo local (por set+number)
  - entradas locais EX sem correspondência na API
  - cartas EX sem imagem na fonte (baixáveis de qualquer forma? não)
"""
import json
import re
import sys
import time
from pathlib import Path
from urllib.parse import quote

import requests

ROOT = Path(__file__).resolve().parents[1]
CARD_ROOT = ROOT / "assets" / "cards"
INDEX_PATH = CARD_ROOT / "index.json"
API_BASE = "https://api.tcgdex.net/v2/en"
# Geração 3 (dex 252-386) + os 4 fora de Hoenn que o app também rastreia
# (Abra 63, Kadabra 64, Alakazam 65, Wobbuffet 202).
DEX_EXTRA = {63, 64, 65, 202}
DEX_RANGE = range(252, 387)
REQUEST_TIMEOUT = 45
SET_PAUSE = 0.3


def normalize(value):
    text = str(value or "").strip().lower()
    text = re.sub(r"[^a-z0-9]+", "-", text)
    return text.strip("-") or "unknown"


def load_local_cards():
    if not INDEX_PATH.exists():
        raise FileNotFoundError(f"Local catalog not found: {INDEX_PATH}")
    with INDEX_PATH.open("r", encoding="utf-8") as handle:
        payload = json.load(handle)
    if not isinstance(payload, list):
        raise ValueError("Local catalog is not a valid list.")
    return payload


def build_local_ex_index(local_cards):
    """Chaves (set_id, local_id) normalizadas das entradas EX do catálogo."""
    index = {}
    for card in local_cards:
        if not isinstance(card, dict):
            continue
        set_id = str(card.get("set") or "").strip().lower()
        if not re.match(r"^ex\d+(\.\d+)?$", set_id) and set_id != "exu":
            continue
        number = str(card.get("number") or "").strip()
        # Entrada sem número (ex.: legado "*_common_normal") não tem contraparte
        # na API — sem este filtro viraria "extra" fantasma em toda execução.
        if not number:
            continue
        # compara zero-padding-insensitive: "007" == "7"
        number_key = str(int(number)) if number.isdigit() else number.lower()
        index[(set_id, number_key)] = card
    return index


def fetch_series_set_ids():
    response = requests.get(f"{API_BASE}/series/ex", timeout=REQUEST_TIMEOUT)
    response.raise_for_status()
    payload = response.json()
    sets = payload.get("sets", []) if isinstance(payload, dict) else []
    return [str(s["id"]) for s in sets if isinstance(s, dict) and s.get("id")]


def fetch_set_cards(set_id, tries=4):
    """Lê as cartas de um set com retry — a API responde 503 sob carga."""
    for attempt in range(tries):
        try:
            response = requests.get(
                f"{API_BASE}/sets/{quote(set_id)}", timeout=REQUEST_TIMEOUT
            )
            if response.status_code == 200:
                payload = response.json()
                return payload.get("cards", []) if isinstance(payload, dict) else []
        except (requests.RequestException, ValueError):
            pass
        time.sleep(3 * (attempt + 1))
    raise requests.RequestException(f"set {set_id} indisponível após {tries} tentativas")


def is_roster_card(card, detail_cache, detail_fetcher):
    """True se a carta pertence a algum Pokémon da dex 252-386.

    A listagem do set não traz dexId, então o detalhe da carta é consultado
    (com cache por card_id — variantes do mesmo Pokémon compartilham a busca
    via last-name memoization feita pelo chamador).
    """
    card_id = str(card.get("id") or "")
    if card_id not in detail_cache:
        detail_cache[card_id] = detail_fetcher(card_id, card.get("name"))
    return detail_cache[card_id]


def fetch_card_dex_ids(card_id, name):
    for attempt in range(3):
        try:
            response = requests.get(
                f"{API_BASE}/cards/{quote(card_id, safe='')}", timeout=REQUEST_TIMEOUT
            )
            if response.status_code == 200:
                payload = response.json()
                if isinstance(payload, dict):
                    dex_ids = payload.get("dexId") or []
                    time.sleep(0.15)
                    return [d for d in dex_ids if isinstance(d, int)]
        except (requests.RequestException, ValueError):
            pass
        time.sleep(1.5 * (attempt + 1))
    print(f"WARN: sem detalhes para {card_id}", file=sys.stderr)
    return None


def in_gen3_dex(dex_ids):
    """None = desconhecido (falha no fetch); False = fora do roster."""
    if dex_ids is None:
        return None
    return any(d in DEX_RANGE or d in DEX_EXTRA for d in dex_ids)


def main():
    local_cards = load_local_cards()
    local_index = build_local_ex_index(local_cards)

    set_ids = fetch_series_set_ids()
    print(f"EX series sets: {len(set_ids)}")

    remote_roster = {}   # (set, number) -> {"name", "id", "has_image"}
    remote_other = 0
    unknown = 0
    detail_cache = {}    # card_id -> dex_ids (evita re-fetch de variantes do mesmo Pokémon)
    last_name = None
    for set_id in set_ids:
        try:
            cards = fetch_set_cards(set_id)
        except (requests.RequestException, ValueError) as exc:
            print(f"WARN: falha ao ler set {set_id}: {exc}", file=sys.stderr)
            continue
        for card in cards:
            if not isinstance(card, dict):
                continue
            card_id = str(card.get("id") or "")
            set_part, _, local_part = card_id.partition("-")
            number = str(card.get("localId") or local_part)
            number_key = str(int(number)) if number.isdigit() else number.lower()
            entry = {
                "name": card.get("name"),
                "id": card_id,
                "has_image": bool(card.get("image")),
            }
            classification = in_gen3_dex(
                is_roster_card(card, detail_cache, fetch_card_dex_ids)
            )
            if classification is None:
                unknown += 1
            elif classification:
                remote_roster[(set_id.lower(), number_key)] = entry
            else:
                remote_other += 1
        time.sleep(SET_PAUSE)

    print(f"remote EX cards: roster={len(remote_roster)} other={remote_other} unknown={unknown}")

    missing = sorted(
        (set_id, number, info)
        for (set_id, number), info in remote_roster.items()
        if (set_id, number) not in local_index
    )
    extra = sorted(set(local_index) - set(remote_roster))

    no_image = sorted(k for k, v in remote_roster.items() if not v["has_image"])

    print()
    print(f"missing_in_local: {len(missing)}")
    for set_id, number, info in missing:
        print(f"  {set_id}-{number}: {info['name']} (image={'yes' if info['has_image'] else 'NO'})")
    print(f"local_not_on_api: {len(extra)}")
    for set_id, number in extra:
        card = local_index[(set_id, number)]
        print(f"  {set_id}-{number}: {card.get('file')}")
    print(f"roster_cards_without_image_upstream: {len(no_image)}")
    for set_id, number in no_image:
        info = remote_roster[(set_id, number)]
        print(f"  {set_id}-{number}: {info['name']}")

    real_missing = [m for m in missing if m[2]["has_image"]]
    if real_missing or extra:
        print(f"\nSYNC_MISMATCH: {len(real_missing)} baixáveis ausentes, {len(extra)} extras.")
        return 1

    print("\nSYNC_OK: catálogo completo para o roster da Geração 3 na série EX.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
