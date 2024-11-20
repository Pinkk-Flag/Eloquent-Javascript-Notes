let myPromise = new Promise((resolve, reject) => {
    let number = Math.random();
    if (number > 0.5) {
        setTimeout(() => resolve("data got from the server"), 2000);
    } else if (number < 0.5) {
        setTimeout(() => reject("data was unable to be accessed from the server"), 2000);
    }
});

myPromise
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    })