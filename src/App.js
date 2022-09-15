
import { useState } from 'react';
import "./App.css";

function App() {
  const [Url, setUrl] = useState("")

  const runOnClick = () =>{
    /* eslint-disable no-undef */
    chrome.tabs.query({active:true,currentWindow:true},(tabs)=>{
      const activeTabId = tabs[0].id;
      chrome.scripting.executeScript({
        target : {tabId : activeTabId},
        function : () => { 
          let aElements = document.getElementsByTagName("a");
          for(let i = 0;i < aElements.length; i++){
          window.open(aElements[i].href)  
          }
      }
      })
    })
  }

  return (
    <div className="App">
      <div className="header">
        <h3>I am Extention</h3>
        <input type="text" onChange={(e)=>{
setUrl(e.target.value)
        }} label="input url" placeholder="input url to find a tags" />
        <button onClick={()=>{
          console.log("Url",Url);
          runOnClick()
        }}>
          Hit Me!
        </button>
      </div>
    </div>
  );
}

export default App;
