class Group {
    constructor() {
        this.myarray = [];
    }

    add(value) {
        if (this.myarray.indexOf(value) === -1) {
            this.myarray.push(value);
        }
    }

    delete(value) {
        let index = this.myarray.indexOf(value);
        if (index !== -1) {
            this.myarray.splice(index, 1); // Use splice to remove the element
        }
    }

    has(value) {
        if ((this.myarray.indexOf(value) != -1)) {
            return true;
        } else {
            return false;
        }
    }

    static from(value) {
        let newGroup = new Group();
        for (let element of value) {
            newGroup.add(element);
        }
        return newGroup;
    }

    [Symbol.iterator]() {
        return new GroupIterator(this);
    }

}

class GroupIterator {
    constructor(group) {
        this.group = group;
        this.index = 0;
    }

    next() {
        if (this.index < this.group.myarray.length) {
            let value = this.group.myarray[this.index];
            this.index++;
            return { value, done: false};
        } else {
            return {done: true};
        }
    }
}


let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false

for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
  }
// → a
// → b
// → c