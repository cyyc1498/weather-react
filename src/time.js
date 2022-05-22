import React from "react";

export default function GetTime(){

  let time = new Date();
  let days = ["Sun","Mon","Tues","Wed","Thu","Fri","Sat"]
  let month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"]
  
  
  if(time.getMinutes() < 10){
    return (`${days[time.getDay()]}, ${month[time.getMonth()]} ${time.getDate()}, ${time.getFullYear()} -
   ${time.getHours()}:0${time.getMinutes()}`)


   
  }else{
  return `${days[time.getDay()]}, ${month[time.getMonth()]} ${time.getDate()}, ${time.getFullYear()} -
   ${time.getHours()}:${time.getMinutes()}` 
  }


}