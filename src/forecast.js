import React, {useState,useEffect} from "react";
import axios from "axios";
import ForecastDay from "./forecastday";

export default function Forecast(props) {
  let [loaded,setLoaded] = useState(false)
  let [forecastData,setForecastData] = useState(null)

  useEffect(() => {
    setLoaded(false);
  },[props.coordinates])


  function handleResponse(response){
    console.log(response)
    setForecastData(response.data.daily);
    setLoaded(true);
  }
  
  if(loaded){
    return (
      <div className="row days">
            <ForecastDay data={forecastData[1]}/> 
            <ForecastDay data={forecastData[2]}/> 
            <ForecastDay data={forecastData[3]}/> 
            <ForecastDay data={forecastData[4]}/> 
            <ForecastDay data={forecastData[5]}/> 
        </div>
      )

  } else {

    let apiKey = `bc249258e8467d6f697b4200bebebdc0`;
    let apiForecastUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coordinates.lat}&lon=${props.coordinates.lon}&appid=${apiKey}&units=metric`
  
    axios.get(apiForecastUrl).then(handleResponse)

    return null

      }
    }

    

