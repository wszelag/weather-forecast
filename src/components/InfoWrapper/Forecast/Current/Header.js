import React from "react";
import { H1, IconContainer } from "./Current.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { decodeDate } from "../../../../tools/decodeDate";

export const Header = ({ name, country, dt, isDay }) => {
  const date = decodeDate(dt, "fullDate");
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
