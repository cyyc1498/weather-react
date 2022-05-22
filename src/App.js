import React from "react";
import Forecast from "./forecast";
import SearchEngine from "./searchengine";
import './App.css';
import GetTime from "./time";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import Weather from "./weather"



export default function App() {
 
  return (
    <div className="App">
      <div className="container">
        <span id="time"><GetTime/></span>
        <button id="current-location">
          <i className="fa-solid fa-location-crosshairs"></i>
        </button>
        <SearchEngine />
        
        <Weather/>
        
        <hr />
        <div id="forecast" className="row">
          <Forecast />
          <Forecast />
          <Forecast />
          <Forecast />
          <Forecast />
        </div>
        <br />
        <a id="conversion" href="/">
          Convert to Fahrenheit
        </a>
        <span id="by">Coded by Chloe Chan</span>
        <span>
          <a href="https://github.com/cyyc1498/weather-react" id="gitRepo">
            GitHub Repo
          </a>
        </span>
      </div>
    </div>
  );
}
