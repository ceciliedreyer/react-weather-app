import React from "react";
import axios from "axios";
import "./Forecast.css";

export default function Forecast(props) {
  console.log(props.coord);

  function getForecast(response) {
    console.log(response.data);
  }

  let lat = props.coord.lat;
  let lon = props.coord.lon;

  let apiKey = "9dc3b95c42fa941f8763112d84a09d1e";

  let apiURL = `api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;

  axios.get(apiURL).then(getForecast);

  return (
    <div className="Forecast">
      <div className="row">
        <div className="col">
          <div className="forecast-day">Fri</div>{" "}
          <div>
            <img
              className="forecast-icon"
              src="https://openweathermap.org/img/wn/10d@2x.png"
              alt="weather-icon"
            ></img>
          </div>{" "}
          <span className="forecast-max">21º</span>{" "}
          <span className="forecast-min">11º</span>
        </div>
      </div>
    </div>
  );
}
