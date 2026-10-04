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

E abra `http://localhost:8765/` (o `index.html` da raiz redireciona para `src/`,
mantendo o `#` dos links de compartilhamento). Publicado em
https://joaogazire.github.io/gen3-track-tcg/.

> Abrir o `index.html` diretamente via `file://` não funciona: o app busca a base de
> dados `assets/data/catalog.min.json` via `fetch`, que exige HTTP.

## Publicar no Render

O site também pode ir para o Render como **Static Site** (grátis, sem hibernar, com
CDN), descrito em `render.yaml`. O build (`scripts/build_static.sh`) monta em
`public/` só o que o site carrega — `index.html`, `src/` e `assets/{art,thumbs,data,site}`
(~610 MB); `assets/cards` (PNGs), `scripts/` e `docs/` ficam de fora, como no Pages.

Uma vez: no Render, **New → Blueprint**, conecte o repositório e confirme. Depois disso
cada push no `main` publica sozinho — inclusive os preços que o
`scripts/serve.py --publish` empurra do PC (a coleta da Liga continua local: o
Cloudflare da Liga e o plano grátis do Render, que hiberna e tem 512 MB, não
aguentam as horas de Chrome headless).

## Atualizar os preços da Liga

**Pelo botão de sincronizar** (↻ no header): rode o site com o servidor do projeto em
vez do `http.server`:

```bash
python3 -m venv .venv && .venv/bin/pip install -r requirements.txt   # uma vez (usa o Google Chrome instalado)
.venv/bin/python scripts/serve.py                            # http://localhost:8765/src/
```

**Todo dia, sozinho:** a primeira vez que o site abre no dia (em localhost), o servidor
roda a atualização diária (`fetch_liga_prices.py --daily`): refaz as 202 buscas (~15 min)
e só abre de novo as páginas das cartas cujo mín./méd./máx. mudou na busca desde a
última coleta, mais as cartas da sua coleção (todo dia); o resto do catálogo se renova
a cada 7 dias. Num teste, ~17% das páginas do Ralts mudaram em 8 h — algo como 1 h por dia.

Em localhost, o botão faz a verificação do catálogo e em seguida busca **todas as
cartas de novo** na Liga (`scripts/serve.py` roda `fetch_liga_prices.py` na máquina),
com o progresso na notificação e um botão **Parar**. Pode fechar o aviso ou recarregar a
página: a coleta continua; interrompida, o próximo clique retoma de onde parou. No fim,
os preços novos aparecem na tela. No GitHub Pages o botão só verifica o catálogo.

**Publicar os preços sozinho (opcional):** com `.venv/bin/python scripts/serve.py --publish`,
cada coleta que termina bem faz commit só do `assets/data/liga-prices.min.json` e push para
o branch atual — o resto do que estiver alterado fica como está. O site do Pages só muda
se o servidor estiver rodando no `main`. Sem mudança nos preços, com merge/rebase em
andamento ou num branch sem upstream, não publica (o motivo aparece no terminal).

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
  - o **idioma da carta** (🇧🇷 PT, 🇯🇵 JP, 🇺🇸 EN), escolhido na bandeira do modal e salvo com
    ela — em japonês, os anúncios
    vêm da carta japonesa correspondente na Liga (ex.: Ralts SV1 211/198 ↔ SV1S 083/078,
    ligadas pela arte JP de `art.min.json`);
  - a **qualidade** escolhida no modal (M / NM / SP / MP / HP / D, padrão NM), valendo
    essa qualidade ou melhor. A qualidade vale para o site todo (grade e soma também)
    e fica salva no navegador.

  Sem anúncio nesse idioma/qualidade, mostra o menor de qualquer idioma/estado; sem a
  variante pedida, o de outra. Todo preço substituto aparece com **≈** na frente, e o
  tooltip diz o que foi usado. A impressão é casada pelo número **e** total da coleção; números com
  prefixo (`XY66`, `SWSH029`, `TG20`) casam pelo número quando ele é único. Tooltip com
  o detalhe e a data da coleta; clique abre a carta na Liga.
  - **Extensão (opcional):** com a Hoenn Hunter instalada, ela busca na Liga ao vivo
    e o valor fresco substitui o do arquivo (tooltip "ao vivo")
  - **Fallback:** impressão sem preço na Liga usa o TCGplayer (US$)/Cardmarket (€) via
    TCGdex, convertido para R$ com o câmbio do dia (AwesomeAPI, cache de 12h); o tooltip
    diz a fonte
- **Acabamento no modal** — botões **N / F / R / H** (Normal, Foil, Reverse, Holo), cada um
  com o preço daquele acabamento; os que a impressão não tem ficam apagados. A lista vem
  das variantes da TCGdex (`vr` no catálogo) somadas às variantes com preço na Liga e no
  TCGplayer (a TCGdex às vezes omite o reverse). A lista de variantes mostra os mesmos
  selos (N / H / R) em cada impressão. Atalhos com o modal aberto: **N/F/R/H** escolhem
  o acabamento, **Enter** salva, **← →** trocam de variante
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
- **Idioma de cada carta** — bandeirinhas Brasil / Japão / EUA no topo do modal
  trocam a pré-visualização para a mesma carta naquele idioma, e o idioma escolhido é
  salvo com a carta: a grade mostra a arte dele (versão pequena do CDN) e o preço usa
  os anúncios dele. Carta salva antes disso fica EN; carta nova começa na última
  bandeira usada. A correspondência vem
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
  codificada no hash (`#s=`, sem servidor); quem abre vê as cartas marcadas
  com variante, acabamento, idioma e placeholder, em modo somente-leitura. O hash é
  binário em base64url (~200 caracteres para 100 cartas, contra ~740 do formato
  anterior em texto + LZString): 1 bit por Pokémon da roster e, por carta marcada, a
  posição da impressão na lista daquele Pokémon ordenada por lançamento da coleção
  (código de Rice), com acabamento e idioma só quando fogem do padrão. Coleção nova
  entra no fim da lista, então o link continua valendo depois de reconstruir o
  catálogo; se a ordem mudar, um checksum detecta e as variantes caem (as cartas
  marcadas ficam). Links antigos (`#c=`) continuam sendo lidos
