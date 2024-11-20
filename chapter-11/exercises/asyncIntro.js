async function getData() {
    let response = await fetch('https://catfact.ninja/fact');
    console.log(1);
    console.log(response);
    console.log(2);
}

getData();