import React from 'react'

export default function DisplayImage({picUrl}) {
    if (picUrl === "") {
        return (<div id="imageBox">No image ready..</div>)
    }
    else if (picUrl === "loading") {
        return (<div id="imageBox">Loading..</div>)
    }
    else return (
    <div id="imageBox">
        <img
        src={picUrl}
        alt="generated image"
        />
    </div>
    )
}
