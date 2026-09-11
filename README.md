# Pokémon Emerald TCG — Tracker

Tracker pessoal de coleção de cartas Pokémon TCG da Geração 3 (Hoenn), inspirado em **Pokémon Emerald**.
Aplicação 100% estática (HTML + CSS + Vanilla JS) — sem build, sem framework, sem dependências de runtime.

## Como rodar

Qualquer servidor estático serve. A partir da raiz do projeto:

```bash
python3 -m http.server 8765
```

E abra `http://localhost:8765/src/`.

> Abrir o `index.html` diretamente via `file://` não funciona: o app busca o catálogo
> `/assets/cards/index.json` via `fetch`, que exige HTTP.

## GitHub Pages

O app está publicado em `https://joaogazire.github.io/gen3-track-tcg/src/` — aponte a
página do Pages para a pasta `/ (root)` do branch `main` e a URL acima funciona direto.

## Arquitetura

```
gen3-track-tcg/
├── src/                  # Aplicação (o que o navegador carrega)
│   ├── index.html        # Página única (SPA)
│   ├── style.css         # Estilos (tema Emerald)
│   └── script.js         # Estado, renderização, modal e sync
├── assets/
│   ├── cards/            # 139 pastas (1 por Pokémon) + index.json (catálogo)
│   └── site/             # Background, verso de carta, ícones, cry do Rayquaza
├── scripts/              # Ferramentas Python (manutenção do catálogo)
└── docs/                 # Referências de design
```

**Por que essa estrutura?**

- **`src/` separado de `assets/`** — deixa explícito o que é código de aplicação e o que é
  conteúdo/dados. O catálogo de 2.7k cartas é *dado*, não código; misturar os dois na raiz
  escondia isso.
- **`scripts/` para as ferramentas Python** — os downloaders e o indexador só rodam na sua
  máquina para atualizar o catálogo; não fazem parte do app. A separação evita que alguém
  confunda ferramenta de manutenção com parte do site.
- **Zero build tools** — para um projeto de página única hospedado no GitHub Pages, um bundler
  (Vite/webpack) só adicionaria complexidade sem ganho real. Vanilla JS + paths absolutos
  (`/assets/...`) funcionam em qualquer servidor estático — incluindo o Pages, onde o app
  vive em `/src/` e os assets em `/assets/` na raiz do site.
- **Catálogo como JSON indexado (`assets/cards/index.json`)** — a UI não lista diretórios
  (impossível em um site estático); um único JSON pré-construído resolve isso de forma
  determinística e versionável.

## Funcionalidades

- Checklist das 135 cartas da dex nacional 252–386 (Geração 3 completa)
- Grade responsiva (5 → 4 → 3 colunas) no estilo da galeria oficial do TCG
- Modal de seleção de variante: pré-visualização grande, navegação por setas/swipe e lista
  de todas as versões (coleção, acabamento, número)
- Barra de progresso animada da coleção
- **Verificação de sincronização** contra a API [TCGdex](https://tcgdex.dev/) com barra de
  progresso e registro de data/hora da última atualização
- Easter egg no Rayquaza do header 👀
- Estado salvo em `localStorage` (funciona offline depois do primeiro load)

## Ferramentas (`scripts/`)

| Script | Função |
| --- | --- |
| `download_gen3_tcgdex.py` | Baixa as cartas da série EX (Geração 3) da TCGdex |
| `download_full_pokemon_cards.py` | Baixa todas as cartas de cada Pokémon do roster |
| `rebuild_full_card_set.py` | Reconcilia pastas locais com a API e baixa faltantes |
| `build_local_card_index.py` | Reconstrói `assets/cards/index.json` a partir dos arquivos |
| `check_card_sync.py` | Valida o catálogo local contra a API (reporta divergências) |
| `normalize_card_catalog.py` | Normaliza metadados das entradas do catálogo |

Dependência única: `pip install requests`

## Fonte das imagens

As imagens das cartas vêm da [TCGdex](https://tcgdex.dev/) (API comunitária) e são
propriedade da Nintendo/Creatures Inc./GAME FREAK inc. Projeto de uso pessoal, sem fins
comerciais.

---

Feito por [joaogazire](https://github.com/joaogazire) 🐉
