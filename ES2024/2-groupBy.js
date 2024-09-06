// Object.groupBy()
const pessoas = [
  { nome: 'Allan', idade: 25 },
  { nome: 'Bruno', idade: 30 },
  { nome: 'Daniela', idade: 30 },
];

const agrupadoPorIdade = Object.groupBy(pessoas, pessoa => pessoa.idade);
console.log(agrupadoPorIdade);
debugger;

const fruits = [
  {name:"apples", quantity:300},
  {name:"bananas", quantity:500},
  {name:"oranges", quantity:200},
  {name:"kiwi", quantity:150}
];

// Callback function to Group Elements
function myCallback({ quantity }) {
  return quantity > 200 ? "ok" : "low";
}

// Group by Quantity
const result = Object.groupBy(fruits, myCallback);
console.log(result);
debugger;

// Map.groupBy()
const mapa = new Map([
  ['Ana', 25],
  ['Bruno', 30],
  ['Carlos', 25],
  ['Daniela', 30],
]);
debugger;

// Ainda não implementado
// const agrupadoNoMapa = mapa.groupBy(([nome, idade]) => idade);
// console.log(agrupadoNoMapa);
// resultado esperado:
// Map {
//   25 => [
//     ['Ana', 25],
//     ['Carlos', 25]
//   ],
//   30 => [
//     ['Bruno', 30],
//     ['Daniela', 30]
//   ]