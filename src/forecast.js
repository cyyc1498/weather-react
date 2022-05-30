import React, { useState } from "react";
import axios from "axios";

 
export default function Forecast(props) {
  
 let[min,setMin] = useState(null);
 let [max,setMax] = useState(null);
 
 let lat = props.lat;
 let lon = props.lon;


  function forecastDate(time){
    let date = new Date(time*1000);
    let day = date.getDay()
    let weekDay = ["Sun","Mon","Tues","Wed","Thu","Fri","Sat"];
    return weekDay[day];
  }

  function getForecast(response){
  console.log(response.data.daily);
  setMax(response.daily.max)  
  
}


  let apiKey = `273346a7322f8fd8336a2edf5af47985`
  let forecastUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
  
  
    return (
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
