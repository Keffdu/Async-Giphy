require('dotenv').config();


const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`


// Print out value of API key stored in .env file
// console.log(endpoint)


// if (typeof document !== 'undefined') {
//     let img = document.querySelector("#img")
//     let button = document.querySelector("#button")
//     // Manipulating the DOM here
//     button.addEventListener("click", () => {
//         console.log("clicked")
//         getImages("cats")
//     })
// }
// let searchButton = document.querySelector("#submit_button")


// searchButton.addEventListener("click", (e) => {
//     e.preventDefault()
//     // let searchVal = document.querySelector("#search").value
//     // let searchVal = e.target.value
//     console.log(e)
//     // getImages(searchVal)
// })

async function getImages(query) {
    let imgDiv = document.querySelector("#images")
    imgDiv.textContent = ''
    let endpoint = `https://api.giphy.com/v1/gifs/search?api_key=vQwmqhtx7t3o2LWmUUO7KJVe3KIdCq2m&q=${query}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
    let response = await fetch(endpoint);
    let data = await response.json()
    let gifs = data.data
    console.log(gifs)
    gifs.map((gif) => {
    const img = document.createElement('img')
    img.className = "imgs"
    img.src = gif.images.original.url
    imgDiv.appendChild(img)
})
    // renderImages(data.data)
    // const firstUrl = data.data[Math.floor(Math.random() * 25)].images.original.url
    // img.src = firstUrl
}

function renderImages(gifs) {
    // console.log(gifs)
    // gifs.map((gif) => {
    //     console.log(gif.images.original.url)
    // })
    // data.map((gif) => {
    //     const img = document.createElement('img')
    //     img.src = gif.images.original.url
    //     imgDiv.appendChild(img)
    // })
}


