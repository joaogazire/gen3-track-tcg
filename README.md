# Emerald TCG — Tracker

Tracker pessoal de coleção de cartas Pokémon TCG da Geração 3 (Hoenn), inspirado em **Pokémon Emerald**.
Aplicação 100% estática (HTML + CSS + Vanilla JS) — sem build, sem framework, sem dependências de runtime.

## Como rodar

Qualquer servidor estático serve (para o botão de sincronizar buscar os preços da Liga,
use `.venv/bin/python scripts/serve.py` — ver "Atualizar os preços da Liga"). A partir da
raiz do projeto:

```bash
python3 -m http.server 8765
```

E abra `http://localhost:8765/src/`.

> Abrir o `index.html` diretamente via `file://` não funciona: o app busca a base de
> dados `assets/data/catalog.min.json` via `fetch`, que exige HTTP.

## Atualizar os preços da Liga

**Pelo botão de sincronizar** (↻ no header): rode o site com o servidor do projeto em
vez do `http.server`:

```bash
python3 -m venv .venv && .venv/bin/pip install playwright   # uma vez (usa o Google Chrome instalado)
.venv/bin/python scripts/serve.py                            # http://localhost:8765/src/
```

Em localhost, o botão faz a verificação do catálogo e em seguida busca **todas as
cartas de novo** na Liga (`scripts/serve.py` roda `fetch_liga_prices.py` na máquina),
com o progresso na notificação e um botão **Parar**. Pode fechar o aviso ou recarregar a
página: a coleta continua; interrompida, o próximo clique retoma de onde parou. No fim,
os preços novos aparecem na tela. No GitHub Pages o botão só verifica o catálogo.

**Pelo terminal:**

```bash
.venv/bin/python scripts/fetch_liga_prices.py
```

Nos dois casos, para publicar:
`git add assets/data/liga-prices.min.json && git commit -m "Update Liga prices" && git push`.

O script abre a Liga num Chrome headless (passa pelo desafio do Cloudflare como um
navegador normal) em duas etapas, ~1 página a cada 2 s (a Liga bloqueia com erro 1015 se
for mais rápido):

1. **Busca por Pokémon** (202 buscas, clicando em "Exibir mais" até o fim, ~15 min):
   casa as impressões do catálogo e dá uma faixa geral, que **mistura** Normal/Foil/Reverse
2. **Página de cada impressão** e da versão japonesa dela (~6.500, ~6 h na primeira vez):
   o preço por variante (`cards_editions`) e os **anúncios** (`cards_stock`: idioma,
   qualidade, variante, preço). A Liga manda em texto só parte dos preços; o resto são
   dígitos recortados de uma imagem, lidos pelo OCR da extensão (`scripts/liga_ocr/`,
   cópia de `gen3-extension/ocr`) rodando no Chrome, com a mesma conferência (os preços
   têm que subir na ordem que a Liga indica, senão a leitura da página é descartada)

Interrompido, continua de onde parou (cache em `scripts/.liga_cache.json`). Buscas com
menos de 20 h e páginas de carta com menos de 72 h não são refeitas (`--max-age`,
`--card-max-age`; `0` refaz tudo). `--only Treecko Mudkip` roda só alguns;
`--skip-cards` só a 1ª etapa.

## Arquitetura

```
gen3-track-tcg/
├── src/                  # Aplicação (o que o navegador carrega)
│   ├── index.html        # Página única (SPA) — early-fetch da base no <head>
│   ├── style.css         # Estilos (tema Emerald)
│   └── script.js         # Estado, renderização, modal e sync
├── assets/
│   ├── cards/            # 139 pastas (1 por Pokémon) + index.json (inventário de arquivos)
│   ├── data/             # Base de dados do app (gerada por build_card_database.py)
│   │   ├── catalog.min.json    # Tier 1 — catálogo leve usado pela UI
│   │   ├── prices.min.json     # Preços compactos por carta (USD/EUR, por foil)
│   │   ├── art.min.json        # Arte da carta em PT/JA (URLs) para o seletor de idioma
│   │   └── details/<pk>.json   # Tier 2 — detalhes pesados (fetch sob demanda)
│   └── site/             # Background, verso de carta, ícones, cry do Rayquaza
├── scripts/              # Ferramentas Python (manutenção do catálogo)
└── docs/                 # Referências de design
```

**Por que essa estrutura?**

- **`src/` separado de `assets/`** — deixa explícito o que é código de aplicação e o que é
  conteúdo/dados. O catálogo de ~4.5 mil cartas (todas as eras do TCG) é *dado*, não
  código; misturar os dois na raiz escondia isso.
