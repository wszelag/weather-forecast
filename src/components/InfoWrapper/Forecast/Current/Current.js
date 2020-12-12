import React from "react";
import { decodeDate } from "../../../../tools/decodeDate";
import { CurrentWeatherWrapper, H1, P, Span } from "./Current.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoon,
  faSun,
  faWind,
  faThermometerThreeQuarters,
  faChartBar,
  faTint
} from "@fortawesome/free-solid-svg-icons";

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
  const sunriseTime = decodeDate(sunrise, "time");
  const sunsetTime = decodeDate(sunset, "time");
  const weatherName = data.current.weather[0].main;
  const weatherIcon = data.current.weather[0].icon;

  let dayIcon = "";
  dt >= sunrise && dt <= sunset ? (dayIcon = faSun) : (dayIcon = faMoon);

  return (
    <CurrentWeatherWrapper>
      <H1>
        <FontAwesomeIcon icon={dayIcon} /> {name}, {country}, {date}
      </H1>
      <P>{weatherName}</P>
      <P>
        <FontAwesomeIcon icon={faThermometerThreeQuarters} />
        <Span>
          {temp}
          <sup>o</sup>C, feels like {feels_like}
          <sup>o</sup>C
        </Span>
      </P>
      <P>
        <FontAwesomeIcon icon={faWind} />
        <Span>{wind_speed}km/h</Span>
      </P>
      <P>
        <FontAwesomeIcon icon={faTint} />
        <Span>{humidity}%</Span>
      </P>
      <P>
        <FontAwesomeIcon icon={faChartBar} /> <Span>{pressure}hPa</Span>
      </P>
      <P>
        <FontAwesomeIcon icon={faSun} />
        <Span>
          {sunriseTime} - {sunsetTime}
        </Span>
      </P>
    </CurrentWeatherWrapper>
  );
};
