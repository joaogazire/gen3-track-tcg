const hoennPokemon = [
  { id: 252, number: 1, name: "Treecko" },
  { id: 253, number: 2, name: "Grovyle" },
  { id: 254, number: 3, name: "Sceptile" },
  { id: 255, number: 4, name: "Torchic" },
  { id: 256, number: 5, name: "Combusken" },
  { id: 257, number: 6, name: "Blaziken" },
  { id: 258, number: 7, name: "Mudkip" },
  { id: 259, number: 8, name: "Marshtomp" },
  { id: 260, number: 9, name: "Swampert" },
  { id: 261, number: 10, name: "Poochyena" },
  { id: 262, number: 11, name: "Mightyena" },
  { id: 263, number: 12, name: "Zigzagoon" },
  { id: 264, number: 13, name: "Linoone" },
  { id: 265, number: 14, name: "Wurmple" },
  { id: 266, number: 15, name: "Silcoon" },
  { id: 267, number: 16, name: "Beautifly" },
  { id: 268, number: 17, name: "Cascoon" },
  { id: 269, number: 18, name: "Dustox" },
  { id: 270, number: 19, name: "Lotad" },
  { id: 271, number: 20, name: "Lombre" },
  { id: 272, number: 21, name: "Ludicolo" },
  { id: 273, number: 22, name: "Seedot" },
  { id: 274, number: 23, name: "Nuzleaf" },
  { id: 275, number: 24, name: "Shiftry" },
  { id: 276, number: 25, name: "Taillow" },
  { id: 277, number: 26, name: "Swellow" },
  { id: 278, number: 27, name: "Wingull" },
  { id: 279, number: 28, name: "Pelipper" },
  { id: 280, number: 29, name: "Ralts" },
  { id: 281, number: 30, name: "Kirlia" },
  { id: 282, number: 31, name: "Gardevoir" },
  { id: 283, number: 32, name: "Surskit" },
  { id: 284, number: 33, name: "Masquerain" },
  { id: 285, number: 34, name: "Shroomish" },
  { id: 286, number: 35, name: "Breloom" },
  { id: 287, number: 36, name: "Slakoth" },
  { id: 288, number: 37, name: "Vigoroth" },
  { id: 289, number: 38, name: "Slaking" },
  { id: 63, number: 39, name: "Abra" },
  { id: 64, number: 40, name: "Kadabra" },
  { id: 65, number: 41, name: "Alakazam" },
  { id: 290, number: 42, name: "Nincada" },
  { id: 291, number: 43, name: "Ninjask" },
  { id: 292, number: 44, name: "Shedinja" },
  { id: 293, number: 45, name: "Whismur" },
  { id: 294, number: 46, name: "Loudred" },
  { id: 295, number: 47, name: "Exploud" },
  { id: 296, number: 48, name: "Makuhita" },
  { id: 297, number: 49, name: "Hariyama" },
  { id: 118, number: 50, name: "Goldeen" },
  { id: 119, number: 51, name: "Seaking" },
  { id: 129, number: 52, name: "Magikarp" },
  { id: 130, number: 53, name: "Gyarados" },
  { id: 298, number: 54, name: "Azurill" },
  { id: 183, number: 55, name: "Marill" },
  { id: 184, number: 56, name: "Azumarill" },
  { id: 74, number: 57, name: "Geodude" },
  { id: 75, number: 58, name: "Graveler" },
  { id: 76, number: 59, name: "Golem" },
  { id: 299, number: 60, name: "Nosepass" },
  { id: 300, number: 61, name: "Skitty" },
  { id: 301, number: 62, name: "Delcatty" },
  { id: 41, number: 63, name: "Zubat" },
  { id: 42, number: 64, name: "Golbat" },
  { id: 169, number: 65, name: "Crobat" },
  { id: 72, number: 66, name: "Tentacool" },
  { id: 73, number: 67, name: "Tentacruel" },
  { id: 302, number: 68, name: "Sableye" },
  { id: 303, number: 69, name: "Mawile" },
  { id: 304, number: 70, name: "Aron" },
  { id: 305, number: 71, name: "Lairon" },
  { id: 306, number: 72, name: "Aggron" },
  { id: 66, number: 73, name: "Machop" },
  { id: 67, number: 74, name: "Machoke" },
  { id: 68, number: 75, name: "Machamp" },
  { id: 307, number: 76, name: "Meditite" },
  { id: 308, number: 77, name: "Medicham" },
  { id: 309, number: 78, name: "Electrike" },
  { id: 310, number: 79, name: "Manectric" },
  { id: 311, number: 80, name: "Plusle" },
  { id: 312, number: 81, name: "Minun" },
  { id: 81, number: 82, name: "Magnemite" },
  { id: 82, number: 83, name: "Magneton" },
  { id: 100, number: 84, name: "Voltorb" },
  { id: 101, number: 85, name: "Electrode" },
  { id: 313, number: 86, name: "Volbeat" },
  { id: 314, number: 87, name: "Illumise" },
  { id: 43, number: 88, name: "Oddish" },
  { id: 44, number: 89, name: "Gloom" },
  { id: 45, number: 90, name: "Vileplume" },
  { id: 182, number: 91, name: "Bellossom" },
  { id: 84, number: 92, name: "Doduo" },
  { id: 85, number: 93, name: "Dodrio" },
  { id: 315, number: 94, name: "Roselia" },
  { id: 316, number: 95, name: "Gulpin" },
  { id: 317, number: 96, name: "Swalot" },
  { id: 318, number: 97, name: "Carvanha" },
  { id: 319, number: 98, name: "Sharpedo" },
  { id: 320, number: 99, name: "Wailmer" },
  { id: 321, number: 100, name: "Wailord" },
  { id: 322, number: 101, name: "Numel" },
  { id: 323, number: 102, name: "Camerupt" },
  { id: 218, number: 103, name: "Slugma" },
  { id: 219, number: 104, name: "Magcargo" },
  { id: 324, number: 105, name: "Torkoal" },
  { id: 88, number: 106, name: "Grimer" },
  { id: 89, number: 107, name: "Muk" },
  { id: 109, number: 108, name: "Koffing" },
  { id: 110, number: 109, name: "Weezing" },
  { id: 325, number: 110, name: "Spoink" },
  { id: 326, number: 111, name: "Grumpig" },
  { id: 27, number: 112, name: "Sandshrew" },
  { id: 28, number: 113, name: "Sandslash" },
  { id: 327, number: 114, name: "Spinda" },
  { id: 227, number: 115, name: "Skarmory" },
  { id: 328, number: 116, name: "Trapinch" },
  { id: 329, number: 117, name: "Vibrava" },
  { id: 330, number: 118, name: "Flygon" },
  { id: 331, number: 119, name: "Cacnea" },
  { id: 332, number: 120, name: "Cacturne" },
  { id: 333, number: 121, name: "Swablu" },
  { id: 334, number: 122, name: "Altaria" },
  { id: 335, number: 123, name: "Zangoose" },
  { id: 336, number: 124, name: "Seviper" },
  { id: 337, number: 125, name: "Lunatone" },
  { id: 338, number: 126, name: "Solrock" },
  { id: 339, number: 127, name: "Barboach" },
  { id: 340, number: 128, name: "Whiscash" },
  { id: 341, number: 129, name: "Corphish" },
  { id: 342, number: 130, name: "Crawdaunt" },
  { id: 343, number: 131, name: "Baltoy" },
  { id: 344, number: 132, name: "Claydol" },
  { id: 345, number: 133, name: "Lileep" },
  { id: 346, number: 134, name: "Cradily" },
  { id: 347, number: 135, name: "Anorith" },
  { id: 348, number: 136, name: "Armaldo" },
  { id: 174, number: 137, name: "Igglybuff" },
  { id: 39, number: 138, name: "Jigglypuff" },
  { id: 40, number: 139, name: "Wigglytuff" },
  { id: 349, number: 140, name: "Feebas" },
  { id: 350, number: 141, name: "Milotic" },
  { id: 351, number: 142, name: "Castform" },
  { id: 120, number: 143, name: "Staryu" },
  { id: 121, number: 144, name: "Starmie" },
  { id: 352, number: 145, name: "Kecleon" },
  { id: 353, number: 146, name: "Shuppet" },
  { id: 354, number: 147, name: "Banette" },
  { id: 355, number: 148, name: "Duskull" },
  { id: 356, number: 149, name: "Dusclops" },
  { id: 357, number: 150, name: "Tropius" },
  { id: 358, number: 151, name: "Chimecho" },
  { id: 359, number: 152, name: "Absol" },
  { id: 37, number: 153, name: "Vulpix" },
  { id: 38, number: 154, name: "Ninetales" },
  { id: 172, number: 155, name: "Pichu" },
  { id: 25, number: 156, name: "Pikachu" },
  { id: 26, number: 157, name: "Raichu" },
  { id: 54, number: 158, name: "Psyduck" },
  { id: 55, number: 159, name: "Golduck" },
  { id: 360, number: 160, name: "Wynaut" },
  { id: 202, number: 161, name: "Wobbuffet" },
  { id: 177, number: 162, name: "Natu" },
  { id: 178, number: 163, name: "Xatu" },
  { id: 203, number: 164, name: "Girafarig" },
  { id: 231, number: 165, name: "Phanpy" },
  { id: 232, number: 166, name: "Donphan" },
  { id: 127, number: 167, name: "Pinsir" },
  { id: 214, number: 168, name: "Heracross" },
  { id: 111, number: 169, name: "Rhyhorn" },
  { id: 112, number: 170, name: "Rhydon" },
  { id: 361, number: 171, name: "Snorunt" },
  { id: 362, number: 172, name: "Glalie" },
  { id: 363, number: 173, name: "Spheal" },
  { id: 364, number: 174, name: "Sealeo" },
  { id: 365, number: 175, name: "Walrein" },
  { id: 366, number: 176, name: "Clamperl" },
  { id: 367, number: 177, name: "Huntail" },
  { id: 368, number: 178, name: "Gorebyss" },
  { id: 369, number: 179, name: "Relicanth" },
  { id: 222, number: 180, name: "Corsola" },
  { id: 170, number: 181, name: "Chinchou" },
  { id: 171, number: 182, name: "Lanturn" },
  { id: 370, number: 183, name: "Luvdisc" },
  { id: 116, number: 184, name: "Horsea" },
  { id: 117, number: 185, name: "Seadra" },
  { id: 230, number: 186, name: "Kingdra" },
  { id: 371, number: 187, name: "Bagon" },
  { id: 372, number: 188, name: "Shelgon" },
  { id: 373, number: 189, name: "Salamence" },
  { id: 374, number: 190, name: "Beldum" },
  { id: 375, number: 191, name: "Metang" },
  { id: 376, number: 192, name: "Metagross" },
  { id: 377, number: 193, name: "Regirock" },
  { id: 378, number: 194, name: "Regice" },
  { id: 379, number: 195, name: "Registeel" },
  { id: 380, number: 196, name: "Latias" },
  { id: 381, number: 197, name: "Latios" },
  { id: 382, number: 198, name: "Kyogre" },
  { id: 383, number: 199, name: "Groudon" },
  { id: 384, number: 200, name: "Rayquaza" },
  { id: 385, number: 201, name: "Jirachi" },
  { id: 386, number: 202, name: "Deoxys" }
];

const TOTAL_CARDS = hoennPokemon.length;
const STORAGE_KEY = "pokemon_emerald_tcg_tracker_v1";
const LAST_SYNC_KEY = "pokemon_emerald_tcg_last_sync_v1";
const LANG_KEY = "pokemon_emerald_tcg_lang_v1";
// Idioma da ARTE da carta no preview do modal ("en" | "pt" | "ja") e o olho do
// total do painel (true = valor escondido). Ambos persistem no localStorage.
const CARD_LANG_KEY = "pokemon_emerald_tcg_cardlang_v1";
const TOTAL_HIDDEN_KEY = "pokemon_emerald_tcg_total_hidden_v1";

