import React, { useState } from "react";
import axios from "axios";
import "./searchengine";

 
export default function Forecast(props) {
  
 let[min,setMin] = useState(null);
 let [max,setMax] = useState(null);
 let [forecast,setForecast] = useState(null)

 function getForecastTemp(response){
    console.log(response)
    setMin(response.daily.temp.min)
    setMax(response.daily.temp.max)
 }
let apiKey = `273346a7322f8fd8336a2edf5af47985`;
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(getForecastTemp)

 function forecastInfo(){
     setForecast(
    <div className="col">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Day</h5>
          <p className="card-text">
            <i class="fa-solid fa-sun"></i>
            <br />
            <br />
            <span className="forecastTempMax">{max}</span>
            <span className="unit">°C</span> |
            <span className="forecastTempMin">{min}</span>
            <span className="unit">°C</span>
          </p>
        </div>
      </div>
    </div>
  );
}
}