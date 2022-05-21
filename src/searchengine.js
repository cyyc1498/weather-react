import React,{useState} from "react";
import axios from "axios";
import Forecast from "./forecast";


export default function SearchEngine() {
    let [temp, setTemp] = useState(null);
    let [desc, setDesc] = useState(null);
    let [humidity, setHumidity] = useState(null);
    let [wind, setWind] = useState(null);
    let [icon, setIcon] = useState(null);
    let [current, setCurrent] = useState("");
    let [feelsLike, setFeelsLike] = useState(null);
    let [city,setCity] = useState("");
    let [data, setData] = useState(null)

    
    function citySearch(event){
        setCity(event.target.value);
    }

    function toForecast(){
        return (<div><Forecast city={city}/></div>
        )
    }

    let apiKey = `273346a7322f8fd8336a2edf5af47985`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    
  function weatherData(response) {
    console.log(response.data);
    setTemp(Math.round(response.data.main.temp));
    setDesc(response.data.weather[0].description);
    setHumidity(Math.round(response.data.main.humidity));
    setWind(Math.round(response.data.wind.speed));
    setIcon(
      ` http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
    setFeelsLike(Math.round(response.data.main.feels_like))
     
  }axios.get(apiUrl).then(weatherData);
 

    function handleSubmit(event){
        event.preventDefault();
        setCurrent(
        <div className="current"id="currentInfo">
          <h1 id="city">{city}</h1>
          <h2 id="currentTemp">
            <span id="temp">{temp}</span>
            <span className="unit">°C</span>
          </h2>
          <div className="row row_height">
            <div className="col-6">
              <img src={icon} alt="current weather icon" id="icon"/>
            </div>
            <div className="col-6 midright">
              <ul className="rainWind">
                <li key="desc">
                  <span id="description">{desc}</span>
                </li>
                <li key="wind">
                  Wind: <span id="wind">{wind}</span>km/hr
                </li>
                <li key="feelsLike">
                  Feels like: <span id="feelsLike">{feelsLike}</span>
                  <span className="unit">°C</span>
                </li>
                <li key="humidity">
                    Humidity: <span id="humidity">{humidity}</span>
                </li>
              </ul>
              <br />
            </div>
          </div>
        </div>
        );    
    }
    return (
    <div>
    <form id="search-form" autocomplete="off" autofocus onSubmit={handleSubmit}>
      <input onChange={citySearch}
        id="search-input"
        type="text"
        placeholder="Search for your city"
        autofocus
      />
      <button id="button" type="submit">
        <i className="fa-solid fa-magnifying-glass" />
      </button>
    </form>
    <div>{current}</div>
    </div>

  );
}