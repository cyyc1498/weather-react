import React from "react";
import Forecast from "./forecast";
import SearchEngine from "./searchengine";
import './App.css';
import GetTime from "./time";
import axios from "axios";


export default function App() {
 
  return (
    <div className="App">
      <div className="container">
        <span id="time"><GetTime /></span>
        <button id="current-location">
          <i className="fa-solid fa-location-crosshairs"></i>
        </button>
        <SearchEngine />
        
        <div className="current" id="current-info">
          <h1 id="city"> Toronto </h1>
          <h2 id="currentTemp">
            <span id="temp">temp</span>
            <span className="unit">°C</span>
          </h2>
          <div className="row row_height">
            <div className="col-6">
              <img src="/" id="icon"/>
            </div>
            <div className="col-6 midright">
              <ul className="rainWind">
                <li>
                  <span id="description">desc</span>
                </li>
                <li>
                  Wind: <span id="wind">wind</span>km/hr
                </li>
                <li>
                  Feels like: <span id="feelsLike">feels like</span>
                  <span className="unit">°C</span>
                </li>
              </ul>
              <br />
            </div>
          </div>
        </div>

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
