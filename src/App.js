import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Weather from "./weather"



export default function App() {
 
  return (
    <div className="App">
      <div className="container">

        <button id="current-location">
          <i className="fa-solid fa-location-crosshairs"></i>
        </button>
        <div id="current-weather">
        <Weather defaultCity = {"Toronto"}/>
        </div>
        
        <br />
        
       <div id="by"><a href="https://github.com/cyyc1498/weather-react" id="gitRepo">Open Source</a> code by Chloe Chan</div>
      </div>
    </div>
  );
}
