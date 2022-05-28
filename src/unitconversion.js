import React, {useState} from "react";




export default function ConversionLink(props){

    let [isCel,setIsCel] = useState(true);

    function showF(event){
        event.preventDefault();
        document.querySelector("#temp").innerHTML = Math.round((props.data.temp)*9/5+32)
        document.querySelector("#feelsLike").innerHTML = Math.round((props.data.feels_like)*9/5+32)
        document.querySelectorAll(".unit").forEach(function(element){
             element.innerHTML = "°F";
        })
        setIsCel(false);
       
    }

    function showC(event){
        event.preventDefault();
        document.querySelector("#temp").innerHTML = (props.data.temp)
        document.querySelector("#feelsLike").innerHTML = (props.data.feels_like)
        document.querySelectorAll(".unit").forEach(function(element){
             element.innerHTML = "°C";
        })
        setIsCel(true);
    }

    if(isCel === true){
        
        return(
            <span>
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