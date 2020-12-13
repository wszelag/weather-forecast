import React from "react";
import { P } from "./Current.css";

export const WeatherDescription = ({ name, id }) => {
  return <P>{name}</P>;
};
