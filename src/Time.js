import React from "react";

export default function Time(props) {
  let weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = props.time.getDay();
  let hours = props.time.getHours();
  let minutes = props.time.getMinutes();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }
  return (
    <div>
      {weekdays[day]}, {hours}:{minutes}
    </div>
  );
}