// ---- i18n -------------------------------------------------------------------
// Toda a UI segue o idioma escolhido nas bandeiras (padrão EN, como os rótulos
// históricos do header). O catálogo (nomes de Pokémon/sets) vem da TCGdex em EN
// e não é traduzido. Strings dinâmicas usam t(); o estático do HTML usa os
// atributos data-i18n* resolvidos em applyI18n().
const I18N = {
  en: {
    seeAll: "All",
    mega: "Mega Evolution",
    special: "Special Art",
    planAria: "Plan mode",
    langSwitch: "Português (Brasil)",
    checklist: "Checklist",
    searchPlaceholder: "Search Pokémon...",
    searchAria: "Search Pokémon by name",
    searchToggleAria: "Open search",
    progressLabel: "Collection progress",
    progressHint: "Click to switch between percentage and card count",
    progressCount: "{n} / {total} cards",
    progressTooltip: "{n}/{total} complete · {missing} to go",
    planTitle: "Plan without saving: marks last only this session and vanish on exit",
    shareAria: "Share collection",
    shareTitle: "Generate a link to show your collection",
    shareTitleH: "Share collection",
    shareHint: "The link loads the site with <strong>exactly the cards you marked</strong> — whoever opens it sees your collection, but nothing changes here. Your marks stay saved only in this browser.",
    sharePlaceholder: "Mark at least one card to generate a link.",
    shareWarn: "Very long link — some chat apps may cut it. If it doesn't open, try pasting it directly in the browser.",
    shareClose: "Close",
    shareCopy: "Copy link",
    shareCopied: "Copied!",
    shareLinkAria: "Collection link to copy",
    sharePlanNote: "You are in Plan mode: this link shares the session DRAFT — your saved collection is not included.",
    syncAria: "Check card synchronization",
    syncHeader: "Card synchronization",
    syncCloseAria: "Close notification",
    syncStart: "Starting check...",
    syncConnect: "Connecting to the database...",
    syncDetails: "Details",
    syncLoaded: "Local catalog loaded",
    syncBase: "{n} cards in the base",
    syncChecking: "Checking {name}...",
    syncProcessing: "Processing {i} / {n}",
    syncApiDown: "API unavailable",
    syncDone: "Sync complete",
    syncOk: "Everything aligned with the database.",
    syncDiffs: "Differences: {extras} extras · {novas} new.",
    syncFail: "Sync failed",
    syncFailMsg: "Could not check the database right now.",
    syncTitleFull: "Check synchronization with the database",
    never: "never",
    reportTitle: "Sync report",
    reportGenerated: "Generated at {when} — comparison between the local catalog and the EX series on TCGdex.",
    reportPokemon: "Pokémon",
    reportSet: "Set",
    reportNumber: "Number",
    reportStatus: "Status",
    reportEmpty: "No divergence recorded.",
    statusNovo: "New on database",
    statusExtra: "Local extra",
    addCard: "Add card",
    editCard: "Edit card",
    selectCard: "Select the available card",
    variantListAria: "Available cards list",
    previewAria: "Card preview",
    prevCard: "Previous card",
    nextCard: "Next card",
    noImage: "No image available",
    collectionFallback: "Collection",
    versionFallback: "Version",
    rarityField: "Card rarity",
    save: "Save",
    update: "Update",
    cancel: "Cancel",
    unmark: "Unmark",
    officialCard: "Official card",
    sharedUnreadable: "This link could not be read (older site version?) — showing your collection.",
    understood: "Got it",
    sharedViewing: "You are viewing a collection shared by a link — editing is blocked.",
    sharedMine: "View my collection",
    priceLinkSuffix: " · click to open the store",
    totalLabel: "Sum of selected cards",
    totalShown: "Hide the total value",
    totalHidden: "Show the total value",
    cardLangAria: "Card language",
    cardLangPt: "Brasil (PT)",
    cardLangJa: "Japão (JA)",
    cardLangEn: "EUA (EN)",
    backToTop: "Back to top",
    pageActions: "Page actions",
    resetAll: "Reset all cards",
    resetConfirmTitle: "Reset collection?",
    resetConfirmMsg: "This unmarks ALL cards and clears your saved variants. This action cannot be undone.",
    resetYes: "Yes, reset",
    resetNo: "No"
  },
  pt: {
    seeAll: "Todas",
    mega: "Mega Evolution",
    special: "Special Art",
    planAria: "Modo planejamento",
    langSwitch: "English (US)",
    checklist: "Checklist",
    searchPlaceholder: "Buscar Pokémon...",
    searchAria: "Buscar Pokémon por nome",
    searchToggleAria: "Abrir busca",
    progressLabel: "Progresso da coleção",
    progressHint: "Clique para alternar entre porcentagem e contagem de cartas",
    progressCount: "{n} / {total} cartas",
    progressTooltip: "{n}/{total} completas · {missing} faltando",
    planTitle: "Planeje sem salvar: marcações valem só nesta sessão e somem ao sair",
    shareAria: "Compartilhar coleção",
    shareTitle: "Gerar um link para mostrar sua coleção",
    shareTitleH: "Compartilhar coleção",
    shareHint: "O link carrega o site com <strong>exatamente as cartas que você marcou</strong> — quem abrir vê sua coleção, mas nada muda por aqui. Suas marcações continuam salvas só neste navegador.",
    sharePlaceholder: "Marque pelo menos uma carta para gerar um link.",
    shareWarn: "Link bem longo — alguns apps de chat podem cortá-lo. Se não abrir, tente colar no navegador direto.",
    shareClose: "Fechar",
    shareCopy: "Copiar link",
    shareCopied: "Copiado!",
    shareLinkAria: "Link da coleção para copiar",
    sharePlanNote: "Você está no modo planejamento: o link vai compartilhar o RASCUNHO desta sessão — sua coleção salva não muda.",
    syncAria: "Verificar sincronização das cartas",
    syncHeader: "Sincronização de cartas",
    syncCloseAria: "Fechar notificação",
    syncStart: "Iniciando verificação...",
    syncConnect: "Conectando com a database...",
    syncDetails: "Detalhes",
    syncLoaded: "Catálogo local carregado",
    syncBase: "{n} cartas na base",
    syncChecking: "Verificando {name}...",
    syncProcessing: "Processando {i} / {n}",
    syncApiDown: "API indisponível",
    syncDone: "Sincronização concluída",
    syncOk: "Tudo alinhado com a database.",
    syncDiffs: "Divergências: {extras} extras · {novas} novas.",
    syncFail: "Falha na sincronização",
    syncFailMsg: "Não foi possível verificar a database no momento.",
    syncTitleFull: "Verificar sincronização com o banco de dados",
    never: "nunca",
    reportTitle: "Relatório de sincronização",
    reportGenerated: "Gerado em {when} — comparação entre o catálogo local e a série EX da TCGdex.",
    reportPokemon: "Pokémon",
    reportSet: "Set",
    reportNumber: "Número",
    reportStatus: "Status",
    reportEmpty: "Nenhuma divergência registrada.",
    statusNovo: "Novo na database",
    statusExtra: "Extra local",
    addCard: "Adicionar carta",
    editCard: "Editar carta",
    selectCard: "Selecione a carta disponível",
    variantListAria: "Lista de cartas disponíveis",
    previewAria: "Pré-visualização da carta",
    prevCard: "Carta anterior",
    nextCard: "Próxima carta",
    noImage: "Sem imagem disponível",
    collectionFallback: "Coleção",
    versionFallback: "Versão",
    rarityField: "Raridade da carta",
    save: "Salvar",
    update: "Atualizar",
    cancel: "Cancelar",
    unmark: "Desmarcar",
    officialCard: "Carta oficial",
    sharedUnreadable: "Este link não pôde ser lido (versão antiga do site?) — mostrando a sua coleção.",
    understood: "Entendi",
    sharedViewing: "Você está vendo a coleção compartilhada por um link — edição bloqueada.",
    sharedMine: "Ver minha coleção",
    priceLinkSuffix: " · clique para abrir na loja",
    totalLabel: "Soma das cartas selecionadas",
    totalShown: "Ocultar o valor total",
    totalHidden: "Mostrar o valor total",
    cardLangAria: "Idioma da carta",
    cardLangPt: "Brasil (PT)",
    cardLangJa: "Japão (JA)",
    cardLangEn: "EUA (EN)",
    backToTop: "Voltar ao topo",
    pageActions: "Ações da página",
    resetAll: "Resetar todas as cartas",
    resetConfirmTitle: "Resetar coleção?",
    resetConfirmMsg: "Isso desmarca TODAS as cartas e apaga suas variantes salvas. Essa ação não pode ser desfeita.",
    resetYes: "Sim, resetar",
    resetNo: "Não"
  }
};

const FILTER_LABEL_KEYS = { all: "seeAll", mega: "mega", special: "special" };
let locale = "en";

function t(key, params = null) {
  let text = (I18N[locale] && I18N[locale][key]) ?? I18N.en[key] ?? key;
  if (params) {
    Object.entries(params).forEach(([name, value]) => {
      text = text.replaceAll(`{${name}}`, String(value));
    });
  }
  return text;
}

// Traduz os elementos estáticos marcados com data-i18n* no HTML.
function applyI18n() {
  document.documentElement.lang = locale === "pt" ? "pt-BR" : "en";
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-title]").forEach((el) => {
    el.title = t(el.dataset.i18nTitle);
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    el.setAttribute("aria-label", t(el.dataset.i18nAria));
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });
  // Bandeira única: mostra a bandeira do idioma atual; o clique alterna para o
  // outro (BR vira EUA e o site vai para inglês, EUA vira Brasil e PT-BR).
  // Tooltip/aria dizem para onde o clique leva.
  if (langToggleBtn) {
    langToggleBtn.dataset.locale = locale;
    langToggleBtn.title = t("langSwitch");
    langToggleBtn.setAttribute("aria-label", t("langSwitch"));
  }
  loadLastSync();
  updateProgressBar();
  paintFilterTrigger();
  paintCardLangPicker();
  paintTotalEye();
  renderCards();
  if (currentCardId !== null) {
    modalTitle.textContent = removeBtn && !removeBtn.classList.contains("hidden") ? t("editCard") : t("addCard");
    paintConfirmBtn(removeBtn && !removeBtn.classList.contains("hidden"));
    renderVariantList(selectedAsset);
  }
}

function setLocale(next) {
  if (next === locale) return;
  locale = next === "pt" ? "pt" : "en";
  try {
    localStorage.setItem(LANG_KEY, locale);
  } catch (error) {
    /* storage indisponível — idioma só desta página */
  }
  applyI18n();
}

const cardGrid = document.getElementById("cardGrid");
const progressText = document.getElementById("progressText");
const progressPercent = document.getElementById("progressPercent");
const progressPercentCenter = document.getElementById("progressPercentCenter");
const progressFill = document.getElementById("progressFill");
const syncCheckBtn = document.getElementById("syncCheckBtn");
const syncNotification = document.getElementById("syncNotification");
const syncProgressLabel = document.getElementById("syncProgressLabel");
const syncProgressPercent = document.getElementById("syncProgressPercent");
const syncProgressFill = document.getElementById("syncProgressFill");
const syncStatusText = document.getElementById("syncStatusText");
const syncCloseBtn = document.getElementById("syncCloseBtn");
const syncLastUpdatedStatus = document.getElementById("syncLastUpdatedStatus");
const syncDetailsLink = document.getElementById("syncDetailsLink");
const modal = document.getElementById("cardModal");
const modalTitle = document.getElementById("modalTitle");
const modalSummary = document.getElementById("modalSummary");
const variantList = document.getElementById("variantList");
const confirmBtn = document.getElementById("confirmBtn");
const cancelBtn = document.getElementById("cancelBtn");
const removeBtn = document.getElementById("removeBtn");
const shareBtn = document.getElementById("shareBtn");
const shareModal = document.getElementById("shareModal");
const shareLinkOutput = document.getElementById("shareLinkOutput");
const shareWarn = document.getElementById("shareWarn");
const shareCopyBtn = document.getElementById("shareCopyBtn");
const shareCloseBtn = document.getElementById("shareCloseBtn");
const planToggle = document.getElementById("planToggle");
const progressBar = document.getElementById("progressBar");
const filterMenu = document.getElementById("filterMenu");
const filterTrigger = document.getElementById("filterTrigger");
const langToggleBtn = document.getElementById("langToggle");
const searchToggleBtn = document.getElementById("searchToggle");
const sharePlanNote = document.getElementById("sharePlanNote");
const shareHintEl = document.getElementById("shareHint");
const collectionTotalEl = document.getElementById("collectionTotal");
const totalEyeBtn = document.getElementById("totalEye");
const eyeSlash = document.getElementById("eyeSlash");
const cardLangPicker = document.getElementById("cardLangPicker");
const backTopBtn = document.getElementById("backTopBtn");
const resetAllBtn = document.getElementById("resetAllBtn");
const resetModal = document.getElementById("resetModal");
const resetConfirmYes = document.getElementById("resetConfirmYes");
const resetConfirmNo = document.getElementById("resetConfirmNo");
const fabActions = document.querySelector(".fab-actions");

