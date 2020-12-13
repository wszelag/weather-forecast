import React from "react";
import { P, Span, IconContainer } from "./Current.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { decodeDate } from "../../../../tools/decodeDate";

export const Sun = ({ sunrise, sunset }) => {
  const sunriseTime = decodeDate(sunrise, "time");
  const sunsetTime = decodeDate(sunset, "time");
  return (
    <P>
      <IconContainer>
        <FontAwesomeIcon icon={faSun} />
      </IconContainer>
      <Span>
        {sunriseTime} - {sunsetTime}
      </Span>
    </P>
  );
};
