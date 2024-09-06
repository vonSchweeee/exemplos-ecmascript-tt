// GlobalThis
const condNode = globalThis.setTimeout === global.setTimeout;
console.log(condNode);

// Testar no navegador
// const condNavegador = globalThis.setTimeout === window.setTimeout;
// console.log(condNavegador);