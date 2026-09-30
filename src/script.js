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
// Presets da coleção (nomes + variantes) salvos no navegador.
const PRESET_KEY = "pokemon_emerald_tcg_presets_v1";
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
    fullart: "Full Art",
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
    shareAria: "Copy collection link",
    shareTitle: "Copy a link to your collection",
    shareTitleH: "Share collection",
    shareHint: "The link loads the site with <strong>exactly the cards you marked</strong> — whoever opens it sees your collection, but nothing changes here. Your marks stay saved only in this browser.",
    sharePlaceholder: "Mark at least one card to generate a link.",
    shareWarn: "Very long link — some chat apps may cut it. If it doesn't open, try pasting it directly in the browser.",
    shareClose: "Close",
    shareCopy: "Copy link",
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
    syncApiErrors: "{n} Pokémon could not be checked (API unavailable).",
    ligaSyncStarting: "Starting the Liga Pokemon price collection…",
    ligaDailyStarting: "Daily Liga update: checking which prices changed…",
    ligaDailyDone: "Today's Liga prices updated",
    ligaSyncResumed: "Resuming the Liga Pokemon collection where it stopped…",
    ligaSyncSearch: "Liga: searching Pokémon {i}/{n}",
    ligaSyncCards: "Liga: card pages {i}/{n}",
    ligaSyncEta: "~{min} min left · you can close this notice, it keeps running",
    ligaSyncStopping: "Stopping…",
    ligaSyncStop: "Stop",
    ligaSyncDone: "Liga prices updated",
    ligaSyncPublish: "To publish: commit and push assets/data/liga-prices.min.json.",
    ligaSyncStopped: "Liga collection interrupted — click sync to resume",
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
    ligaLoadingSuffix: " · looking up the Liga Pokemon price…",
    ligaMissingSuffix: " · no price on Liga Pokemon for this print",
    ligaBlocked: "Liga Pokemon asked for a human check — click, pass it and reopen the card",
    ligaTitle: "Liga Pokemon — lowest price {min} (avg {avg} · max {max}; any language/condition) · click to open",
    ligaLive: "live",
    ligaMixed: "all variants mixed",
    ligaListingTitle: "Liga Pokemon — lowest {lang} listing, {wanted} or better: {price} ({quality}, {variant}) · click to open",
    ligaNoListing: "no {lang} listing in {quality} or better — lowest of any language/condition",
    ligaIncomplete: "some hidden Liga prices could not be read",
    qualityField: "Card condition (price)",
    finishUnavailable: "{finish} — this print doesn't come in this finish",
    qualityM: "Mint (M)",
    qualityNM: "Near Mint (NM)",
    qualitySP: "Slightly Played (SP)",
    qualityMP: "Moderately Played (MP)",
    qualityHP: "Heavily Played (HP)",
    qualityD: "Damaged (D)",
    ligaOtherVariant: "no {wanted} price on Liga — showing {used}",
    totalShown: "Hide the total value",
    totalHidden: "Show the total value",
    cardLangAria: "Card language",
    cardLangPt: "Brasil (PT)",
    cardLangJa: "Japão (JA)",
    cardLangEn: "EUA (EN)",
    cardLangMissing: "no version in this language",
    backToTop: "Back to top",
    pageActions: "Page actions",
    menuAria: "Open menu",
    menuClose: "Close menu",
    presetAria: "Collection presets",
    presetTitle: "Save and load collection presets",
    presetSaveNew: "Save new",
    presetEmpty: "No presets saved yet.",
    presetDelete: "Delete preset",
    presetCardsSuffix: "cards",
    presetDefaultName: "Preset {n}",
    presetConfirmTitle: "Save this preset?",
    presetConfirmMsg: "Confirm you want to save the current collection as a preset. It will appear right below \"Save new\".",
    presetNamePlaceholder: "Preset name",
    presetNameAria: "Preset name",
    presetConfirmYes: "Yes, save",
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
    fullart: "Full Art",
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
    shareAria: "Copiar link da coleção",
    shareTitle: "Copiar link da sua coleção",
    shareTitleH: "Compartilhar coleção",
    shareHint: "O link carrega o site com <strong>exatamente as cartas que você marcou</strong> — quem abrir vê sua coleção, mas nada muda por aqui. Suas marcações continuam salvas só neste navegador.",
    sharePlaceholder: "Marque pelo menos uma carta para gerar um link.",
    shareWarn: "Link bem longo — alguns apps de chat podem cortá-lo. Se não abrir, tente colar no navegador direto.",
    shareClose: "Fechar",
    shareCopy: "Copiar link",
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
    syncApiErrors: "{n} Pokémon não puderam ser conferidos (API indisponível).",
    ligaSyncStarting: "Iniciando a coleta de preços na Liga Pokemon…",
    ligaDailyStarting: "Atualização diária da Liga: vendo quais preços mudaram…",
    ligaDailyDone: "Preços da Liga do dia atualizados",
    ligaSyncResumed: "Retomando a coleta da Liga Pokemon de onde parou…",
    ligaSyncSearch: "Liga: buscando Pokémon {i}/{n}",
    ligaSyncCards: "Liga: páginas de carta {i}/{n}",
    ligaSyncEta: "~{min} min restantes · pode fechar este aviso, a coleta continua",
    ligaSyncStopping: "Parando…",
    ligaSyncStop: "Parar",
    ligaSyncDone: "Preços da Liga atualizados",
    ligaSyncPublish: "Para publicar: commit e push de assets/data/liga-prices.min.json.",
    ligaSyncStopped: "Coleta da Liga interrompida — clique em sincronizar para retomar",
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
    ligaLoadingSuffix: " · buscando o preço na Liga Pokemon…",
    ligaMissingSuffix: " · a Liga Pokemon não tem preço desta impressão",
    ligaBlocked: "A Liga Pokemon pediu verificação — clique, passe por ela e reabra a carta",
    ligaTitle: "Liga Pokemon — menor preço {min} (méd. {avg} · máx. {max}; qualquer idioma/estado) · clique para abrir",
    ligaLive: "ao vivo",
    ligaMixed: "variantes misturadas",
    ligaListingTitle: "Liga Pokemon — menor anúncio {lang} {wanted} ou melhor: {price} ({quality}, {variant}) · clique para abrir",
    ligaNoListing: "sem anúncio {lang} {quality} ou melhor — menor de qualquer idioma/estado",
    ligaIncomplete: "alguns preços ocultos da Liga não foram lidos",
    qualityField: "Qualidade da carta (preço)",
    finishUnavailable: "{finish} — essa impressão não tem esse acabamento",
    qualityM: "Nova (M)",
    qualityNM: "Praticamente Nova (NM)",
    qualitySP: "Usada Levemente (SP)",
    qualityMP: "Usada Moderadamente (MP)",
    qualityHP: "Muito Usada (HP)",
    qualityD: "Danificada (D)",
    ligaOtherVariant: "a Liga não tem preço {wanted} — mostrando {used}",
    totalShown: "Ocultar o valor total",
    totalHidden: "Mostrar o valor total",
    cardLangAria: "Idioma da carta",
    cardLangPt: "Brasil (PT)",
    cardLangJa: "Japão (JA)",
    cardLangEn: "EUA (EN)",
    cardLangMissing: "sem versão neste idioma",
    backToTop: "Voltar ao topo",
    pageActions: "Ações da página",
    menuAria: "Abrir menu",
    menuClose: "Fechar menu",
    presetAria: "Presets da coleção",
    presetTitle: "Salvar e carregar presets da coleção",
    presetSaveNew: "Salvar novo",
    presetEmpty: "Nenhum preset salvo ainda.",
    presetDelete: "Excluir preset",
    presetCardsSuffix: "cartas",
    presetDefaultName: "Preset {n}",
    presetConfirmTitle: "Salvar este preset?",
    presetConfirmMsg: "Confirma que quer salvar a coleção atual como preset? Ele aparecerá logo abaixo de \"Salvar novo\".",
    presetNamePlaceholder: "Nome do preset",
    presetNameAria: "Nome do preset",
    presetConfirmYes: "Sim, salvar",
    resetAll: "Resetar todas as cartas",
    resetConfirmTitle: "Resetar coleção?",
    resetConfirmMsg: "Isso desmarca TODAS as cartas e apaga suas variantes salvas. Essa ação não pode ser desfeita.",
    resetYes: "Sim, resetar",
    resetNo: "Não"
  }
};

const FILTER_LABEL_KEYS = { all: "seeAll", mega: "mega", special: "special", fullart: "fullart" };
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
const syncStopBtn = document.getElementById("syncStopBtn");
const modal = document.getElementById("cardModal");
const modalTitle = document.getElementById("modalTitle");
const modalSummary = document.getElementById("modalSummary");
const variantList = document.getElementById("variantList");
const confirmBtn = document.getElementById("confirmBtn");
const cancelBtn = document.getElementById("cancelBtn");
const removeBtn = document.getElementById("removeBtn");
const shareBtn = document.getElementById("shareBtn");
const shareModal = document.getElementById("shareModal");
const presetBtn = document.getElementById("presetBtn");
const presetMenu = document.getElementById("presetMenu");
const presetMenuList = document.getElementById("presetMenuList");
const presetAskModal = document.getElementById("presetAskModal");
const presetNameInput = document.getElementById("presetNameInput");
const presetAskYes = document.getElementById("presetAskYes");
const presetAskNo = document.getElementById("presetAskNo");
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
const cardLangPicker = document.getElementById("cardLangPicker");
const backTopBtn = document.getElementById("backTopBtn");
const resetAllBtn = document.getElementById("resetAllBtn");
const resetModal = document.getElementById("resetModal");
const resetConfirmYes = document.getElementById("resetConfirmYes");
const resetConfirmNo = document.getElementById("resetConfirmNo");
const fabActions = document.querySelector(".fab-actions");
const mobileMenuBtn = document.getElementById("mobileMenuBtn");

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

// Filtro ativo da grade ("all" | "mega" | "special" | "fullart"), controlado pelos pills do header.
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
// sem backend. Payload v3 (atual): "3:<entradas>", separadas por vírgula; cada
// entrada é "<delta-do-índice-na-roster em base36>~<coleção>~<número>~<código
// do acabamento>~<código do idioma>" (campos vazios do fim são omitidos). A
// impressão vai por coleção + número, que não mudam quando o catálogo é
// reconstruído — o v2 guardava a posição no catálogo e perdia as variantes a
// cada build.
// Payload v2 (legado) é uma string compacta própria (não JSON): "2:<estampa
// em base36>:<entradas>", entradas separadas por vírgula. Cada entrada é
// "<delta-do-índice-na-roster em base36>[.<índice-da-variante em base36>[.<código
// do acabamento>]]" — delta porque as cartas coletadas são varridas em ordem
// crescente da roster, então o delta costuma caber num único caractere.
// A estampa (epoch em segundos, base36) substitui a data ISO inteira: denuncia
// links antigos após um rebuild do catálogo — aí as coletadas ainda aparecem
// (roster é código), mas sem variante. Links v1 (formato antigo, JSON completo)
// continuam sendo lidos para não quebrar links já compartilhados.
const SHARE_HASH_PREFIX = "c=";
// Novos códigos só no fim (índice = código dos links já compartilhados)
const SHARE_FINISH_CODES = ["normal", "holo", "reverse", "reverse holo", "full art", "secret", "shiny", "foil"];
const SHARE_FORMAT_VERSION = "3";
// Idioma da carta no link (índice = código)
const SHARE_LANG_CODES = ["en", "pt", "ja"];

