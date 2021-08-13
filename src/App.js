import { useState, useEffect } from "react";
import "./styles.css";
import {CopyToClipboard } from "react-copy-to-clipboard"

export default function App() {


  const colors = [
    "#FF5733",
    "#FFA833",
    "#CAFF33",
    "#339CFF",
    "#FF33B8",
    "#4F639C",
    "#A569BD",
    "#145A32",

  ]

  const [background, setBackground] = useState("#2C2B25");
  const [current, setCurrent] = useState(null)

  useEffect(()=>{
    const timer = setTimeout(()=>{
      setCurrent(null)
    }, 2000)
    return ()=>clearTimeout(timer)
  },[current]);

  return (
    <div className="App" style = {{background: background}}>
      
      {current !== null && <h1>Copied {current}</h1>}
      <div className="container">
        {colors.map((color, index)=>(
          <div key={index} className="card">
            <div  style={{
              background: color,
              filter: "brightness(85%)",
              boxShadow: color === background ? "0 0 5px #000" : ""
            }} className="box" onClick={()=>setBackground(color)}>
              
            </div>
            <CopyToClipboard text={`color: ${color};`}>
                <p style={{color: color === background ? "#fff" : color}} onClick={()=>setCurrent(color)}>{color}</p>
            </CopyToClipboard>
          </div>
        ))}
      </div>
    </div>
  );
}
