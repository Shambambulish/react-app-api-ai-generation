import React from 'react'

export default function GetRandomWord({handlePrompt}) {
  
  //get a random word from https://random-word-api.herokuapp.com/
  const handleClick = () => {
    fetch("https://random-word-api.herokuapp.com/word", {method: 'GET'})
    .then(response => response.json())
    .then(data => handlePrompt(data[0]))
  }

  return (
    <div id="randomPromptButton">
      <button onClick={handleClick}>Get random prompt</button>
    </div>
  )
}
