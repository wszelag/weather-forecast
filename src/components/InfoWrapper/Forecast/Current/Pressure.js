import React from "react";
import { P, Span, IconContainer } from "./Current.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartBar } from "@fortawesome/free-solid-svg-icons";

export const Pressure = ({ pressure }) => {
  return (
    <P>
      <IconContainer>
        <FontAwesomeIcon icon={faChartBar} />{" "}
      </IconContainer>
      <Span>{pressure}hPa</Span>
    </P>
  );
};
