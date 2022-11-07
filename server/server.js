require('dotenv').config()

const express = require("express")
const cors = require('cors')

const app = express();

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
    res.send('hi')
})

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))

//GET request to random word API for a random word
app.get('/randomword', (req, res) => {
    let word;
    fetch('https://random-word-api.herokuapp.com/word', {method: get})
    .then(response => response.json())
    .then(data => word = data[0])
    res.send(word);
})

//POST request to the Replicate API to create an image based on prompt and then fetch the image in 8/16s
app.post('/makePrediction/', async (req, res) => {
    
    if(req.method == "OPTIONS"){
        res.set('Access-Control-Allow-Origin', '*');
        res.set('Access-Control-Allow-Headers', 'Content-Type');
        res.status(204).send('');
    }

    let prompt = req.body.prompt;

    let getUrl = await fetch('https://api.replicate.com/v1/predictions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',
                    'Authorization': process.env.API_KEY,
                 },
        body: JSON.stringify({
            "version": "8abccf52e7cba9f6e82317253f4a3549082e966db5584e92c808ece132037776",
             "input": {"prompt": prompt}
    })
})
        .then(response => response.json())
        .then((data) => {console.log(data); return data.urls.get})
        .catch((err) => {
            console.log(err.message);
        });

    console.log("GET URL IS " + getUrl)

    await sleep(8000)
    let picUrl = await fetch(getUrl, {
        method: "GET", headers: { 'Authorization': process.env.API_KEY }
    })
    .then((response) => response.json())
    .then((data) => data.output[0])
    .catch((err) => {
        console.log(err.message);
    });
    console.log("PIC URL IS " + picUrl)
    if (!picUrl) {
        await sleep(8000)
        picUrl = await fetch(getUrl, {
            method: "GET", headers: { 'Authorization': process.env.API_KEY }
        })
        .then((response) => res.send(response))
        .then((data) => data.output[0])
        .catch((err) => {
            console.log(err.message);
        });
        
        console.log("second log of PIC URL IS " + picUrl)
    }
    let jsonToSendBack = {
        url: picUrl
    }
    console.log(picUrl)
    console.log(jsonToSendBack)
    res.send(jsonToSendBack)

})



app.listen(4000)