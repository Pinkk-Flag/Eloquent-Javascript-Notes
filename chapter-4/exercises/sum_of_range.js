/*
Write a range function that takes two arguments, start and end, and
returns an array containing all the numbers from start up to and in-
cluding end.
Next, write a sum function that takes an array of numbers and returns
the sum of these numbers. Run the example program and see whether
it does indeed return 55.
As a bonus assignment, modify your range function to take an op-
tional third argument that indicates the “step” value used when build-
ing the array. If no step is given, the elements should go up by in-
crements of one, corresponding to the old behavior. The function call
range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure this also
works with negative step values so that range(5, 2, -1) produces [5,
4, 3, 2].


*/

function range(a,b, step = 1) {
    let myarray = [];

    if (step > 0 && a > b) return [];
    if (step === 0) return "Cannot have a step of 0";


    if ((step > 0) && (b > a)) {
        while (a <= b) {
            myarray.push(a);
            a += step;
        }
    } else if ((step < 0) && (b > a)) {
        while (a <= b) {
            myarray.push(a);
            a += Math.abs(step);
        }
        myarray.reverse();
    } else if ((step > 0) && (b < a)) {
        while (a >= b) {
            myarray.push(b);
            b += step;
        }
    } else if ((step < 0) && (b < a)) {
        while (a >= b) {
            myarray.push(b);
            b += Math.abs(step);
        }
        myarray.reverse();
    }

    return myarray;
}

/* 
(0,5,2)

ranof = 5
myarray = [0,]
*/


function sum(a,b) {
    let myarray = range(a,b);
    let summation = 0;
    for (let element of myarray) {
        summation += element;
    }

    return summation;
}


// Tests
console.log(range(5,10));

console.log(sum(0,50));

console.log(range(5,2,-1));