let sharedMode = false;          // renderizando coleção de um link
let sharedMap = null;            // índice na roster -> { asset | set+number, finish, lang }
let sharedPayloadStamp = "";     // estampa de catálogo embutida no link
let sharedIgnored = false;       // #c= presente mas ilegível → avisar
let catalogStamp = "";           // "generatedAt" do catálogo (impressão do build)
let assetIndexByFile = null;     // file -> posição no catálogo (montado no load)
let remoteImageByFile = new Map(); // file -> URL remota (cartas exclusivas JP, sem PNG local)

function num36(n) {
  return Math.max(0, Math.trunc(n)).toString(36);
}

function encodeShareStamp(iso) {
  const ms = Date.parse(iso);
  return Number.isFinite(ms) ? Math.floor(ms / 1000).toString(36) : "";
}

function decodeShareStamp(token) {
  const seconds = parseInt(token, 36);
  if (!token || !Number.isFinite(seconds)) return "";
  return new Date(seconds * 1000).toISOString().replace(/\.\d{3}Z$/, "Z");
}

function parseSharedStateV1(json) {
  // Formato legado: {v:1, g:"<ISO>", c:[[roster, asset?, acabamento?], ...]}
  let state = null;
  try {
    state = JSON.parse(json || "");
  } catch (error) {
    state = null;
  }
  if (!state || state.v !== 1 || !Array.isArray(state.c)) return null;

  const map = new Map();
  state.c.forEach((entry) => {
    if (!Array.isArray(entry) || !Number.isInteger(entry[0])) return;
    map.set(entry[0], {
      asset: Number.isInteger(entry[1]) ? entry[1] : -1,
      finish: entry.length >= 3 ? SHARE_FINISH_CODES[entry[2]] || "" : ""
    });
  });
  if (!map.size) return null;
  return { map, stamp: String(state.g || "") };
}

function parseSharedStateV2(payload) {
  // "2:<estampa>:<entradas>" — ver comentário no topo da seção.
  const body = payload.slice(2);
  const sep = body.indexOf(":");
  const stampToken = sep >= 0 ? body.slice(0, sep) : "";
  const entriesRaw = sep >= 0 ? body.slice(sep + 1) : "";

  const map = new Map();
  let prevRoster = 0;
  entriesRaw.split(",").forEach((token) => {
    if (!token) return;
    const [deltaStr, assetStr, finishStr] = token.split(".");
    const delta = parseInt(deltaStr, 36);
    if (!Number.isFinite(delta)) return;
    const rosterIndex = prevRoster + delta;
    prevRoster = rosterIndex;

    const asset = assetStr !== undefined ? parseInt(assetStr, 36) : NaN;
    const finishCode = finishStr !== undefined ? parseInt(finishStr, 36) : NaN;
    map.set(rosterIndex, {
      asset: Number.isFinite(asset) ? asset : -1,
      finish: Number.isFinite(finishCode) ? (SHARE_FINISH_CODES[finishCode] || "") : ""
    });
  });
  if (!map.size) return null;
  return { map, stamp: decodeShareStamp(stampToken) };
}

function parseSharedStateV3(payload) {
  // "3:<entradas>" — ver comentário no topo da seção.
  const map = new Map();
  let prevRoster = 0;
  payload.slice(2).split(",").forEach((token) => {
    if (!token) return;
    const [deltaStr, set = "", number = "", finishStr = "", langStr = ""] = token.split("~");
    const delta = parseInt(deltaStr, 36);
    if (!Number.isFinite(delta)) return;
    const rosterIndex = prevRoster + delta;
    prevRoster = rosterIndex;

    const finishCode = parseInt(finishStr, 36);
    const langCode = parseInt(langStr, 36);
    map.set(rosterIndex, {
      asset: -1,
      set,
      number,
      finish: Number.isFinite(finishCode) ? (SHARE_FINISH_CODES[finishCode] || "") : "",
      lang: Number.isFinite(langCode) ? (SHARE_LANG_CODES[langCode] || "") : ""
    });
  });
  if (!map.size) return null;
  return { map, stamp: "" };
}

