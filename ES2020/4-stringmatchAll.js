// String.prototype.matchAll
const regex = /t(e)(st)/g;
const string = 'test1test2';
const iterator = string.matchAll(regex);
console.log(iterator);
for (const match of iterator) {
  console.log(match);
}