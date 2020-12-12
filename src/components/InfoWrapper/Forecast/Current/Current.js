import React from "react";
import { decodeDate } from "../../../../tools/decodeDate";
import { CurrentWeatherWrapper, H1 } from "./Current.css";

export const Current = ({ data }) => {
  const { name, country } = data;
  const {
    feels_like,
    humidity,
    pressure,
    sunrise,
    sunset,
    temp,
    wind_speed,
    dt
  } = data.current;
  const date = decodeDate(dt, "fullDate");
  const weatherName = data.current.weather[0].main;
  const weatherIcon = data.current.weather[0].icon;
  return (
    <CurrentWeatherWrapper>
      <H1>
        {name}, {country}, {date}
      </H1>
    </CurrentWeatherWrapper>
  );
};