- **Placeholder** — interruptor no canto inferior esquerdo do modal (atalho **P**):
  a carta entra na coleção só segurando o lugar até chegar a que você quer de
  verdade. Na grade ganha o selo de esmeralda no canto superior esquerdo; conta no
  progresso e na soma. No `localStorage` ela vai com `collected: false` +
  `placeholder: true`, então a extensão Hoenn Hunter (que só conta
  `collected === true`) a trata como **faltante** e segue buscando nas lojas — sem
  mudar nada na extensão
- **Verificação de sincronização** contra a API [TCGdex](https://tcgdex.dev/) com barra de
  progresso e registro de data/hora da última atualização
- Easter egg no Rayquaza do header 👀
- Estado salvo em `localStorage` (funciona offline depois do primeiro load)

## Ferramentas (`scripts/`)

| Script | Função |
| --- | --- |
| `sync_missing_cards.py` | Lista (ou baixa com `--download`) cartas da TCGdex que faltam nas pastas, sem Pocket; artes ausentes na TCGdex caem nos CDNs da pokemontcg.io e da Limitless TCG |
| `build_local_card_index.py` | Reconstrói `assets/cards/index.json` a partir dos arquivos |
| `build_card_database.py` | Gera a base do app (`assets/data/` — catálogo, detalhes e `prices.min.json`) a partir do catálogo local + TCGdex |
| `build_language_art.py` | Roda depois do `build_card_database.py`: gera `art.min.json` (arte PT/JA de cada carta) e anexa ao catálogo as exclusivas JP |
| `build_thumbs.py` | Gera os WebP que o site publica a partir dos PNGs de `assets/cards/`: miniaturas de 360 px em `assets/thumbs/` (grade e lista de variantes) e a arte em tamanho cheio em `assets/art/` (preview do modal). Só refaz o que mudou e remove órfãs (precisa de `pillow`) |
| `backfill_set_totals.py` | Preenche o total impresso de cada coleção (`sets[id].total`, o "106" de "57/106") no catálogo já gerado, sem refazer o build — usado pela extensão Hoenn Hunter pra casar a impressão da loja com a do Tracker |
| `backfill_variants.py` | Grava no catálogo já gerado os acabamentos de cada impressão (`vr`, ex. `"nr"`) a partir das variantes da TCGdex no cache, sem refazer o build nem fazer requisições — o build novo já grava `vr` |
| `check_card_sync.py` | Valida o catálogo local contra a API (reporta divergências) |
| `fetch_liga_prices.py` | Coleta os preços da Liga Pokemon (menor anúncio por variante, idioma e qualidade) e grava `assets/data/liga-prices.min.json`; `--daily` refaz só o que mudou (ver "Atualizar os preços da Liga") |
| `serve.py` | Servidor local do site (`http://localhost:8765/`) com a API que roda a coleta da Liga pelo botão de sincronizar e a atualização diária |
| `limitless.py` | Módulo de leitura da Limitless TCG (sets EN/JP, cartas, prints internacionais), com cache em `scripts/.limitless_cache.json` |
| `download_full_pokemon_cards.py` | Baixa todas as cartas de cada Pokémon do roster |
| `download_gen3_tcgdex.py` | Baixa as cartas da série EX (Geração 3) da TCGdex |
| `rebuild_full_card_set.py` | Reconcilia pastas locais com a API e baixa faltantes |

Ordem para atualizar tudo: `sync_missing_cards.py --download` → `build_local_card_index.py`
→ `build_card_database.py` → `build_language_art.py` → `build_thumbs.py`.

Scripts antigos, fora do fluxo, ficam em `scripts/legacy/` (não rode).

**O que o Pages publica:** o `_config.yml` tira do site `assets/cards/` (os PNGs,
~1,7 GB, que só servem de fonte para os scripts), `scripts/` e `docs/`. O site exibe
os WebP de `assets/thumbs/` e `assets/art/` (~580 MB juntos); com os PNGs, o site
publicado passava de 1,9 GB, acima do limite de 1 GB do Pages. Depois de baixar
cartas novas, rode o `build_thumbs.py` antes de commitar.

Dependências (só para os scripts): `pip install -r requirements.txt`

## Fonte das imagens

As imagens das cartas vêm da [TCGdex](https://tcgdex.dev/) (API comunitária) e são
propriedade da Nintendo/Creatures Inc./GAME FREAK inc. Projeto de uso pessoal, sem fins
comerciais.

---

Feito por [joaogazire](https://github.com/joaogazire) 🐉
