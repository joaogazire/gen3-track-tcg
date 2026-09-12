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
const syncLastUpdated = document.getElementById("syncLastUpdated");
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

let cards = [];
let currentCardId = null;
let selectedAsset = null;
let cardAssets = [];
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

// Linhas de divergência da última sincronização (para o relatório "Detalhes").
let syncReportRows = [];

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
      <span>Este link não pôde ser lido (versão antiga do site?) — mostrando a sua coleção.</span>
      <button type="button" class="shared-banner-clear">Entendi</button>
    `;
    banner.querySelector(".shared-banner-clear").addEventListener("click", clearSharedHash);
  } else {
    banner.innerHTML = `
      <span>Você está vendo a coleção compartilhada por um link — edição bloqueada.</span>
      <button type="button" class="shared-banner-clear">Ver minha coleção</button>
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

  const url = createShareUrl();
  shareModal.classList.remove("hidden");
  shareModal.setAttribute("aria-hidden", "false");

  if (shareLinkOutput) {
    shareLinkOutput.value = url || "";
    shareLinkOutput.placeholder = url ? "" : "Marque pelo menos uma carta para gerar um link.";
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
  shareCopyBtn.textContent = "Copiado!";
  clearTimeout(flashShareCopied.timer);
  flashShareCopied.timer = setTimeout(() => {
    shareCopyBtn.textContent = "Copiar link";
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
  });

  cardElement.addEventListener("pointerleave", () => {
    cardElement.style.setProperty("--card-rotate-x", "0deg");
    cardElement.style.setProperty("--card-rotate-y", "0deg");
  });
}

async function loadCardAssets() {
  try {
    // Payload null = early fetch falhou (404/rede); refaz o fetch aqui.
    const payload = await catalogReady;
    if (payload) {
      cardAssets = Array.isArray(payload.cards) ? payload.cards : [];
      catalogStamp = String(payload.generatedAt || "");
    } else {
      const response = await fetch("../assets/data/catalog.min.json");
      const data = response.ok ? await response.json() : null;
      cardAssets = Array.isArray(data?.cards) ? data.cards : [];
      catalogStamp = String(data?.generatedAt || "");
    }
  } catch (error) {
    cardAssets = [];
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
  if (sharedMode) return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cards));
}

function updateProgressBar() {
  const collectedCountValue = cards.filter((card) => card.collected).length;
  const percent = Math.round((collectedCountValue / TOTAL_CARDS) * 100);

  if (progressText) progressText.textContent = `${collectedCountValue} / ${TOTAL_CARDS} cartas`;
  if (progressPercent) {
    progressPercent.textContent = `${percent}%`;
    // Tooltip nativo com o resumo completo.
    progressPercent.title = `${collectedCountValue}/${TOTAL_CARDS} completas · ${TOTAL_CARDS - collectedCountValue} faltando`;
  }
  if (progressPercentCenter) {
    progressPercentCenter.textContent = `${percent}%`;
    progressPercentCenter.title = progressPercent ? progressPercent.title : "";
  }
  if (progressFill) progressFill.style.width = `${percent}%`;

  if (progressFill && progressPercentCenter) {
    const progressWidth = progressFill.parentElement.clientWidth || 1;
    const fillWidth = progressFill.offsetWidth || 0;
    const leftOffset = Math.min(Math.max(fillWidth - 26, 10), progressWidth - 42);
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
const STATUS_LABELS = {
  novo: "Novo na database",
  extra: "Extra local"
};

function openSyncDetailsReport() {
  const rows = syncReportRows.map((row) => `
      <tr>
        <td>${escapeHtml(row.pokemon)}</td>
        <td>${escapeHtml(row.setId)}</td>
        <td>${escapeHtml(row.number)}</td>
        <td class="status-${escapeHtml(row.status)}">${STATUS_LABELS[row.status] || escapeHtml(row.status)}</td>
      </tr>`).join("");

  const html = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <title>Relatório de sincronização — Pokémon Emerald TCG</title>
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
  <h1>Relatório de sincronização</h1>
  <p>Gerado em ${new Date().toLocaleString("pt-BR")} — comparação entre o catálogo local e a série EX da TCGdex.</p>
  <table>
    <thead><tr><th>Pokémon</th><th>Set</th><th>Número</th><th>Status</th></tr></thead>
    <tbody>${rows || '<tr><td colspan="4" class="empty">Nenhuma divergência registrada.</td></tr>'}</tbody>
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

  return date.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit"
  });
}

