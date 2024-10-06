const readline = require('readline');

// Setup for user input in Node.js
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Binary Search Algorithm
function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;
    let steps = 0;

    while (low <= high) {
        steps++;
        let mid = Math.floor((low + high) / 2);

        if (arr[mid] === target) {
            return { found: true, steps: steps };
        } else if (arr[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return { found: false, steps: steps };
}

// Linear Search Algorithm
function linearSearch(arr, target) {
    let steps = 0;

    for (let i = 0; i < arr.length; i++) {
        steps++;
        if (arr[i] === target) {
            return { found: true, steps: steps };
        }
    }
    return { found: false, steps: steps };
}

// Get user input for the number to search
function getUserInputNumber() {
    return new Promise((resolve) => {
        rl.question("Enter the number to search for: ", (input) => {
            resolve(parseInt(input));
        });
    });
}

// Get user input for the algorithm choice
function getUserAlgorithmChoice() {
    return new Promise((resolve) => {
        rl.question("Choose an algorithm:\n1. Binary Search\n2. Linear Search\nYour choice: ", (input) => {
            resolve(parseInt(input));
        });
    });
}

// Main function
async function searchNumber() {
    let arr = [];
    for (let i = 1; i <= 100; i++) {
        arr.push(i);  // Example sorted array from 1 to 100
    }

    let number = await getUserInputNumber();
    let algorithmChoice = await getUserAlgorithmChoice();

    let result;

    if (algorithmChoice === 1) {
        result = binarySearch(arr, number);
    } else if (algorithmChoice === 2) {
        result = linearSearch(arr, number);
    } else {
        console.log("Invalid choice! Please select 1 or 2.");
        rl.close();
        return;
    }

    if (result.found) {
        console.log(`Number found in ${result.steps} steps!`);
    } else {
        console.log(`Number not found after ${result.steps} steps.`);
    }
    rl.close();
}

// Run the main function to start the process
searchNumber();
