function reverse(myarray) {
    let newarray = [];
    let a = 0;
    
    for (let i = myarray.length-1; i >= 0; i--) {
        newarray.push(myarray[i])
    }
    return newarray;
}

// Tests

console.log(reverse([1,2,3,4,5]));

console.log(reverse([0,0,0,0,0,1,0,0,0,0,0,0]));