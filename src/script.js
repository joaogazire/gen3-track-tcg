const hoennPokemon = [
  { id: 252, number: 252, name: "Treecko" },
  { id: 253, number: 253, name: "Grovyle" },
  { id: 254, number: 254, name: "Sceptile" },
  { id: 255, number: 255, name: "Torchic" },
  { id: 256, number: 256, name: "Combusken" },
  { id: 257, number: 257, name: "Blaziken" },
  { id: 258, number: 258, name: "Mudkip" },
  { id: 259, number: 259, name: "Marshtomp" },
  { id: 260, number: 260, name: "Swampert" },
  { id: 261, number: 261, name: "Poochyena" },
  { id: 262, number: 262, name: "Mightyena" },
  { id: 263, number: 263, name: "Zigzagoon" },
  { id: 264, number: 264, name: "Linoone" },
  { id: 265, number: 265, name: "Wurmple" },
  { id: 266, number: 266, name: "Silcoon" },
  { id: 267, number: 267, name: "Beautifly" },
  { id: 268, number: 268, name: "Cascoon" },
  { id: 269, number: 269, name: "Dustox" },
  { id: 270, number: 270, name: "Lotad" },
  { id: 271, number: 271, name: "Lombre" },
  { id: 272, number: 272, name: "Ludicolo" },
  { id: 273, number: 273, name: "Seedot" },
  { id: 274, number: 274, name: "Nuzleaf" },
  { id: 275, number: 275, name: "Shiftry" },
  { id: 276, number: 276, name: "Taillow" },
  { id: 277, number: 277, name: "Swellow" },
  { id: 278, number: 278, name: "Wingull" },
  { id: 279, number: 279, name: "Pelipper" },
  { id: 280, number: 280, name: "Ralts" },
  { id: 281, number: 281, name: "Kirlia" },
  { id: 282, number: 282, name: "Gardevoir" },
  { id: 283, number: 283, name: "Surskit" },
  { id: 284, number: 284, name: "Masquerain" },
  { id: 285, number: 285, name: "Shroomish" },
  { id: 286, number: 286, name: "Breloom" },
  { id: 287, number: 287, name: "Slakoth" },
  { id: 288, number: 288, name: "Vigoroth" },
  { id: 289, number: 289, name: "Slaking" },
  { id: 290, number: 290, name: "Nincada" },
  { id: 291, number: 291, name: "Ninjask" },
  { id: 292, number: 292, name: "Shedinja" },
  { id: 293, number: 293, name: "Whismur" },
  { id: 294, number: 294, name: "Loudred" },
  { id: 295, number: 295, name: "Exploud" },
  { id: 296, number: 296, name: "Makuhita" },
  { id: 297, number: 297, name: "Hariyama" },
  { id: 298, number: 298, name: "Azurill" },
  { id: 299, number: 299, name: "Nosepass" },
  { id: 300, number: 300, name: "Skitty" },
  { id: 301, number: 301, name: "Delcatty" },
  { id: 302, number: 302, name: "Sableye" },
  { id: 303, number: 303, name: "Mawile" },
  { id: 304, number: 304, name: "Aron" },
  { id: 305, number: 305, name: "Lairon" },
  { id: 306, number: 306, name: "Aggron" },
  { id: 307, number: 307, name: "Meditite" },
  { id: 308, number: 308, name: "Medicham" },
  { id: 309, number: 309, name: "Electrike" },
  { id: 310, number: 310, name: "Manectric" },
  { id: 311, number: 311, name: "Plusle" },
  { id: 312, number: 312, name: "Minun" },
  { id: 313, number: 313, name: "Volbeat" },
  { id: 314, number: 314, name: "Illumise" },
  { id: 315, number: 315, name: "Roselia" },
  { id: 316, number: 316, name: "Gulpin" },
  { id: 317, number: 317, name: "Swalot" },
  { id: 318, number: 318, name: "Carvanha" },
  { id: 319, number: 319, name: "Sharpedo" },
  { id: 320, number: 320, name: "Wailmer" },
  { id: 321, number: 321, name: "Wailord" },
  { id: 322, number: 322, name: "Numel" },
  { id: 323, number: 323, name: "Camerupt" },
  { id: 324, number: 324, name: "Torkoal" },
  { id: 325, number: 325, name: "Spoink" },
  { id: 326, number: 326, name: "Grumpig" },
  { id: 327, number: 327, name: "Spinda" },
  { id: 328, number: 328, name: "Trapinch" },
  { id: 329, number: 329, name: "Vibrava" },
  { id: 330, number: 330, name: "Flygon" },
  { id: 331, number: 331, name: "Cacnea" },
  { id: 332, number: 332, name: "Cacturne" },
  { id: 333, number: 333, name: "Swablu" },
  { id: 334, number: 334, name: "Altaria" },
  { id: 335, number: 335, name: "Zangoose" },
  { id: 336, number: 336, name: "Seviper" },
  { id: 337, number: 337, name: "Lunatone" },
  { id: 338, number: 338, name: "Solrock" },
  { id: 339, number: 339, name: "Barboach" },
  { id: 340, number: 340, name: "Whiscash" },
  { id: 341, number: 341, name: "Corphish" },
  { id: 342, number: 342, name: "Crawdaunt" },
  { id: 343, number: 343, name: "Baltoy" },
  { id: 344, number: 344, name: "Claydol" },
  { id: 345, number: 345, name: "Lileep" },
  { id: 346, number: 346, name: "Cradily" },
  { id: 347, number: 347, name: "Anorith" },
  { id: 348, number: 348, name: "Armaldo" },
  { id: 349, number: 349, name: "Feebas" },
  { id: 350, number: 350, name: "Milotic" },
  { id: 351, number: 351, name: "Castform" },
  { id: 352, number: 352, name: "Kecleon" },
  { id: 353, number: 353, name: "Shuppet" },
  { id: 354, number: 354, name: "Banette" },
  { id: 355, number: 355, name: "Duskull" },
  { id: 356, number: 356, name: "Dusclops" },
  { id: 357, number: 357, name: "Tropius" },
  { id: 358, number: 358, name: "Chimecho" },
  { id: 359, number: 359, name: "Absol" },
  { id: 360, number: 360, name: "Wynaut" },
  { id: 361, number: 361, name: "Snorunt" },
  { id: 362, number: 362, name: "Glalie" },
  { id: 363, number: 363, name: "Spheal" },
  { id: 364, number: 364, name: "Sealeo" },
  { id: 365, number: 365, name: "Walrein" },
  { id: 366, number: 366, name: "Clamperl" },
  { id: 367, number: 367, name: "Huntail" },
  { id: 368, number: 368, name: "Gorebyss" },
  { id: 369, number: 369, name: "Relicanth" },
  { id: 370, number: 370, name: "Luvdisc" },
  { id: 371, number: 371, name: "Bagon" },
  { id: 372, number: 372, name: "Shelgon" },
  { id: 373, number: 373, name: "Salamence" },
  { id: 374, number: 374, name: "Beldum" },
  { id: 375, number: 375, name: "Metang" },
  { id: 376, number: 376, name: "Metagross" },
  { id: 377, number: 377, name: "Regirock" },
  { id: 378, number: 378, name: "Regice" },
  { id: 379, number: 379, name: "Registeel" },
  { id: 380, number: 380, name: "Latias" },
  { id: 381, number: 381, name: "Latios" },
  { id: 382, number: 382, name: "Kyogre" },
  { id: 383, number: 383, name: "Groudon" },
  { id: 384, number: 384, name: "Rayquaza" },
  { id: 385, number: 385, name: "Jirachi" },
  { id: 386, number: 386, name: "Deoxys" }
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
const modal = document.getElementById("cardModal");
const modalTitle = document.getElementById("modalTitle");
const modalSummary = document.getElementById("modalSummary");
const variantList = document.getElementById("variantList");
const confirmBtn = document.getElementById("confirmBtn");
const cancelBtn = document.getElementById("cancelBtn");
const removeBtn = document.getElementById("removeBtn");

let cards = [];
let currentCardId = null;
let selectedAsset = null;
let cardAssets = [];
let currentVariantOptions = [];
let currentVariantIndex = 0;
let touchStartX = 0;
let touchStartY = 0;

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
  const candidate = "../assets/cards/index.json";

  try {
    const response = await fetch(candidate);
    if (!response.ok) {
      cardAssets = [];
      return;
    }
    cardAssets = await response.json();
  } catch (error) {
    cardAssets = [];
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

function getCardVariants(cardName) {
  const normalized = normalizePokemonKey(cardName);

  return cardAssets.filter((asset) => {
    const candidates = [
      asset?.name,
      asset?.pokemon,
      asset?.folder,
      asset?.standardName,
      asset?.file
    ];

    return candidates.some((candidate) => normalizePokemonKey(candidate).includes(normalized));
  });
}

function loadCards() {
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
        label: match?.label || "",
        artPath: match?.artPath || ""
      };
    });
  } catch (error) {
    cards = hoennPokemon.map((card) => ({ ...card, collected: false, variant: "", label: "", artPath: "" }));
    saveCards();
  }
}

