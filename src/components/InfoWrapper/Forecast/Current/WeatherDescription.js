import React from "react";
import { P } from "./Current.css";

export const WeatherDescription = ({ data }) => {
  const weatherName = data[0];
  return <P>{weatherName}</P>;
};
