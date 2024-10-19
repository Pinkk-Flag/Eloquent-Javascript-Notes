const box = new class {
    locked = true;
    #content = [];

    unlock() { this.locked = false; }
    lock() { this.locked = true; }

    get content() {
        if (this.locked) throw new Error("Locked!");
            return this.#content;
    }
};   


function withBoxUnlocked(fn) {

    const wasLocked = box.locked;
    if (wasLocked) {
        box.unlock();
    }

    try {
        fn();
    } finally {
        if (box.locked) {
            box.lock();
        }
    }
     
}

withBoxUnlocked(() => {
    console.log("Box content:", box.content);
    box.content.push("gold coin");
});

console.log("Afterwards, box locked:", box.locked); // Should print: true