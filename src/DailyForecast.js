import React from "react";

export default function DailyForecast(props) {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let date = new Date(props.data.dt * 1000);
  let day = date.getDay();

  let tempMin = props.data.temp.min;
  let tempMax = props.data.temp.max;

  let icon = `https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;

  return (
    <div className="col">
      <div className="forecast-day">{days[day]}</div>{" "}
      <div>
        <img className="forecast-icon" src={icon} alt="weather-icon"></img>
      </div>{" "}
      <span className="forecast-max">{Math.round(tempMax)}º</span>{" "}
      <span className="forecast-min">{Math.round(tempMin)}º</span>
    </div>
  );
}
