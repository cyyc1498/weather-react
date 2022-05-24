import axios from "axios";
import React,{useState} from "react";
/*import axios from "axios";*/

export default function SearchEngine() {
    let [city,setCity] = useState("");
    let [weatherData,setWeatherData] = useState({});
    let [ready,setReady] = useState(false);
    let [current,setCurrent]=useState("")
    
    function getCity(event){
      setCity(event.target.value);
    }
      function handleResponse(response){
        console.log(response.data);
        setWeatherData({
            ready:true,
            city: response.data.name,
            temp: Math.round(response.data.main.temp),
            desc: response.data.weather[0].description,
            wind: Math.round(response.data.wind.speed),
            feels_like: Math.round(response.data.main.feels_like),
            humidity: Math.round(response.data.main.humidity),
            icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`

        });

        
      }

    function handleSubmit(event){
      event.preventDefault();
      
        if(ready){
           setCurrent(
          <div className="current">
          <h1 id="city">{weatherData.city}</h1>
          <h2 id="currentTemp">
            <span id="temp">{weatherData.temp}</span>
            <span className="unit">°C</span>
          </h2>
          <div className="row row_height">
            <div className="col-6">
              <img src={weatherData.icon} alt="current weather icon" id="icon"/>
            </div>
            <div className="col-6 midright">
              <ul className="rainWind">
                <li key="desc">
                  <span id="description">{weatherData.desc}</span>
                </li>
                <li key="wind">
                  Wind: <span id="wind">{weatherData.wind}</span>km/hr
                </li>
                <li key="humidity">
                    Humidity: <span id="humidity">{weatherData.humidity}</span>
                </li>
                <li key="feelsLike">
                  Feels like: <span id="feelsLike">{weatherData.feelsLike}</span>
                  <span className="unit">°C</span>
                </li>
              </ul>
              <br />
            </div>
          </div>
        </div> );


        } 

        else {
         
          let apiKey = `273346a7322f8fd8336a2edf5af47985`;
          let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
          
        
          axios.get(apiUrl).then(handleResponse);
          
          return ("Loading...");
              
    }
    
  
}
  return(
    <div>
    <form id="search-form" autocomplete="off" autofocus onSubmit={handleSubmit}>
      <input onChange={getCity}
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
  )
  
}
