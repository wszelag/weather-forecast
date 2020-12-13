import React from "react";
import { CurrentWeatherWrapper } from "./Current.css";
import { Header } from "./Header";
import { WeatherDescription } from "./WeatherDescription";
import { Temperature } from "./Temperature";
import { Wind } from "./Wind";
import { Humidity } from "./Humidity";
import { Pressure } from "./Pressure";
import { Sun } from "./Sun";

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
  const weatherName = data.current.weather[0].main;
  const weatherIcon = data.current.weather[0].icon;

  let isDay = "";
  dt >= sunrise && dt <= sunset ? (isDay = true) : (isDay = false);

  const headerData = [name, country, dt, isDay];
  const weatherDescriptionData = [weatherName, weatherIcon];
  const temperatureData = [temp, feels_like];
  const windData = [wind_speed];
  const humidityData = [humidity];
  const pressureData = [pressure];
  const sunData = [sunrise, sunset];

  return (
    <CurrentWeatherWrapper>
      <Header data={headerData} />
      <WeatherDescription data={weatherDescriptionData} />
      <Temperature data={temperatureData} />
      <Wind data={windData} />
      <Humidity data={humidityData} />
      <Pressure data={pressureData} />
      <Sun data={sunData} />
    </CurrentWeatherWrapper>
  );
};
