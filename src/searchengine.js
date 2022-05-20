import React,{useState} from "react";


export default function SearchEngine() {
  
    let[city,setCity] = useState("")
    
    function getCity(event){
        setCity(event.target.value)
    }

    return (
    <form id="search-form" autocomplete="off" autofocus>
      <input onChange={getCity}
        id="search-input"
        type="text"
        placeholder="Search for your city"
        autofocus
      />
      <button id="button" type="submit">
        <i className="fa-solid fa-magnifying-glass" />
      </button>
    </form>
  );
}