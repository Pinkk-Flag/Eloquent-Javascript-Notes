let count = 0;

for (count = 0; count <= 100; count++) {
    if (count % 3 == 0 && count % 5 == 0) {
        console.log("Fizzbuzz");
    } else if (count % 3 == 0) {
        console.log("Fizz");
    } else if (count % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(count)
    }
}