// A plus sign indicates that an element can be repeated more than once. 

console.log(/'\d+'/.test("'123'"));
console.log(/'\d+'/.test("''"));
console.log(/'\d*'/.test("'123'"));
console.log(/'\d*'/.test("''"));

// The * means it allows for it to be matched zero times.

// A "?" makes it optional

let neighbor = /neighbou?r/;
console.log(neighbor.test("neighbour"));
console.log(neighbor.test("neighbor"));


// Thereby, we can get an easier one to decipher of the date one
let dateTime = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;
console.log(dateTime.test("1-30-2003 8:45"));


// Parentheses are counted as a single element

// thus we can do this

// Explanation of regex
//  "//" starts the regex. 
// Has "boo+" so it means that it matches "bo" plus any number of o's as long as it is above 1. (e.g. Booooo would be valid)
// The hoo inside the parentheses are valid and also matches "hoo" or "hooooo" as well.
// final + means that it must come one or more times.
// Final i flag at the end makes it case insensitve. 
// thus it can catch something like this: bOoOoOhOohOOO
let cartoonCrying = /boo+(hoo+)+/i;
console.log(cartoonCrying.test("bOoOoOhOohOOO"));