- **`scripts/` para as ferramentas Python** — os downloaders e o indexador só rodam na sua
  máquina para atualizar o catálogo; não fazem parte do app. A separação evita que alguém
  confunda ferramenta de manutenção com parte do site.
- **Zero build tools** — para um projeto de página única hospedado no GitHub Pages, um bundler
  (Vite/webpack) só adicionaria complexidade sem ganho real. Vanilla JS + paths relativos
  funcionam em qualquer servidor estático, incluindo o Pages.
- **Catálogo como JSON indexado (`assets/data/catalog.min.json`)** — a UI não lista
  diretórios (impossível em um site estático); um único JSON pré-construído resolve isso
  de forma determinística e versionável. É gerado por `build_card_database.py` a partir
  do inventário de arquivos (`assets/cards/index.json`) + metadados da API TCGdex,
  dividido em duas camadas: Tier 1 (leve, carregado no boot com early-fetch no `<head>`)
  e Tier 2 (`assets/data/details/`, fetch sob demanda quando um card abre).

## Funcionalidades

- Checklist das 202 cartas da dex do Emerald (Hoenn + Abra/Kadabra/Alakazam/Wobbuffet),
  com variantes de **todas as eras do Pokémon TCG** no catálogo (base → Scarlet & Violet)
- Grade responsiva (5 → 4 → 3 colunas) no estilo da galeria oficial do TCG
- Modal de seleção de variante: pré-visualização grande, navegação por setas/swipe e lista
  de todas as versões (coleção, acabamento, número)
- **Preços** — badge no canto da carta coletada, pill no preview, preço em cada variante
  do seletor (que ordena da mais barata à mais cara) e soma da coleção. A fonte é a
  **Liga Pokemon**, lida de `assets/data/liga-prices.min.json` — sem extensão nem
  backend (o site estático não alcança a Liga: Cloudflare com desafio em JS + sem CORS;
  o arquivo é gerado por `scripts/fetch_liga_prices.py`, ver abaixo). O preço é o
  **menor anúncio** na Liga para:
  - a **variante** da raridade escolhida (Normal / Holo = Foil / Reverse Foil);
  - o **idioma** da bandeira do modal (🇧🇷 PT, 🇯🇵 JP, 🇺🇸 EN; padrão PT) — em japonês, os anúncios
    vêm da carta japonesa correspondente na Liga (ex.: Ralts SV1 211/198 ↔ SV1S 083/078,
    ligadas pela arte JP de `art.min.json`);
  - a **qualidade** escolhida no modal (M / NM / SP / MP / HP / D, padrão NM), valendo
    essa qualidade ou melhor. Idioma e qualidade valem para o site todo (grade e soma
    também) e ficam salvos no navegador.

  Sem anúncio nesse idioma/qualidade, mostra o menor de qualquer idioma/estado; sem a
  variante pedida, o de outra. Todo preço substituto aparece com **≈** na frente, e o
  tooltip diz o que foi usado. A impressão é casada pelo número **e** total da coleção; números com
  prefixo (`XY66`, `SWSH029`, `TG20`) casam pelo número quando ele é único. Tooltip com
  o detalhe e a data da coleta; clique abre a carta na Liga.
  - **Extensão (opcional):** com a Emerald TCG Finder instalada, ela busca na Liga ao vivo
    e o valor fresco substitui o do arquivo (tooltip "ao vivo")
  - **Fallback:** impressão sem preço na Liga usa o TCGplayer (US$)/Cardmarket (€) via
    TCGdex, convertido para R$ com o câmbio do dia (AwesomeAPI, cache de 12h); o tooltip
    diz a fonte
- **Modo planejamento** — botão de lápis no header (à esquerda do dropdown "Todas"):
  marque/solte cartas à vontade sem salvar (nada toca o `localStorage`, a porcentagem
  continua mostrando
  o checklist salvo e as artes ficam translúcidas); sair do modo descarta o rascunho. Em
  Plan, o botão de compartilhar gera o link do **rascunho** da sessão (com aviso no modal)
- **Soma da coleção no painel** — no lugar do antigo "Checklist", o header do painel
  mostra o total em R$ das cartas marcadas (no modo Plan, soma só o rascunho da
  sessão); clicar no próprio valor esconde (`••••••`) e clicar de novo revela
  (a escolha persiste)
- **Cabeçalho mobile enxuto** — em telas pequenas ficam só o Rayquaza, o título e
  um botão de menu (⋮) que abre as ações do header (lápis, filtro, compartilhar,
  idioma, sincronizar) num painel suspenso; na linha das cartas, valor + lupa +
  busca compartilham a mesma linha
- **Preferências de coleção (presets)** — botão de disquete no header (à esquerda do
  compartilhar): "Salvar novo" pede confirmação com nome e o preset aparece logo
  abaixo; clicar no nome carrega aquela coleção (em Plan, carrega como rascunho sem
  salvar); cada preset pode ser excluído pelo ×; salvos em `localStorage`
