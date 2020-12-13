import React from "react";
import { H1, IconContainer } from "./Current.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { decodeDate } from "../../../../tools/decodeDate";

export const Header = ({ data }) => {
  const name = data[0];
  const country = data[1];
  const date = decodeDate(data[2], "fullDate");
  const isDay = data[3];
  let icon = null;

  isDay ? (icon = faSun) : (icon = faMoon);

  return (
    <H1>
      <IconContainer>
        <FontAwesomeIcon icon={icon} />
      </IconContainer>
      {name}, {country}, {date}
    </H1>
  );
};
