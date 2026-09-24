#!/usr/bin/env python3
"""Baixa da TCGdex as cartas que existem na API e ainda não estão em assets/cards/.

Para cada pasta de espécie, busca /cards?name=<espécie>, mantém só as cartas
cuja frente impressa pertence à espécie (mesmo filtro por token do
build_local_card_index.py), descarta as coleções do TCG Pocket e baixa as que
faltam como `<nome-impresso>_<card-id>.png`.

Uso:
  python3 scripts/sync_missing_cards.py            # dry-run: só lista o que falta
  python3 scripts/sync_missing_cards.py --download # baixa as faltantes

Depois de baixar: build_local_card_index.py → build_card_database.py.
"""
import re
import sys
import time
from pathlib import Path
from urllib.parse import quote

import requests

sys.path.insert(0, str(Path(__file__).resolve().parent))
from build_local_card_index import is_on_species  # noqa: E402

ROOT = Path(__file__).resolve().parents[1]
CARD_ROOT = ROOT / "assets" / "cards"
API_BASE = "https://api.tcgdex.net/v2/en"
REQUEST_TIMEOUT = 45


def slug(value):
    value = str(value or "").strip().lower()
    value = re.sub(r"[^a-z0-9]+", "-", value)
    return value.strip("-") or "unknown"


def get_json(url, tries=4):
    for attempt in range(tries):
        try:
            response = requests.get(url, timeout=REQUEST_TIMEOUT)
            if response.status_code == 200:
                return response.json()
            if response.status_code == 404:
                return None
        except (requests.RequestException, ValueError):
            pass
        time.sleep(2 * (attempt + 1))
    return None


def pocket_set_ids():
    """Ids das coleções do TCG Pocket (série "tcgp") — fora do catálogo."""
    serie = get_json(f"{API_BASE}/series/tcgp") or {}
    return {str(s.get("id")).lower() for s in serie.get("sets") or [] if s.get("id")}


def local_card_ids(folder):
    """Card ids já presentes na pasta (sufixo após o último `_`), lowercase."""
    return {p.stem.rsplit("_", 1)[-1].lower() for p in folder.glob("*.png") if "_" in p.stem}


def missing_for(folder, pocket):
    cards = get_json(f"{API_BASE}/cards?name={quote(folder.name)}") or []
    have = local_card_ids(folder)
    missing = []
    seen = set()
    for card in cards:
        card_id = str(card.get("id") or "").strip()
        name = str(card.get("name") or "").strip()
        if not card_id or not name or card_id.lower() in seen:
            continue
        seen.add(card_id.lower())
        set_id = card_id.rsplit("-", 1)[0].lower()
        if set_id in pocket or card_id.lower() in have:
            continue
        stem = f"{slug(name)}_{card_id}"
        if not is_on_species(folder.name, stem):
            continue
        missing.append({"id": card_id, "name": name, "file": f"{stem}.png", "image": card.get("image")})
    return missing


# Set id TCGdex → set id pokemontcg.io, para cartas que a TCGdex lista sem
# imagem (Trainer Gallery, Shiny Vault, promos, holos "H" do e-Card...). Só
# entram mapeamentos conferidos; o resto fica de fora até a TCGdex ter a arte.
PTCG_SET_IDS = {
    "sm3.5": "sm35",
    "sm7.5": "sm75",
    "smp": "smp",
    "svp": "svp",
    "swshp": "swshp",
    "xyp": "xyp",
    "hgssp": "hsp",
    "pl2": "pl2",
    "dc1": "dc1",
    "ecard2": "ecard2",
    "ecard3": "ecard3",
    "swsh4.5sv": "swsh45sv",
    "swsh10tg": "swsh10tg",
    "swsh11tg": "swsh11tg",
    "swsh12tg": "swsh12tg",
    "swsh12.5gg": "swsh12pt5gg",
    "2019sm": "mcd19",
    "2021swsh": "mcd21",
    "2022swsh": "mcd22",
    "tk-ex-latia": "tk1a",
    "tk-ex-latio": "tk1b",
    "tk-ex-p": "tk2a",
    "tk-ex-m": "tk2b",
}


def image_candidates(card):
    """URLs da arte em ordem de preferência: listagem TCGdex, detalhe TCGdex
    (a listagem às vezes omite a imagem), CDN da pokemontcg.io."""
    image = card.get("image")
    if isinstance(image, str) and image.startswith("http"):
        yield f"{image.rstrip('/')}/high.png"
    detail = get_json(f"{API_BASE}/cards/{quote(card['id'], safe='')}") or {}
    image = detail.get("image")
    if isinstance(image, str) and image.startswith("http"):
        yield f"{image.rstrip('/')}/high.png"
    set_id, number = card["id"].rsplit("-", 1)
    ptcg_set = PTCG_SET_IDS.get(set_id.lower())
    if ptcg_set:
        yield f"https://images.pokemontcg.io/{ptcg_set}/{number.lstrip('0') or '0'}_hires.png"


def download(card, folder):
    for url in image_candidates(card):
        try:
            response = requests.get(url, timeout=REQUEST_TIMEOUT)
        except requests.RequestException:
            continue
        if response.status_code == 200 and response.content.startswith(b"\x89PNG"):
            (folder / card["file"]).write_bytes(response.content)
            return None
    return "sem imagem"


def main():
    do_download = "--download" in sys.argv
    pocket = pocket_set_ids()
    if not pocket:
        print("não consegui listar os sets do Pocket; abortando")
        return 1

    total = downloaded = 0
    failed = []
    for folder in sorted(p for p in CARD_ROOT.iterdir() if p.is_dir()):
        missing = missing_for(folder, pocket)
        if not missing:
            continue
        total += len(missing)
        print(f"{folder.name}: {', '.join(c['id'] for c in missing)}")
        if not do_download:
            continue
        for card in missing:
            error = download(card, folder)
            if error:
                failed.append((f"{folder.name}/{card['file']}", error))
            else:
                downloaded += 1
            time.sleep(0.1)

    print(f"faltantes={total}")
    if do_download:
        print(f"baixadas={downloaded}")
        for path, error in failed:
            print(f"  falhou {path}: {error}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
