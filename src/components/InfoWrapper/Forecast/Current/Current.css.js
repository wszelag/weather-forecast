import styled from "styled-components";

export const CurrentWeatherWrapper = styled.section`
  width: 50%;
  height: calc(100% - 40px);
`;

export const H1 = styled.h1`
  display: block;
  min-height: 50px;
  margin-left: 10px;
`;

export const P = styled.p`
  display: block;
  margin-left: 10px;
`;

export const Span = styled.span`
  color: ${(props) => props.color};
  margin-left: 10px;
`;