function saveCards() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cards));
}

function updateProgressBar() {
  const collectedCountValue = cards.filter((card) => card.collected).length;
  const percent = Math.round((collectedCountValue / TOTAL_CARDS) * 100);

  if (progressText) progressText.textContent = `${collectedCountValue} / ${TOTAL_CARDS} cartas`;
  if (progressPercent) progressPercent.textContent = `${percent}%`;
  if (progressPercentCenter) progressPercentCenter.textContent = `${percent}%`;
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

function formatSyncTimestamp(isoString) {
  const date = new Date(isoString);
  if (Number.isNaN(date.getTime())) return "";

  return date.toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });
}

function updateLastSyncDisplay(isoString) {
  const label = isoString ? `Última atualização: ${formatSyncTimestamp(isoString)}` : "Última atualização: nunca";

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
    updateSyncNotification(0, "Carregando catálogo local...", "Conectando com a database...");

    const localResponse = await fetch("../assets/cards/index.json");
    if (!localResponse.ok) {
      throw new Error("Não foi possível carregar o catálogo local.");
    }

    const localCards = await localResponse.json();
    const localMap = new Map();

    // O tracker cobre a série EX (Geração 3): ignora pastas fora do roster e
    // sets de outras eras que porventura existam no catálogo.
    const nonHoennFolders = new Set(["abra", "kadabra", "alakazam", "wobbuffet"]);
    const isGen3Set = (setId) => {
      const value = String(setId || "").trim().toLowerCase();
      return /^ex\d+(\.\d+)?$/.test(value) || value === "exu";
    };

    localCards.forEach((card) => {
      const folder = normalizePokemonKey(card.folder || "");
      if (nonHoennFolders.has(folder)) return;
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
      }).length;

      const missingRemote = [...remoteSet].filter((key) => {
        const [pokemon, ,] = key.split("|");
        return pokemon === normalizePokemonKey(pokemonName) && !localMap.has(key);
      }).length;

      if (missingLocal || missingRemote) {
        issues.push({ pokemon: pokemonName, missingLocal, missingRemote });
      }
    }

    const totalMissingLocal = issues.reduce((sum, issue) => sum + (issue.missingLocal || 0), 0);
    const totalMissingRemote = issues.reduce((sum, issue) => sum + (issue.missingRemote || 0), 0);

    if (!issues.length) {
      saveLastSync();
      updateSyncNotification(100, "Sincronização concluída", "Tudo está alinhado com a database.");
      console.log("Sincronização concluída: todas as cartas estão alinhadas.");
    } else {
      saveLastSync();
      updateSyncNotification(100, "Sincronização concluída", `Há divergências: ${totalMissingLocal} ausentes e ${totalMissingRemote} extras.`);
      console.warn("Sincronização com divergências:", issues);
    }

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
  const finishLabel = formatCardFinish(asset?.finish || asset?.cardType || "normal");
  const numberLabel = asset?.number ? ` · #${asset.number}` : "";

  return `${collectionLabel} · ${finishLabel}${numberLabel}`;
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
  cardGrid.innerHTML = cards.map(createCardMarkup).join("");
  document.querySelectorAll(".card").forEach(setupCardTilt);
  updateProgressBar();
}

