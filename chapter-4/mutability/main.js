let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10};

object1.value = 20;

console.log(object1.value); 
console.log(object2.value);
console.log(object3.value);
