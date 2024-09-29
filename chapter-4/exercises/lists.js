function arrayToList(myarray) { 
    let list = null;
    for (let i = myarray.length - 1; i >= 0; i--) {
        list = { value: myarray[i], rest: list };  // Create a new list node
    }
    return list;
}

function listToArray(list) {
    let array = [];
    while (list !== null) {
        array.push(list.value);  // Add the current value to the array
        list = list.rest;        // Move to the next node in the list
    }
    return array;  // Return the array
}

function prepend(value, list) {
    return { value: value, rest: list };
}

// Tests
let myList = arrayToList([1, 2, 3, 4]);
console.log(myList);                // This logs the full list structure
console.log(listToArray(myList));   // Output: [1, 2, 3, 4]