let cards = [];
let currentCardId = null;
let selectedAsset = null;
let cardAssets = [];
// Dicionário de sets do catálogo (name EN + name_pt da TCGdex) — usado para
// localizar o nome das coleções quando o idioma PT-BR está ativo.
let setsIndex = null;
let currentVariantOptions = [];
let currentVariantIndex = 0;
let touchStartX = 0;
let touchStartY = 0;

// Promise do catálogo (iniciada no <head> pelo early fetch; o fallback aqui
// cobre execuções em páginas antigas/cacheado).
let catalogReady = window.__catalogPromise || null;

// Índice de variantes por Pokémon (construído uma vez quando o catálogo chega).
const variantsCache = new Map();
let catalogAssetsPrepared = false;

// Filtro ativo da grade ("all" | "mega" | "special"), controlado pelos pills do header.
let activeFilter = "all";

// Busca por nome (input do painel): qualquer digitação já restringe a grade.
let searchQuery = "";

// Alternância do rótulo da barra de progresso: false = "42%", true = "84/202".
// Hover temporariamente mostra o outro modo; clique fixa.
let progressShowCount = false;
let progressHoverCount = false;

// Linhas de divergência da última sincronização (para o relatório "Detalhes").
let syncReportRows = [];

// ---- Modo planejamento ------------------------------------------------------
// Marcações de "rascunho": nada toca o localStorage enquanto ativo, e a barra
// de progresso continua contando só o checklist SALVO (snapshot de quando o
// modo foi ligado / do último save real). Sair do modo descarta o rascunho.
// É estado de sessão de propósito — recarregar a página já volta ao salvo.
let planMode = false;
let planSnapshot = null;         // cópia de `cards` feita ao entrar no modo
let savedCollected = new Map();  // id -> coletada? (estado persistido)

function refreshSavedSnapshot() {
  savedCollected = new Map(cards.map((card) => [card.id, card.collected]));
}

function setPlanMode(enabled) {
  if (sharedMode || enabled === planMode) return;

  if (enabled) {
    planSnapshot = cards.map((card) => ({ ...card }));
    planMode = true;
  } else {
    if (planSnapshot) cards = planSnapshot;
    planSnapshot = null;
    planMode = false;
    if (currentCardId !== null) closeModal();
  }

  document.body.classList.toggle("plan-mode", planMode);
  if (planToggle) {
    planToggle.setAttribute("aria-pressed", String(planMode));
    planToggle.classList.toggle("active", planMode);
  }
  renderCards();
}

// ---- Compartilhamento de coleção via link (hash na URL) --------------------
// O estado viaja na URL comprimido com LZString (vendor) — site 100% estático,
// sem backend. Formato por carta: [índice-na-roster] (só coletada),
// [roster, índice-da-variante-no-catálogo] ou [roster, variante, acabamento]
// quando o acabamento escolhido difere o registrado na variante. Os índices
// são do MESMO catalog.min.json versionado que os dois lados carregam; a
// estampa `g` (generatedAt do build) denuncia links antigos após um rebuild —
// aí as coletadas ainda aparecem (roster é código), mas sem variante.
const SHARE_HASH_PREFIX = "c=";
const SHARE_FINISH_CODES = ["normal", "holo", "reverse", "reverse holo", "full art", "secret", "shiny"];

let sharedMode = false;          // renderizando coleção de um link
let sharedMap = null;            // índice na roster -> { asset, finish }
let sharedPayloadStamp = "";     // estampa de catálogo embutida no link
let sharedIgnored = false;       // #c= presente mas ilegível → avisar
let catalogStamp = "";           // "generatedAt" do catálogo (impressão do build)
let assetIndexByFile = null;     // file -> posição no catálogo (montado no load)

function parseSharedState() {
  const raw = (window.location.hash || "").slice(1);
  if (!raw.startsWith(SHARE_HASH_PREFIX)) return false;

  const compact = raw.slice(SHARE_HASH_PREFIX.length);
  let state = null;
  try {
    // Sem LZString (vendor não carregou), aceita JSON puro como fallback.
    const json = typeof LZString !== "undefined"
      ? LZString.decompressFromEncodedURIComponent(compact)
      : decodeURIComponent(compact);
    state = JSON.parse(json || "");
  } catch (error) {
    state = null;
  }

  if (!state || state.v !== 1 || !Array.isArray(state.c)) {
    sharedIgnored = true;
    return false;
  }

  const map = new Map();
  state.c.forEach((entry) => {
    if (!Array.isArray(entry) || !Number.isInteger(entry[0])) return;
    map.set(entry[0], {
      asset: Number.isInteger(entry[1]) ? entry[1] : -1,
      finish: entry.length >= 3 ? SHARE_FINISH_CODES[entry[2]] || "" : ""
    });
  });

  if (!map.size) {
    sharedIgnored = true;
    return false;
  }

  sharedMap = map;
  sharedPayloadStamp = String(state.g || "");
  return true;
}

function cardAssetFile(card) {
  // Estado antigo do localStorage pode não ter `file` — deriva do artPath,
  // que tem a forma "../assets/cards/<file>".
  if (card.file) return card.file;
  if (!card.artPath) return "";
  const match = String(card.artPath).match(/assets\/cards\/(.+)$/);
  return match ? match[1] : "";
}

function buildShareState() {
  const entries = [];
  cards.forEach((card, rosterIndex) => {
    if (!card.collected) return;

    const entry = [rosterIndex];
    const file = cardAssetFile(card);
    const assetIndex = file && assetIndexByFile ? assetIndexByFile.get(file) : undefined;
    if (assetIndex !== undefined) {
      entry.push(assetIndex);
      const assetFinish = String(cardAssets[assetIndex].finish || "normal").toLowerCase();
      if (card.finish && card.finish !== assetFinish) {
        const code = SHARE_FINISH_CODES.indexOf(card.finish);
        if (code > 0) entry.push(code);
      }
    }
    entries.push(entry);
  });
  return entries.length ? { v: 1, g: catalogStamp, c: entries } : null;
}

function createShareUrl() {
  const state = buildShareState();
  if (!state) return null;

  const json = JSON.stringify(state);
  // compressToEncodedURIComponent usa alfabeto URL-safe; sem a lib, JSON
  // percent-encoded funciona (link maior, mesma semântica).
  const encoded = typeof LZString !== "undefined"
    ? LZString.compressToEncodedURIComponent(json)
    : encodeURIComponent(json);

  const url = new URL(window.location.href);
  url.hash = `${SHARE_HASH_PREFIX}${encoded}`;
  return url.toString();
}

// ---- Preços (prices.min.json + câmbio para R$) ------------------------------
// Fonte: TCGplayer (USD) com fallback Cardmarket (EUR), gerados no build por
// build_card_database.py a partir do cache TCGdex. A conversão para R$ usa a
// AwesomeAPI (CORS liberado, sem chave); o câmbio fica em localStorage com TTL
// de 12h — o app continua 100% estático, sem backend. Sem câmbio disponível,
// o preço aparece na moeda original. Preço é derivado: nunca vai para o
// estado salvo no localStorage das cartas.
const PRICES_URL = "../assets/data/prices.min.json";
const FX_URL = "https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL";
const FX_KEY = "pokemon_emerald_tcg_fx_v1";
const FX_TTL_MS = 12 * 60 * 60 * 1000;
const FX_TIMEOUT_MS = 8000;

let priceIndex = new Map();      // file -> {c, d, p:{n,h,r}}
let fxRates = null;              // {USDBRL, EURBRL} ou null (moeda nativa)

function formatMoney(amount, currency) {
  const code = currency === "USD" || currency === "EUR" ? currency : "BRL";
  try {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: code,
      currencyDisplay: "narrowSymbol",
      maximumFractionDigits: amount < 10 ? 2 : 0
    }).format(amount);
  } catch (error) {
    return `${amount.toFixed(2)} ${code}`;
  }
}

// Preço da variante no acabamento escolhido; cai para o foil mais próximo com
// valor (uma variante "normal" sem preço reverse usa o normal, etc.).
function cardPriceFor(file, finish) {
  const entry = priceIndex.get(file);
  if (!entry || !entry.p) return null;

  const value = String(finish || "").toLowerCase();
  let amount = null;
  if (value === "reverse") amount = entry.p.r ?? entry.p.h ?? entry.p.n;
  else if (value === "holo") amount = entry.p.h ?? entry.p.n;
  else amount = entry.p.n ?? entry.p.h ?? entry.p.r;
  if (amount == null) return null;

  const native = entry.c === "EUR" ? "EUR" : "USD";
  const rate = fxRates ? (native === "EUR" ? fxRates.EURBRL : fxRates.USDBRL) : null;
  const display = rate ? amount * rate : amount;
  const currency = rate ? "BRL" : native;
  const source = entry.c === "EUR" ? "Cardmarket" : "TCGplayer";
  return { amount: display, currency, nativeAmount: amount, nativeCurrency: native, source, updated: entry.d || "", url: entry.u || null };
}

function priceTitle(price) {
  const native = formatMoney(price.nativeAmount, price.nativeCurrency);
  const when = price.updated ? ` · ${price.updated}` : "";
  const link = price.url ? t("priceLinkSuffix") : "";
  return `${price.source}: ${native}${when}${link}`;
}

// Chave de ordenação da lista de variantes: preço na moeda exibida; sem preço
// conhecido vira Infinity (vai para o fim da lista).
function variantSortPrice(asset) {
  const hit = cardPriceFor(asset.file || "", asset.finish);
  return hit ? hit.amount : Number.POSITIVE_INFINITY;
}

async function loadPriceData() {
  try {
    const response = await fetch(PRICES_URL);
    if (!response.ok) return;
    const data = await response.json();
    const prices = data?.prices;
    if (!prices || typeof prices !== "object") return;
    priceIndex = new Map(Object.entries(prices));
    renderCards();
    if (currentCardId !== null) renderVariantList(selectedAsset);
  } catch (error) {
    /* preços são enfeite — sem eles o app segue igual */
  }
}

function readFxCache() {
  try {
    const stored = JSON.parse(localStorage.getItem(FX_KEY) || "");
    if (stored && typeof stored.rates === "object" && Date.now() - stored.ts < FX_TTL_MS) {
      fxRates = { USDBRL: Number(stored.rates.USDBRL), EURBRL: Number(stored.rates.EURBRL) };
    }
  } catch (error) {
    /* sem cache — tenta a rede */
  }
}

async function refreshFx() {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), FX_TIMEOUT_MS);
  try {
    const response = await fetch(FX_URL, { signal: controller.signal });
    if (!response.ok) return;
    const data = await response.json();
    const usd = Number(data?.USDBRL?.bid);
    const eur = Number(data?.EURBRL?.bid);
    if (!Number.isFinite(usd) || !Number.isFinite(eur) || usd <= 0 || eur <= 0) return;
    fxRates = { USDBRL: usd, EURBRL: eur };
    try {
      localStorage.setItem(FX_KEY, JSON.stringify({ rates: fxRates, ts: Date.now() }));
    } catch (error) {
      /* storage indisponível — câmbio só desta página */
    }
    renderCards();
    if (currentCardId !== null) renderVariantList(selectedAsset);
  } catch (error) {
    /* offline/CORS — mantém cache ou moeda nativa */
  } finally {
    clearTimeout(timer);
  }
}

// ---- Idioma da arte da carta no preview (BR / JP / EUA) ---------------------
// Artes PT-JP (TCGdex `ja`) NÃO são deriváveis do id EN: os sets japoneses têm
// ids próprios (SV3 ≠ sv03) e a numeração coincide só às vezes (verificado via
// probes — en sv03-114 é Crabrawler, ja SV3-114 é Tyranitar). Trocar de idioma
// então só vale quando o set EN casa exatamente com um id JP, ou para PT-BR
// (TCGdex tem arte PT por carta). Sempre com probe preguiçoso + cache por
// arquivo e fallback para a arte local EN em qualquer erro.
const TCGDEX_API = "https://api.tcgdex.net/v2";
const CARD_LOCALES = ["en", "pt", "ja"];
let cardLang = "en";
const localizedArtCache = new Map();   // "loc|file" -> url remota válida | "" (sem arte)
const localizedArtPending = new Set(); // probes em voo (não re-hitamos o mesmo)

