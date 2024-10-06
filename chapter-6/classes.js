class Rabbit {
    constructor(type) {
        this.type = type;
    }
    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
} }

let killerRabbit = new Rabbit("killer");

// We use the `new` keyword in order to create a fresh instance of it. 

killerRabbit.speak("i'm going to kill you!!!");