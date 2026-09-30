"""Gera miniaturas WebP das cartas para a grade e a lista de variantes.

Cada PNG de assets/cards/<pasta>/<arquivo>.png vira
assets/thumbs/<pasta>/<arquivo>.webp com THUMB_WIDTH px de largura.
O PNG original continua sendo usado só no preview grande do modal.

Só refaz a miniatura quando o PNG é mais novo que ela, então dá pra rodar
de novo depois de baixar cartas novas. Remove miniaturas órfãs.

Uso: .venv/bin/python scripts/build_thumbs.py   (precisa de pillow)
"""

from concurrent.futures import ProcessPoolExecutor
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
CARDS_DIR = ROOT / "assets" / "cards"
THUMBS_DIR = ROOT / "assets" / "thumbs"
THUMB_WIDTH = 360  # ~240px na grade de 5 colunas, com folga para tela 1.5x
QUALITY = 80


def thumb_path(png: Path) -> Path:
    return THUMBS_DIR / png.relative_to(CARDS_DIR).with_suffix(".webp")


def build_one(png: Path) -> bool:
    out = thumb_path(png)
    if out.exists() and out.stat().st_mtime >= png.stat().st_mtime:
        return False
    out.parent.mkdir(parents=True, exist_ok=True)
    with Image.open(png) as img:
        img = img.convert("RGBA")
        if img.width > THUMB_WIDTH:
            height = round(img.height * THUMB_WIDTH / img.width)
            img = img.resize((THUMB_WIDTH, height), Image.LANCZOS)
        img.save(out, "WEBP", quality=QUALITY, method=6)
    return True


def main():
    pngs = sorted(CARDS_DIR.rglob("*.png"))
    with ProcessPoolExecutor() as pool:
        built = sum(pool.map(build_one, pngs, chunksize=32))

    expected = {thumb_path(p) for p in pngs}
    orphans = [p for p in THUMBS_DIR.rglob("*.webp") if p not in expected]
    for orphan in orphans:
        orphan.unlink()

    total = sum(p.stat().st_size for p in THUMBS_DIR.rglob("*.webp"))
    print(f"{len(pngs)} cartas, {built} miniaturas geradas, {len(orphans)} órfãs removidas, "
          f"{total / 1048576:.0f} MB em assets/thumbs")


if __name__ == "__main__":
    main()