function setCardLang(next) {
  if (!CARD_LOCALES.includes(next) || next === cardLang) return;
  cardLang = next;
  try {
    localStorage.setItem(CARD_LANG_KEY, next);
  } catch (error) {
    /* storage indisponível — idioma da arte só desta página */
  }
  paintCardLangPicker();
  if (selectedAsset) renderSelectedPreview(selectedAsset);
}

// Estado visual do seletor de bandeirinhas do modal + tooltip/aria por idioma.
function paintCardLangPicker() {
  if (!cardLangPicker) return;
  cardLangPicker.setAttribute("aria-label", t("cardLangAria"));
  const labels = { pt: "cardLangPt", ja: "cardLangJa", en: "cardLangEn" };
  cardLangPicker.querySelectorAll(".card-lang-flag").forEach((button) => {
    const loc = button.dataset.loc;
    const active = loc === cardLang;
    button.setAttribute("aria-pressed", String(active));
    const label = labels[loc] ? t(labels[loc]) : loc;
    button.title = label;
    button.setAttribute("aria-label", label);
  });
}

// Sonda a TCGdex para a arte localizada da variante; resolve a URL (ou "").
// Nunca bloqueia a UI: a imagem local aparece na hora, a remota troca quando
// chega (e um <img onerror> volta para a local se a CDN falhar).
// PT: o id por carta é o mesmo do EN (`sv03-114`). JA: sets japoneses usam ids
// próprios e a numeração NÃO coincide com a EN (ja SV3-114 é outra carta),
// então só aceitamos quando ilustrador e HP batem com a variante local.
function normalizeIllustrator(value) {
  return String(value || "").trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function probeLocalizedArt(loc, asset) {
  const file = asset?.file || "";
  const set = String(asset?.set || "").trim();
  let number = String(asset?.number || "").trim();
  if (!file || !set || !number) return Promise.resolve("");
  // Sub-numeração de arquivo ("5-064") não existe na API; o id real usa o fim.
  if (/^\d+-\d+$/.test(number)) number = number.split("-", 1)[1];
  const cardId = `${set}-${number}`.toLowerCase();
  const url = `${TCGDEX_API}/${loc}/cards/${encodeURIComponent(cardId)}`;

  return fetch(url)
    .then((response) => (response.ok ? response.json() : null))
    .then((data) => {
      const base = typeof data?.image === "string" ? data.image : "";
      if (!base) return "";
      if (loc === "ja") {
        const localIll = normalizeIllustrator(asset.illustrator);
        const remoteIll = normalizeIllustrator(data.illustrator);
        const sameIll = localIll && remoteIll && localIll === remoteIll;
        const sameHp = !asset.hp || !data.hp || Number(asset.hp) === Number(data.hp);
        if (!sameIll || !sameHp) return "";
      }
      return `${base}/high.png`;
    })
    .catch(() => "");
}

function localizedPreviewSrc(asset, onRemote) {
  const localSrc = getAssetPath(asset?.file || "");
  if (cardLang === "en" || isNoImageVariant(asset)) return localSrc;

  const key = `${cardLang}|${asset?.file || ""}`;
  const probeLocale = cardLang;
  const cached = localizedArtCache.get(key);
  if (cached === "") return localSrc;
  if (cached) return cached;

  if (!localizedArtPending.has(key)) {
    localizedArtPending.add(key);
    probeLocalizedArt(probeLocale, asset)
      .then((remote) => {
        localizedArtCache.set(key, remote || "");
        // Preview ainda nesta variante/idioma quando a sonda voltou: troca a arte.
        if (remote && selectedAsset?.file === asset?.file && cardLang === probeLocale) onRemote?.(remote);
      })
      .finally(() => localizedArtPending.delete(key));
  }
  return localSrc;
}

// ---- Soma do painel (total das coletadas / do rascunho em Plan) -------------
// Trocou o header "Checklist": mostra o somatório em R$ (moeda nativa sem
// câmbio) das cartas marcadas — ou só do RASCUNHO, no modo planejamento. O
// olhinho esconde/revela o valor (persistido).
let totalHidden = false;

function updateCollectionTotal() {
  if (!collectionTotalEl) return;

  if (totalHidden) {
    collectionTotalEl.textContent = "••••••";
    collectionTotalEl.title = t("totalHidden");
    return;
  }

  // Em Plan soma só as marcações desta sessão ainda não salvas; fora dele, a
  // coleção (rascunho e salvo coincidem — `cards` é o estado persistido).
  const counted = planMode
    ? cards.filter((card) => card.collected && !savedCollected.get(card.id))
    : cards.filter((card) => card.collected);

  let sum = 0;
  let currency = "BRL";
  let any = false;
  counted.forEach((card) => {
    const price = cardPriceFor(cardAssetFile(card), card.finish);
    if (!price) return;
    // Com câmbio tudo chega em BRL e soma junto; sem câmbio, moedas diferentes
    // não se somam — a carta fica fora do total até ter uma taxa.
    if (!any) currency = price.currency;
    else if (price.currency !== currency) return;
    sum += price.amount;
    any = true;
  });

  collectionTotalEl.textContent = any ? formatMoney(sum, currency) : formatMoney(0, "BRL");
  collectionTotalEl.title = planMode ? `${t("totalLabel")} — ${t("planTitle")}` : t("totalLabel");
}

function paintTotalEye() {
  if (!totalEyeBtn) return;
  totalEyeBtn.setAttribute("aria-pressed", String(totalHidden));
  const label = totalHidden ? t("totalHidden") : t("totalShown");
  totalEyeBtn.title = label;
  totalEyeBtn.setAttribute("aria-label", label);
  if (eyeSlash) eyeSlash.hidden = !totalHidden;
}

function setTotalHidden(hidden) {
  totalHidden = Boolean(hidden);
  try {
    localStorage.setItem(TOTAL_HIDDEN_KEY, totalHidden ? "1" : "0");
  } catch (error) {
    /* storage indisponível — visibilidade só desta página */
  }
  paintTotalEye();
  updateCollectionTotal();
}

// ---- Reset total (botão X do fim da página) ---------------------------------
// Desmarca todas as cartas do roster e apaga variante/acabamento; pede
// confirmação num modal dedicado. No Plan mode o reset limpa o rascunho e o
// snapshot salvo junto (é voltar ao padrão de fábrica).
function openResetModal() {
  if (!resetModal) return;
  resetModal.classList.remove("hidden");
  resetModal.setAttribute("aria-hidden", "false");
}

function closeResetModal() {
  if (!resetModal) return;
  resetModal.classList.add("hidden");
  resetModal.setAttribute("aria-hidden", "true");
}

function resetAllCards() {
  cards.forEach((card) => {
    card.collected = false;
    card.variant = "";
    card.label = "";
    card.finish = "";
    card.collection = "";
    card.file = "";
    card.artPath = "";
  });
  if (planMode && planSnapshot) {
    planSnapshot.forEach((card) => {
      card.collected = false;
      card.variant = "";
      card.label = "";
      card.finish = "";
      card.collection = "";
      card.file = "";
      card.artPath = "";
    });
  }
  saveCards();
  refreshSavedSnapshot();
  if (currentCardId !== null) closeModal();
  closeResetModal();
  renderCards();
}

// Resolve variantes do link após o catálogo chegar (índices → arquivos).
function applySharedAssets() {
  if (!sharedMode || !sharedMap) return;

  // Estampa diferente = catálogo reconstruído desde que o link nasceu; os
  // índices de variante não valem mais, mas as coletadas sim (roster é código).
  if (sharedPayloadStamp && sharedPayloadStamp !== catalogStamp) {
    sharedMap.forEach((state) => {
      state.asset = -1;
      state.finish = "";
    });
    return;
  }

  cards.forEach((card, rosterIndex) => {
    const state = sharedMap.get(rosterIndex);
    if (!card.collected || !state || state.asset < 0) return;

    const asset = cardAssets[state.asset];
    if (!asset) return;

    card.file = asset.file;
    card.variant = asset.collection || asset.set || "";
    card.collection = asset.collection || asset.set || "";
    card.finish = state.finish || asset.finish || "normal";
    card.label = `${card.collection} · ${formatCardFinish(card.finish)} · #${asset.number}`;
    card.artPath = getAssetPath(asset.file);
  });
}

function renderSharedBanner() {
  if (!sharedMode && !sharedIgnored) return;

  const panel = document.querySelector(".page-shell");
  if (!panel) return;

  const banner = document.createElement("div");
  banner.className = "shared-banner";

  if (sharedIgnored) {
    banner.innerHTML = `
      <span>${t("sharedUnreadable")}</span>
      <button type="button" class="shared-banner-clear">${t("understood")}</button>
    `;
    banner.querySelector(".shared-banner-clear").addEventListener("click", clearSharedHash);
  } else {
    banner.innerHTML = `
      <span>${t("sharedViewing")}</span>
      <button type="button" class="shared-banner-clear">${t("sharedMine")}</button>
    `;
    banner.querySelector(".shared-banner-clear").addEventListener("click", clearSharedHash);
  }

  panel.prepend(banner);
}

function clearSharedHash() {
  // replaceState limpa a URL; o reload reconstrói o estado a partir do
  // localStorage do visitante (o hash sai do histórico junto).
  try {
    history.replaceState(null, "", window.location.pathname + window.location.search);
  } catch (error) {
    /* ignore */
  }
  window.location.reload();
}

// ---- Modal "Compartilhar" ----------------------------------------------------

function openShareModal() {
  if (!shareModal) return;

  // Em Plan mode o `cards` é o rascunho da sessão — o link nasce das marcações
  // do planejamento (comportamento pedido); fora do modo, da coleção salva.
  const url = createShareUrl();
  shareModal.classList.remove("hidden");
  shareModal.setAttribute("aria-hidden", "false");
  if (shareHintEl) shareHintEl.innerHTML = t("shareHint");
  if (sharePlanNote) {
    sharePlanNote.textContent = t("sharePlanNote");
    sharePlanNote.hidden = !planMode;
  }

  if (shareLinkOutput) {
    shareLinkOutput.value = url || "";
    shareLinkOutput.placeholder = url ? "" : t("sharePlaceholder");
  }
  if (shareWarn) shareWarn.classList.toggle("hidden", !url || url.length <= 2000);
  if (shareCopyBtn) shareCopyBtn.disabled = !url;
}

function closeShareModal() {
  if (!shareModal) return;
  shareModal.classList.add("hidden");
  shareModal.setAttribute("aria-hidden", "true");
}

async function copyShareLink() {
  if (!shareLinkOutput || !shareLinkOutput.value) return;

  try {
    await navigator.clipboard.writeText(shareLinkOutput.value);
    flashShareCopied();
    return;
  } catch (error) {
    /* clipboard API bloqueada (http sem localhost) — cai no fallback */
  }

  shareLinkOutput.removeAttribute("readonly");
  shareLinkOutput.select();
  shareLinkOutput.setSelectionRange(0, shareLinkOutput.value.length);
  try {
    document.execCommand("copy");
    flashShareCopied();
  } catch (error) {
    /* se até aqui falhar, o texto está selecionado: copiar manualmente */
  }
  shareLinkOutput.setAttribute("readonly", "");
}

function flashShareCopied() {
  if (!shareCopyBtn) return;
  shareCopyBtn.textContent = t("shareCopied");
  clearTimeout(flashShareCopied.timer);
  flashShareCopied.timer = setTimeout(() => {
    shareCopyBtn.textContent = t("shareCopy");
  }, 1800);
}

function setupCardTilt(cardElement) {
  if (!cardElement) return;

  cardElement.addEventListener("pointermove", (event) => {
    const rect = cardElement.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateY = ((x / rect.width) - 0.5) * 34;
    const rotateX = (0.5 - (y / rect.height)) * 28;

    cardElement.style.setProperty("--card-rotate-x", `${rotateX}deg`);
    cardElement.style.setProperty("--card-rotate-y", `${rotateY}deg`);
    // Posição normalizada do ponteiro: o shine holográfico varre a carta
    // acompanhando o mouse, junto com o tilt.
    cardElement.style.setProperty("--card-mx", `${(x / rect.width) * 100}%`);
    cardElement.style.setProperty("--card-my", `${(y / rect.height) * 100}%`);
  });

  cardElement.addEventListener("pointerleave", () => {
    cardElement.style.setProperty("--card-rotate-x", "0deg");
    cardElement.style.setProperty("--card-rotate-y", "0deg");
    cardElement.style.setProperty("--card-mx", "50%");
    cardElement.style.setProperty("--card-my", "50%");
  });
}

async function loadCardAssets() {
  try {
    // Payload null = early fetch falhou (404/rede); refaz o fetch aqui.
    const payload = await catalogReady;
    if (payload) {
      cardAssets = Array.isArray(payload.cards) ? payload.cards : [];
      catalogStamp = String(payload.generatedAt || "");
      setsIndex = payload.sets && typeof payload.sets === "object" ? payload.sets : null;
    } else {
      const response = await fetch("../assets/data/catalog.min.json");
      const data = response.ok ? await response.json() : null;
      cardAssets = Array.isArray(data?.cards) ? data.cards : [];
      catalogStamp = String(data?.generatedAt || "");
      setsIndex = data?.sets && typeof data.sets === "object" ? data.sets : null;
    }
  } catch (error) {
    cardAssets = [];
    setsIndex = null;
  }

  // Repõe folder (derivável) e pré-computa candidatos normalizados uma única
  // vez — getCardVariants deixa de normalizar 5 campos por entrada a cada call.
  assetIndexByFile = new Map();
  cardAssets.forEach((asset, index) => {
    asset.folder = String(asset.file || "").split("/")[0];
    asset.__candidates = [
      asset.pokemon,
      asset.folder,
      asset.printedPokemon,
      asset.file
    ].map((candidate) => normalizePokemonKey(candidate));
    assetIndexByFile.set(asset.file, index);
  });
  catalogAssetsPrepared = true;

  // O catálogo não traz mais cartas do Pokémon TCG Pocket: marcações antigas do
  // localStorage que apontavam para aquelas artes perdem a variante (a carta
  // continua coletada; o usuário reescolhe uma versão física no modal).
  if (!sharedMode && !planMode && cardAssets.length) {
    let droppedSelections = false;
    cards.forEach((card) => {
      if (!card.collected) return;
      const file = cardAssetFile(card);
      if (!file || assetIndexByFile.has(file)) return;
      card.file = "";
      card.artPath = "";
      card.variant = "";
      card.collection = "";
      card.label = "";
      card.finish = "";
      droppedSelections = true;
    });
    if (droppedSelections) {
      saveCards();
      renderCards();
    }
  }

  // Link compartilhado: agora que o catálogo chegou, resolve as variantes
  // escolhidas por quem criou o link e repinta a grade com as artes.
  if (sharedMode) {
    applySharedAssets();
    renderCards();
    return;
  }

  // Se o usuário abriu um modal antes do catálogo chegar, re-renderiza. O mesmo
  // vale para filtro != all: sem catálogo os predicates não acham variantes.
  if (currentCardId !== null || activeFilter !== "all") {
    renderCards();
    const card = cards.find((item) => item.id === currentCardId);
    if (card) renderVariantList(selectedAsset);
  }
}

function getAssetPath(fileName) {
  if (!fileName) return "../assets/site/pokemon-tcg-card-back.png";

  const normalized = String(fileName).trim().replace(/^\.?\//, "").replace(/^\/+/, "");
  const candidates = [
    `../assets/cards/${normalized}`,
    `assets/cards/${normalized}`,
    "../assets/site/pokemon-tcg-card-back.png"
  ];

  return candidates.find((candidate) => candidate && candidate.length > 0) || "../assets/site/pokemon-tcg-card-back.png";
}

function normalizePokemonKey(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// Compara "007", "7" e "0007" como o mesmo n\u00famero de carta.
function normalizeCardNumber(value) {
  const raw = String(value || "").trim().toLowerCase();
  const match = raw.match(/^0*(\d+)/);
  return match ? match[1] : raw || "unknown";
}

// As 4 promos ex5.5 (Pok\u00e9 Card Creator Pack) n\u00e3o t\u00eam imagem publicada em nenhuma fonte.
const NO_IMAGE_VARIANTS = new Set([
  "treecko|ex5.5|1",
  "wurmple|ex5.5|2",
  "torchic|ex5.5|3",
  "mudkip|ex5.5|4"
]);

function isNoImageVariant(asset) {
  if (!asset) return false;
  const key = `${normalizePokemonKey(asset.pokemon || asset.name)}|${normalizePokemonKey(asset.set)}|${normalizeCardNumber(asset.number)}`;
  return NO_IMAGE_VARIANTS.has(key);
}

function getCardVariants(cardName) {
  const normalized = normalizePokemonKey(cardName);

  // Índice O(1) após o load do catálogo (só 135 nomes possíveis na grade).
  if (catalogAssetsPrepared && variantsCache.has(normalized)) {
    return variantsCache.get(normalized);
  }

  const variants = cardAssets.filter((asset) => {
    const candidates = asset.__candidates || [
      normalizePokemonKey(asset?.pokemon),
      normalizePokemonKey(asset?.folder),
      normalizePokemonKey(asset?.file)
    ];

    return candidates.some((candidate) => candidate.includes(normalized));
  });

  if (catalogAssetsPrepared) {
    variantsCache.set(normalized, variants);
  }
  return variants;
}

// Predicados dos filtros do header. Qualificam pelo POKÉMON (qualquer variante
// dele casa), não pela variante coletada — o filtro organiza a grade, não o estado.
const MEGA_PREFIXES = ["mega-", "m-"];
const SPECIAL_ART_RARITIES = new Set([
  "illustration rare",
  "special illustration rare",
  "secret rare",
  "shiny rare",
  "shiny ultra rare",
  "mega hyper rare",
  "amazing rare"
]);

function pokemonHasMegaVariant(cardName) {
  return getCardVariants(cardName).some((asset) =>
    MEGA_PREFIXES.some((prefix) => String(asset.printedPokemon || "").toLowerCase().startsWith(prefix)));
}

function pokemonHasSpecialArtVariant(cardName) {
  return getCardVariants(cardName).some((asset) =>
    SPECIAL_ART_RARITIES.has(String(asset.rarity || "").trim().toLowerCase()));
}

function cardMatchesFilter(card) {
  if (activeFilter === "mega" && !pokemonHasMegaVariant(card.name)) return false;
  if (activeFilter === "special" && !pokemonHasSpecialArtVariant(card.name)) return false;
  if (searchQuery && !normalizePokemonKey(card.name).includes(searchQuery)) return false;
  return true;
}

function loadCards() {
  if (parseSharedState()) {
    // A coleção veio de um link de compartilhamento: ela manda na tela, mas o
    // localStorage do visitante fica intocado (saveCards é bloqueado no modo
    // compartilhado — nada sobrescreve a coleção local de quem abriu o link).
    sharedMode = true;
    cards = hoennPokemon.map((card, index) => ({
      ...card,
      collected: sharedMap.has(index),
      variant: "",
      finish: "",
      collection: "",
      label: "",
      file: "",
      artPath: ""
    }));
    return;
  }

  const saved = localStorage.getItem(STORAGE_KEY);

  if (!saved) {
    cards = hoennPokemon.map((card) => ({ ...card, collected: false, variant: "", label: "", artPath: "" }));
    saveCards();
    return;
  }

  try {
    const parsed = JSON.parse(saved);
    const savedMap = new Map((parsed || []).map((card) => [card.id, card]));

    cards = hoennPokemon.map((card) => {
      const match = savedMap.get(card.id);
      return {
        ...card,
        collected: Boolean(match?.collected),
        variant: match?.variant || "",
        finish: match?.finish || "",
        collection: match?.collection || "",
        label: match?.label || "",
        file: match?.file || "",
        artPath: match?.artPath || ""
      };
    });
  } catch (error) {
    cards = hoennPokemon.map((card) => ({ ...card, collected: false, variant: "", label: "", artPath: "" }));
    saveCards();
  }
}

function saveCards() {
  // No modo compartilhado a grade é de outra pessoa — o localStorage local
  // não pode ser sobrescrito por engano (visitar um link ≠ perder a coleção).
  // No modo planejamento o mesmo: marcações são rascunho, nada persiste.
  if (sharedMode || planMode) return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cards));
  refreshSavedSnapshot();
}

function updateProgressBar() {
  // No modo planejamento a barra reflete o checklist SALVO (o snapshot), não o
  // rascunho da tela — a porcentagem é o "quanto eu realmente tenho".
  const collectedCountValue = planMode
    ? cards.filter((card) => savedCollected.get(card.id)).length
    : cards.filter((card) => card.collected).length;
  const percent = Math.round((collectedCountValue / TOTAL_CARDS) * 100);
  const tooltip = t("progressTooltip", { n: collectedCountValue, total: TOTAL_CARDS, missing: TOTAL_CARDS - collectedCountValue });

  if (progressText) progressText.textContent = t("progressCount", { n: collectedCountValue, total: TOTAL_CARDS });
  if (progressPercent) {
    progressPercent.textContent = `${percent}%`;
    // Tooltip nativo com o resumo completo.
    progressPercent.title = tooltip;
  }
  if (progressPercentCenter) {
    // Hover mostra a contagem; fora dele, o modo escolhido pelo clique (hover
    // nunca esconde a contagem quando ela já está fixada).
    const showCount = progressShowCount || progressHoverCount;
    progressPercentCenter.textContent = showCount
      ? `${collectedCountValue}/${TOTAL_CARDS}`
      : `${percent}%`;
    progressPercentCenter.title = tooltip;
  }
  if (progressBar) {
    progressBar.title = t("progressHint");
    progressBar.setAttribute("aria-pressed", String(progressShowCount));
  }
  if (progressFill) progressFill.style.width = `${percent}%`;

  if (progressFill && progressPercentCenter) {
    const progressWidth = progressFill.parentElement.clientWidth || 1;
    const fillWidth = progressFill.offsetWidth || 0;
    const labelWidth = progressPercentCenter.offsetWidth || 26;
    const leftOffset = Math.min(Math.max(fillWidth - labelWidth - 6, 10), progressWidth - labelWidth - 12);
    progressPercentCenter.style.left = `${leftOffset}px`;
  }
}

function updateSyncNotification(progress, label, statusText) {
  if (!syncNotification || !syncProgressLabel || !syncProgressPercent || !syncProgressFill || !syncStatusText) return;

  syncNotification.classList.remove("hidden");
  syncProgressLabel.textContent = label;
  syncProgressPercent.textContent = `${Math.max(0, Math.min(100, progress))}%`;
  syncProgressFill.style.width = `${Math.max(0, Math.min(100, progress))}%`;
  syncStatusText.textContent = statusText;
}

function closeSyncNotification() {
  if (!syncNotification) return;
  syncNotification.classList.add("hidden");
}

// Relatório de divergências da sincronização: página HTML gerada na hora,
// aberta em Blob URL (fecha quando a guia fecha; não precisa de servidor).
function openSyncDetailsReport() {
  const statusLabels = { novo: t("statusNovo"), extra: t("statusExtra") };
  const rows = syncReportRows.map((row) => `
      <tr>
        <td>${escapeHtml(row.pokemon)}</td>
        <td>${escapeHtml(row.setId)}</td>
        <td>${escapeHtml(row.number)}</td>
        <td class="status-${escapeHtml(row.status)}">${escapeHtml(statusLabels[row.status] || row.status)}</td>
      </tr>`).join("");

  const html = `<!DOCTYPE html>
<html lang="${locale === "pt" ? "pt-BR" : "en"}">
<head>
  <meta charset="UTF-8" />
  <title>${escapeHtml(t("reportTitle"))} — Emerald TCG</title>
  <style>
    body { margin: 0; padding: 32px 24px; font-family: "Segoe UI", Tahoma, sans-serif; background: #f5f4f0; color: #0d1114; }
    h1 { font-size: 1.15rem; margin: 0 0 4px; }
    p { font-size: 0.8rem; color: #556; margin: 0 0 20px; }
    table { border-collapse: collapse; width: 100%; max-width: 720px; background: #fff; border-radius: 10px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.08); }
    th, td { text-align: left; padding: 9px 14px; font-size: 0.82rem; border-bottom: 1px solid #eee; }
    th { background: #0f4b3c; color: #edf7ee; font-size: 0.72rem; letter-spacing: 0.06em; text-transform: uppercase; }
    tr:last-child td { border-bottom: none; }
    .status-novo { color: #1b6a4a; font-weight: 700; }
    .status-extra { color: #b98a22; font-weight: 700; }
    .empty { padding: 24px; text-align: center; color: #556; font-size: 0.85rem; }
  </style>
</head>
<body>
  <h1>${escapeHtml(t("reportTitle"))}</h1>
  <p>${escapeHtml(t("reportGenerated", { when: new Date().toLocaleString(locale === "pt" ? "pt-BR" : "en-US") }))}</p>
  <table>
    <thead><tr><th>${escapeHtml(t("reportPokemon"))}</th><th>${escapeHtml(t("reportSet"))}</th><th>${escapeHtml(t("reportNumber"))}</th><th>${escapeHtml(t("reportStatus"))}</th></tr></thead>
    <tbody>${rows || `<tr><td colspan="4" class="empty">${escapeHtml(t("reportEmpty"))}</td></tr>`}</tbody>
  </table>
</body>
</html>`;

  const blob = new Blob([html], { type: "text/html" });
  const url = URL.createObjectURL(blob);
  const reportWindow = window.open(url, "_blank", "noopener");
  if (reportWindow) {
    window.setTimeout(() => URL.revokeObjectURL(url), 60000);
  }
}

function updateSyncDetailsLink() {
  if (!syncDetailsLink) return;
  if (syncReportRows.length) {
    syncDetailsLink.href = "#";
    syncDetailsLink.classList.remove("hidden");
  } else {
    syncDetailsLink.classList.add("hidden");
  }
}

function formatSyncTimestamp(isoString) {
  const date = new Date(isoString);
  if (Number.isNaN(date.getTime())) return "";

  return date.toLocaleDateString(locale === "pt" ? "pt-BR" : "en-US", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit"
  });
}

