class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a,b) {

    while (true) {
        let origNum = Math.floor((Math.random())*100);
        if (origNum > 79) {
            return a*b;
        } else {
            throw new MultiplicatorUnitFailure("Please try again...")
        }
    }
}

console.log(primitiveMultiply(5,10));