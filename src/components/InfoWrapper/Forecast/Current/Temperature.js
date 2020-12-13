import React from "react";
import { P, Span, IconContainer } from "./Current.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThermometerThreeQuarters } from "@fortawesome/free-solid-svg-icons";

export const Temperature = ({ data }) => {
  const temp = data[0];
  const feels_like = data[1];
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
