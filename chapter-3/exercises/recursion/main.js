function testEvenorOdd(number) {
    if (number == 0) {
        return "even";
    } else if (number == 1) {
        return "odd";
    } else if (number < 0) {
        return "Number cannot be negative!";
    } else {
        return testEvenorOdd(number - 2);
    }
}

console.log(testEvenorOdd(5));
console.log(testEvenorOdd(0));
console.log(testEvenorOdd(1));
console.log(testEvenorOdd(10));
console.log(testEvenorOdd(2000));
console.log(testEvenorOdd(-20));