function loop(initial_value, condition, operation, denotion) {
    let currentValue = initial_value;
    while (condition(currentValue)) {
        denotion(currentValue);
        currentValue = operation(currentValue);

    }
}

loop(0, n => n <= 10, n => n + 1, n => console.log(n));


let sum = 0;
loop(
  1,
  n => n <= 10,      // Sum the first 10 numbers
  n => n + 1,
  n => sum += n      // Add each number to the sum
);
console.log(sum);    // Output the final sum