function updateLastSyncDisplay(isoString) {
  // A data vive só no tooltip do botão de reload (fora do header).
  const label = isoString ? formatSyncTimestamp(isoString) : t("never");

  if (syncCheckBtn) syncCheckBtn.title = `${t("syncTitleFull")}\n${label}`;
  if (syncLastUpdatedStatus) syncLastUpdatedStatus.textContent = label;
}

function loadLastSync() {
  let stored = "";
  try {
    stored = localStorage.getItem(LAST_SYNC_KEY) || "";
  } catch (error) {
    stored = "";
  }
  updateLastSyncDisplay(stored);
  return stored;
}

function saveLastSync() {
  const isoString = new Date().toISOString();
  try {
    localStorage.setItem(LAST_SYNC_KEY, isoString);
  } catch (error) {
    /* localStorage indisponível — apenas não persiste */
  }
  updateLastSyncDisplay(isoString);
}

async function runCardSyncCheck() {
  if (!syncCheckBtn) return;

  syncCheckBtn.disabled = true;
  syncCheckBtn.setAttribute("aria-busy", "true");
  syncCloseBtn.hidden = true;

  try {
    // Reusa o catálogo já carregado no boot (sem segundo download). Se o early
    // fetch do <head> falhou (payload null), recarrega — base vazia geraria
    // divergências falsas na comparação.
    if (cardAssets.length === 0) {
      catalogReady = loadCardAssets();
    }
    await catalogReady;

    updateSyncNotification(0, t("syncLoaded"), t("syncBase", { n: cardAssets.length }));
    const localMap = new Map();

    // O tracker cobre a série EX (Geração 3): ignora sets de outras eras que
    // porventura existam no catálogo. Abra/Kadabra/Alakazam/Wobbuffet agora são
    // do roster (dex regional do Emerald), então nada de pasta é excluído.
    const isGen3Set = (setId) => {
      const value = String(setId || "").trim().toLowerCase();
      return /^ex\d+(\.\d+)?$/.test(value) || value === "exu";
    };

    cardAssets.forEach((card) => {
      if (!isGen3Set(card.set)) return;

      const key = `${normalizePokemonKey(card.pokemon || card.folder || card.name)}|${normalizePokemonKey(String(card.set || "unknown"))}|${normalizeCardNumber(card.number)}`;
      localMap.set(key, true);
    });

    const pokemonNames = hoennPokemon.map((pokemon) => pokemon.name);
    const issues = [];

    for (let index = 0; index < pokemonNames.length; index += 1) {
      const pokemonName = pokemonNames[index];
      const progress = Math.round(((index + 1) / pokemonNames.length) * 100);
      updateSyncNotification(progress, t("syncChecking", { name: pokemonName }), t("syncProcessing", { i: index + 1, n: pokemonNames.length }));

      const response = await fetch(`https://api.tcgdex.net/v2/en/cards?name=${encodeURIComponent(pokemonName)}`);
      if (!response.ok) {
        issues.push({ pokemon: pokemonName, error: t("syncApiDown") });
        continue;
      }

      const remoteCards = await response.json();
      const remoteSet = new Set();

      (Array.isArray(remoteCards) ? remoteCards : []).forEach((card) => {
        // A listagem da API não traz o objeto "set": o id é "setid-localid".
        const cardId = String(card?.id || "");
        const separator = cardId.indexOf("-");
        if (separator < 0) return;

        const setValue = cardId.slice(0, separator);
        const numberValue = cardId.slice(separator + 1);
        if (!isGen3Set(setValue)) return;

        const key = `${normalizePokemonKey(pokemonName)}|${normalizePokemonKey(setValue)}|${normalizeCardNumber(numberValue)}`;
        remoteSet.add(key);
      });

      const missingLocal = [...localMap.keys()].filter((key) => {
        const [pokemon, ,] = key.split("|");
        return pokemon === normalizePokemonKey(pokemonName) && !remoteSet.has(key);
      });

      const missingRemote = [...remoteSet].filter((key) => {
        const [pokemon, ,] = key.split("|");
        return pokemon === normalizePokemonKey(pokemonName) && !localMap.has(key);
      });

      if (missingLocal.length || missingRemote.length) {
        issues.push({
          pokemon: pokemonName,
          missingLocal: missingLocal.length,
          missingRemote: missingRemote.length,
          // Divergências individuais para a tabela do relatório: "novo" = existe
          // na API e falta no catálogo local; "extra" = só existe no local.
          details: [
            ...missingRemote.map((key) => ({ key, status: "novo" })),
            ...missingLocal.map((key) => ({ key, status: "extra" }))
          ]
        });
      }
    }

    // As 4 promos ex5.5 (Poké Card Creator Pack) não têm imagem publicada em nenhuma
    // fonte — não é falha do catálogo local, então ficam de fora da contagem de divergências.
    const realIssues = [];

    issues.forEach((issue) => {
      if (issue.missingRemote > 0 && issue.missingLocal === 0) {
        return;
      }
      realIssues.push(issue);
    });

    const totalMissingLocal = realIssues.reduce((sum, issue) => sum + (issue.missingLocal || 0), 0);
    const totalMissingRemote = realIssues.reduce((sum, issue) => sum + (issue.missingRemote || 0), 0);

    // Divergências reais viram tabela no relatório (link "Detalhes").
    const reportDetails = [];
    realIssues.forEach((issue) => {
      (issue.details || []).forEach((detail) => {
        const [pokemon, setId, number] = detail.key.split("|");
        reportDetails.push({ pokemon, setId, number, status: detail.status });
      });
    });
    syncReportRows = reportDetails;

    if (!realIssues.length) {
      saveLastSync();
      updateSyncNotification(100, t("syncDone"), t("syncOk"));
    } else {
      saveLastSync();
      updateSyncNotification(100, t("syncDone"), t("syncDiffs", { extras: totalMissingLocal, novas: totalMissingRemote }));
      console.warn("Sincronização com divergências:", realIssues);
    }
    updateSyncDetailsLink();

    syncCloseBtn.hidden = false;
  } catch (error) {
    console.error(error);
    updateSyncNotification(100, t("syncFail"), t("syncFailMsg"));
    syncCloseBtn.hidden = false;
  } finally {
    syncCheckBtn.disabled = false;
    syncCheckBtn.setAttribute("aria-busy", "false");
  }
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function formatCardFinish(value) {
  const normalized = String(value || "normal").trim().toLowerCase();

  const aliases = {
    normal: "Normal",
    foil: "Foil",
    holo: "Holo",
    reverse: "Reverse",
    "reverse holo": "Reverse Foil",
    "reverse-holo": "Reverse Foil",
    "reverse foil": "Reverse Foil",
    secret: "Secret",
    shiny: "Shiny",
    fullart: "Full Art",
    "full art": "Full Art"
  };

  return aliases[normalized] || normalized
    .split(/[-_\s]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

// Botão confirmar é só ícone (certinho); o texto vira tooltip/aria-label e
// troca entre "Salvar" e "Atualizar" conforme o modo do modal.
function paintConfirmBtn(isEdit) {
  if (!confirmBtn) return;
  const label = t(isEdit ? "update" : "save");
  confirmBtn.title = label;
  confirmBtn.setAttribute("aria-label", label);
}

// Nome da coleção no idioma ativo: PT usa name_pt do dicionário de sets do
// catálogo (quando existe); EN usa o nome original. Fallback: campo da variante.
function localizedCollectionName(asset) {
  const fallback = asset?.collection || asset?.set || t("collectionFallback");
  if (locale !== "pt" || !setsIndex) return fallback;
  const setInfo = setsIndex[String(asset?.set || "").toLowerCase()];
  return (setInfo && setInfo.name_pt) || fallback;
}

function formatVariantLabel(asset) {
  const collectionLabel = localizedCollectionName(asset);
  const finishLabel = formatCardFinish(asset?.finish || "normal");
  const numberLabel = asset?.number ? ` · #${asset.number}` : "";

  return `${collectionLabel} · ${finishLabel}${numberLabel}`;
}

// Opções de raridade dos botões do modal — seleção única. Os três valores
// cobrem o que o catálogo imprime (normal/holo/reverse); acabamento de links
// antigos (SHARE_FINISH_CODES) continua legível, só não é mais oferecido.
const RARITY_OPTIONS = [
  { value: "normal", label: "Normal" },
  { value: "holo", label: "Holo" },
  { value: "reverse", label: "Reverse" }
];

// Raridade em edição no modal. `rarityPinned` marca escolha explícita do
// usuário: trocar de variante não pisa nela; sem escolha, a variante manda.
let pendingFinish = "normal";
let rarityPinned = false;

function getCurrentFinish() {
  return pendingFinish || "normal";
}

// Colapsa qualquer acabamento (catálogo, links antigos) nas 3 opções dos botões.
function normalizeFinishChoice(value) {
  const normalized = String(value || "").trim().toLowerCase();
  if (normalized === "holo") return "holo";
  if (normalized === "reverse") return "reverse";
  if (normalized === "reverse holo" || normalized === "reverse foil" || normalized === "foil") return "holo";
  if (normalized === "normal") return "normal";
  return "";
}

// Classe que ativa o shine na grade/preview. Acabamentos de links antigos
// ("reverse holo" etc.) caem no brilho mais próximo.
function finishShineClass(finish) {
  const value = String(finish || "").toLowerCase();
  if (value === "reverse") return "finish-reverse";
  if (value === "holo" || value === "reverse holo" || value === "reverse foil") return "finish-holo";
  return "";
}

function createRarityButtonsMarkup(currentFinish) {
  const buttons = RARITY_OPTIONS.map((option) => `
    <button type="button" class="rarity-btn${option.value === currentFinish ? " selected" : ""}"
      role="radio" aria-checked="${option.value === currentFinish}"
      data-finish="${option.value}">${option.label}</button>
  `).join("");

  const rarityFieldLabel = escapeHtml(t("rarityField"));
  return `
    <div class="rarity-field">
      <span class="field-label">${rarityFieldLabel}</span>
      <div class="rarity-group" role="radiogroup" aria-label="${rarityFieldLabel}">${buttons}</div>
    </div>
  `;
}

// Repinta pílula de raridade e o estado do shine no preview sem re-criar a
// imagem (evita flicker de reload da arte ao clicar num botão).
function syncFinishPreview() {
  if (!modalSummary) return;

  const pill = modalSummary.querySelector(".rarity-pill");
  if (pill) pill.textContent = formatCardFinish(pendingFinish);

  // O preço do preview segue o acabamento escolhido (normal/holo/reverse têm
  // preços próprios no TCGplayer quando a carta possui as duas faces).
  const pricePill = modalSummary.querySelector(".price-pill");
  const price = cardPriceFor(selectedAsset?.file || "", getCurrentFinish());
  if (pricePill) {
    if (price) {
      pricePill.hidden = false;
      pricePill.textContent = formatMoney(price.amount, price.currency);
      pricePill.title = priceTitle(price);
    } else {
      pricePill.hidden = true;
    }
  }

  const stage = modalSummary.querySelector(".preview-stage");
  if (stage) {
    stage.classList.toggle("finish-holo", pendingFinish === "holo");
    stage.classList.toggle("finish-reverse", pendingFinish === "reverse");
  }
}

// Reflete o filtro ativo no rótulo do trigger do dropdown (e nos itens).
function paintFilterTrigger() {
  if (filterTrigger) {
    filterTrigger.textContent = t(FILTER_LABEL_KEYS[activeFilter] || "seeAll");
    filterTrigger.classList.toggle("active", activeFilter !== "all");
  }
  if (filterMenu) {
    filterMenu.querySelectorAll(".filter-option").forEach((option) => {
      const isActive = option.dataset.filter === activeFilter;
      option.classList.toggle("selected", isActive);
      option.setAttribute("aria-checked", String(isActive));
    });
  }
}

function createCardMarkup(card) {
  const resolvedClass = card.collected ? "revealed" : "uncollected";
  // No planejamento: "rascunho" = marcado agora mas ainda não salvo.
  const draftClass = planMode && card.collected && !savedCollected.get(card.id) ? " plan-draft" : "";
  const shineClass = card.collected ? finishShineClass(card.finish) : "";
  const photoMarkup = card.collected && card.artPath ? `<img class="card-photo" src="${card.artPath}" alt="${escapeHtml(card.name)}" />` : "";
  const nameLabel = !card.collected ? `<span class="card-name">${card.name}</span>` : "";
  const price = card.collected && card.artPath ? cardPriceFor(card.file, card.finish) : null;
  // Badge com link vira âncora para a loja (TCGplayer/Cardmarket); sem URL,
  // segue sendo span (pointer-events:none) para não engolir o clique da carta.
  const priceMarkup = price
    ? (price.url
      ? `<a class="card-price card-price-link" href="${escapeHtml(price.url)}" target="_blank" rel="noopener noreferrer" title="${escapeHtml(priceTitle(price))}">${formatMoney(price.amount, price.currency)}</a>`
      : `<span class="card-price" title="${escapeHtml(priceTitle(price))}">${formatMoney(price.amount, price.currency)}</span>`)
    : "";

  return `
    <article class="card ${resolvedClass}${shineClass ? ` ${shineClass}` : ""}${draftClass}" data-id="${card.id}" tabindex="0" aria-label="${escapeHtml(card.name)}">
      ${priceMarkup}
      <div class="card-visual">
        <div class="card-art">
          ${photoMarkup}
          ${nameLabel}
        </div>
      </div>
      <div class="card-footer">
        <span class="card-number">#${card.number}</span>
      </div>
    </article>
  `;
}

function renderCards() {
  cardGrid.innerHTML = cards.filter(cardMatchesFilter).map(createCardMarkup).join("");
  document.querySelectorAll(".card").forEach(setupCardTilt);
  updateProgressBar();
  updateCollectionTotal();
}

(function initSearchInput() {
  const searchInput = document.getElementById("searchInput");
  if (!searchInput) return;

  const applySearch = () => {
    searchQuery = normalizePokemonKey(searchInput.value);
    searchInput.classList.toggle("has-text", Boolean(searchQuery));
    renderCards();
  };

  searchInput.addEventListener("input", applySearch);

  // Digitar em qualquer lugar da tela foca a busca e roteia a tecla para o
  // input. Escape limpa; Backspace também esvazia quando o campo está vazio
  // (volta a grade completa em vez de saltar a página).
  document.addEventListener("keydown", (event) => {
    if (event.metaKey || event.ctrlKey || event.altKey) return;

    const target = event.target;
    const typingElsewhere = target instanceof HTMLElement
      && (target.isContentEditable
        || target.tagName === "INPUT"
        || target.tagName === "TEXTAREA"
        || target.tagName === "SELECT");

    // O modal intercepta Escape/setas no handler dedicado; não duplicar aqui.
    if (currentCardId !== null) return;

    if (event.key === "Escape" && document.activeElement === searchInput) {
      searchInput.value = "";
      applySearch();
      searchInput.blur();
      return;
    }

    if (typingElsewhere) return;

    if (event.key === "Backspace" && searchInput.value === "") {
      event.preventDefault();
      return;
    }

    if (event.key.length === 1) {
      searchInput.focus();
    }
  });
})();

function changeSelectedVariant(step) {
  if (!currentVariantOptions.length) return;

  currentVariantIndex = (currentVariantIndex + step + currentVariantOptions.length) % currentVariantOptions.length;
  selectedAsset = currentVariantOptions[currentVariantIndex];
  renderVariantList(selectedAsset);
}

function renderSelectedPreview(asset) {
  if (!modalSummary) return;

  const hasNoImage = isNoImageVariant(asset);
  const localSrc = hasNoImage ? "../assets/site/pokemon-tcg-card-back.png" : getAssetPath(asset?.file || "");
  // Arte no idioma escolhido no modal (BR/JP/EUA); cai para a local quando não
  // há versão, a sonda falha, ou o remoto some (onerror abaixo).
  const imageSrc = hasNoImage ? localSrc : localizedPreviewSrc(asset, (remote) => {
    const img = modalSummary?.querySelector(".preview-image");
    if (img && img.dataset.src !== remote) {
      img.src = remote;
      img.dataset.src = remote;
    }
  });
  const card = cards.find((item) => item.id === currentCardId) || { name: asset?.name || "Carta", number: asset?.number || "" };
  const collectionLabel = localizedCollectionName(asset);
  const variantLabel = asset?.number ? `#${asset.number}` : t("versionFallback");
  const rarityLabel = formatCardFinish(getCurrentFinish());
  const shineClass = finishShineClass(getCurrentFinish());
  const previewPrice = cardPriceFor(asset?.file || "", getCurrentFinish());
  // <a> sem href = não clicável (mesma aparência); com URL vira link da loja.
  const priceHref = previewPrice?.url ? ` href="${escapeHtml(previewPrice.url)}" target="_blank" rel="noopener noreferrer"` : "";
  const pricePill = previewPrice
    ? `<a class="summary-pill price-pill"${priceHref} title="${escapeHtml(priceTitle(previewPrice))}">${formatMoney(previewPrice.amount, previewPrice.currency)}</a>`
    : "";

  modalSummary.innerHTML = `
    <div class="preview-shell">
      <button type="button" class="preview-nav prev" data-nav="prev" aria-label="${escapeHtml(t("prevCard"))}">&#8249;</button>
      <div class="preview-stage${hasNoImage ? " no-image" : ""}${shineClass ? ` ${shineClass}` : ""}" aria-label="${escapeHtml(t("previewAria"))}">
        <img class="preview-image" src="${imageSrc}" data-src="${imageSrc}" data-local="${escapeHtml(localSrc)}" alt="${escapeHtml(card.name)}" />
        ${hasNoImage ? `<span class="no-image-badge">${escapeHtml(t("noImage"))}</span>` : ""}
      </div>
      <button type="button" class="preview-nav next" data-nav="next" aria-label="${escapeHtml(t("nextCard"))}">&#8250;</button>
    </div>
    <div class="summary-meta">
      <span class="summary-pill">${variantLabel}</span>
      <strong>${escapeHtml(collectionLabel)}</strong>
      <span class="summary-pill rarity-pill">${escapeHtml(rarityLabel)}</span>
      ${pricePill}
      ${hasNoImage ? '<span class="summary-pill no-image-pill">promo ex5.5</span>' : ""}
    </div>
  `;

  // Arte remota não carregou (CDN mudou, rate limit, set sem versão): volta
  // para a local sem quebrar o preview.
  const previewImg = modalSummary.querySelector(".preview-image");
  if (previewImg) {
    previewImg.addEventListener("error", () => {
      const local = previewImg.dataset.local;
      if (local && previewImg.src !== new URL(local, window.location.href).href) {
        previewImg.src = local;
        previewImg.dataset.src = local;
      }
    }, { once: true });
  }

  const navButtons = modalSummary.querySelectorAll(".preview-nav");
  navButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      changeSelectedVariant(button.dataset.nav === "next" ? 1 : -1);
    });
  });

  const previewStage = modalSummary.querySelector(".preview-stage");
  if (previewStage) {
    previewStage.addEventListener("touchstart", (event) => {
      const touch = event.changedTouches[0];
      touchStartX = touch.clientX;
      touchStartY = touch.clientY;
    }, { passive: true });

    previewStage.addEventListener("touchend", (event) => {
      const touch = event.changedTouches[0];
      const deltaX = touch.clientX - touchStartX;
      const deltaY = touch.clientY - touchStartY;

      if (Math.abs(deltaX) > 50 && Math.abs(deltaX) > Math.abs(deltaY)) {
        changeSelectedVariant(deltaX < 0 ? 1 : -1);
      }
    }, { passive: true });
  }
}

