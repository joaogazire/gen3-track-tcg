# Emerald TCG — Tracker

Tracker pessoal de coleção de cartas Pokémon TCG da Geração 3 (Hoenn), inspirado em **Pokémon Emerald**.
Aplicação 100% estática (HTML + CSS + Vanilla JS) — sem build, sem framework, sem dependências de runtime.

## Como rodar

Qualquer servidor estático serve. A partir da raiz do projeto:

```bash
python3 -m http.server 8765
```

E abra `http://localhost:8765/src/`.

> Abrir o `index.html` diretamente via `file://` não funciona: o app busca a base de
> dados `assets/data/catalog.min.json` via `fetch`, que exige HTTP.

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
- **Preços** — badge no canto da carta coletada, pill no preview e preço em cada variante
  do seletor; fonte TCGplayer (US$)/Cardmarket (€) via TCGdex, convertidos para R$ com o
  câmbio do dia (AwesomeAPI, cache de 12h no navegador); sem câmbio, exibe a moeda original.
  Clicar em qualquer preço abre a página da carta na loja (TCGplayer/Cardmarket) em nova aba
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
  trocam a pré-visualização para a arte daquele idioma (TCGdex PT-BR/JP, sondada sob
  demanda e cacheada; sem versão localizada, usa a arte EN local). A arte JP busca
  todos os prints do Pokémon pela Pokédex Nacional (sets japoneses têm ids próprios,
  incompatíveis com os ids em inglês) e confere ilustrador + HP contra a carta local
  pra achar o print exato — funciona pra qualquer uma das 202 cartas do checklist
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
| `build_card_database.py` | Gera a base do app (`assets/data/` — catálogo, detalhes e `prices.min.json`) a partir do catálogo local + TCGdex |
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
