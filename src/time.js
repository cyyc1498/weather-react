import React from "react";


export default function GetTime(props){
  console.log(props.date)

  
  let daysOfWeek = ["Sun","Mon","Tues","Wed","Thu","Fri","Sat"]
  let month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"]
  
  if(props.date.getMinutes() < 10){
    return(`${daysOfWeek[props.date.getDay()]}, ${month[props.date.getMonth()]}, ${props.date.getDate()}, ${props.date.getFullYear()} - ${props.date.getHours()}:0${props.date.getMinutes()}`)
  } else {
    return (`${daysOfWeek[props.date.getDay()]}, ${month[props.date.getMonth()]}, ${props.date.getDate()}, ${props.date.getFullYear()} - ${props.date.getHours()}:${props.date.getMinutes()}`)
  }

}