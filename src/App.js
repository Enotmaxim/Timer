import logo from './logo.svg';
import React, {Component, useState, useEffect}from 'react'
import './App.css';


function App() {
    const [timer, setTimer] = useState(0)
    const [start, setStart] = useState(false)
    useEffect(() => {
      let interval = null
      if (start) {
        interval = setInterval(()=>{
          setTimer(prevenTimer => prevenTimer + 10)
        }, 10)
      }else {
        clearInterval(interval)
      }
      return() => clearInterval(interval)
    },[start])
    return (
        <div className="timeUp">
          <div className="app">
            <p>
              Timer
            </p>
            <p>
              <span className="timering_first">{("0" + Math.floor((timer/60000)%60)).slice(-2)}.</span>
              <span className="timering_second">{("0" + Math.floor((timer/1000)%60)).slice(-2)}.</span>
              <span className="timering_thr">{("0" + (timer/10)%1000).slice(-2)}</span>

            </p>
            <button className="butt_one" onClick={()=> setStart(true)}>START</button>
            <button className="butt_two" onClick={()=> setStart(false)}>STOP</button>
            <button className="butt_three" onClick={()=>{setTimer(0); setStart(false)}}>RESET</button>
          </div>
        </div>
    );

}

export default App;