// Early fetch da base de dados: começa no parse do head, antes do script.js.
// O init() pinta a grade sem esperar; o catálogo chega em background.
window.__catalogPromise = fetch("../assets/data/catalog.min.json")
  .then(function (response) { return response.ok ? response.json() : null; })
  .catch(function () { return null; });
