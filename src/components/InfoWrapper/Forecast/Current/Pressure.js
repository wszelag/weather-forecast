import React from "react";
import { P, Span, IconContainer } from "./Current.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartBar } from "@fortawesome/free-solid-svg-icons";

export const Pressure = ({ data }) => {
  const pressure = data[0];
  return (
    <P>
      <IconContainer>
        <FontAwesomeIcon icon={faChartBar} />{" "}
      </IconContainer>
      <Span>{pressure}hPa</Span>
    </P>
  );
};
