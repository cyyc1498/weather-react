import React from "react";

 
export default function Forecast() {
  return (
    <div className="col">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Day</h5>
          <p className="card-text">
            <i class="fa-solid fa-sun"></i>
            <br />
            <br />
            <span className="forecastTempMax">20</span>
            <span className="unit">°C</span> |
            <span className="forecastTempMin">20</span>
            <span className="unit">°C</span>
          </p>
        </div>
      </div>
    </div>
  );
}