- **Idioma da arte no modal** — bandeirinhas Brasil / Japão / EUA no topo do modal
  trocam a pré-visualização para a mesma carta naquele idioma. A correspondência vem
  pronta do build (`assets/data/art.min.json`, carregado na primeira abertura do
  modal): PT pelo mesmo id na TCGdex ou pelo mesmo print no CDN da Limitless; JA pelo
  vínculo "Int. Prints" da Limitless (print japonês ↔ internacional, conferindo o
  ilustrador). Bandeira de idioma sem versão da carta aberta fica apagada e o preview
  continua na arte EN
- **Exclusivas do Japão** — prints JP (era BW em diante) sem versão internacional
  entram no checklist como variantes próprias, com a coleção marcada "(JP)" e arte
  remota (CDN da Limitless, sem PNG no repositório)
- **Seletor por nome exato** — cada lista de variantes mostra só cartas cujo nome
  impresso bate exatamente com o Pokémon (nada de Abra aparecer no Kadabra; cards
  duplos tipo Magikarp/Wailord aparecem nos dois)
- **Ações do fim da página** — seta volta ao topo; o X ao lado zera todas as cartas
  do checklist, com modal de confirmação (não aparece em link compartilhado)
- **Barra de progresso animada** — passe o mouse ou clique na porcentagem para alternar entre
  percentual e "cartas coletadas / total"
- **Filtro por dropdown** — "Todas" no header abre, no hover ou clique, as opções
  Mega Evolution, Special Art e Full Art (Ultra Rare / VMAX / VSTAR — arte
  sangrada sem moldura tradicional)
- **Idioma PT-BR / EN-US** — bandeira no canto superior direito alterna todo o texto da
  interface ao clicar (BR ↔ EUA); em PT-BR os **nomes das coleções** saem traduzidos
  (name_pt da TCGdex); escolha persiste
- **Busca mobile** — lupa ao lado do "CHECKLIST" abre o campo de busca só em telas pequenas
- **Link de compartilhamento** — botão de ícone (link) gera uma URL com a coleção
  codificada no hash (LZString, sem servidor); quem abre vê as cartas marcadas
  com variante e acabamento, em modo somente-leitura
- **Verificação de sincronização** contra a API [TCGdex](https://tcgdex.dev/) com barra de
  progresso e registro de data/hora da última atualização
- Easter egg no Rayquaza do header 👀
- Estado salvo em `localStorage` (funciona offline depois do primeiro load)

## Ferramentas (`scripts/`)

| Script | Função |
| --- | --- |
| `backfill_set_totals.py` | Preenche o total impresso de cada coleção (`sets[id].total`, o "106" de "57/106") no catálogo já gerado, sem refazer o build — usado pela extensão Emerald TCG Finder pra casar a impressão da loja com a do Tracker |
| `backfill_variants.py` | Grava no catálogo já gerado os acabamentos de cada impressão (`vr`, ex. `"nr"`) a partir das variantes da TCGdex no cache, sem refazer o build nem fazer requisições — o build novo já grava `vr` |
| `build_card_database.py` | Gera a base do app (`assets/data/` — catálogo, detalhes e `prices.min.json`) a partir do catálogo local + TCGdex |
| `download_gen3_tcgdex.py` | Baixa as cartas da série EX (Geração 3) da TCGdex |
| `download_full_pokemon_cards.py` | Baixa todas as cartas de cada Pokémon do roster |
| `rebuild_full_card_set.py` | Reconcilia pastas locais com a API e baixa faltantes |
| `sync_missing_cards.py` | Lista (ou baixa com `--download`) cartas da TCGdex que faltam nas pastas, sem Pocket; artes ausentes na TCGdex caem nos CDNs da pokemontcg.io e da Limitless TCG |
| `build_language_art.py` | Roda depois do `build_card_database.py`: gera `art.min.json` (arte PT/JA de cada carta) e anexa ao catálogo as exclusivas JP |
| `build_thumbs.py` | Gera as miniaturas WebP (360 px, ~35 KB) em `assets/thumbs/` a partir dos PNGs de `assets/cards/`; a grade e a lista de variantes usam a miniatura e o preview do modal usa o PNG. Só refaz o que mudou e remove órfãs (precisa de `pillow`) |
| `limitless.py` | Módulo de leitura da Limitless TCG (sets EN/JP, cartas, prints internacionais), com cache em `scripts/.limitless_cache.json` |

Ordem para atualizar tudo: `sync_missing_cards.py --download` → `build_local_card_index.py`
→ `build_card_database.py` → `build_language_art.py` → `build_thumbs.py`.
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
