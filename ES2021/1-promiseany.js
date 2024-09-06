// Promise.any()
const promiseResolve1000Ms = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Resolved after 1000ms");
  }, 1000);
});

const promiseReject2000Ms = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Rejected after 2000ms");
  }, 2000);
});

const promiseResolve3000Ms = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Resolved after 3000ms");
  }, 3000);
});

Promise.any([
  promiseResolve1000Ms,
  promiseReject2000Ms,
  promiseResolve3000Ms,
]).then((result) => console.log(result));

// Diferença Promise.any() e Promise.race()
// Comentar o código acima
// async function raceAndAny() {
//   const promessaRapida = new Promise((resolve) => setTimeout(resolve, 100, 'Promessa rápida resolvida'));
//   const promessaLenta = new Promise((resolve) => setTimeout(resolve, 500, 'Promessa lenta resolvida'));
//   const promessaRejeitada = Promise.reject('Promessa rejeitada');

//   // Promise.any resolve com a primeira promessa bem-sucedida (ignora rejeições)
//   try {
//     const resultadoAny = await Promise.any([promessaRejeitada, promessaLenta, promessaRapida]);
//     console.log('Resultado Promise.any:', resultadoAny); // 'Promessa rápida resolvida'
//   } catch (erro) {
//     console.log('Erro Promise.any:', erro);
//   }

//   // Promise.race resolve/rejeita com a primeira promessa que for resolvida ou rejeitada
//   try {
//     const resultadoRace = await Promise.race([promessaRejeitada, promessaLenta, promessaRapida]);
//     console.log('Resultado Promise.race:', resultadoRace); // Erro: 'Promessa rejeitada'
//   } catch (erro) {
//     console.log('Erro Promise.race:', erro); // 'Promessa rejeitada'
//   }
// }

// raceAndAny();