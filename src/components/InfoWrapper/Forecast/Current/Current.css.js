import styled from "styled-components";

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
  position: relative;

  line-height: 100px;
  text-align: center;
  color: ${(props) => props.fontColor};
  font-size: ${(props) => props.theme.fontSizes.xLarge};
  border-top: 4px solid ${(props) => props.theme.palette.lightGray};
  border-bottom: 4px solid ${(props) => props.theme.palette.lightGray};
  font-weight: normal;
  overflow: hidden;
`;

export const HeaderBackground = styled.div`
  position: absolute;
  width: 200%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;

  background-image: url(${(props) => props.background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
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
