import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./weatherinformation";
import Forecast from "./forecast";
import GetTime from "./time";

export default function Weather(props) {
  let [city, setCity] = useState(props.defaultCity);
  let [weatherData, setWeatherData] = useState({ ready: false });
  let [unit, setUnit] = useState("metric");

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.name,
      temp: Math.round(response.data.main.temp),
      desc: response.data.weather[0].description,
      wind: Math.round(response.data.wind.speed),
      feels_like: Math.round(response.data.main.feels_like),
      humidity: Math.round(response.data.main.humidity),
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      date: new Date(response.data.dt * 1000),
      coords: response.coord,
      unit: unit,
    });
  }
  function search() {
    let apiKey = `273346a7322f8fd8336a2edf5af47985`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;

    axios.get(apiUrl).then(handleResponse);
  }
  function getCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function showF(event) {
    event.preventDefault();
    document.querySelector("#temp").innerHTML =
      weatherData.unit === "metric"
        ? Math.round((weatherData.temp * 9) / 5 + 32)
        : Math.round(weatherData.temp);
    document.querySelector("#feelsLike").innerHTML =
      weatherData.unit === "metric"
        ? Math.round((weatherData.feels_like * 9) / 5 + 32)
        : Math.round(weatherData.feels_like);
    document.querySelectorAll(".unit").forEach(function (element) {
      element.innerHTML = "°F";
    });
    setUnit("imperial");
  }

  function showC(event) {
    event.preventDefault();
    document.querySelector("#temp").innerHTML =
      weatherData.unit === "metric"
        ? Math.round(weatherData.temp)
        : Math.round((weatherData.temp -32)*5/9);
    document.querySelector("#feelsLike").innerHTML =
      weatherData.unit === "metric"
        ? Math.round(weatherData.feels_like)
        : Math.round((weatherData.feels_like -32)*5/9);
    document.querySelectorAll(".unit").forEach(function (element) {
      element.innerHTML = "°C";
    });
    setUnit("metric");
  }

  if (weatherData.ready) {
    return (
      <div>
        <span id="time">
          <GetTime date={weatherData.date} />
        </span>
        <form
          id="search-form"
          autocomplete="off"
          autofocus
          onSubmit={handleSubmit}
        >
          <input
            onChange={getCity}
            id="search-input"
            type="text"
            placeholder="Search for your city"
            autofocus
          />
          <button id="button" type="submit">
            <i className="fa-solid fa-magnifying-glass" />
          </button>
        </form>
        <WeatherInfo data={weatherData} />
        <hr />
        <div id="forecast" className="row">
          <Forecast />
        </div>
        {unit === "metric" ? (
          <span>
            <a href="/" id="conversion" onClick={showF}>
              Convert to Farenheit
            </a>
          </span>
        ) : (
          <span>
            <a href="/" id="conversion" onClick={showC}>
              Convert to Celsius
            </a>
          </span>
        )}
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}