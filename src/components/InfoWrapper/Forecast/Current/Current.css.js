import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: calc(100% - 80px - 100px);
  display: flex;
  flex-wrap: wrap;
  padding-top: 10px;
  overflow: hidden;
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