function parseSharedState() {
  const raw = (window.location.hash || "").slice(1);
  if (!raw.startsWith(SHARE_HASH_PREFIX)) return false;

  const compact = raw.slice(SHARE_HASH_PREFIX.length);
  let payload = null;
  try {
    // Sem LZString (vendor não carregou), aceita o payload puro como fallback.
    payload = typeof LZString !== "undefined"
      ? LZString.decompressFromEncodedURIComponent(compact)
      : decodeURIComponent(compact);
  } catch (error) {
    payload = null;
  }

  const result = !payload ? null
    : payload.startsWith("{") ? parseSharedStateV1(payload)
    : payload.startsWith("3:") ? parseSharedStateV3(payload)
    : payload.startsWith("2:") ? parseSharedStateV2(payload)
    : null;

  if (!result) {
    sharedIgnored = true;
    return false;
  }

  sharedMap = result.map;
  sharedPayloadStamp = result.stamp;
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

function buildShareEntries() {
  // rosterIndex sai em ordem crescente (forEach na roster) — permite
  // delta-encoding no createShareUrl.
  const entries = [];
  cards.forEach((card, rosterIndex) => {
    if (!card.collected) return;

    const asset = assetForFile(cardAssetFile(card));
    let finishCode = -1;
    let langCode = -1;
    if (asset) {
      const assetFinish = String(asset.finish || "normal").toLowerCase();
      if (card.finish && card.finish !== assetFinish) {
        // "normal" é o código 0: escolher Normal numa impressão holo também
        // viaja no link
        finishCode = SHARE_FINISH_CODES.indexOf(card.finish);
      }
      // Idioma só quando foge do padrão da impressão (EN, ou JA nas exclusivas)
      const lang = cardLangOf(card);
      if (lang !== (asset.lang || "en")) langCode = SHARE_LANG_CODES.indexOf(lang);
    }
    entries.push({ rosterIndex, asset, finishCode, langCode });
  });
  return entries;
}

function createShareUrl() {
  const entries = buildShareEntries();
  if (!entries.length) return null;

  let prevRoster = 0;
  const parts = entries.map(({ rosterIndex, asset, finishCode, langCode }) => {
    const fields = [num36(rosterIndex - prevRoster)];
    prevRoster = rosterIndex;
    if (asset) {
      fields.push(String(asset.set || ""), String(asset.number || ""),
        finishCode >= 0 ? num36(finishCode) : "", langCode >= 0 ? num36(langCode) : "");
    }
    while (fields.length > 1 && !fields[fields.length - 1]) fields.pop();
    return fields.join("~");
  });

  const payload = `${SHARE_FORMAT_VERSION}:${parts.join(",")}`;
  // compressToEncodedURIComponent usa alfabeto URL-safe; sem a lib, o payload
  // percent-encoded funciona (link maior, mesma semântica).
  const encoded = typeof LZString !== "undefined"
    ? LZString.compressToEncodedURIComponent(payload)
    : encodeURIComponent(payload);

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
      // Centavos até R$ 1.000 (o menor anúncio da Liga é "R$ 104,90", não "R$ 105")
      maximumFractionDigits: amount < 1000 ? 2 : 0
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
  else if (value === "holo" || value === "foil") amount = entry.p.h ?? entry.p.n;
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
  if (price.listing) {
    const { lang, quality, extras } = price.listing;
    return t("ligaListingTitle", {
      price: formatMoney(price.amount, "BRL"),
      lang,
      quality,
      wanted: cardQuality,
      variant: LIGA_EXTRAS_LABEL[extras] || extras
    }) + (price.ligaNote ? ` · ${price.ligaNote}` : "") + (price.updated ? ` · ${price.updated}` : "");
  }
  if (price.liga) {
    return t("ligaTitle", {
      min: formatMoney(price.liga.min, "BRL"),
      avg: formatMoney(price.liga.avg, "BRL"),
      max: formatMoney(price.liga.max, "BRL")
    }) + (price.ligaNote ? ` · ${price.ligaNote}` : "") + (price.updated ? ` · ${price.updated}` : "");
  }
  const liga = price.ligaState === "loading" ? t("ligaLoadingSuffix")
    : (price.ligaState === "missing" ? t("ligaMissingSuffix") : "");
  const native = formatMoney(price.nativeAmount, price.nativeCurrency);
  const when = price.updated ? ` · ${price.updated}` : "";
  const link = price.url ? t("priceLinkSuffix") : "";
  return `${price.source}: ${native}${when}${liga}${link}`;
}

// Chave de ordenação da lista de variantes: preço na moeda exibida; sem preço
// conhecido vira Infinity (vai para o fim da lista).
function variantSortPrice(asset, pokemonName) {
  const hit = displayPriceFor(asset.file || "", asset.finish, pokemonName);
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

// ---- Preços da Liga Pokemon ---------------------------------------------------
// A Liga Pokemon é a fonte do preço exibido (grade, total, modal, ordenação).
// O site é estático e não consegue buscar na Liga (Cloudflare + CORS), então o
// preço vem de liga-prices.min.json, gerado por scripts/fetch_liga_prices.py
// (Chrome headless na máquina de quem mantém o site): o menor anúncio por
// variante, idioma e qualidade. A extensão Hoenn Hunter, se instalada,
// busca ao vivo (?view=cards/search) só as cartas que faltam no arquivo — essa
// busca mistura as variantes. Sem preço na Liga, vale o TCGplayer/Cardmarket.
const LIGA_PRICES_URL = "../assets/data/liga-prices.min.json";
let ligaSnapshot = new Map();      // file -> {u, s: [mín, méd, máx], p?: {"0"|"2"|"3": [mín, méd, máx]}}
let ligaSnapshotDate = "";
const LIGA_PREFIXED_NUMBER = /^[A-Za-z]+\d+$/;
const LIGA_CODE_PATTERN = /\(\s*(#?[A-Z]{0,4}\d{1,4}[A-Za-z]{0,3})\s*\/\s*([A-Z]{0,4}\d{1,4}|∞)\s*\)/i;
const LIGA_REPAINT_DELAY_MS = 400;

let ligaBridge = false;
let ligaRequestSeq = 0;
const ligaSearches = new Map();    // palavras do Pokémon -> {status, entries, blockedUrl}
const ligaRequests = new Map();    // requestId -> palavras do Pokémon
// Fila do site: uma busca por vez na extensão, e a carta aberta no modal fura
// a fila (senão esperaria as ~200 da grade na primeira carga)
const ligaQueue = [];
let ligaInFlight = false;
const ligaChanged = new Set();
let ligaRepaintTimer = null;

function ligaWords(text) {
  return String(text || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[-_&/]/g, " ")
    .replace(/[^a-z0-9\s]/g, "")
    .split(/\s+/)
    .filter(Boolean);
}

// "057" / "#057" -> "57" (mesma chave da extensão)
function ligaNumberKey(value) {
  return String(value || "").replace(/^#/, "").replace(/^0+(?=\w)/, "").toUpperCase();
}

// `priority`: vai para a frente da fila (carta aberta no modal);
// `retry`: tenta de novo uma busca que falhou ou pediu verificação
function requestLigaPrices(pokemonName, { priority = false, retry = false } = {}) {
  const key = ligaWords(pokemonName).join(" ");
  if (!ligaBridge || !key) return;

  const known = ligaSearches.get(key);
  if (known?.status === "loading") {
    const queued = ligaQueue.findIndex((job) => job.key === key);
    if (priority && queued > 0) ligaQueue.unshift(...ligaQueue.splice(queued, 1));
    return;
  }
  if (known && (known.status === "ok" || !retry)) return;

  ligaSearches.set(key, { status: "loading", entries: [] });
  const job = { key, query: pokemonName };
  if (priority) ligaQueue.unshift(job);
  else ligaQueue.push(job);
  pumpLigaQueue();
}

function pumpLigaQueue() {
  if (ligaInFlight || !ligaQueue.length) return;
  const job = ligaQueue.shift();
  ligaInFlight = true;
  const requestId = ++ligaRequestSeq;
  ligaRequests.set(requestId, job.key);
  window.postMessage({ source: "emerald-tracker", type: "liga-search", requestId, query: job.query }, window.location.origin);
}

// Referência da Liga para uma variante do catálogo: null = sem a impressão na
// Liga (ou sem extensão / busca falhou); senão {status: "loading" | "blocked" | "ok", ...}
function ligaPriceFor(asset, pokemonName) {
  if (!ligaBridge || !asset?.file) return null;
  const words = ligaWords(pokemonName);
  const search = ligaSearches.get(words.join(" "));
  if (!search || search.status === "error") return null;
  if (search.status !== "ok") return search;

  // Sem total no catálogo (promos) só casa com os promos da Liga ("053/∞")
  const total = setsIndex?.[asset.set]?.total;
  const wantedCode = `${ligaNumberKey(asset.number)}/${total ? ligaNumberKey(total) : "∞"}`;
  const candidates = search.entries.flatMap((entry) => {
    if (!(entry.avg > 0)) return [];
    const code = String(entry.name).match(LIGA_CODE_PATTERN);
    if (!code) return [];
    const entryWords = new Set(ligaWords(String(entry.name).replace(/\s*\(.*$/, "")));
    if (!words.every((word) => entryWords.has(word))) return [];
    return [{ entry, number: ligaNumberKey(code[1]), total: ligaNumberKey(code[2]) }];
  });
  let matches = candidates.filter((c) => `${c.number}/${c.total}` === wantedCode);
  // Número com prefixo de letras (XY66, SWSH029, TG20) é praticamente único
  // por Pokémon, mas a Liga usa outro total ("XY66/∞", "TG20/TG30"): casa
  // pelo número se só um total aparece (mesma regra do fetch_liga_prices.py)
  if (!matches.length && LIGA_PREFIXED_NUMBER.test(String(asset.number))) {
    const byNumber = candidates.filter((c) => c.number === ligaNumberKey(asset.number));
    if (new Set(byNumber.map((c) => c.total)).size === 1) matches = byNumber;
  }
  // Coleção de promos (svp, swshp...): o catálogo dá um total, a Liga cadastra
  // como promo ("106/∞") — mesma regra do fetch_liga_prices.py
  if (!matches.length && String(asset.set || "").endsWith("p")) {
    matches = candidates.filter((c) => c.number === ligaNumberKey(asset.number) && c.total === "∞");
  }
  matches = matches.map((c) => c.entry);
  if (!matches.length) return null;

  // Mais de uma edição com o mesmo código: junta as faixas, como a extensão
  return {
    status: "ok",
    min: Math.min(...matches.map((m) => m.min || m.avg)),
    avg: matches.reduce((sum, m) => sum + m.avg, 0) / matches.length,
    max: Math.max(...matches.map((m) => m.max || m.avg)),
    url: matches[0].url
  };
}

function ligaSearchState(pokemonName) {
  return ligaSearches.get(ligaWords(pokemonName).join(" ")) || null;
}

function assetForFile(file) {
  const index = file && assetIndexByFile ? assetIndexByFile.get(file) : undefined;
  return index === undefined ? null : cardAssets[index];
}

// Preço a partir de uma faixa da Liga (mín./méd./máx.): o valor exibido é o
// menor (o que dá para pagar agora); médio e máximo ficam no tooltip
function ligaDisplayPrice(liga, updated) {
  return { amount: liga.min || liga.avg, currency: "BRL", source: "Liga Pokemon", url: liga.url, updated, liga };
}

// Variante da Liga para o acabamento escolhido: "0" normal, "2" Foil,
// "3" Reverse Foil (ids de extras da Liga)
// Holo e Foil são o mesmo "Foil" na Liga
const LIGA_EXTRAS_BY_FINISH = { normal: "0", foil: "2", holo: "2", reverse: "3" };
const LIGA_EXTRAS_LABEL = { "0": "Normal", "2": "Foil", "3": "Reverse Foil" };

// Idioma da Liga para a bandeira do modal
const LIGA_LANG_BY_LOCALE = { pt: "PT", ja: "JP", en: "EN" };

// Menor anúncio no idioma escolhido, na qualidade escolhida ou melhor.
// Tenta a variante do acabamento; sem anúncio dela nesse idioma, as outras
// (a arte rara japonesa às vezes é anunciada como "normal").
function ligaListingPrice(snap, wanted, loc = cardLang) {
  const offers = snap.l && typeof snap.l === "object" ? snap.l : null;
  if (!offers) return null;
  const lang = LIGA_LANG_BY_LOCALE[loc] || "PT";
  const accepted = CARD_QUALITIES.slice(0, CARD_QUALITIES.indexOf(cardQuality) + 1);
  for (const extras of [...new Set([wanted, "0", "2", "3"])]) {
    const byQuality = offers[extras]?.[lang];
    if (!byQuality) continue;
    let best = null;
    accepted.forEach((quality) => {
      const value = byQuality[quality];
      if (value > 0 && (!best || value < best.value)) best = { value, quality };
    });
    if (best) return { ...best, lang, extras };
  }
  return null;
}

// Preço do arquivo para o acabamento, idioma e qualidade escolhidos. Sem
// anúncio que sirva, cai na faixa da variante (qualquer idioma/estado) e, sem
// ela, na da busca, que mistura as variantes. Toda substituição fica marcada
// (`approx`: "≈" na tela) e explicada no tooltip (`ligaNote`).
function ligaSnapshotPrice(snap, finish, loc = cardLang) {
  const wanted = LIGA_EXTRAS_BY_FINISH[String(finish || "").toLowerCase()] || "0";

  const listing = ligaListingPrice(snap, wanted, loc);
  if (listing) {
    const price = {
      amount: listing.value, currency: "BRL", source: "Liga Pokemon", url: snap.u,
      updated: ligaSnapshotDate, listing
    };
    const parts = [];
    if (listing.extras !== wanted) {
      price.approx = true;
      parts.push(t("ligaOtherVariant", { wanted: LIGA_EXTRAS_LABEL[wanted] || wanted, used: LIGA_EXTRAS_LABEL[listing.extras] || listing.extras }));
    }
    if (snap.o === 0) parts.push(t("ligaIncomplete"));
    price.ligaNote = parts.join(" · ");
    return price;
  }
  const noOffer = snap.l ? t("ligaNoListing", { lang: LIGA_LANG_BY_LOCALE[loc] || "PT", quality: cardQuality }) : "";
  const variants = snap.p && typeof snap.p === "object" ? snap.p : null;
  let range = null;
  let note = "";
  if (variants && Object.keys(variants).length) {
    const key = variants[wanted] ? wanted : (variants["0"] ? "0" : Object.keys(variants)[0]);
    range = variants[key];
    note = key === wanted
      ? LIGA_EXTRAS_LABEL[key] || ""
      : t("ligaOtherVariant", { wanted: LIGA_EXTRAS_LABEL[wanted] || wanted, used: LIGA_EXTRAS_LABEL[key] || key });
  } else if (Array.isArray(snap.s)) {
    range = snap.s;
    note = t("ligaMixed");
  }
  if (!range) return null;
  const price = ligaDisplayPrice({ min: range[0], avg: range[1], max: range[2], url: snap.u }, ligaSnapshotDate);
  price.ligaNote = [noOffer, note].filter(Boolean).join(" · ");
  // Sem anúncio no idioma/qualidade, outra variante ou faixa misturada
  price.approx = Boolean(noOffer) || note !== (LIGA_EXTRAS_LABEL[wanted] || "");
  return price;
}

// `loc`: idioma do preço — o da carta na grade/soma, a bandeira no modal
function displayPriceFor(file, finish, pokemonName, loc = cardLang) {
  const snap = file ? ligaSnapshot.get(file) : null;
  const snapPrice = snap ? ligaSnapshotPrice(snap, finish, loc) : null;
  // O arquivo tem o preço por variante; a busca ao vivo da extensão mistura
  // as variantes — só entra quando o arquivo não tem a carta
  if (snapPrice) return snapPrice;

  let live = null;
  if (ligaBridge && file) {
    requestLigaPrices(pokemonName);
    live = ligaPriceFor(assetForFile(file), pokemonName);
    if (live?.status === "ok") {
      const price = ligaDisplayPrice(live, t("ligaLive"));
      price.ligaNote = t("ligaMixed");
      price.approx = true;
      return price;
    }
  }

  const fallback = cardPriceFor(file, finish);
  if (!fallback) return null;
  return { ...fallback, ligaState: live?.status === "loading" ? "loading" : "missing" };
}

async function loadLigaSnapshot(fresh = false) {
  try {
    const response = await fetch(fresh ? `${LIGA_PRICES_URL}?t=${Date.now()}` : LIGA_PRICES_URL, fresh ? { cache: "no-store" } : undefined);
    if (!response.ok) return;
    const data = await response.json();
    if (!data?.prices || typeof data.prices !== "object") return;
    ligaSnapshot = new Map(Object.entries(data.prices));
    ligaSnapshotDate = String(data.generatedAt || "").slice(0, 10);
    renderCards();
    if (currentCardId !== null) renderVariantList(selectedAsset);
  } catch (error) {
    /* sem o arquivo, vale o TCGplayer */
  }
}

// Texto do preço: "≈" quando não é exatamente a variante/idioma/qualidade
// pedidos (o tooltip diz o que foi usado no lugar)
function priceText(price) {
  return `${price.approx ? "≈ " : ""}${formatMoney(price.amount, price.currency)}`;
}

function priceLoadingClass(price) {
  return price?.ligaState === "loading" ? " is-loading" : "";
}

function scheduleLigaRepaint(key) {
  ligaChanged.add(key);
  if (ligaRepaintTimer) return;
  ligaRepaintTimer = setTimeout(() => {
    ligaRepaintTimer = null;
    const changed = new Set(ligaChanged);
    ligaChanged.clear();
    renderCards();
    const card = cards.find((item) => item.id === currentCardId);
    if (card && changed.has(ligaWords(card.name).join(" "))) renderVariantList(selectedAsset);
  }, LIGA_REPAINT_DELAY_MS);
}

window.addEventListener("message", (event) => {
  if (event.source !== window || event.origin !== window.location.origin) return;
  const data = event.data;
  if (!data || data.source !== "emerald-extension") return;

  if (data.type === "hello") {
    if (ligaBridge) return;
    ligaBridge = true;
    const card = cards.find((item) => item.id === currentCardId);
    if (card) requestLigaPrices(card.name, { priority: true });
    // Repinta: cada preço exibido pede o seu Pokémon à fila
    renderCards();
    if (card) renderVariantList(selectedAsset);
    return;
  }

  if (data.type === "liga-search") {
    const key = ligaRequests.get(data.requestId);
    if (!key) return;
    ligaRequests.delete(data.requestId);
    ligaSearches.set(key, {
      status: data.status === "ok" || data.status === "blocked" ? data.status : "error",
      entries: Array.isArray(data.entries) ? data.entries : [],
      blockedUrl: data.blockedUrl || null
    });
    ligaInFlight = false;
    pumpLigaQueue();
    scheduleLigaRepaint(key);
  }
});

// A extensão pode ter carregado antes deste script (e o "hello" dela se
// perdido): pergunta de novo
window.postMessage({ source: "emerald-tracker", type: "ping" }, window.location.origin);

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
// A correspondência entre idiomas vem pronta do build (build_language_art.py →
// art.min.json): por arquivo do catálogo, a URL da arte em PT e em JA. PT usa
// o mesmo id da TCGdex (ou o mesmo print no CDN da Limitless); JA vem do
// vínculo "Int. Prints" da Limitless (print japonês ↔ internacional). Sem
// versão no idioma, o preview fica na arte local e a bandeira aparece apagada.
// Cartas exclusivas do Japão (asset.lang = "ja") só têm a arte japonesa.
const ART_URL = "../assets/data/art.min.json";
const CARD_LOCALES = ["en", "pt", "ja"];
// Padrão PT: o preço segue esta bandeira, e o mercado da Liga é brasileiro
let cardLang = "pt";
// Qualidade para o preço da Liga (escala da Liga, da melhor para a pior): o
// preço é o menor anúncio nessa qualidade ou melhor. Vale para o site todo,
// como o idioma.
const CARD_QUALITY_KEY = "pokemon_emerald_tcg_quality_v1";
const CARD_QUALITIES = ["M", "NM", "SP", "MP", "HP", "D"];
let cardQuality = "NM";
let artIndex = null;          // file -> { pt, ja } com URLs já expandidas
let artIndexPromise = null;

// "L:tpc/SV7/…" → base do CDN + caminho (o build encurta as URLs por prefixo).
function expandArtUrl(value, bases) {
  const match = /^([A-Z]):(.*)$/.exec(String(value || ""));
  return match && bases?.[match[1]] ? bases[match[1]] + match[2] : String(value || "");
}

function loadArtIndex() {
  if (!artIndexPromise) {
    artIndexPromise = fetch(ART_URL)
      .then((response) => (response.ok ? response.json() : null))
      .catch(() => null)
      .then((data) => {
        artIndex = new Map();
        Object.entries(data?.art || {}).forEach(([file, langs]) => {
          artIndex.set(file, {
            pt: langs.pt ? expandArtUrl(langs.pt, data.base) : "",
            ja: langs.ja ? expandArtUrl(langs.ja, data.base) : ""
          });
        });
        return artIndex;
      });
  }
  return artIndexPromise;
}

// URL da arte da variante no idioma `loc`; "" = não existe nesse idioma;
// undefined = índice de idiomas ainda carregando.
function localizedArtFor(asset, loc) {
  if (!asset?.file || isNoImageVariant(asset)) return "";
  if (asset.lang) return loc === asset.lang ? getAssetPath(asset.file) : "";
  if (loc === "en") return getAssetPath(asset.file);
  if (!artIndex) return undefined;
  return artIndex.get(asset.file)?.[loc] || "";
}

// Idioma da carta coletada ("en" | "pt" | "ja"), salvo com ela como o
// acabamento: define a arte da grade e o preço. Carta salva antes disso não
// tem idioma e fica EN (a arte que a grade sempre mostrou); exclusiva JP é JA.
function cardLangOf(card) {
  if (CARD_LOCALES.includes(card?.lang)) return card.lang;
  return assetForFile(cardAssetFile(card))?.lang || "en";
}

// Versão pequena da arte remota, para a grade: a TCGdex tem low.webp e a
// Limitless tem o sufixo _SM (~20-60 KB em vez de 0,3-1,8 MB)
function smallArtUrl(url) {
  const value = String(url || "");
  if (value.includes("assets.tcgdex.net/") && value.endsWith("/high.png")) return value.replace(/\/high\.png$/, "/low.webp");
  if (value.includes("limitlesstcg") && /\.png$/i.test(value) && !/_(XS|SM|LG)\.png$/i.test(value)) return value.replace(/\.png$/i, "_SM.png");
  return value;
}

// A grade só precisa do índice de artes quando alguma carta é PT/JA
let gridArtIndexRequested = false;
function requestGridArtIndex() {
  if (gridArtIndexRequested) return;
  gridArtIndexRequested = true;
  loadArtIndex().then(() => renderCards());
}

function setCardLang(next) {
  if (!CARD_LOCALES.includes(next) || next === cardLang) return;
  cardLang = next;
  try {
    localStorage.setItem(CARD_LANG_KEY, next);
  } catch (error) {
    /* storage indisponível — idioma da arte só desta página */
  }
  paintCardLangPicker();
  repaintPrices();
}

function setCardQuality(next) {
  if (!CARD_QUALITIES.includes(next) || next === cardQuality) return;
  cardQuality = next;
  try {
    localStorage.setItem(CARD_QUALITY_KEY, next);
  } catch (error) {
    /* storage indisponível — qualidade só desta página */
  }
  repaintPrices();
}

// O preço da Liga depende do idioma e da qualidade: repinta grade, total e
// o modal aberto (que também reordena as variantes por preço)
function repaintPrices() {
  renderCards();
  if (currentCardId !== null && selectedAsset) renderVariantList(selectedAsset);
  else if (selectedAsset) renderSelectedPreview(selectedAsset);
}

// Estado visual do seletor de bandeirinhas do modal + tooltip/aria por idioma.
// Bandeira de idioma sem versão da variante aberta fica apagada.
function paintCardLangPicker() {
  if (!cardLangPicker) return;
  if (!artIndex && selectedAsset) loadArtIndex().then(() => paintCardLangPicker());
  cardLangPicker.setAttribute("aria-label", t("cardLangAria"));
  const labels = { pt: "cardLangPt", ja: "cardLangJa", en: "cardLangEn" };
  cardLangPicker.querySelectorAll(".card-lang-flag").forEach((button) => {
    const loc = button.dataset.loc;
    const active = loc === cardLang;
    const available = !selectedAsset || localizedArtFor(selectedAsset, loc) !== "";
    button.setAttribute("aria-pressed", String(active));
    button.classList.toggle("is-unavailable", !available);
    const label = labels[loc] ? t(labels[loc]) : loc;
    const title = available ? label : `${label} — ${t("cardLangMissing")}`;
    button.title = title;
    button.setAttribute("aria-label", title);
  });
}

// Arte do preview no idioma escolhido. Nunca bloqueia: sem o índice ainda,
// mostra a local e troca quando ele chega (onRemote); sem versão no idioma,
// fica na local (a arte do próprio asset — EN, ou JA nas exclusivas).
function localizedPreviewSrc(asset, onRemote) {
  const localSrc = getAssetPath(asset?.file || "");
  const src = localizedArtFor(asset, cardLang);
  if (src === undefined) {
    const file = asset?.file;
    const probeLocale = cardLang;
    loadArtIndex().then(() => {
      if (selectedAsset?.file !== file || cardLang !== probeLocale) return;
      paintCardLangPicker();
      const remote = localizedArtFor(asset, probeLocale);
      if (remote) onRemote?.(remote);
    });
    return localSrc;
  }
  return src || localSrc;
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
    const price = displayPriceFor(cardAssetFile(card), card.finish, card.name, cardLangOf(card));
    if (!price) return;
    // Com câmbio tudo chega em BRL e soma junto; sem câmbio, moedas diferentes
    // não se somam — a carta fica fora do total até ter uma taxa.
    if (!any) currency = price.currency;
    else if (price.currency !== currency) return;
    sum += price.amount;
    any = true;
  });

  collectionTotalEl.textContent = any ? formatMoney(sum, currency) : formatMoney(0, "BRL");
}

// O próprio valor é o botão: clicar esconde; clicar de novo revela. Sem
// ícone de olho — o state vazio ("••••••") já comunica que está escondido.
function paintTotalEye() {
  if (!collectionTotalEl) return;
  const label = totalHidden ? t("totalHidden") : t("totalShown");
  collectionTotalEl.title = label;
  collectionTotalEl.setAttribute("aria-label", label);
  collectionTotalEl.setAttribute("aria-pressed", String(totalHidden));
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
    card.lang = "";
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
      card.lang = "";
      card.artPath = "";
    });
    // saveCards() não grava no Plan: o reset do salvo vai direto para o
    // storage, senão a tela zerava e a coleção antiga voltava ao recarregar
    persistCards(planSnapshot);
    savedCollected = new Map(planSnapshot.map((card) => [card.id, card.collected]));
  } else {
    saveCards();
    refreshSavedSnapshot();
  }
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
    if (!card.collected || !state) return;

    // v3: coleção + número (prefere a variante do próprio Pokémon); v1/v2:
    // posição no catálogo
    const samePrint = (item) => String(item.set) === state.set && String(item.number) === state.number;
    const asset = state.set
      ? getCardVariants(card.name).find(samePrint) || cardAssets.find(samePrint)
      : cardAssets[state.asset];
    if (!asset) return;

    card.lang = state.lang || "";
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

// ---- Presets da coleção -----------------------------------------------------
//Snapshot das cartas salvas (marcadas + variantes) guardado no navegador sob
//nome escolhido. "Salvar novo" pede confirmação; clicar no nome de um preset
//carrega aquela coleção (substitui a atual no localStorage).
function loadPresets() {
  try {
    const stored = JSON.parse(localStorage.getItem(PRESET_KEY) || "[]");
    return Array.isArray(stored) ? stored.filter((p) => p && typeof p.name === "string" && Array.isArray(p.cards)) : [];
  } catch (error) {
    return [];
  }
}

function savePresets(presets) {
  try {
    localStorage.setItem(PRESET_KEY, JSON.stringify(presets));
  } catch (error) {
    /* storage cheio/indisponível — presets só desta página */
  }
}

function presetSnapshot() {
  // Guarda o estado essencial por carta (marcada + variante escolhida).
  return cards.map((card) => ({
    id: card.id,
    collected: Boolean(card.collected),
    file: card.file || "",
    finish: card.finish || "",
    lang: card.lang || "",
    variant: card.variant || "",
    collection: card.collection || "",
    label: card.label || ""
  }));
}

function closePresetMenu() {
  if (!presetMenu) return;
  presetMenu.classList.remove("open");
  if (presetBtn) presetBtn.setAttribute("aria-expanded", "false");
}

function renderPresetMenu() {
  if (!presetMenuList) return;
  const presets = loadPresets();
  const saveNew = `
    <button type="button" role="menuitem" class="preset-option preset-save-new">
      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M12 5v14M5 12h14" />
      </svg>
      <span>${escapeHtml(t("presetSaveNew"))}</span>
    </button>`;
  const items = presets.map((preset, index) => `
    <div class="preset-row">
    <button type="button" role="menuitem" class="preset-option" data-preset="${index}">
      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
        <path d="M17 21v-8H7v8" />
        <path d="M7 3v5h8" />
      </svg>
      <span>${escapeHtml(preset.name)}</span>
      <em>${preset.cards.filter((c) => c.collected).length} ${t("presetCardsSuffix")}</em>
    </button>
    <button type="button" class="preset-delete" data-preset-del="${index}" aria-label="${escapeHtml(`${t("presetDelete")}: ${preset.name}`)}" title="${escapeHtml(t("presetDelete"))}">×</button>
    </div>`).join("");
  presetMenuList.innerHTML = saveNew + (items || `<div class="preset-empty">${escapeHtml(t("presetEmpty"))}</div>`);

  const saveBtnEl = presetMenuList.querySelector(".preset-save-new");
  if (saveBtnEl) saveBtnEl.addEventListener("click", openPresetAskModal);

  presetMenuList.querySelectorAll(".preset-option[data-preset]").forEach((button) => {
    button.addEventListener("click", () => applyPreset(Number(button.dataset.preset)));
  });
  presetMenuList.querySelectorAll(".preset-delete").forEach((el) => {
    el.addEventListener("click", (event) => {
      event.stopPropagation();
      const presetsNow = loadPresets();
      presetsNow.splice(Number(el.dataset.presetDel), 1);
      savePresets(presetsNow);
      renderPresetMenu();
    });
  });
}

function openPresetAskModal() {
  if (!presetAskModal) return;
  closePresetMenu();
  if (presetNameInput) presetNameInput.value = "";
  presetAskModal.classList.remove("hidden");
  presetAskModal.setAttribute("aria-hidden", "false");
  if (presetNameInput) setTimeout(() => presetNameInput.focus(), 30);
}

function closePresetAskModal() {
  if (!presetAskModal) return;
  presetAskModal.classList.add("hidden");
  presetAskModal.setAttribute("aria-hidden", "true");
}

function confirmSavePreset() {
  const raw = (presetNameInput?.value || "").trim();
  const name = raw || t("presetDefaultName", { n: loadPresets().length + 1 });
  const presets = loadPresets().filter((preset) => preset.name !== name);
  presets.push({ name, when: new Date().toISOString(), cards: presetSnapshot() });
  savePresets(presets);
  closePresetAskModal();
  renderPresetMenu();
}

function applyPreset(index) {
  if (sharedMode) return;
  const preset = loadPresets()[index];
  if (!preset) return;
  closePresetMenu();

  const byId = new Map(preset.cards.map((entry) => [entry.id, entry]));
  cards.forEach((card) => {
    const saved = byId.get(card.id);
    card.collected = Boolean(saved?.collected);
    card.file = saved?.collected ? saved.file || "" : "";
    card.finish = saved?.collected ? saved.finish || "" : "";
    card.lang = saved?.collected ? saved.lang || "" : "";
    card.variant = saved?.collected ? saved.variant || "" : "";
    card.label = saved?.collected ? saved.label || "" : "";
    card.artPath = saved?.collected && card.file ? getAssetPath(card.file) : "";
    card.collection = saved?.collected ? saved.collection || "" : "";
  });
  if (planMode) {
    // No Plan, o preset vira só o rascunho da tela: nada persiste, e sair do
    // modo volta ao snapshot salvo (comportamento padrão do modo).
    if (currentCardId !== null) closeModal();
    renderCards();
    return;
  }
  saveCards();
  refreshSavedSnapshot();
  if (currentCardId !== null) closeModal();
  renderCards();
}

if (presetBtn && presetMenu) {
  presetBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    const open = presetMenu.classList.toggle("open");
    presetBtn.setAttribute("aria-expanded", String(open));
    if (open) renderPresetMenu();
  });
  document.addEventListener("click", (event) => {
    if (!presetMenu.contains(event.target)) closePresetMenu();
  });
}

