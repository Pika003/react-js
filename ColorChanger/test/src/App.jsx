//1: Add proxy into the config file to connect backend with frontent
//2: We use corse to avoid CROSE policy error (whitelist some spacific url)

import { useEffect, useState } from "react"
import axios from 'axios'

function App() {
  const [color, setColor] = useState([]);

  useEffect(()=>{
    axios.get('/api/colors')
    .then((res)=>(setColor(res.data)))
  },[])

  function changeBG(color){
    document.getElementById('bgColor').style.backgroundColor = color;
  }

  return (
    <>
     <div id="bgColor" style={{color: "white",backgroundColor: "#b28704",textAlign: "center", height: "100vh"}}>
        <h2 style={{padding: "30px"}}>Colors and their values</h2>
        <ul>
          {color.map((color)=>(
            <li 
            onClick={()=>changeBG(color.color)}
            style={{listStyle: "none",margin: "25px",fontSize: "20px", cursor: "pointer"}} 
            key={color.value}
            >
              {color.color} : {color.value}
            </li>
          ))}
        </ul>
     </div>
    </>
  )
}

export default App
