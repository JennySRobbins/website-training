const API_KEY = "hQZwgN6POGs7DTArUjjliXy2HNn5vtQm";

// document.body.innerHTML="<p>hello</p>"

const numbersTable = document.getElementById("named-numbers-table")
numbersTable.addEventListener('click', function(event){
    const el = document.createElement('div')
    el.innerHTML="<p>hello</p>"
    console.log('do a thing')
    document.body.appendChild(el)
    // // fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=number`).then(function (response) {
    //     const gif = response.data
    //     document.body.innerHTML = `<img src="${response.data.url}>`
    // });
})


