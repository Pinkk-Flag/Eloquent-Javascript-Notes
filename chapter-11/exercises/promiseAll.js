function Promise_all(promises) {
    return new Promise((resolve, reject) => {
      let countResolve = 0;
      let results = [];
      let index = 0;
      if (promises.length === 0) {
          resolve([]);
          return;
      }
      for (let i = 0; i < promises.length; i++) {
        Promise.resolve(promises[i])
            .then((value) => {
                results[i] = value; // Store the value at the correct index
                countResolve++;
                if (countResolve === promises.length) {
                    resolve(results); // Resolve only after all promises have completed
                }
            })
            .catch(reject); // Reject immediately if any promise fails
      }
    });
  }
  
// Test code.
Promise_all([]).then(array => {
console.log("This should be []:", array);
});
function soon(val) {
    return new Promise(resolve => {
        setTimeout(() => resolve(val), Math.random() * 500);
    });
}
Promise_all([soon(1), soon(2), soon(3)]).then(array => {
console.log("This should be [1, 2, 3]:", array);
});
Promise_all([soon(1), Promise.reject("X"), soon(3)])
.then(array => {
    console.log("We should not get here");
})
.catch(error => {
    if (error != "X") {
    console.log("Unexpected failure:", error);
    }
});