function changeSelectedVariant(step) {
  if (!currentVariantOptions.length) return;

  currentVariantIndex = (currentVariantIndex + step + currentVariantOptions.length) % currentVariantOptions.length;
  selectedAsset = currentVariantOptions[currentVariantIndex];
  renderVariantList(selectedAsset);
}

function renderSelectedPreview(asset) {
  if (!modalSummary) return;

  const imageSrc = getAssetPath(asset?.file || "");
  const card = cards.find((item) => item.id === currentCardId) || { name: asset?.name || "Carta", number: asset?.number || "" };
  const variantLabel = asset?.number ? `#${asset.number}` : (asset?.set ? asset.set.toUpperCase() : "Versão");

  modalSummary.innerHTML = `
    <div class="preview-shell">
      <button type="button" class="preview-nav prev" data-nav="prev" aria-label="Carta anterior">&#8249;</button>
      <div class="preview-stage" aria-label="Pré-visualização da carta">
        <img class="preview-image" src="${imageSrc}" alt="${escapeHtml(card.name)}" />
      </div>
      <button type="button" class="preview-nav next" data-nav="next" aria-label="Próxima carta">&#8250;</button>
    </div>
    <div class="summary-meta">
      <span class="summary-pill">${variantLabel}</span>
      <strong>${card.name}</strong>
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

  options.forEach((asset) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `variant-option ${selectedAsset && selectedAsset.file === asset.file ? "selected" : ""}`;
    const variantText = formatVariantLabel(asset);

    button.innerHTML = `
      <img class="variant-thumb" src="${getAssetPath(asset.file)}" alt="${escapeHtml(asset.name)}" />
      <span class="variant-label">${variantText}</span>
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

  card.collected = true;
  card.variant = assetInfo ? `${assetInfo.set}` : "";
  card.label = assetInfo ? `${assetInfo.set.toUpperCase()} · #${assetInfo.number}` : "Carta oficial";
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
  card.artPath = "";
  renderCards();
  saveCards();
  updateProgressBar();
}

document.addEventListener("click", (event) => {
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

document.addEventListener("keydown", (event) => {
  if (!modal || modal.classList.contains("hidden")) return;

  if (event.key === "Escape") {
    closeModal();
    return;
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

(async function init() {
  loadCards();
  await loadCardAssets();
  renderCards();
})();