function renderVariantList(defaultAsset = null) {
  const card = cards.find((item) => item.id === currentCardId);
  if (!card) return;

  const variants = getCardVariants(card.name);
  const options = variants.length ? [...variants] : [{ name: card.name, set: "base", number: card.number, file: "" }];
  // Mais barato → mais caro (preço exibido, já convertido p/ R$ quando há
  // câmbio). Sem preço conhecido vai para o fim, em ordem original.
  options.sort((a, b) => variantSortPrice(a) - variantSortPrice(b));
  currentVariantOptions = options;

  const targetIndex = defaultAsset
    ? options.findIndex((asset) => asset.file === defaultAsset.file && asset.name === defaultAsset.name && asset.set === defaultAsset.set)
    : -1;

  if (targetIndex >= 0) {
    currentVariantIndex = targetIndex;
  } else if (options.length) {
    currentVariantIndex = 0;
  }

  selectedAsset = options[currentVariantIndex] || options[0];

  variantList.innerHTML = "";

  // Raridade segue a variante impressa enquanto o usuário não escolher outra.
  if (!rarityPinned) {
    pendingFinish = normalizeFinishChoice(selectedAsset?.finish) || "normal";
  }
  renderSelectedPreview(selectedAsset);

  // Botões de raridade (seleção única) — persistem na carta ao confirmar.
  const finishHost = document.getElementById("finishFieldHost");
  if (finishHost) {
    finishHost.innerHTML = createRarityButtonsMarkup(getCurrentFinish());
    finishHost.querySelectorAll(".rarity-btn").forEach((button) => {
      button.addEventListener("click", () => {
        pendingFinish = button.dataset.finish;
        rarityPinned = true;
        finishHost.querySelectorAll(".rarity-btn").forEach((item) => {
          const active = item === button;
          item.classList.toggle("selected", active);
          item.setAttribute("aria-checked", String(active));
        });
        syncFinishPreview();
      });
    });
  }

  options.forEach((asset) => {
    const button = document.createElement("button");
    const noImage = isNoImageVariant(asset);
    button.type = "button";
    button.className = `variant-option ${selectedAsset && selectedAsset.file === asset.file ? "selected" : ""}`;
    const variantText = formatVariantLabel(asset);
    const price = cardPriceFor(asset.file || "", asset.finish);
    // <a> dentro de <button> é HTML inválido — o preço da linha é span com
    // listener próprio que abre a loja sem deixar o clique selecionar a variante.
    const priceMarkup = price
      ? `<span class="variant-price${price.url ? " variant-price-link" : ""}"${price.url ? ` data-store="${escapeHtml(price.url)}"` : ""} title="${escapeHtml(priceTitle(price))}">${formatMoney(price.amount, price.currency)}</span>`
      : "";

    button.innerHTML = `
      <img class="variant-thumb" loading="lazy" decoding="async" src="${getAssetPath(asset.file)}" alt="${escapeHtml(asset.name)}" />
      <span class="variant-label">${variantText}${noImage ? '<em class="variant-no-image">· sem imagem</em>' : ""}</span>
      ${priceMarkup}
    `;

    button.addEventListener("click", () => {
      selectedAsset = asset;
      const assetIndex = options.findIndex((item) => item.file === asset.file && item.name === asset.name && item.set === asset.set);
      currentVariantIndex = assetIndex >= 0 ? assetIndex : 0;
      renderVariantList(asset);
    });

    // Clicar no preço abre a loja em aba nova sem trocar a variante selecionada.
    const priceEl = button.querySelector(".variant-price-link");
    if (priceEl) {
      priceEl.addEventListener("click", (event) => {
        event.stopPropagation();
        window.open(priceEl.dataset.store, "_blank", "noopener,noreferrer");
      });
    }

    variantList.appendChild(button);
  });

  // A variante selecionada é sempre mantida visível: ao trocar com as setas/
  // swipe, a barra de rolagem horizontal desliza suavemente até ela.
  const selectedButton = variantList.children[currentVariantIndex];
  if (selectedButton && typeof selectedButton.scrollIntoView === "function") {
    selectedButton.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }
}

