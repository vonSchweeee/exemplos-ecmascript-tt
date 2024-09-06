// 🧑‍💻 é um emoji complexo, ele usa 3 pontos de unicode (U+1F9D1 U+200D U+1F4BB)
const regexU = /^\p{Emoji}$/u; 
console.log('--regex /u--')
console.log({testeEmoji: regexU.test('🧑‍💻')});
console.log({unicodeSets: regexU.unicodeSets});

// o regexV consegue identificar emojis complexos através da propriedade RGI_Emoji
const regexV = /^\p{RGI_Emoji}$/v;
console.log('--regex /v--')
console.log({testeEmoji: regexV.test('🧑‍💻')});
console.log({unicodeSets: regexV.unicodeSets});
