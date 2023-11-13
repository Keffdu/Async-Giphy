require('dotenv').config();
const fetch = require('node-fetch');
const { HttpsProxyAgent } =  require('https-proxy-agent');

const proxyUrl = "http://proxy.aexp.com:8080/"

const proxyAgent = new HttpsProxyAgent(proxyUrl);


const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`


// Print out value of API key stored in .env file
// console.log(endpoint)

async function getImages(query) {
    debugger;
    let q = `q=${query}`
    let targetUrl = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&${q}cat&limit=2&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
    // console.log(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&${q}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`)
    let response = await fetch(targetUrl, { 
        agent: load_proxy,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    });
    console.log(response.headers)
    // const data = await response.json()
    // console.log(data)
}

getImages("cats")