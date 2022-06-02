import React, {useState} from "react";
import axios from "axios";
import ForecastDay from "./forecastday";

export default function Forecast(props) {
  let [loaded,setLoaded] = useState(false)
  let [forecastData,setForecastData] = useState(null)
  
  function forecastResponse(response){
    setForecastData(response.data.daily);
    setLoaded(true);
  }
  
  if(loaded){
    return (
    <div className="row days">
      {forecastData.map(function(forecastDay,index){
        if(index < 6){
          return(
          <div className="col" key={index}>
            <ForecastDay data={forecastDay}/> 
          </div>
          )
        }
      })}
    </div>
      )

  } else {

    let apiKey = `b050aca97d97d1a30568caadb921ab4f`;
    let apiForecastUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coords.lat}&lon=${props.coords.lon}&appid=${apiKey}&units=metric`
  
    axios.get(apiForecastUrl).then(forecastResponse)

    return null

      }
    }

    

