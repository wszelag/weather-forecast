import React from "react";
import { getWeatherData } from "./tools/getWeatherData";

export const App = () => {
  return (
    <div>
      <button
        onClick={() => {
          console.log(getWeatherData("Koszalin"));
        }}
      >
        click
      </button>
    </div>
  );
};
