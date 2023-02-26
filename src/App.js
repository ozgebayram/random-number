import { useState } from "react";
import "./styles.css"


function App() {

  const [minVal, setMinVal] = useState(0)
  const [maxVal, setMaxVal] = useState(10)
  const [randomNum, setrandomNum] = useState(8)

  const giveRandomNum=()=>{
    setrandomNum(Math.floor(Math.random()*(maxVal-minVal +1)+minVal))
    
  }


  return (
    <div className="App">
      <div className="container">
        <div className="randomNumber">
          <p>Random Number: <span>{randomNum}</span></p>
        </div>
        <div className="numContainer">
          <div>
            <p>Min:</p>
            <input type="number" 
            value={minVal}
            onChange={e => setMinVal(+e.target.value)}/>
          </div>
          <div>
            <p>Max:</p>
            <input type="number" 
            value={maxVal}
            onChange={e => setMaxVal(+e.target.value)}/>
          </div>  
        </div>
        <button onClick={giveRandomNum}>Get Random Number</button>
        
      </div>
    
    </div>
  );
}

export default App;
