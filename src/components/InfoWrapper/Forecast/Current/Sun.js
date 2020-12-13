import React from "react";
import { P, Span, IconContainer } from "./Current.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { decodeDate } from "../../../../tools/decodeDate";

export const Sun = ({ data }) => {
  const sunriseTime = decodeDate(data[0], "time");
  const sunsetTime = decodeDate(data[1], "time");
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
