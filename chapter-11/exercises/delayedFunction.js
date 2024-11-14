function delayedFunction(time, theFunc) {
    setTimeout(
        () => {
            theFunc();
        },
        time
    );
}
function greet() {
    console.log("Hello world");
}

delayedFunction(5000, greet());