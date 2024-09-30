function flatten(myarray) {
    return myarray.reduce((accumulator, currentValue) => {
        return accumulator.concat(currentValue);
        // combine accumulator with currentValue somehow
    }, []);
    
}

console.log(flatten([1,2,3,[4,5,6]]));

console.log(flatten([1,2,3,[4,5,6,[7,8,9]]]));

console.log(flatten([1,2,3,[4,5,6,[7,8,9,[10,11,12,[13,14,15,[16]]]]]]));