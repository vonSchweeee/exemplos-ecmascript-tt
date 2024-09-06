// Array.prototype.at()
const numeros = [10, 20, 30, 40, 50];
const primeiro = numeros.at(0);
const ultimo = numeros.at(-1);
console.log({ primeiro });
console.log({ ultimo });

const ultimoColchete = numeros[-1];
console.log({ ultimoColchete });

// String.prototype.at()
const texto = 'JavaScript';
const primeiraLetra = texto.at(0);
const ultimaLetra = texto.at(-1);
console.log({ primeiraLetra });
console.log({ ultimaLetra });