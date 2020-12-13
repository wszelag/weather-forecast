import React from "react";
import { H1 } from "./Current.css";
import { decodeDate } from "../../../../tools/decodeDate";
import Thunderstorm from "../../../../assets/Thunderstorm.jpg";

export const Header = ({ name, country, dt, isDay, weatherName }) => {
  const date = decodeDate(dt, "fullDate");
  return (
    <H1 background={Thunderstorm}>
      {name}, {country}, {date}
    </H1>
  );
};
