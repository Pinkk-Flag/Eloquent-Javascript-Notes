let myPromise = new Promise((resolve, reject) => {
    let success = true; // or false, depending on the outcome you want to simulate
    
    if (success) {
      resolve("Task completed successfully!");
    } else {
      reject("Task failed.");
    }
  });


myPromise
.then((result) => {
  console.log(result); // Logs: "Task completed successfully!"
})
.catch((error) => {
  console.error(error); // Logs: "Task failed."
})
.finally(() => {
  console.log("Promise is settled."); // Runs no matter what
});
