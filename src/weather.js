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
      icon: response.data.weather[0].icon,
      coords: response.data.coord,
      date: new Date(response.data.dt * 1000),
      unit: unit,
    });
  }

  function search() {
    let apiKey = `bc249258e8467d6f697b4200bebebdc0`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }
  function getCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  /*function showF(event) {
    event.preventDefault();
    setUnit("imperial");
  }

  function showC(event) {
    event.preventDefault();
    setUnit("metric");
  }*/

  if (weatherData.ready) {
    return (
      <div>
        <span id="time">
          <GetTime date={weatherData.date} />
        </span>
        <form
          id="search-form"
          autoComplete="off"
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
        <WeatherInfo data={weatherData} unit={unit} />
        <hr />
        
        <Forecast coordinates={weatherData.coords} unit={unit}/>
        
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}

/*{unit === "metric" ? (
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
        )}*/