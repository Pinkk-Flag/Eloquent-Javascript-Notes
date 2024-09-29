function deepEqual(a,b) {
    if(a == null && b !== null) {
        return false;
    } else if (a !== null && b == null) {
        return false;
    } else if (a == null && b == null) {
        return true;
    } else if (a === b) {
        return true;
    } else if (typeof a == "object" && typeof b == "object") {
        let keysA = Object.keys(a);
        let keysB = Object.keys(b);

        if (keysA.length !== keysB.length) {
            return false;
        }

        for (let i = 0; i < keysA.length; i++) {
            let key = keysA[i];

            if (!keysB.includes(key)) {
                return false;
            }

            if (!deepEqual(a[key], b[key])) {
                return false;
            }
        }

        return true;
    } else {
        return false;
    }
}


/* EXPERIMENTS
let thingy = {"Height": "Above average", "Name": "Joe", "Married": false, "lastName": "Smith"}

let keysofit = Object.keys(thingy)
console.log(keysofit);

*/

// Tests

console.log(deepEqual(5,5));

console.log(deepEqual(5,10));

console.log(deepEqual([1,2,3], [1,2,3]));

console.log(deepEqual([1,2,3], [1,4,3]));

console.log(deepEqual({height: 180, age: 24}, {age: 5, height: 180}));