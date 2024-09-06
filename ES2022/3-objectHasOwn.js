// Object.hasOwn()​
// Verificar se uma propriedade é diretamente do objeto
const objeto = {
  nome: 'Carlos',
  idade: 25,
};

console.log(Object.hasOwn(objeto, 'nome'));
console.log(Object.hasOwn(objeto, 'toString'));
console.log(objeto.toString());