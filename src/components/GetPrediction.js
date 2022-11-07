import {React, useState } from 'react'

export default function GetPrediction({prompt, handlePicUrl}) {
    if (!prompt) prompt="Welcome";

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',
                 },
        body: JSON.stringify({
            "prompt": prompt
    })
    };

    //get url for generated image from replicate.com stable diffusion image generator and send it back through the handler
    const getPic = () => {
        handlePicUrl("loading");

        fetch('http://localhost:4000/makePrediction', requestOptions)
            .then(response => response.json())
            .then(data => {handlePicUrl(data.url)})
    }
    
    return (
        <button id="generateButton" onClick={getPic}>Generate image</button>
    )
}