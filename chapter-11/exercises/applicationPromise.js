fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((data) => {
        return data.json();
    })
    .then((jsonData) => {
        console.log(jsonData);
    })
    .catch((err) => {
        console.log(err);
    })