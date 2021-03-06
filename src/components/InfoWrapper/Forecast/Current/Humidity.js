import React from "react";
import { P, Span, IconContainer } from "./Current.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTint } from "@fortawesome/free-solid-svg-icons";

export const Humidity = ({ humidity }) => {
  return (
    <P>
      <IconContainer>
        <FontAwesomeIcon icon={faTint} />
      </IconContainer>
      <Span>{humidity}%</Span>
    </P>
  );
};
