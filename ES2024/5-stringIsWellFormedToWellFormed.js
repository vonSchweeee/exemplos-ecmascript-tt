// string.isWellFormed()
const strings = [
  // Lone leading surrogate
  "ab\uD83D",
  "ab\uD83Dc",
  // Lone trailing surrogate
  "\uDE04ab",
  "c\uDE04ab",
  // Well-formed
  "abc",
  "ab\uD83D\uDE04c",
];

console.log(strings);

for (const str of strings) {
  console.log(str.isWellFormed());
}


// string.toWellFormed()
// const illFormed = "https://example.com/search?q=\uD800";

// try {
//   encodeURI(illFormed);
// } catch (e) {
//   console.log(e); // URIError: URI malformed
// }

// console.log(encodeURI(illFormed.toWellFormed()));
// console.log(decodeURI(illFormed.toWellFormed()));