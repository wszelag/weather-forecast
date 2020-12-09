import React from "react";
import { ErrorMessage } from "./ErrorMessage/ErrorMessage";
import { Forecast } from "./Forecast/Forecast";
import { StartPage } from "./StartPage/StartPage";
import { Wrapper } from "./InfoWrapper.css";

export const InfoWrapper = ({ cityData }) => {
  return (
    <Wrapper>
      {cityData.empty ? (
        <StartPage />
      ) : cityData.error ? (
        <ErrorMessage />
      ) : (
        <Forecast cityData={cityData} />
      )}
    </Wrapper>
  );
};
