import React from "react";

export const Info = ({ cityData }) => {
  console.log(cityData);
  return <div>{cityData.name}</div>;
};
