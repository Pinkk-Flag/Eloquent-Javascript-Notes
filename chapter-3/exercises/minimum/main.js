function minimum(a=NaN,b=NaN) {
    if (isNaN(a) && isNaN(b)) {
        return null;
    } else if (isNaN(a)) {
        return a;
    } else if (isNaN(b)) {
        return b;
    } else {
        if (a > b) {
            return b;
        } else if (a < b) {
            return a;
        } else if (a === b) {
            return "Both numbers are the same!";
        } else {
            return "Error! Unexpected error code 50";
        }
    }
}

let answer = minimum(2,50);

console.log(answer);