if (presetAskYes) {
  presetAskYes.addEventListener("click", confirmSavePreset);
}
if (presetAskNo) {
  presetAskNo.addEventListener("click", closePresetAskModal);
}
if (presetAskModal) {
  presetAskModal.addEventListener("click", (event) => {
    if (event.target === presetAskModal) closePresetAskModal();
  });
  if (presetNameInput) {
    presetNameInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        confirmSavePreset();
      }
    });
  }
}

function flashCopied(button) {
  if (!button) return;
  button.classList.add("copied");
  clearTimeout(button._copiedTimer);
  button._copiedTimer = setTimeout(() => {
    button.classList.remove("copied");
  }, 2000);
}

function flashShareCopied() {
  flashCopied(shareCopyBtn);
}

// Botão de link do header: copia direto (sem abrir o modal) e mostra o mesmo
// certinho do botão de copiar do modal. Sem textarea visível pra selecionar,
// então o fallback (clipboard API bloqueada) usa um textarea temporário.
async function copyHeaderShareLink() {
  const url = createShareUrl();
  if (!url) return;

  try {
    await navigator.clipboard.writeText(url);
    flashCopied(shareBtn);
    return;
  } catch (error) {
    /* clipboard API bloqueada (http sem localhost) — cai no fallback */
  }

  const temp = document.createElement("textarea");
  temp.value = url;
  temp.setAttribute("readonly", "");
  temp.style.position = "fixed";
  temp.style.opacity = "0";
  temp.style.pointerEvents = "none";
  document.body.appendChild(temp);
  temp.select();
  temp.setSelectionRange(0, url.length);
  try {
    document.execCommand("copy");
    flashCopied(shareBtn);
  } catch (error) {
    /* se até aqui falhar, não há mais fallback silencioso possível */
  }
  document.body.removeChild(temp);
}

