import React from "react";

export const Current = ({ data }) => {
  const {
    feels_like,
    humidity,
    dt,
    pressure,
    sunrise,
    sunse,
    temp,
    wind_speed
  } = data;
  const weatherName = data.weather[0].main;
  const weatherIcon = data.weather[0].icon;
  return <div>current</div>;
};
