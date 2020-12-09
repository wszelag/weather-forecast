import React from "react";
import { ErrorMessage } from "./ErrorMessage/ErrorMessage";
import { Forecast } from "./Forecast/Forecast";
import { Loading } from "./Loading/Loading";

export const InfoWrapper = ({ cityData }) => {
  return (
    <section>
      {cityData.empty ? (
        <Loading />
      ) : cityData.error ? (
        <ErrorMessage />
      ) : (
        <Forecast cityData={cityData} />
      )}
    </section>
  );
};
