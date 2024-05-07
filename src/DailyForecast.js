import React from "react";

export default function DailyForecast(props) {
  return (
    <div className="col">
      <div className="forecast-day"></div>{" "}
      <div>
        <img
          className="forecast-icon"
          src="https://openweathermap.org/img/wn/10d@2x.png"
          alt="weather-icon"
        ></img>
      </div>{" "}
      <span className="forecast-max">{Math.round(props.data.tempMax)}º</span>{" "}
      <span className="forecast-min">{Math.round(props.data.tempMin)}º</span>
    </div>
  );
}
