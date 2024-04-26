import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";

export default function Weather() {
  const [city, setCity] = useState("Aarhus");
  const [weather, setWeather] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function updateWeather(response) {
    setWeather({
      temperature: response.data.main.temp,
      town: response.data.name,
    });
  }

  function updateCity(event) {
    setLoaded(true);
    setCity(event.target.value);
  }

  function handleSearch(event) {
    event.preventDefault();
    let apiKey = "9dc3b95c42fa941f8763112d84a09d1e";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(updateWeather);
  }

  if (loaded) {
    return (
      <div>
        <div className="header-form">
          <form class="search-form" onClick={handleSearch}>
            <input
              type="search"
              placeholder="Search for a city..."
              onChange={updateCity}
              className="search-form-input"
            />
            <input
              type="submit"
              value="search"
              className="search-form-button"
            />
          </form>
        </div>
        <div className="Weather">
          <div className="header-info">
            <div className="current-location">{weather.town}</div>
          </div>
          <div className="results">
            <h2>{Math.round(weather.temperature)}</h2>
            <p className="degree-icon">ºC</p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="header-form">
          <form class="search-form" onClick={handleSearch}>
            <input
              type="search"
              placeholder="Search for a city..."
              onChange={updateCity}
              className="search-form-input"
            />
            <input
              type="submit"
              value="search"
              className="search-form-button"
            />
          </form>
        </div>
      </div>
    );
  }
}
