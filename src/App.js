import React, {useEffect, useState} from 'react';
import Api from 'youtube-browser-api'

function App() {

  const [txtData, setTxtData] = useState("")
  const [text, setText] = useState("")
  const [downLink, setDownLink] = useState("")
const [chat, setChat] = useState("")


const query = {
  videoId: "ZiDfZLJZTGU"
};
const fetchUrl = "https://youtube-browser-api.netlify.app/transcript?" + new URLSearchParams(query).toString()
// https://youtube-browser-api.netlify.app/transcript?videoId=pOEyYwKtHJo
fetch(fetchUrl)
  .then(res => res.json())
  .then(console.log)




  const downloadFile = async () => {
    const downloadLink = `https://youtube-transcript-downloader.s3.amazonaws.com/youtube-transcripts/${downLink.slice(32, downLink.length)}.txt`
console.log("DOWNLOIKN",downloadLink)
    const response = await fetch(downloadLink)
    const data = await response.text()
    setText(data)
    return data
  }

 const [store, setStore] = useState([]);
  const [response, setResponse] = useState([]);

  const loop = async () => {
    let s = 0;
    let e = 10000;
    for (s; e < text.length; ) {
      let trim = text.slice(s, e);
      setStore((prevStore) => [...prevStore, trim]);
      s = e;
      e = e + 10000;
      await fetchQuestions(trim);
    }
  };

  const fetchQuestions = async (question) => {
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "a8e75297c5msh0f90c48ec4ed7cep154f9cjsn736be15a10aa",
        "X-RapidAPI-Host": "chatgpt-ai-chat-bot.p.rapidapi.com",
      },
      body: JSON.stringify({ query:  `summarize this ${question}` }),
    };
    try {
      const response = await fetch(
        "https://chatgpt-ai-chat-bot.p.rapidapi.com/ask",
        options
      );
      const json = await response.json();
      setResponse((prevResponse) => [...prevResponse, json]);
    } catch (err) {
      console.error(err);
    }
  };

const fetchCondTwo = async () =>{

  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': 'a8e75297c5msh0f90c48ec4ed7cep154f9cjsn736be15a10aa',
      'X-RapidAPI-Host': 'chatgpt-ai-chat-bot.p.rapidapi.com'
    },
    body: JSON.stringify({ "query": `summarize this ${text}` })
  };
  try {
    const response = await fetch(
      "https://chatgpt-ai-chat-bot.p.rapidapi.com/ask",
      options
    );
    const json = await response.json();
    setResponse((prevResponse) => [...prevResponse, json]);
  } catch (err) {
    console.error(err);
  }
}



useEffect(  () => {
  
  if(text.length>14000){
     loop()
  }
  else if(text.length<14000 && text.length>100){
   fetchCondTwo()
  }
}, [text])









  const handleButtonClick = async () => {
    try {
      // const data = await fetchData()
      // const finalLink = await handleLink()
     const download = await downloadFile()

     
     


    } catch (error) {
      console.error(error)
    }
  }

 
console.log("response", response)
console.log("store",store)
console.log("text",text)
console.log("txtData",txtData)
  return (
    <>
      <input type="text" onChange={(e)=>setDownLink(e.target.value)} />
      <button onClick={()=>handleButtonClick()}>Get, Link, and Download</button>
    {/* <p>{text}</p> */}

      {response.map(item=>{
        return <p>{item.response}</p>
      })}
    </>
  );
}

export default App;
