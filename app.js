async function Joke(){
    let res = await fetch("https://api.chucknorris.io/jokes/random");
    let data = await res.json();

    console.log(data);
    document.getElementById("joke").innerHTML = data.value;
}

Joke()