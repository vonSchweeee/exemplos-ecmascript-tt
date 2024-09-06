// Array.prototype.toReversed()
const arrayOriginal = [1, 2, 3, 4, 5];
const arrayReverso = arrayOriginal.toReversed();
console.log({ arrayReverso }); // [5, 4, 3, 2, 1]
console.log({ arrayOriginal }); // [1, 2, 3, 4, 5] (array original não é modificado)

// Array.prototype.toSorted()
const arrayOrdenado = arrayOriginal.toSorted((a, b) => b - a);
console.log({ arrayOrdenado }); // [5, 4, 3, 2, 1]
console.log({ arrayOriginal }); // [1, 2, 3, 4, 5] (array original não é modificado)

// Array.prototype.toSpliced()
const arrayOriginal2 = [1, 2, 3, 4, 5];
const arrayComRemocao = arrayOriginal2.toSpliced(1, 2, 6, 7);
console.log({ arrayComRemocao }); // [1, 6, 7, 4, 5] (novo array com itens removidos e adicionados)
console.log({ arrayOriginal2 }); // [1, 2, 3, 4, 5] (array original não é modificado)
