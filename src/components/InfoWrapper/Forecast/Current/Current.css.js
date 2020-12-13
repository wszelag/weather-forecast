import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: calc(100% - 40px);
  display: flex;
  padding-top: 10px;
`;

export const CurrentWeatherWrapper = styled.section`
  width: 50%;
  height: 100%;
`;

export const GoogleMapContainer = styled.section`
  width: 50%;
  height: 100%;
`;

export const H1 = styled.h1`
  display: flex;
  min-height: 50px;
`;

export const P = styled.p`
  display: block;
  margin-left: 10px;
  display: flex;
`;

export const Span = styled.span`
  color: ${(props) => props.color};
`;

export const IconContainer = styled.span`
  display: block;
  width: 30px;
  text-align: center;
`;