function updateLastSyncDisplay(isoString) {
  const label = isoString ? formatSyncTimestamp(isoString) : "nunca";

  if (syncCheckBtn) syncCheckBtn.title = `Verificar sincronização com o banco de dados\n${label}`;
  if (syncLastUpdated) syncLastUpdated.textContent = label;
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

    updateSyncNotification(0, "Catálogo local carregado", `${cardAssets.length} cartas na base`);
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
      updateSyncNotification(progress, `Verificando ${pokemonName}...`, `Processando ${index + 1} / ${pokemonNames.length}`);

      const response = await fetch(`https://api.tcgdex.net/v2/en/cards?name=${encodeURIComponent(pokemonName)}`);
      if (!response.ok) {
        issues.push({ pokemon: pokemonName, error: "API indisponível" });
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
      updateSyncNotification(100, "Sincronização concluída", "Tudo alinhado com a database.");
    } else {
      saveLastSync();
      updateSyncNotification(100, "Sincronização concluída", `Divergências: ${totalMissingLocal} extras · ${totalMissingRemote} novas.`);
      console.warn("Sincronização com divergências:", realIssues);
    }
    updateSyncDetailsLink();

    syncCloseBtn.hidden = false;
  } catch (error) {
    console.error(error);
    updateSyncNotification(100, "Falha na sincronização", "Não foi possível verificar a database no momento.");
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

function formatVariantLabel(asset) {
  const collectionLabel = asset?.collection || asset?.set || "Coleção";
  const finishLabel = formatCardFinish(asset?.finish || "normal");
  const numberLabel = asset?.number ? ` · #${asset.number}` : "";

  return `${collectionLabel} · ${finishLabel}${numberLabel}`;
}

// Opções de acabamento do select do modal (valores no mesmo formato do catálogo).
const FINISH_OPTIONS = [
  { value: "normal", label: "Normal" },
  { value: "holo", label: "Foil (Holo)" },
  { value: "reverse", label: "Reverse" },
  { value: "reverse holo", label: "Reverse Foil" },
  { value: "full art", label: "Full Art" },
  { value: "secret", label: "Secret" },
  { value: "shiny", label: "Shiny" }
];

function getCurrentFinish() {
  const card = cards.find((item) => item.id === currentCardId);
  return card?.finish || selectedAsset?.finish || "normal";
}

function createFinishSelectMarkup(currentFinish) {
  const options = FINISH_OPTIONS.map((option) => `
    <option value="${option.value}"${option.value === currentFinish ? " selected" : ""}>${option.label}</option>
  `).join("");

  return `
    <label class="finish-field">
      <span class="field-label finish-label">Raridade da carta</span>
      <select id="finishSelect" class="finish-select" aria-label="Raridade da carta">${options}</select>
    </label>
  `;
}

function createCardMarkup(card) {
  const resolvedClass = card.collected ? "revealed" : "uncollected";
  const photoMarkup = card.collected && card.artPath ? `<img class="card-photo" src="${card.artPath}" alt="${escapeHtml(card.name)}" />` : "";
  const nameLabel = !card.collected ? `<span class="card-name">${card.name}</span>` : "";

  return `
    <article class="card ${resolvedClass}" data-id="${card.id}" tabindex="0" aria-label="${escapeHtml(card.name)}">
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
  const imageSrc = hasNoImage ? "../assets/site/pokemon-tcg-card-back.png" : getAssetPath(asset?.file || "");
  const card = cards.find((item) => item.id === currentCardId) || { name: asset?.name || "Carta", number: asset?.number || "" };
  const collectionLabel = asset?.collection || asset?.set || "Coleção";
  const variantLabel = asset?.number ? `#${asset.number}` : "Versão";
  const rarityLabel = formatCardFinish(asset?.finish || getCurrentFinish());

  modalSummary.innerHTML = `
    <div class="preview-shell">
      <button type="button" class="preview-nav prev" data-nav="prev" aria-label="Carta anterior">&#8249;</button>
      <div class="preview-stage${hasNoImage ? " no-image" : ""}" aria-label="Pré-visualização da carta">
        <img class="preview-image" src="${imageSrc}" alt="${escapeHtml(card.name)}" />
        ${hasNoImage ? '<span class="no-image-badge">Sem imagem disponível</span>' : ""}
      </div>
      <button type="button" class="preview-nav next" data-nav="next" aria-label="Próxima carta">&#8250;</button>
    </div>
    <div class="summary-meta">
      <span class="summary-pill">${variantLabel}</span>
      <strong>${escapeHtml(collectionLabel)}</strong>
      <span class="summary-pill rarity-pill">${escapeHtml(rarityLabel)}</span>
      ${hasNoImage ? '<span class="summary-pill no-image-pill">promo ex5.5</span>' : ""}
    </div>
  `;

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
  const options = variants.length ? variants : [{ name: card.name, set: "base", number: card.number, file: "" }];
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
  renderSelectedPreview(selectedAsset);

  // Select de raridade — persiste a escolha por carta no card coletado.
  const existingFinish = cards.find((item) => item.id === currentCardId)?.finish
    || selectedAsset?.finish
    || "normal";
  const finishHost = document.getElementById("finishFieldHost");
  if (finishHost) {
    finishHost.innerHTML = createFinishSelectMarkup(existingFinish);
    const finishSelect = finishHost.querySelector("#finishSelect");
    if (finishSelect) {
      finishSelect.value = existingFinish;
      finishSelect.addEventListener("change", () => {
        if (selectedAsset) selectedAsset.finish = finishSelect.value;
      });
    }
  }

  options.forEach((asset) => {
    const button = document.createElement("button");
    const noImage = isNoImageVariant(asset);
    button.type = "button";
    button.className = `variant-option ${selectedAsset && selectedAsset.file === asset.file ? "selected" : ""}`;
    const variantText = formatVariantLabel(asset);

    button.innerHTML = `
      <img class="variant-thumb" loading="lazy" decoding="async" src="${getAssetPath(asset.file)}" alt="${escapeHtml(asset.name)}" />
      <span class="variant-label">${variantText}${noImage ? '<em class="variant-no-image">· sem imagem</em>' : ""}</span>
    `;

    button.addEventListener("click", () => {
      selectedAsset = asset;
      const assetIndex = options.findIndex((item) => item.file === asset.file && item.name === asset.name && item.set === asset.set);
      currentVariantIndex = assetIndex >= 0 ? assetIndex : 0;
      renderVariantList(asset);
    });

    variantList.appendChild(button);
  });
}

function openModal(cardId, mode = "collect") {
  const card = cards.find((item) => item.id === cardId);
  if (!card) return;

  currentCardId = cardId;
  modalTitle.textContent = mode === "collect" ? "Adicionar carta" : "Editar carta";

  const variants = getCardVariants(card.name);
  const defaultAsset = variants[0] || { name: card.name, set: "base", number: card.number, file: "" };
  selectedAsset = defaultAsset;

  renderVariantList(defaultAsset);

  if (mode === "collect") {
    removeBtn.classList.add("hidden");
    confirmBtn.textContent = "Salvar";
  } else {
    removeBtn.classList.remove("hidden");
    confirmBtn.textContent = "Atualizar";
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

  const finishValue = assetInfo?.finish || getCurrentFinish() || "normal";

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

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
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

(function initFilterPills() {
  const pills = document.querySelectorAll(".top-actions .pill-btn");

  pills.forEach((pill) => {
    pill.addEventListener("click", () => {
      const filter = pill.dataset.filter;
      if (!filter || filter === activeFilter) return;

      activeFilter = filter;
      pills.forEach((item) => {
        const isActive = item === pill;
        item.classList.toggle("active", isActive);
        item.setAttribute("aria-pressed", String(isActive));
      });
      renderCards();
    });
  });
})();

(function init() {
  loadCards();
  renderSharedBanner();
  // A grade não depende do catálogo: pinta já; a base chega em background.
  renderCards();
  loadCardAssets();
})();