function openModal(cardId, mode = "collect") {
  const card = cards.find((item) => item.id === cardId);
  if (!card) return;

  currentCardId = cardId;
  modalTitle.textContent = mode === "collect" ? t("addCard") : t("editCard");

  const variants = getCardVariants(card.name);
  // Na edição, reabrir na variante que a carta mostra hoje (fallback: primeira).
  const savedAsset = mode === "edit" && card.file
    ? variants.find((asset) => asset.file === card.file)
    : null;
  const defaultAsset = savedAsset || variants[0] || { name: card.name, set: "base", number: card.number, file: "" };
  selectedAsset = defaultAsset;

  // Raridade inicial: a escolha salva na carta (pinned — trocar variante não
  // pisa) ou, em carta nova, a variante impressa escolhida.
  pendingFinish = normalizeFinishChoice(card.collected ? card.finish : "")
    || normalizeFinishChoice(defaultAsset?.finish)
    || "normal";
  rarityPinned = Boolean(card.collected && card.finish);

  renderVariantList(defaultAsset);

  if (mode === "collect") {
    removeBtn.classList.add("hidden");
    paintConfirmBtn(false);
  } else {
    removeBtn.classList.remove("hidden");
    paintConfirmBtn(true);
  }

  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden", "false");
}

function closeModal() {
  modal.classList.add("hidden");
  modal.setAttribute("aria-hidden", "true");
  currentCardId = null;
  selectedAsset = null;
}

