import React from "react";
import { P, Span, IconContainer } from "./Current.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThermometerThreeQuarters } from "@fortawesome/free-solid-svg-icons";

export const Temperature = ({ temp, feels_like }) => {
  return (
    <P>
      <IconContainer>
        <FontAwesomeIcon icon={faThermometerThreeQuarters} />{" "}
      </IconContainer>
      <Span>
        {temp}
        <sup>o</sup>C, feels like {feels_like}
        <sup>o</sup>C
      </Span>
    </P>
  );
};
