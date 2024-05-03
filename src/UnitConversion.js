import React, { useState } from "react";

export default function UnitConversion(props) {
  const [unit, setUnit] = useState("celcius");
  let fahrenheit = (props.temp * 9) / 5 + 32;

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelcius(event) {
    event.preventDefault();
    setUnit("celcius");
  }

  if (unit === "celcius") {
    return (
      <div className="results">
        <h2>{Math.round(props.temp)}</h2>
        <p className="degree-icon">
          ºC |{" "}
          <a href="/" onClick={showFahrenheit}>
            ºF
          </a>
        </p>
      </div>
    );
  } else {
    return (
      <div className="results">
        <h2>{Math.round(fahrenheit)}</h2>
        <p className="degree-icon">
          {"  "} ºF |{" "}
          <a href="/" onClick={showCelcius}>
            ºC
          </a>
        </p>
      </div>
    );
  }
}
