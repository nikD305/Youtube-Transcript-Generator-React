import React, {useEffect, useState} from 'react';
import Api from 'youtube-browser-api'
import './App.css'
function App() {


  const [text, setText] = useState("")
  const [downLink, setDownLink] = useState("")





const downloadFile = async () =>{
  const link = downLink.slice(32,downLink.length)
  const query = {
    videoId: link
  };
  const fetchUrl = "https://youtube-browser-api.netlify.app/transcript?" + new URLSearchParams(query).toString()
  const res = await fetch(fetchUrl)
    const data = res.json()
   
    return data
}

let data = " "

const merge = async (response) => {
  let merged = "";
  for (let i = 0; i < response.videoId.length; i++) {
    merged += response.videoId[i].text;
  }
  setText(merged);
  console.log("merged text: ", merged);
  console.log("lenght",response.videoId.length-1)
};
  

  const handleButtonClick = async () => {
    try {
       const download = await downloadFile()
     await merge(download)
    } catch (error) {
      console.error(error)
    }
  }


console.log(text)

  return (
    <div class="text-generator">
     <h1>Youtube Transcript Generator</h1>
     
      <input type="text"  class="text-input" onChange={(e)=>setDownLink(e.target.value)} />
      <button class="generate-btn" onClick={()=>handleButtonClick()}>Generate</button>
      
    <p class="generated-text">{text}</p>
    
    </div>
  );
}

export default App;
