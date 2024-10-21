// Creating a new regex

let reg1 = new RegExp("abc");

let reg2 = /abc/;

// ".test method"

console.log(/abc/.test("abcde"));

console.log(/abc/.test("abedex"));

console.log("=======");
// Sets of charachters

console.log(/[0123456789]/.test("in which it was 1992 when it was found"));

console.log(/[0-9]/.test("in which it was 1992 when it was found"));

console.log("=======");

let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
console.log(dateTime.test("01-30-2003 15:20"));
// → true
console.log(dateTime.test("30-jan-2003 15:20"));
// → false

console.log("=======");

let nonBinary = /[^01]/;
console.log(nonBinary.test("1100100010100110"));
// → false
console.log(nonBinary.test("0111010112101001"));
// → true

// This will "invert" a set of characters through the carat symbol. 