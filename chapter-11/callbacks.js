setTimeout(() => console.log("Tick"), 500);

function myFirst() {
    myDisplayer("Hello");
}
  
function mySecond() {
    myDisplayer("Goodbye");
}

mySecond();
myFirst();


function myDisplayer(input) {
    console.log(input);
}