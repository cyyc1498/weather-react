import React, {useState} from "react";
import axios from "axios";
import ForecastDay from "./forecastday";

export default function Forecast(props) {
  let [loaded,setLoaded] = useState(false)
  let [forecastData,setForecastData] = useState(null)
  let [unit,setUnit] = useState("metric")
  
  function forecastResponse(response){
    setForecastData(response.data.daily);
    setLoaded(true);
  }
  
  if(loaded){
    return (
    <div className="row days">
      {forecastData.map(function(forecastDay,index){
        if(index>0 && index < 6){
          return(
          <div className="col" key={index}>
            <ForecastDay data={forecastDay} unit={unit}/> 
          </div>
          )
        }
      })}
    </div>
      )

  } else {

    let apiKey = `bc249258e8467d6f697b4200bebebdc0`;
    let apiForecastUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coords.lat}&lon=${props.coords.lon}&appid=${apiKey}&units=metric`
  
    axios.get(apiForecastUrl).then(forecastResponse)

    return null

      }
    }

    

