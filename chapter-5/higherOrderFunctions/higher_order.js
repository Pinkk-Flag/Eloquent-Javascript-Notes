function pokemon() {
    console.log("pikachu!");
}

function callPokemon(arg) {
    arg();
}

console.log(callPokemon(pokemon));