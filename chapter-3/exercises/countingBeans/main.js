function countBs(mainStr) { 
    let indexPos = 0;
    let lengthOfStr = mainStr.length;
    let countOfBs = 0;
    while (indexPos <= lengthOfStr) {
        if (mainStr[indexPos] == "B") {
            countOfBs++;
            indexPos++;
        } else {
            indexPos++;
        }
    }
    return countOfBs;
}

function countChar(mainStr, selectedChar) { 
    let indexPos = 0;
    let lengthOfStr = mainStr.length;
    let countOfChar = 0;
    if (selectedChar.length != 1) {
        return "Invalid length of selected character.";
    }

    while (indexPos <= lengthOfStr) {
        if (mainStr[indexPos] == selectedChar) {
            countOfChar++;
            indexPos++;
        } else {
            indexPos++;
        }
    }
    return countOfChar;
}


// cfg[tests]
console.log(countBs("hello"));
console.log(countBs("There should only one B in this"));
console.log(countBs("fjdskfjfBBrekejfrej;rBB"));

console.log(countChar("Hello I like cheese cheese cheese cheese", "z"));
console.log(countChar("Hello I like cheese cheese cheese cheese", "h"));
console.log(countChar("Hello I like cheese cheese cheese cheese", "I"));