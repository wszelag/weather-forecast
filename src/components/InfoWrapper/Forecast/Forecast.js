import React from "react";
import { ForecastWrapper } from "./Forecast.css";

export const Forecast = ({ cityData }) => {
  console.log(cityData);
  return <ForecastWrapper>{cityData.name}</ForecastWrapper>;
};
