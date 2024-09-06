// Array.prototype.findLast()
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const maiorPar = numeros.findLast(num => num % 2 === 0);
console.log({ maiorPar });

// Array.prototype.findLastIndex()
const indiceMaiorPar = numeros.findLastIndex(num => num % 2 === 0);
console.log({ indiceMaiorPar });