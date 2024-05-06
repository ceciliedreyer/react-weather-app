import React, { useState } from "react";
import axios from "axios";
import "./Forecast.css";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);

  function getForecast(response) {
    setLoaded(true);
    console.log(response.data);
  }

  if (loaded) {
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
  } else {
    let lat = props.coord.lat;
    let lon = props.coord.lon;

    let apiKey = "ce144f0cf51fa43f03431f0488a36728";

    let apiURL = `api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;

    axios.get(apiURL).then(getForecast);
  }
}
