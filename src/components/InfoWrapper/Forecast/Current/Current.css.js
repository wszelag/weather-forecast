import styled from "styled-components";
import Thunderstorm from "../../../../assets/Thunderstorm.jpg";
import Drizzle from "../../../../assets/Drizzle.jpg";
import Snow from "../../../../assets/Snow.jpg";
import Rain from "../../../../assets/Rain.jpg";
import Clear from "../../../../assets/Clear.jpg";
import Atmosphere from "../../../../assets/Atmosphere.jpg";
import Clouds from "../../../../assets/Clouds.jpg";

export const Wrapper = styled.div`
  width: 100vw;
  height: calc(100% - 40px);
  display: flex;
  flex-wrap: wrap;
  padding-top: 10px;
  overflow: hidden;
`;

export const H1 = styled.h1`
  height: 100px;
  width: 100%;

  text-align: center;
  font-size: ${(props) => props.theme.fontSizes.xLarge};
  // background-color: ${(props) => props.theme.palette.blue};
  background-image: url(${Clear});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding-top: 10px;
  font-weight: normal;
`;

export const CurrentWeatherWrapper = styled.section`
  width: 50%;
  height: calc(100% - 100px);
`;

export const GoogleMapContainer = styled.section`
  width: 50%;
  height: calc(100% - 100px);
`;

export const P = styled.p`
  display: block;
  margin-left: 10px;
  display: flex;
  text-align: center;
`;

export const Span = styled.span`
  color: ${(props) => props.color};
`;

export const IconContainer = styled.span`
  display: block;
  width: ${(props) => (props.big ? "50px" : "30px")};
  text-align: center;
`;
