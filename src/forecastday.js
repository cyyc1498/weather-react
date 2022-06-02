import React from "react";

export default function ForecastDay(props){

function getMax(){
let maxTemp = props.data.temp.max
return maxTemp
}
function getMin(){
let minTemp = props.data.temp.min
return minTemp
}

function day(){
    let weekdays = ["Sun","Mon","Tues","Wed","Thu","Fri","Sat"]
    let date = new Date(props.data.dt*1000)
    let day =date.getDay();
    return weekdays[day]
}

return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{day()}</h5>
          <p className="card-text">
          <img src="/"/>
            <br />
            <br />
            <span className="forecastTempMax">{Math.round(getMax())}</span>
            <span className="unit">°C</span> |
            <span className="forecastTempMin">{Math.round(getMin())}</span>
            <span className="unit">°C</span>
          </p>
        </div>
      </div>
    )
}