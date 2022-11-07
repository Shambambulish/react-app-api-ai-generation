import {React, useState} from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GetPrediction from "./components/GetPrediction";
import GetRandomWord from "./components/GetRandomWord";
import SetPrompt from "./components/SetPrompt";
import PromptDisplay from "./components/PromptDisplay";
import DisplayImage from "./components/DisplayImage";

function App() {

  //state variable and handler for prompt
  const [prompt, setPrompt] = useState("Welcome")
  const handlePrompt = url => {
    setPrompt(url);
    console.log("prompt updated to " + url)
  }

  //state variable and handler for picture url
  const [picUrl, setPicUrl] = useState("")
  const handlePicUrl = url => {
    setPicUrl(url);
    console.log("picUrl updated to "+picUrl)
  }
  

  return (
    <div classname="app">
      <div classname="app-header">
        <Header />
      </div>
      <div classname="content-container">
        <PromptDisplay prompt={prompt}/>
        <SetPrompt handlePrompt={handlePrompt}/>
        <GetRandomWord handlePrompt={handlePrompt}/>
        <GetPrediction prompt={prompt} handlePicUrl={handlePicUrl}/>
        <DisplayImage picUrl={picUrl}/>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;