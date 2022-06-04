import React from "react";
import WeatherIcon from "./weathericon";

export default function WeatherInfo(props) {
  if (props.unit === "metric") {
    return (
      <div className="current">
        <h1 id="city">{props.data.city}</h1>
        <h2 id="currentTemp">
          <span id="temp">{props.data.temp}</span>
          <span className="unit">°C</span>
        </h2>
        <div className="row row_height">
          <div className="col-6 current-weather-icon" id="icon">
            <WeatherIcon code={props.data.icon}/>
          </div>
          <div className="col-6 midright">
            <ul className="rainWind">
              <li key="desc">
                <span id="description">{props.data.desc}</span>
              </li>
              <li key="wind">
                Wind: <span id="wind">{props.data.wind}</span>km/hr
              </li>
              <li key="humidity">
                Humidity: <span id="humidity">{props.data.humidity}</span>
              </li>
              <li key="feelsLike">
                Feels like: <span id="feelsLike">{props.data.feels_like} </span>
                <span className="unit">°C</span>
              </li>
            </ul>
            <br />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="current">
        <h1 id="city">{props.data.city}</h1>
        <h2 id="currentTemp">
          <span id="temp">{Math.round((props.data.temp * 5) / 9 + 32)}</span>
          <span className="unit">°F</span>
        </h2>
        <div className="row row_height">
          <div className="col-6">
            <img src={props.data.icon} alt="current weather icon" id="icon" />
          </div>
          <div className="col-6 midright">
            <ul className="rainWind">
              <li key="desc">
                <span id="description">{props.data.desc}</span>
              </li>
              <li key="wind">
                Wind: <span id="wind">{props.data.wind}</span>km/hr
              </li>
              <li key="humidity">
                Humidity: <span id="humidity">{props.data.humidity}</span>
              </li>
              <li key="feelsLike">
                Feels like:{" "}
                <span id="feelsLike">
                  {Math.round((props.data.feels_like * 5) / 9 + 32)}{" "}
                </span>
                <span className="unit">°F</span>
              </li>
            </ul>
            <br />
          </div>
        </div>
      </div>
    );
  }
}