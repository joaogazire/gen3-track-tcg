"""Gera as versões WebP das cartas que o site publica.

Cada PNG de assets/cards/<pasta>/<arquivo>.png vira:
  - assets/thumbs/<pasta>/<arquivo>.webp: miniatura de THUMB_WIDTH px, para a
    grade e a lista de variantes;
  - assets/art/<pasta>/<arquivo>.webp: tamanho original, para o preview do
    modal.
Os PNGs ficam só no repositório, como fonte: o Pages não os publica
(_config.yml), o que mantém o site abaixo do limite de 1 GB.

Só refaz o que o PNG mudou, então dá pra rodar de novo depois de baixar
cartas novas. Remove as versões órfãs.

Uso: .venv/bin/python scripts/build_thumbs.py   (precisa de pillow)
"""

from concurrent.futures import ProcessPoolExecutor
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
CARDS_DIR = ROOT / "assets" / "cards"
# (pasta de saída, largura máxima ou None = original, qualidade WebP)
OUTPUTS = (
    (ROOT / "assets" / "thumbs", 360, 80),  # ~240px na grade de 5 colunas, com folga para tela 1.5x
    (ROOT / "assets" / "art", None, 80),    # preview do modal (~245px na tela, 2x)
)


def out_path(png: Path, out_dir: Path) -> Path:
    return out_dir / png.relative_to(CARDS_DIR).with_suffix(".webp")


def build_one(png: Path) -> int:
    built = 0
    image = None
    for out_dir, width, quality in OUTPUTS:
        out = out_path(png, out_dir)
        if out.exists() and out.stat().st_mtime >= png.stat().st_mtime:
            continue
        if image is None:
            with Image.open(png) as source:
                image = source.convert("RGBA")
        img = image
        if width and img.width > width:
            img = img.resize((width, round(img.height * width / img.width)), Image.LANCZOS)
        out.parent.mkdir(parents=True, exist_ok=True)
        img.save(out, "WEBP", quality=quality, method=6)
        built += 1
    return built


def main():
    pngs = sorted(CARDS_DIR.rglob("*.png"))
    with ProcessPoolExecutor() as pool:
        built = sum(pool.map(build_one, pngs, chunksize=32))

    for out_dir, _, _ in OUTPUTS:
        expected = {out_path(p, out_dir) for p in pngs}
        orphans = [p for p in out_dir.rglob("*.webp") if p not in expected]
        for orphan in orphans:
            orphan.unlink()
        total = sum(p.stat().st_size for p in out_dir.rglob("*.webp"))
        print(f"{out_dir.relative_to(ROOT)}: {total / 1048576:.0f} MB, {len(orphans)} órfãs removidas")
    print(f"{len(pngs)} cartas, {built} arquivos gerados")


if __name__ == "__main__":
    main()
