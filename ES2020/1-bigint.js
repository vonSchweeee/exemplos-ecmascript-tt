// BigInt
const int15Digit = 999_999_999_999_999;
console.log({int15Digit});

const int16Digit = 9999_999_999_999_999;
console.log({int16Digit});

const bigInt16Digit = 9999_999_999_999_999n;
console.log({bigInt16Digit});

const bigIntConstructor = BigInt(1234567890123456);
console.log({bigIntConstructor});

console.log('Type: ' + typeof bigIntConstructor);