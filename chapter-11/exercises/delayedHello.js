function delayedHello(time, message) {
    setTimeout(
        () => {
            console.log(message);
        },
        time
    );
}


delayedHello(3000, "Hello World");