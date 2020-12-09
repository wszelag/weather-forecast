import React from "react";

export const Forecast = ({ cityData }) => {
  console.log(cityData);
  return <div>{cityData.name}</div>;
};
