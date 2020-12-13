import React from "react";
import { P, Span, IconContainer } from "./Current.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWind } from "@fortawesome/free-solid-svg-icons";

export const Wind = ({ wind_speed }) => {
  // const wind_speed = data[0];
  return (
    <P>
      <IconContainer>
        <FontAwesomeIcon icon={faWind} />
      </IconContainer>
      <Span>{wind_speed}km/h</Span>
    </P>
  );
};