function markCardAsCollected(cardId, assetInfo = null) {
  const card = cards.find((item) => item.id === cardId);
  if (!card) return;

  // A escolha do usuário (botões) manda sobre a variante impressa.
  const finishValue = getCurrentFinish() || assetInfo?.finish || "normal";

  card.collected = true;
  card.variant = assetInfo ? `${assetInfo.set}` : "";
  card.finish = finishValue;
  card.collection = assetInfo?.collection || assetInfo?.set || "";
  card.file = assetInfo?.file || "";
  card.label = assetInfo
    ? `${assetInfo.collection || assetInfo.set} · ${formatCardFinish(finishValue)} · #${assetInfo.number}`
    : "Carta oficial";
  card.artPath = assetInfo && assetInfo.file ? getAssetPath(assetInfo.file) : "";

  const cardElement = document.querySelector(`.card[data-id="${cardId}"]`);
  if (cardElement) {
    cardElement.classList.remove("uncollected");
    cardElement.classList.add("revealed", "is-flipping");

    setTimeout(() => {
      cardElement.classList.remove("is-flipping");
      renderCards();
    }, 700);
  } else {
    renderCards();
  }

  saveCards();
  updateProgressBar();
}

function unmarkCard(cardId) {
  const card = cards.find((item) => item.id === cardId);
  if (!card) return;

  card.collected = false;
  card.variant = "";
  card.label = "";
  card.finish = "";
  card.collection = "";
  card.file = "";
  card.artPath = "";
  renderCards();
  saveCards();
  updateProgressBar();
}

document.addEventListener("click", (event) => {
  // Coleção de link compartilhado é vitrine: clicar em carta não abre modal.
  if (sharedMode) return;

  // O badge de preço é link da loja — não deve abrir o modal por trás.
  if (event.target.closest(".card-price-link")) return;

  const cardElement = event.target.closest(".card");
  if (!cardElement) return;

  const cardId = Number(cardElement.dataset.id);
  const card = cards.find((item) => item.id === cardId);
  if (!card) return;

  if (card.collected) {
    openModal(cardId, "edit");
  } else {
    openModal(cardId, "collect");
  }
});

confirmBtn.addEventListener("click", () => {
  if (currentCardId === null) return;
  markCardAsCollected(currentCardId, selectedAsset || null);
  closeModal();
});

removeBtn.addEventListener("click", () => {
  if (currentCardId === null) return;
  unmarkCard(currentCardId);
  closeModal();
});

cancelBtn.addEventListener("click", closeModal);

modal.addEventListener("click", (event) => {
  if (event.target === modal) closeModal();
});

// ---- Ligações do modal de compartilhamento ----------------------------------

if (shareBtn) {
  shareBtn.addEventListener("click", openShareModal);
}

if (shareCloseBtn) {
  shareCloseBtn.addEventListener("click", closeShareModal);
}

if (shareCopyBtn) {
  shareCopyBtn.addEventListener("click", copyShareLink);
}

if (shareModal) {
  shareModal.addEventListener("click", (event) => {
    if (event.target === shareModal) closeShareModal();
  });
}

if (planToggle) {
  planToggle.addEventListener("click", () => setPlanMode(!planMode));
}

// Seletor de idioma da arte (bandeirinhas no lugar do título do modal).
if (cardLangPicker) {
  cardLangPicker.querySelectorAll(".card-lang-flag").forEach((button) => {
    button.addEventListener("click", () => setCardLang(button.dataset.loc));
  });
}

// Olhinho: esconde/revela a soma do painel (o olho aberto é o estado padrão).
if (totalEyeBtn) {
  totalEyeBtn.addEventListener("click", () => setTotalHidden(!totalHidden));
}

// FAB do fim da página: voltar ao topo + resetar tudo (com confirmação).
if (backTopBtn) {
  backTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

if (resetAllBtn) {
  resetAllBtn.addEventListener("click", openResetModal);
}

if (resetConfirmYes) {
  resetConfirmYes.addEventListener("click", resetAllCards);
}

if (resetConfirmNo) {
  resetConfirmNo.addEventListener("click", closeResetModal);
}

if (resetModal) {
  resetModal.addEventListener("click", (event) => {
    if (event.target === resetModal) closeResetModal();
  });
}

// Esconde o back-to-top quando já está no topo (o reset fica sempre visível).
if (fabActions) {
  const syncBackTopVisibility = () => {
    fabActions.classList.toggle("at-top", window.scrollY < 320);
  };
  window.addEventListener("scroll", syncBackTopVisibility, { passive: true });
  syncBackTopVisibility();
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (resetModal && !resetModal.classList.contains("hidden")) {
      closeResetModal();
      return;
    }
    if (shareModal && !shareModal.classList.contains("hidden")) {
      closeShareModal();
      return;
    }
    if (modal && !modal.classList.contains("hidden")) closeModal();
    return;
  }

  if (!modal || modal.classList.contains("hidden")) return;

  if (event.key === "ArrowLeft") {
    changeSelectedVariant(-1);
  }

  if (event.key === "ArrowRight") {
    changeSelectedVariant(1);
  }
});

if (syncCheckBtn) {
  syncCheckBtn.addEventListener("click", runCardSyncCheck);
}

if (syncCloseBtn) {
  syncCloseBtn.addEventListener("click", closeSyncNotification);
}

if (syncDetailsLink) {
  syncDetailsLink.addEventListener("click", (event) => {
    event.preventDefault();
    openSyncDetailsReport();
  });
}

(function initSyncInfo() {
  loadLastSync();
})();

(function initRayquazaEasterEgg() {
  const rayquazaLink = document.getElementById("rayquazaLink");
  if (!rayquazaLink) return;

  let cryAudio = null;

  rayquazaLink.addEventListener("click", () => {
    try {
      if (!cryAudio) {
        cryAudio = new Audio("../assets/site/rayquaza-cry.mp3");
        cryAudio.preload = "auto";
      }
      cryAudio.currentTime = 0;
      cryAudio.play();
    } catch (error) {
      /* áudio indisponível — o link do GitHub ainda funciona */
    }
  });
})();

// Dropdown de filtro: o trigger mostra o filtro ativo; hover (desktop) ou
// clique abre a lista Mega/Special. Escolher um item atualiza o rótulo.
(function initFilterMenu() {
  if (!filterMenu || !filterTrigger) return;

  const options = filterMenu.querySelectorAll(".filter-option");

  const open = () => filterMenu.classList.add("open");
  const close = () => filterMenu.classList.remove("open");

  filterTrigger.addEventListener("click", () => {
    const isOpen = filterMenu.classList.toggle("open");
    filterTrigger.setAttribute("aria-expanded", String(isOpen));
  });
  filterMenu.addEventListener("mouseenter", open);
  filterMenu.addEventListener("mouseleave", close);
  filterTrigger.addEventListener("focus", open);

  options.forEach((option) => {
    option.addEventListener("click", () => {
      const filter = option.dataset.filter;
      if (filter && filter !== activeFilter) {
        activeFilter = filter;
        renderCards();
      }
      paintFilterTrigger();
      close();
      filterTrigger.setAttribute("aria-expanded", "false");
    });
  });

  document.addEventListener("click", (event) => {
    if (!filterMenu.contains(event.target)) close();
  });

  paintFilterTrigger();
})();

// Bandeiras de idioma: PT-BR ↔ EN-US, refletido em toda a UI.
if (langToggleBtn) langToggleBtn.addEventListener("click", () => setLocale(locale === "pt" ? "en" : "pt"));

// Barra de progresso: hover espreita o outro modo; clique/Enter fixa.
if (progressBar) {
  progressBar.addEventListener("mouseenter", () => { progressHoverCount = true; updateProgressBar(); });
  progressBar.addEventListener("mouseleave", () => { progressHoverCount = false; updateProgressBar(); });
  progressBar.addEventListener("focus", () => { progressHoverCount = true; updateProgressBar(); });
  progressBar.addEventListener("blur", () => { progressHoverCount = false; updateProgressBar(); });
  progressBar.addEventListener("click", () => { progressShowCount = !progressShowCount; updateProgressBar(); });
  progressBar.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      progressShowCount = !progressShowCount;
      updateProgressBar();
    }
  });
}

// Mobile: a lupinha na direita do Checklist abre/fecha o campo de busca.
if (searchToggleBtn) {
  const searchInputEl = document.getElementById("searchInput");
  searchToggleBtn.addEventListener("click", () => {
    const isOpen = document.body.classList.toggle("search-open");
    searchToggleBtn.setAttribute("aria-expanded", String(isOpen));
    if (isOpen && searchInputEl) searchInputEl.focus();
    else if (searchInputEl) searchInputEl.blur();
  });
}

(function init() {
  try {
    const stored = localStorage.getItem(LANG_KEY);
    if (stored === "pt" || stored === "en") locale = stored;
    const storedArt = localStorage.getItem(CARD_LANG_KEY);
    if (CARD_LOCALES.includes(storedArt)) cardLang = storedArt;
    totalHidden = localStorage.getItem(TOTAL_HIDDEN_KEY) === "1";
  } catch (error) {
    /* storage indisponível — segue no padrão EN */
  }

  loadCards();
  refreshSavedSnapshot();
  // Link compartilhado é vitrine: nada de reset (e o Plan já sai escondido).
  if (sharedMode) {
    if (planToggle) planToggle.hidden = true;
    if (resetAllBtn) resetAllBtn.hidden = true;
  }
  renderSharedBanner();
  applyI18n();  // resolve rótulos estáticos + re-renderiza com o idioma salvo
  // A grade não depende do catálogo: pinta já; a base chega em background.
  renderCards();
  loadCardAssets();
  readFxCache();
  loadPriceData();
  refreshFx();
})();
