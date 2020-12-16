import React, { useRef, useEffect } from "react";
import { decodeDate } from "../../../tools/decodeDate";
import Thunderstorm from "../../../assets/Thunderstorm.jpg";
import Clear from "../../../assets/Clear.jpg";
import Drizzle from "../../../assets/Drizzle.jpg";
import Snow from "../../../assets/Snow.jpg";
import Rain from "../../../assets/Rain.jpg";
import Atmosphere from "../../../assets/Atmosphere.jpg";
import Clouds from "../../../assets/Clouds.jpg";
import Mist from "../../../assets/Mist.jpg";
import Sand from "../../../assets/Sand.jpg";
import gsap from "gsap";
import { H1, HeaderBackground } from "./Forecast.css";

export const Header = ({ name, country, dt, weatherName }) => {
  const date = decodeDate(dt, "fullDate");
  const backgroundEl = useRef(null);
  let backgroundPicture = "";
  let headerFontColor = "";
  switch (weatherName) {
    case "Thunderstorm":
      backgroundPicture = Thunderstorm;
      headerFontColor = "white";
      break;
    case "Clear":
      backgroundPicture = Clear;
      headerFontColor = "black";
      break;
    case "Drizzle":
      backgroundPicture = Drizzle;
      headerFontColor = "white";
      break;
    case "Mist":
      backgroundPicture = Mist;
      headerFontColor = "black";
      break;
    case "Sand":
      backgroundPicture = Sand;
      headerFontColor = "white";
      break;
    case "Snow":
      backgroundPicture = Snow;
      headerFontColor = "black";
      break;
    case "Rain":
      backgroundPicture = Rain;
      headerFontColor = "black";
      break;
    case "Atmosphere":
      backgroundPicture = Atmosphere;
      headerFontColor = "black";
      break;
    case "Clouds":
      backgroundPicture = Clouds;
      headerFontColor = "white";
      break;
    default:
      backgroundPicture = Mist;
      headerFontColor = "black";
      break;
  }
  useEffect(() => {
    const duration = 50;
    const background = backgroundEl.current;

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0 });
    tl.set(background, { x: 0 });
    tl.to(background, {
      x: "-50%",
      duration: duration / 2
    }).to(background, {
      x: "0%",
      duration: duration / 2
    });
  });

  return (
    <H1 fontColor={headerFontColor}>
      <HeaderBackground ref={backgroundEl} background={backgroundPicture} />
      {name}, {country}, {date}
    </H1>
  );
};
