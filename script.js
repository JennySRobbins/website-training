const API_KEY = "hQZwgN6POGs7DTArUjjliXy2HNn5vtQm";

// document.body.innerHTML="<p>hello</p>"

const numbersTable = document.getElementById("named-numbers-table")
numbersTable.addEventListener('click', function(event){

    fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=numbers`).then(async function (response) {
        const gif = await response.json()
        const gifElement = document.getElementById("gif-section")
        gifElement.innerHTML +=`<iframe src=${gif.data.embed_url}>`
    });
})


