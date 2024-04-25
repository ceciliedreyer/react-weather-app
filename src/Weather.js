import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";

export default function Weather() {
  const [city, setCity] = useState("Skæring");
  const [weather, setWeather] = useState(null);

  function updateWeather(response) {
    setWeather(response.data.main.temp);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function handleSearch(event) {
    event.preventDefault();
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ac209dae1f283fb332a5bb7f50b0f468&units=metric`;
    axios.get(apiUrl).then(updateWeather);
  }

  return (
    <div className="Weather">
      <form className="search-bar" onClick={handleSearch}>
        <input
          type="search"
          placeholder="Search for a city..."
          onChange={updateCity}
        />
        <input type="submit" value="search" />
      </form>
      <div className="results">
        <h2>
          temp is {weather}ºC in {city}
        </h2>
      </div>
    </div>
  );
}
