import React from "react";
import {
  CurrentWeatherWrapper,
  GoogleMapContainer,
  Wrapper
} from "./Current.css";
import { WeatherDescription } from "./WeatherDescription";
import { Temperature } from "./Temperature";
import { Wind } from "./Wind";
import { Humidity } from "./Humidity";
import { Pressure } from "./Pressure";
import { Sun } from "./Sun";

export const Current = ({ data }) => {
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
  const weatherDescription = data.current.weather[0].description;

  let isDay = "";
  dt >= sunrise && dt <= sunset ? (isDay = true) : (isDay = false);

  return (
    <Wrapper>
      <CurrentWeatherWrapper>
        <WeatherDescription name={weatherDescription} />
        <Temperature temp={temp} feels_like={feels_like} />
        <Wind wind_speed={wind_speed} />
        <Humidity humidity={humidity} />
        <Pressure pressure={pressure} />
        <Sun sunrise={sunrise} sunset={sunset} />
      </CurrentWeatherWrapper>
      <GoogleMapContainer>google maps will appear here!</GoogleMapContainer>
    </Wrapper>
  );
};
