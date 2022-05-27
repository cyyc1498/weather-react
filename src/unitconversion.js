import React, {useState} from "react";




export default function ConversionLink(props){

    let [unit,setUnit] = useState("cel");

    function showF(event){
        event.preventDefault();
        document.querySelector("#temp").innerHTML = Math.round((props.celsius)*9/5+32)
        document.querySelector("#feelsLike").innerHTML = Math.round((props.feels)*9/5+32)
        document.querySelectorAll(".unit").forEach(function(element){
             element.innerHTML = "°F";
        })
        setUnit("far");
       
    }

    function showC(event){
        event.preventDefault();
        document.querySelector("#temp").innerHTML = Math.round((props.celsius))
        document.querySelector("#feelsLike").innerHTML = (props.feels)
        document.querySelectorAll(".unit").forEach(function(element){
             element.innerHTML = "°C";
        })
        setUnit("cel");
    }

    if(unit === "cel"){
        return(
            <span >
                <a href="/" id="conversion" onClick={showF}>
                    Convert to Farenheit
                </a>
            </span>
        )
    } else {
        
        return(
            <span>
                <a href="/" id="conversion" onClick={showC}>
                    Convert to Celsius
                </a>
            </span>
        )
    }
}