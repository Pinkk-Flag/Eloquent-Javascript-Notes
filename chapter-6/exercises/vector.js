class Vector {
    constructor(xCoordInput,yCoordInput) {
        this.x = xCoordInput;
        this.y = yCoordInput;
    }
    add(myvector) {
        let originalX = myvector.x;
        let originalY = myvector.y;

        this.x += originalX;
        this.y += originalY;

        return new Vector(this.x,this.y);
    }

    minus(myvector) {
        let originalX = myvector.x;
        let originalY = myvector.y;

        this.x -= originalX;
        this.y -= originalY;

        return new Vector(this.x,this.y);
    }

    length() {
        return Math.sqrt(((this.x)*(this.x)+(this.y)*(this.y)));
    }
} 
////TESTS
// Test passed
let vec1 = new Vector(3, 4);
console.log(vec1);
// Result: Vector { x: 3, y: 4}


//
let vec2 = new Vector (7,6);
let result = vec2.add(vec1);

console.log(result)
// Result: Vector { x: 10, y: 10}

let vec3 = new Vector (10,10);
let vec4 = new Vector (10,5);

let result2 = vec3.minus(vec4);
console.log(result2);
// Result: Vector { x: 0, y: 5 }

let vec5 = new Vector(5,5);

let result3 = vec5.length();
console.log(result3);