import React, { useState } from "react";
import axios from "axios";
import { MaterialSymbol } from "react-material-symbols";

import "./Weather.css";
import Time from "./Time";

export default function Weather() {
  const [city, setCity] = useState("Aarhus");
  const [weather, setWeather] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function updateWeather(response) {
    console.log(response.data);
    setWeather({
      temperature: response.data.main.temp,
      town: response.data.name,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      feelsLike: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      time: new Date(response.data.dt * 1000),
    });

    setLoaded(true);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function handleSearch(event) {
    event.preventDefault();
    let apiKey = "9dc3b95c42fa941f8763112d84a09d1e";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(updateWeather);
  }

  let form = (
    <form class="search-form" onClick={handleSearch}>
      <input
        type="search"
        placeholder="Search for a city..."
        onChange={updateCity}
        className="search-form-input"
      />
      <input type="submit" value="search" className="search-form-button" />
    </form>
  );

  let footer = (
    <footer>
      Coded by{" "}
      <a href="https://github.com/ceciliedreyer"> Cecilie Dreyer Lyng</a> and is
      open-sourced{" "}
      <a href="https://github.com/ceciliedreyer/react-weather-app">
        on GitHub {""}
      </a>
      and hosted {""}
      <a href="https://vejr-app.netlify.app/">on Netlify</a>
    </footer>
  );

  if (loaded) {
    return (
      <div>
        <div className="header-form">{form}</div>
        <div className="Weather">
          <div className="header-info container mb-5">
            <div className="row">
              <div className="current-location col-6">
                {" "}
                <MaterialSymbol
                  icon="fmd_good"
                  size={9}
                  grade={-2}
                  color="black"
                />{" "}
                {weather.town}
              </div>
              <div className="current-time col-6">
                <Time time={weather.time} />
              </div>
            </div>
          </div>
          <div className="results">
            <h2>{Math.round(weather.temperature)}</h2>
            <p className="degree-icon">ºC</p>
          </div>
          <div id="current-temp-icon">
            <img
              src={weather.icon}
              alt={weather.description}
              class="current-temp-icon"
            />
          </div>
          <div class="current-temp-description" id="current-temp-description">
            {weather.description}
          </div>
          <div className="container weather-detail mt-5">
            <div className="row">
              <div className="col-4">
                <MaterialSymbol
                  icon="humidity_mid"
                  size={9}
                  grade={-2}
                  color="black"
                />
                <span id="weather-detail-humidity">{weather.humidity}%</span>
              </div>
              <div className="col-4">
                <MaterialSymbol
                  icon="thermostat"
                  size={9}
                  grade={-2}
                  color="black"
                />
                <span id="weather-detail-feelsLike">
                  {Math.round(weather.feelsLike)}ºC
                </span>
              </div>
              <div className="col-4">
                <MaterialSymbol
                  icon="clear_all"
                  size={9}
                  grade={-2}
                  color="black"
                />
                <span id="weather-detail-wind">{weather.wind}km/h</span>
              </div>
            </div>
          </div>
          {footer}
        </div>
      </div>
    );
  } else {
    let apiKey = "9dc3b95c42fa941f8763112d84a09d1e";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(updateWeather);

    return <p>loading...</p>;
  }
}
