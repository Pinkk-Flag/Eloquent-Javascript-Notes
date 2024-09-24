const prompt = require('prompt-sync')();

let number = 0;
while (number <= 20) {
    console.log(number);
    number = number + 2;
}

console.log("=========");

let yourName;
do {
    yourName = prompt("Who are you? ");
} while (!yourName);
console.log("Hello " + yourName);


for (let number = 0; number <= 12; number = number + 2) {
    console.log(number);
}
// → 0
// → 2
// … etcetera

switch (prompt("What is the weather like?")) {
    case "rainy":
        console.log("Remember to bring an umbrella.");
        break;
    case "sunny":
        console.log("Dress lightly.");
    case "cloudy":
        console.log("Go outside.");
        break;
    default:
        console.log("Unknown weather type!");
        break;
}