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
        <SearchEngine/>


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
