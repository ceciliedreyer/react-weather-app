import React, { useState } from "react";
import axios from "axios";
import "./Forecast.css";

import DailyForecast from "./DailyForecast";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState("");

  function getForecast(response) {
    console.log(response.data);
    setLoaded(true);
    setForecast({
      tempMin: response.data.list[0].main.temp_min,
      tempMax: response.data.list[0].main.temp_max,
      time: response.data.list[0].dt,
    });
  }

  if (loaded) {
    return (
      <div className="Forecast">
        <div className="row">
          <DailyForecast data={forecast} />
        </div>
      </div>
    );
  } else {
    let lon = props.coord.lon;
    let lat = props.coord.lat;
    let apiKey = "9dc3b95c42fa941f8763112d84a09d1e";

    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&appid=${apiKey}`;

    axios.get(apiUrl).then(getForecast);

    return null;
  }
}