// Tilt + shine num listener só na grade (delegação): sobrevive a qualquer
// troca de <article> no renderCards sem religar nada por carta.
let tiltedCard = null;

function resetCardTilt(cardElement) {
  if (!cardElement) return;
  cardElement.style.setProperty("--card-rotate-x", "0deg");
  cardElement.style.setProperty("--card-rotate-y", "0deg");
  cardElement.style.setProperty("--card-mx", "50%");
  cardElement.style.setProperty("--card-my", "50%");
}

function initCardTilt() {
  if (!cardGrid) return;

  cardGrid.addEventListener("pointermove", (event) => {
    const cardElement = event.target.closest(".card");
    if (cardElement !== tiltedCard) {
      resetCardTilt(tiltedCard);
      tiltedCard = cardElement;
    }
    if (!cardElement) return;

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

  cardGrid.addEventListener("pointerleave", () => {
    resetCardTilt(tiltedCard);
    tiltedCard = null;
  });
}

async function loadCardAssets() {
  let catalogBases = null;
  try {
    // Payload null = early fetch falhou (404/rede); refaz o fetch aqui.
    const payload = await catalogReady;
    if (payload) {
      cardAssets = Array.isArray(payload.cards) ? payload.cards : [];
      catalogStamp = String(payload.generatedAt || "");
      setsIndex = payload.sets && typeof payload.sets === "object" ? payload.sets : null;
      catalogBases = payload.base || null;
    } else {
      const response = await fetch("../assets/data/catalog.min.json");
      const data = response.ok ? await response.json() : null;
      cardAssets = Array.isArray(data?.cards) ? data.cards : [];
      catalogStamp = String(data?.generatedAt || "");
      setsIndex = data?.sets && typeof data.sets === "object" ? data.sets : null;
      catalogBases = data?.base || null;
    }
  } catch (error) {
    cardAssets = [];
    setsIndex = null;
  }

  // Repõe folder (derivável) e pré-computa as chaves EXATAS de nome uma única
  // vez — getCardVariants deixa de normalizar 5 campos por entrada a cada call.
  assetIndexByFile = new Map();
  remoteImageByFile = new Map();
  cardAssets.forEach((asset, index) => {
    if (asset.img) remoteImageByFile.set(asset.file, expandArtUrl(asset.img, catalogBases));
    asset.folder = String(asset.file || "").split("/")[0];
    asset.__keys = new Set([
      normalizePokemonKey(asset.pokemon),
      normalizePokemonKey(asset.folder),
      normalizePokemonKey(asset.printedPokemon),
      // Tokens do nome do arquivo antes do "_set-número" (cobre duplas como
      // "magikarp-wailord-gx", que pertencem aos dois Pokémon).
      ...String(asset.file || "").split("/").pop().replace(/\.[a-z]+$/i, "").split("_")[0]
        .toLowerCase().split(/[^a-z0-9]+/).filter(Boolean)
    ].filter(Boolean));
    assetIndexByFile.set(asset.file, index);
  });
  catalogAssetsPrepared = true;

  // Cartas marcadas numa exclusiva JP: o artPath salvo foi montado antes do
  // catálogo chegar (sem a URL remota) — corrige agora.
  if (remoteImageByFile.size) {
    let repaint = false;
    cards.forEach((card) => {
      const remote = card.file && remoteImageByFile.get(card.file);
      if (remote && card.artPath !== remote) {
        card.artPath = remote;
        repaint = true;
      }
    });
    if (repaint) renderCards();
  }

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
      card.lang = "";
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

// Miniatura WebP (assets/thumbs, gerada por scripts/build_thumbs.py) para a
// grade e a lista de variantes; o PNG original fica só no preview do modal.
// Arte remota (exclusivas JP) usa a versão pequena do CDN.
function getThumbPath(fileName) {
  if (fileName && remoteImageByFile.has(fileName)) return smallArtUrl(remoteImageByFile.get(fileName));
  if (!fileName) return getAssetPath(fileName);
  const normalized = String(fileName).trim().replace(/^\.?\//, "").replace(/^\/+/, "");
  if (!/\.png$/i.test(normalized)) return getAssetPath(fileName);
  return `../assets/thumbs/${normalized.replace(/\.png$/i, ".webp")}`;
}

// Miniatura que falhar (ex.: carta nova antes de rodar o build_thumbs.py)
// cai no PNG original, guardado em data-full.
document.addEventListener("error", (event) => {
  const img = event.target;
  if (!(img instanceof HTMLImageElement) || !img.dataset.full) return;
  const full = img.dataset.full;
  delete img.dataset.full;
  img.src = full;
}, true);

function getAssetPath(fileName) {
  if (!fileName) return "../assets/site/pokemon-tcg-card-back.png";
  const remote = remoteImageByFile.get(fileName);
  if (remote) return remote;

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
// Chaves no formato normalizado (normalizePokemonKey: "ex5.5" vira "ex5-5"),
// o mesmo de isNoImageVariant e da verificação de sincronização.
const NO_IMAGE_VARIANTS = new Set([
  "treecko|ex5-5|1",
  "wurmple|ex5-5|2",
  "torchic|ex5-5|3",
  "mudkip|ex5-5|4"
]);

function isNoImageVariant(asset) {
  if (!asset) return false;
  const key = `${normalizePokemonKey(asset.pokemon || asset.name)}|${normalizePokemonKey(asset.set)}|${normalizeCardNumber(asset.number)}`;
  return NO_IMAGE_VARIANTS.has(key);
}

function getCardVariants(cardName) {
  const normalized = normalizePokemonKey(cardName);

  // Índice O(1) após o load do catálogo (só 202 nomes possíveis na grade).
  if (catalogAssetsPrepared && variantsCache.has(normalized)) {
    return variantsCache.get(normalized);
  }

  // Só o Pokémon EXATO: nada de substring (era como "abra" pescar as cartas do
  // Kadabra — "kadabra" contém "abra"). Casam o nome impresso, o nome da API,
  // a pasta, ou um token exato do nome do arquivo (duplas "magikarp-wailord").
  const variants = cardAssets.filter((asset) => {
    const keys = asset.__keys || new Set([
      normalizePokemonKey(asset?.pokemon),
      normalizePokemonKey(asset?.folder),
      normalizePokemonKey(asset?.printedPokemon)
    ]);
    return keys.has(normalized);
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
// "Full art" = arte sangrada sem moldura tradicional (ex/V/VMAX/VSTAR em alt
// art). Verificado visualmente: "Ultra Rare"/"Holo Rare VMAX"/"Holo Rare
// VSTAR" são full art nesse catálogo; "Holo Rare V" comum, "Rare Holo LV.X",
// "Rare PRIME" e "Radiant Rare" têm moldura normal e ficam de fora.
const FULL_ART_RARITIES = new Set([
  "ultra rare",
  "holo rare vmax",
  "holo rare vstar",
  "shiny rare v",
  "shiny rare vmax"
]);

// Predicado por variante — usado tanto para qualificar o Pokémon (grade)
// quanto para restringir as opções mostradas dentro do modal.
function assetMatchesFilter(asset, filter) {
  if (filter === "mega") {
    return MEGA_PREFIXES.some((prefix) => String(asset.printedPokemon || "").toLowerCase().startsWith(prefix));
  }
  if (filter === "special") {
    return SPECIAL_ART_RARITIES.has(String(asset.rarity || "").trim().toLowerCase());
  }
  if (filter === "fullart") {
    return FULL_ART_RARITIES.has(String(asset.rarity || "").trim().toLowerCase());
  }
  return true;
}

function pokemonHasMegaVariant(cardName) {
  return getCardVariants(cardName).some((asset) => assetMatchesFilter(asset, "mega"));
}

function pokemonHasSpecialArtVariant(cardName) {
  return getCardVariants(cardName).some((asset) => assetMatchesFilter(asset, "special"));
}

function pokemonHasFullArtVariant(cardName) {
  return getCardVariants(cardName).some((asset) => assetMatchesFilter(asset, "fullart"));
}

// Variantes do Pokémon restritas ao filtro ativo (mega/special/fullart);
// com "all" ou sem nenhuma variante compatível, devolve a lista completa.
// `keepFile`: a variante salva da carta em edição entra mesmo fora do filtro —
// senão o modal abria em outra e o ✓ gravava por cima da escolha do usuário.
function getFilteredCardVariants(cardName, keepFile = "") {
  const variants = getCardVariants(cardName);
  if (activeFilter === "all") return variants;
  const filtered = variants.filter((asset) => assetMatchesFilter(asset, activeFilter));
  if (!filtered.length) return variants;
  const kept = keepFile && !filtered.some((asset) => asset.file === keepFile)
    ? variants.find((asset) => asset.file === keepFile)
    : null;
  return kept ? [kept, ...filtered] : filtered;
}

function cardMatchesFilter(card) {
  if (activeFilter === "mega" && !pokemonHasMegaVariant(card.name)) return false;
  if (activeFilter === "special" && !pokemonHasSpecialArtVariant(card.name)) return false;
  if (activeFilter === "fullart" && !pokemonHasFullArtVariant(card.name)) return false;
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
      lang: "",
      artPath: ""
    }));
    return;
  }

  let saved = null;
  try {
    saved = localStorage.getItem(STORAGE_KEY);
  } catch (error) {
    saved = null;  // storage bloqueado: coleção só desta página
  }

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
        lang: match?.lang || "",
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
  persistCards(cards);
  refreshSavedSnapshot();
}

// Grava a coleção no navegador. Storage bloqueado (aba anônima restrita) ou
// cheio não pode derrubar a marcação — a tela segue, só não persiste.
function persistCards(list) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  } catch (error) {
    console.warn("[Emerald TCG] Não foi possível salvar a coleção no navegador:", error);
  }
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

  // Coleta da Liga já rodando (servidor local): o clique só mostra o progresso
  const running = await ligaSyncRequest();
  if (running?.running) {
    pollLigaSync();
    return;
  }

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
    const apiErrors = [];

    for (let index = 0; index < pokemonNames.length; index += 1) {
      const pokemonName = pokemonNames[index];
      const progress = Math.round(((index + 1) / pokemonNames.length) * 100);
      updateSyncNotification(progress, t("syncChecking", { name: pokemonName }), t("syncProcessing", { i: index + 1, n: pokemonNames.length }));

      // Falha de rede/API num Pokémon não derruba a verificação inteira
      let remoteCards = null;
      try {
        const response = await fetch(`https://api.tcgdex.net/v2/en/cards?name=${encodeURIComponent(pokemonName)}`);
        remoteCards = response.ok ? await response.json() : null;
      } catch (error) {
        remoteCards = null;
      }
      if (!remoteCards) {
        apiErrors.push(pokemonName);
        continue;
      }
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

      // As 4 promos ex5.5 (Poké Card Creator Pack) não têm imagem publicada em
      // nenhuma fonte — não são falha do catálogo local
      const missingRemote = [...remoteSet].filter((key) => {
        const [pokemon, ,] = key.split("|");
        return pokemon === normalizePokemonKey(pokemonName) && !localMap.has(key) && !NO_IMAGE_VARIANTS.has(key);
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

    const realIssues = issues;

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

    // Pokémon sem resposta da API não viram "0 divergências": o aviso diz
    // quantos ficaram sem conferir (e a data só avança se todos foram)
    const apiNote = apiErrors.length ? ` ${t("syncApiErrors", { n: apiErrors.length })}` : "";
    if (apiErrors.length) console.warn("Sincronização: API sem resposta para", apiErrors);
    if (!apiErrors.length) saveLastSync();
    if (!realIssues.length) {
      updateSyncNotification(100, t("syncDone"), `${apiErrors.length ? "" : t("syncOk")}${apiNote}`.trim());
    } else {
      updateSyncNotification(100, t("syncDone"), `${t("syncDiffs", { extras: totalMissingLocal, novas: totalMissingRemote })}${apiNote}`);
      console.warn("Sincronização com divergências:", realIssues);
    }
    updateSyncDetailsLink();

    syncCloseBtn.hidden = false;
    // Servidor local (scripts/serve.py): em seguida, busca todas as cartas de
    // novo na Liga Pokemon
    await startLigaSync();
  } catch (error) {
    console.error(error);
    updateSyncNotification(100, t("syncFail"), t("syncFailMsg"));
    syncCloseBtn.hidden = false;
  } finally {
    syncCheckBtn.disabled = false;
    syncCheckBtn.setAttribute("aria-busy", "false");
  }
}

// ---- Coleta de preços da Liga pelo botão de sincronizar ---------------------
// Só com o site servido por scripts/serve.py (localhost): o servidor roda
// scripts/fetch_liga_prices.py na máquina (o navegador não alcança a Liga) e
// informa o progresso em /api/liga-sync. Ao abrir o site pela primeira vez
// no dia, roda sozinha a atualização diária (refaz as buscas e só abre as
// cartas cujo preço mudou + as da coleção; ~30-60 min). O botão faz a coleta
// completa de todas as cartas. Uma coleta completa leva horas; ela
// continua com o aviso fechado ou a página recarregada, e se for interrompida
// o próximo clique retoma de onde parou. No GitHub Pages não há API: o botão
// só faz a verificação do catálogo, como antes.
const LIGA_SYNC_API = "../api/liga-sync";
const LIGA_SYNC_POLL_MS = 3000;
const LIGA_SYNC_SECONDS_PER_PAGE = 2.4;
let ligaSyncTimer = null;

function isLocalSite() {
  return ["localhost", "127.0.0.1", "[::1]"].includes(window.location.hostname);
}

async function ligaSyncRequest(path = "", method = "GET", body = null) {
  if (!isLocalSite()) return null;
  try {
    const response = await fetch(`${LIGA_SYNC_API}${path}`, {
      method,
      cache: "no-store",
      headers: method === "POST" ? { "X-Emerald-Tracker": "1", "Content-Type": "application/json" } : undefined,
      body: body ? JSON.stringify(body) : undefined
    });
    if (response.status === 404) return null;  // servidor comum, sem a API
    const data = await response.json();
    return data && typeof data.running === "boolean" ? data : null;
  } catch (error) {
    return null;
  }
}

function paintLigaSync(state) {
  if (!state) return;
  const busy = state.running;
  if (syncStopBtn) syncStopBtn.classList.toggle("hidden", !busy);
  if (busy) {
    const searching = state.phase === "busca";
    const ratio = state.total ? state.done / state.total : 0;
    // Busca por Pokémon ~10% do tempo, páginas de carta o resto
    const progress = Math.round(searching ? ratio * 10 : 10 + ratio * 90);
    const label = searching
      ? t("ligaSyncSearch", { i: state.done, n: state.total || "…" })
      : t("ligaSyncCards", { i: state.done, n: state.total || "…" });
    const minutes = !searching && state.total
      ? Math.max(1, Math.round(((state.total - state.done) * LIGA_SYNC_SECONDS_PER_PAGE) / 60))
      : null;
    const daily = state.mode === "daily";
    const status = state.phase === "parando" ? t("ligaSyncStopping")
      : minutes ? t("ligaSyncEta", { min: minutes })
      : daily ? t("ligaDailyStarting")
      : (state.resumed ? t("ligaSyncResumed") : t("ligaSyncStarting"));
    updateSyncNotification(progress, label, status);
    return;
  }
  if (state.exitCode === 0) {
    updateSyncNotification(100, t(state.mode === "daily" ? "ligaDailyDone" : "ligaSyncDone"), `${state.summary || ""} ${t("ligaSyncPublish")}`.trim());
  } else if (state.exitCode != null) {
    updateSyncNotification(100, t("ligaSyncStopped"), state.lastLine || "");
  }
  if (syncCloseBtn) syncCloseBtn.hidden = false;
}

async function pollLigaSync() {
  clearTimeout(ligaSyncTimer);
  const state = await ligaSyncRequest();
  if (!state) return;
  paintLigaSync(state);
  if (state.running) {
    ligaSyncTimer = setTimeout(pollLigaSync, LIGA_SYNC_POLL_MS);
  } else if (state.exitCode === 0) {
    loadLigaSnapshot(true);  // preços novos na tela sem recarregar
  }
}

// Inicia (ou retoma) a coleta completa; se já estiver rodando, só acompanha
async function startLigaSync() {
  const state = await ligaSyncRequest("", "POST", { mode: "full" });
  if (!state) return false;
  if (syncCloseBtn) syncCloseBtn.hidden = false;
  pollLigaSync();
  return true;
}

// Ao abrir o site: uma coleta em andamento volta a aparecer; sem ela, se a
// atualização do dia ainda não rodou, dispara (com a coleção salva, que é
// refeita todo dia; num link compartilhado a coleção é de outra pessoa)
async function resumeLigaSyncDisplay() {
  const state = await ligaSyncRequest();
  if (!state) return;
  if (state.running) {
    pollLigaSync();
    return;
  }
  if (!state.dailyDue || sharedMode) return;
  const files = cards.filter((card) => card.collected).map(cardAssetFile).filter(Boolean);
  const started = await ligaSyncRequest("", "POST", { mode: "daily", files });
  if (started) {
    if (syncCloseBtn) syncCloseBtn.hidden = false;
    pollLigaSync();
  }
}

if (syncStopBtn) {
  syncStopBtn.addEventListener("click", async () => {
    await ligaSyncRequest("/stop", "POST");
    pollLigaSync();
  });
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
  const numberLabel = asset?.number ? ` · #${asset.number}` : "";

  return `${collectionLabel}${numberLabel}`;
}

// Selos dos acabamentos que a impressão tem, na linha da lista de variantes.
// Foil e Holo são a mesma variante nos dados, então aparece um "H" só.
function finishBadgesMarkup(asset) {
  const available = availableFinishes(asset);
  if (!available) return "";
  const badges = [["normal", "N"], ["holo", "H"], ["reverse", "R"]]
    .filter(([value]) => available.has(value))
    .map(([value, letter]) => `<span class="finish-badge" title="${escapeHtml(formatCardFinish(value))}">${letter}</span>`)
    .join("");
  return badges ? `<span class="finish-badges">${badges}</span>` : "";
}

// Opções de raridade dos botões do modal — seleção única. Os três valores
// cobrem o que o catálogo imprime (normal/holo/reverse); acabamento de links
// antigos (SHARE_FINISH_CODES) continua legível, só não é mais oferecido.
const RARITY_OPTIONS = [
  { value: "normal", label: "N", title: "Normal" },
  { value: "foil", label: "F", title: "Foil" },
  { value: "reverse", label: "R", title: "Reverse" },
  { value: "holo", label: "H", title: "Holo" }
];

// Acabamentos que a impressão tem: as variantes da TCGdex no catálogo (`vr`,
// ex. "nr") somadas às dos preços — a TCGdex às vezes omite o reverse que a
// Liga anuncia —, variantes da Liga ("0" normal, "2" foil/holo, "3" reverse)
// e do TCGplayer (n/h/r), mais o acabamento do catálogo e o salvo na carta.
// Sem nenhum dado, null = tudo liberado (não dá para saber).
function availableFinishes(asset, savedFinish = "") {
  const file = asset?.file || "";
  const found = new Set();
  const vr = String(asset?.vr || "");
  if (vr.includes("n")) found.add("normal");
  if (vr.includes("h")) { found.add("foil"); found.add("holo"); }
  if (vr.includes("r")) found.add("reverse");
  const snap = file ? ligaSnapshot.get(file) : null;
  const ligaKeys = new Set([...Object.keys(snap?.p || {}), ...Object.keys(snap?.l || {})]);
  const tcg = file ? priceIndex.get(file)?.p : null;
  if (ligaKeys.has("0") || tcg?.n != null) found.add("normal");
  if (ligaKeys.has("2") || tcg?.h != null) { found.add("foil"); found.add("holo"); }
  if (ligaKeys.has("3") || tcg?.r != null) found.add("reverse");
  if (!found.size) return null;
  [asset?.finish, savedFinish].forEach((finish) => {
    const choice = normalizeFinishChoice(finish);
    if (choice) found.add(choice);
  });
  return found;
}

// Acabamento em edição, trocado pelo primeiro disponível quando a impressão
// não tem o escolhido.
function ensureAvailableFinish(available) {
  if (!available || available.has(pendingFinish)) return;
  pendingFinish = RARITY_OPTIONS.map((option) => option.value).find((value) => available.has(value)) || "normal";
}

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
  if (normalized === "foil") return "foil";
  if (normalized === "reverse") return "reverse";
  if (normalized === "reverse holo" || normalized === "reverse foil") return "holo";
  if (normalized === "normal") return "normal";
  return "";
}

// Classe que ativa o shine na grade/preview. Acabamentos de links antigos
// ("reverse holo" etc.) caem no brilho mais próximo.
function finishShineClass(finish) {
  const value = String(finish || "").toLowerCase();
  if (value === "reverse") return "finish-reverse";
  if (value === "holo" || value === "foil" || value === "reverse holo" || value === "reverse foil") return "finish-holo";
  return "";
}

// Coluna de opções ao lado da arte do preview: um quadradinho por opção
// (seleção única). Raridade à esquerda, qualidade (preço) à direita.
function optionColumnMarkup(side, ariaLabel, options) {
  const buttons = options.map((option) => `
    <button type="button" class="option-square" role="radio" aria-checked="${option.selected}"
      ${option.attr}${option.title ? ` title="${escapeHtml(option.title)}"` : ""}${option.disabled ? " disabled" : ""}>
      <span class="option-box" aria-hidden="true"></span>
      <span class="option-text">${escapeHtml(option.label)}</span>
      ${option.price ? `<span class="option-price">${escapeHtml(option.price)}</span>` : ""}
    </button>
  `).join("");
  return `
    <div class="option-column option-column-${side}" role="radiogroup" aria-label="${escapeHtml(ariaLabel)}">
      ${buttons}
    </div>
  `;
}

// Cada botão mostra o preço daquele acabamento (idioma e qualidade atuais),
// para comparar sem clicar; "≈" quando o preço é de substituto.
function createRarityButtonsMarkup(currentFinish, available, asset, pokemonName) {
  return optionColumnMarkup("left", t("rarityField"), RARITY_OPTIONS.map((option) => {
    const disabled = Boolean(available && !available.has(option.value));
    const price = !disabled && asset?.file ? displayPriceFor(asset.file, option.value, pokemonName) : null;
    return {
      label: option.label,
      price: price ? priceText(price) : "",
      title: disabled ? t("finishUnavailable", { finish: option.title }) : (price ? `${option.title} · ${priceTitle(price)}` : option.title),
      selected: option.value === currentFinish,
      disabled,
      attr: `data-finish="${option.value}"`
    };
  }));
}

function createQualityButtonsMarkup() {
  return optionColumnMarkup("right", t("qualityField"), CARD_QUALITIES.map((quality) => ({
    label: quality,
    title: t(`quality${quality}`),
    selected: quality === cardQuality,
    attr: `data-quality="${quality}"`
  })));
}

// Liga os cliques das colunas recém-renderizadas no preview
function bindOptionColumns(root) {
  root.querySelectorAll(".option-square[data-quality]").forEach((button) => {
    button.addEventListener("click", () => setCardQuality(button.dataset.quality));
  });
  const finishButtons = root.querySelectorAll(".option-square[data-finish]");
  finishButtons.forEach((button) => {
    button.addEventListener("click", () => {
      pendingFinish = button.dataset.finish;
      rarityPinned = true;
      finishButtons.forEach((item) => item.setAttribute("aria-checked", String(item === button)));
      syncFinishPreview();
    });
  });
}

// Repinta o preço e o estado do shine no preview sem re-criar a
// imagem (evita flicker de reload da arte ao clicar num botão).
function syncFinishPreview() {
  if (!modalSummary) return;

  // O preço do preview segue o acabamento escolhido (normal/holo/reverse têm
  // preços próprios no TCGplayer quando a carta possui as duas faces).
  const pricePill = modalSummary.querySelector(".price-pill");
  const currentCard = cards.find((item) => item.id === currentCardId);
  const price = displayPriceFor(selectedAsset?.file || "", getCurrentFinish(), currentCard?.name || selectedAsset?.name);
  if (pricePill) {
    if (price) {
      pricePill.hidden = false;
      pricePill.textContent = priceText(price);
      pricePill.title = priceTitle(price);
      pricePill.classList.toggle("is-loading", price.ligaState === "loading");
    } else {
      pricePill.hidden = true;
    }
  }

  const stage = modalSummary.querySelector(".preview-stage");
  if (stage) {
    stage.classList.toggle("finish-holo", pendingFinish === "holo" || pendingFinish === "foil");
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

// Arte da carta na grade, no idioma dela: PT/JA vêm do índice de artes (versão
// pequena do CDN); sem arte nesse idioma, a miniatura local
function cardThumbPath(card) {
  const file = cardAssetFile(card);
  if (!file || card.artPath !== getAssetPath(file)) return card.artPath;
  const lang = cardLangOf(card);
  if (lang !== "en" && !assetForFile(file)?.lang) {
    if (!artIndex) requestGridArtIndex();
    const remote = artIndex?.get(file)?.[lang];
    if (remote) return smallArtUrl(remote);
  }
  return getThumbPath(file);
}

function createCardMarkup(card) {
  const resolvedClass = card.collected ? "revealed" : "uncollected";
  // No planejamento: "rascunho" = marcado agora mas ainda não salvo.
  const draftClass = planMode && card.collected && !savedCollected.get(card.id) ? " plan-draft" : "";
  const shineClass = card.collected ? finishShineClass(card.finish) : "";
  const thumbPath = card.collected && card.artPath ? cardThumbPath(card) : "";
  const photoMarkup = thumbPath
    ? `<img class="card-photo" loading="lazy" decoding="async" src="${thumbPath}"${thumbPath !== card.artPath ? ` data-full="${card.artPath}"` : ""} alt="${escapeHtml(card.name)}" />`
    : "";
  const nameLabel = !card.collected ? `<span class="card-name">${card.name}</span>` : "";
  const price = card.collected && card.artPath ? displayPriceFor(card.file, card.finish, card.name, cardLangOf(card)) : null;
  // Badge com link vira âncora para a loja (TCGplayer/Cardmarket); sem URL,
  // segue sendo span (pointer-events:none) para não engolir o clique da carta.
  const priceMarkup = price
    ? (price.url
      ? `<a class="card-price card-price-link${priceLoadingClass(price)}" href="${escapeHtml(price.url)}" target="_blank" rel="noopener noreferrer" title="${escapeHtml(priceTitle(price))}">${priceText(price)}</a>`
      : `<span class="card-price${priceLoadingClass(price)}" title="${escapeHtml(priceTitle(price))}">${priceText(price)}</span>`)
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

// Markup de cada <article> na tela, por id: o renderCards só troca as
// cartas cujo HTML mudou, sem refazer a grade inteira (e sem recarregar e
// decodificar de novo as imagens das outras).
const renderedCardMarkup = new Map();
const cardMarkupTemplate = document.createElement("template");

function renderCards() {
  const visible = cards.filter(cardMatchesFilter);
  const visibleIds = new Set(visible.map((card) => String(card.id)));
  const existing = new Map();
  Array.from(cardGrid.children).forEach((element) => {
    const id = element.dataset?.id;
    if (id !== undefined && visibleIds.has(id) && !existing.has(id)) {
      existing.set(id, element);
    } else {
      if (element === tiltedCard) tiltedCard = null;
      element.remove();
      renderedCardMarkup.delete(id);
    }
  });

  let cursor = cardGrid.firstElementChild;
  visible.forEach((card) => {
    const id = String(card.id);
    const markup = createCardMarkup(card).trim();
    let element = existing.get(id);
    if (!element || renderedCardMarkup.get(id) !== markup) {
      cardMarkupTemplate.innerHTML = markup;
      const fresh = cardMarkupTemplate.content.firstElementChild;
      if (element) {
        if (element === tiltedCard) tiltedCard = fresh;
        element.replaceWith(fresh);
        if (cursor === element) cursor = fresh;
      }
      element = fresh;
      renderedCardMarkup.set(id, markup);
    }
    if (element !== cursor) cardGrid.insertBefore(element, cursor);
    else cursor = cursor.nextElementSibling;
  });

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
  paintCardLangPicker();

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
  const finishes = availableFinishes(asset, card.file && card.file === asset?.file ? card.finish : "");
  ensureAvailableFinish(finishes);
  const shineClass = finishShineClass(getCurrentFinish());
  const previewPrice = displayPriceFor(asset?.file || "", getCurrentFinish(), card.name);
  // A Liga pediu a verificação do Cloudflare: link para passar por ela
  const ligaState = ligaBridge ? ligaSearchState(card.name) : null;
  const ligaBlockedPill = ligaState?.status === "blocked" && ligaState.blockedUrl
    ? `<a class="summary-pill liga-pill" href="${escapeHtml(ligaState.blockedUrl)}" target="_blank" rel="noopener noreferrer" title="${escapeHtml(t("ligaBlocked"))}">Liga ⚠</a>`
    : "";
  // <a> sem href = não clicável (mesma aparência); com URL vira link da loja.
  const priceHref = previewPrice?.url ? ` href="${escapeHtml(previewPrice.url)}" target="_blank" rel="noopener noreferrer"` : "";
  const pricePill = previewPrice
    ? `<a class="summary-pill price-pill${priceLoadingClass(previewPrice)}"${priceHref} title="${escapeHtml(priceTitle(previewPrice))}">${priceText(previewPrice)}</a>`
    : "";

  modalSummary.innerHTML = `
    <div class="preview-shell">
      ${createRarityButtonsMarkup(getCurrentFinish(), finishes, asset, card.name)}
      <div class="preview-stage${hasNoImage ? " no-image" : ""}${shineClass ? ` ${shineClass}` : ""}" aria-label="${escapeHtml(t("previewAria"))}">
        <img class="preview-image" src="${imageSrc}" data-src="${imageSrc}" data-local="${escapeHtml(localSrc)}" alt="${escapeHtml(card.name)}" />
        ${hasNoImage ? `<span class="no-image-badge">${escapeHtml(t("noImage"))}</span>` : ""}
      </div>
      ${createQualityButtonsMarkup()}
    </div>
    <div class="summary-meta">
      <span class="summary-pill">${variantLabel}</span>
      <strong>${escapeHtml(collectionLabel)}</strong>
      ${pricePill}
      ${ligaBlockedPill}
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

  bindOptionColumns(modalSummary);

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

  const variants = getFilteredCardVariants(card.name, card.collected ? card.file : "");
  const options = variants.length ? [...variants] : [{ name: card.name, set: "base", number: card.number, file: "" }];
  // Mais barato → mais caro (preço exibido, já convertido p/ R$ quando há
  // câmbio). Sem preço conhecido vai para o fim, em ordem original.
  options.sort((a, b) => variantSortPrice(a, card.name) - variantSortPrice(b, card.name));
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

  options.forEach((asset) => {
    const button = document.createElement("button");
    const noImage = isNoImageVariant(asset);
    button.type = "button";
    button.className = `variant-option ${selectedAsset && selectedAsset.file === asset.file ? "selected" : ""}`;
    const variantText = formatVariantLabel(asset);
    const price = displayPriceFor(asset.file || "", asset.finish, card.name);
    // <a> dentro de <button> é HTML inválido — o preço da linha é span com
    // listener próprio que abre a loja sem deixar o clique selecionar a variante.
    const priceMarkup = price
      ? `<span class="variant-price${price.url ? " variant-price-link" : ""}${priceLoadingClass(price)}"${price.url ? ` data-store="${escapeHtml(price.url)}"` : ""} title="${escapeHtml(priceTitle(price))}">${priceText(price)}</span>`
      : "";

    button.innerHTML = `
      <img class="variant-thumb" loading="lazy" decoding="async" src="${getThumbPath(asset.file)}" data-full="${getAssetPath(asset.file)}" alt="${escapeHtml(`${asset.pokemon || card.name} · ${variantText}`)}" />
      <span class="variant-label">${variantText}${noImage ? `<em class="variant-no-image">· ${escapeHtml(t("noImage"))}</em>` : ""}${finishBadgesMarkup(asset)}</span>
      ${priceMarkup}
    `;

    button.addEventListener("click", () => {
      selectedAsset = asset;
      const assetIndex = options.findIndex((item) => item.file === asset.file && item.name === asset.name && item.set === asset.set);
      currentVariantIndex = assetIndex >= 0 ? assetIndex : 0;
      renderVariantList(asset);
    });

    // Clicar no preço abre a loja (ou a Liga) em aba nova sem trocar a
    // variante selecionada.
    button.querySelectorAll(".variant-price-link").forEach((priceEl) => {
      priceEl.addEventListener("click", (event) => {
        if (!priceEl.dataset.store) return;
        event.stopPropagation();
        window.open(priceEl.dataset.store, "_blank", "noopener,noreferrer");
      });
    });

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

  const variants = getFilteredCardVariants(card.name, mode === "edit" ? card.file : "");
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

  // Em edição a bandeira abre no idioma salvo da carta; carta nova começa na
  // última bandeira usada
  if (mode === "edit" && card.collected) cardLang = cardLangOf(card);

  // Antes de renderizar: a carta aberta fura a fila da Liga
  requestLigaPrices(card.name, { priority: true, retry: true });
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
  // Foco no diálogo: os atalhos (N/F/R/H, Enter) valem na hora, sem clicar
  modal.querySelector(".modal")?.focus({ preventScroll: true });
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
  // Idioma da bandeira do modal (exclusiva JP é sempre JA)
  card.lang = assetInfo?.lang || cardLang;
  card.label = assetInfo
    ? `${assetInfo.collection || assetInfo.set} · ${formatCardFinish(finishValue)} · #${assetInfo.number}`
    : t("officialCard");
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
  card.lang = "";
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

// O botão do header não abre mais o modal — copia o link direto (o modal
// interno com textarea/aviso de link longo fica só como fallback de
// referência, sem ponto de entrada na UI por enquanto).
if (shareBtn) {
  shareBtn.addEventListener("click", copyHeaderShareLink);
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

// Setas de trocar a variante: na linha das bandeiras, acima das colunas de
// raridade (‹) e qualidade (›)
document.querySelectorAll("#prevCardBtn, #nextCardBtn").forEach((button) => {
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    changeSelectedVariant(button.dataset.nav === "next" ? 1 : -1);
  });
});

// Seletor de idioma da arte (bandeirinhas no lugar do título do modal).
if (cardLangPicker) {
  cardLangPicker.querySelectorAll(".card-lang-flag").forEach((button) => {
    button.addEventListener("click", () => setCardLang(button.dataset.loc));
  });
}

// Clicar no valor alterna esconder/mostrar a soma do painel.
if (collectionTotalEl) {
  collectionTotalEl.addEventListener("click", () => setTotalHidden(!totalHidden));
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

// Mobile: botão ⋮ reúne as ações do header num painel suspenso.
function setMobileMenuOpen(open) {
  document.body.classList.toggle("menu-open", open);
  if (mobileMenuBtn) {
    mobileMenuBtn.setAttribute("aria-expanded", String(open));
    const label = t(open ? "menuClose" : "menuAria");
    mobileMenuBtn.setAttribute("aria-label", label);
    mobileMenuBtn.title = label;
  }
}

(function initMobileMenu() {
  if (!mobileMenuBtn) return;

  mobileMenuBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    const open = !document.body.classList.contains("menu-open");
    setMobileMenuOpen(open);
    // No mobile a lista de presets fica embutida no painel: precisa já vir pintada.
    if (open) renderPresetMenu();
  });

  // Tocar fora do painel fecha; escolher uma opção (exceto abrir o submenu de
  // filtro) também fecha. No desktop não há menu (width > 760).
  document.addEventListener("click", (event) => {
    if (!document.body.classList.contains("menu-open")) return;
    const headerRight = document.querySelector(".header-right");
    if (!headerRight) return;
    if (headerRight.contains(event.target)) {
      const option = event.target.closest("button");
      if (option && option.id !== "filterTrigger") setMobileMenuOpen(false);
      return;
    }
    if (!mobileMenuBtn.contains(event.target)) setMobileMenuOpen(false);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) setMobileMenuOpen(false);
  });
})();

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (presetAskModal && !presetAskModal.classList.contains("hidden")) {
      closePresetAskModal();
      return;
    }
    if (document.body.classList.contains("menu-open")) {
      setMobileMenuOpen(false);
      return;
    }
    if (presetMenu && presetMenu.classList.contains("open")) {
      closePresetMenu();
      return;
    }
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

  // N/F/R/H escolhem o acabamento (se a impressão tiver) e Enter salva —
  // fora de campos de texto e sem modificadores, para não roubar atalhos.
  // Só com o foco no modal ou solto: o Enter que abriu a carta na grade
  // chega aqui já com o modal aberto e não pode salvar de cara.
  const fromModal = event.target === document.body || modal.contains(event.target);
  const typing = event.target.closest?.("input, textarea, select, [contenteditable]");
  if (fromModal && !typing && !event.ctrlKey && !event.metaKey && !event.altKey) {
    const finish = { n: "normal", f: "foil", r: "reverse", h: "holo" }[event.key.toLowerCase()];
    if (finish) {
      const button = modalSummary?.querySelector(`.option-square[data-finish="${finish}"]`);
      if (button && !button.disabled) {
        event.preventDefault();
        button.click();
      }
      return;
    }
    // Enter num botão focado já o aciona; só salva quando o foco está solto
    if (event.key === "Enter" && !event.target.closest?.("button, a")) {
      event.preventDefault();
      confirmBtn.click();
      return;
    }
  }

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
    const storedQuality = localStorage.getItem(CARD_QUALITY_KEY);
    if (CARD_QUALITIES.includes(storedQuality)) cardQuality = storedQuality;
    totalHidden = localStorage.getItem(TOTAL_HIDDEN_KEY) === "1";
  } catch (error) {
    /* storage indisponível — segue no padrão EN */
  }

  initCardTilt();
  loadCards();
  refreshSavedSnapshot();
  // Link compartilhado é vitrine: nada de reset nem carregar/salvar presets
  // (o Plan já sai escondido).
  if (sharedMode) {
    if (planToggle) planToggle.hidden = true;
    if (resetAllBtn) resetAllBtn.hidden = true;
    if (presetBtn) presetBtn.hidden = true;
  }
  renderSharedBanner();
  applyI18n();  // resolve rótulos estáticos + re-renderiza com o idioma salvo
  // A grade não depende do catálogo: pinta já; a base chega em background.
  renderCards();
  loadCardAssets();
  readFxCache();
  loadPriceData();
  loadLigaSnapshot();
  refreshFx();
  resumeLigaSyncDisplay();
})();
