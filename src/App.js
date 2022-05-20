import React from "react";
import Forecast from "./forecast";
import SearchEngine from "./searchengine";
import './App.css';



export default function App() {
  return (
    <div className="App">
      <div className="container">
        <span id="time">TIME/Date</span>
        <button id="current-location">
          <i className="fa-solid fa-location-crosshairs"></i>
        </button>
        <SearchEngine />
        <div className="current">
          <h1 id="city"> Toronto </h1>
          <h2 id="currentTemp">
            <span id="temp">20</span>
            <span className="unit">°C</span>
          </h2>
          <div className="row row_height">
            <div className="col-6">
              <i class="fa-solid fa-sun" id="icon"></i>
            </div>
            <div className="col-6 midright">
              <ul className="rainWind">
                <li>
                  <span id="description"></span>
                </li>
                <li>
                  Wind: <span id="wind">20</span>km/hr
                </li>
                <li>
                  Feels like: <span id="feelsLike">20</span>
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
        <a id="conversion" href="#">
          Convert to Fahrenheit
        </a>
        <span id="by">Coded by Chloe Chan</span>
        <span>
          <a href="https://github.com/cyyc1498/app" id="gitRepo">
            GitHub Repo
          </a>
        </span>
      </div>
    </div>
  );
}
