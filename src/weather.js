import React, {useState} from "react";
import axios from "axios";
import WeatherInfo from "./weatherinformation";
import Forecast from "./forecast";


export default function Weather(props){

let [city,setCity] = useState(props.defaultCity)
let [weatherData,setWeatherData] = useState({ready:false})

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
        function search(){
                let apiKey = `273346a7322f8fd8336a2edf5af47985`;
                let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
                axios.get(apiUrl).then(handleResponse);

            }
      function getCity(event){
          setCity(event.target.value)
      }

      function handleSubmit(event){
        event.preventDefault();
        search();
      }

      if(weatherData.ready){
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
            <WeatherInfo data={weatherData}/>
            <Forecast/>
            
        </div>
  
    )}

    else{
        search();
        return "Loading..."
    
    }

}
        
    
