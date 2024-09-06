// Array.prototype.with()
const arrayOriginal3 = [1, 2, 3, 4, 5];
const arrayModificado = arrayOriginal3.with(2, 10); // Substitui o valor no índice 2
console.log({ arrayModificado }); // [1, 2, 10, 4, 5]
console.log({ arrayOriginal3 }); // [1, 2, 3, 4, 5] (array original não é modificado