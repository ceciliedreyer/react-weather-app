import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Forecast.css";

import DailyForecast from "./DailyForecast";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState("");

  useEffect(() => {
    setLoaded(false);
  }, [props.coord]);

  function getForecast(response) {
    console.log(response.data);
    setLoaded(true);
    setForecast(response.data.daily);
  }

  if (loaded) {
    return (
      <div className="Forecast">
        <div className="row">
          {forecast.map(function (day, index) {
            if (index < 3)
              return (
                <div className="col" key={index}>
                  <DailyForecast data={day} />
                </div>
              );
          })}
        </div>
      </div>
    );
  } else {
    let lon = props.coord.lon;
    let lat = props.coord.lat;
    let apiKey = "9dc3b95c42fa941f8763112d84a09d1e";

    let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(getForecast);

    return null;
  }
}
