import React, {useState} from "react";
import axios from "axios";

export default function Weather(){

    let [weatherData,setWeatherData] = useState({})
    let [ready,setReady] = useState(false);

    function handleResponse(response){
        console.log(response.data);
        setWeatherData({
            city: response.data.name,
            temp: Math.round(response.data.main.temp),
            desc: response.data.weather[0].description,
            wind: Math.round(response.data.wind.speed),
            feels_like: Math.round(response.data.main.feels_like),
            humidity: Math.round(response.data.main.humidity),
            icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`

        })
        setReady(true);
    }
        if(ready){
            return(
        <div class="current">          
            <h1 id="city">{weatherData.city}</h1>

          <h2 id="currentTemp">
            <span id="temp">{weatherData.temp}</span>
            <span className="unit">°C</span>
          </h2>

          <div className="row row_height">
            <div className="col-6">
              <img id="icon" src={weatherData.icon} />
            </div>
            <div className="col-6 midright">
              <ul className="rainWind">
                <li>
                  <span id="description">{weatherData.desc}</span>
                </li>
                <li>
                  Wind: <span id="wind">{weatherData.wind}</span>km/hr
                </li>
                <li>
                  Feels like: <span id="feelsLike">{weatherData.feels_like}</span>
                  <span className="unit">°C</span>
                </li>
              </ul>
              <br />
            </div>
          </div>
        </div>
            )
        } else{
            let city ="Toronto";
            let apiKey = `273346a7322f8fd8336a2edf5af47985`;
            let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
            axios.get(apiUrl).then(handleResponse);

            return ("Loading...")
        }
        
    }
