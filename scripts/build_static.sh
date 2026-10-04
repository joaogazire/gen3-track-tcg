#!/usr/bin/env sh
# Monta em public/ só o que o site carrega, para o Static Site do Render
# (render.yaml). Fica de fora o que o _config.yml já tira do Pages:
# assets/cards (~1,7 GB de PNGs, só fonte dos scripts), scripts/ e docs/.
set -eu
cd "$(dirname "$0")/.."
rm -rf public
mkdir -p public/assets
cp index.html public/
cp -R src public/
for dir in art thumbs data site; do
  cp -R "assets/$dir" public/assets/
done
echo "public/: $(du -sh public | cut -f1)"
