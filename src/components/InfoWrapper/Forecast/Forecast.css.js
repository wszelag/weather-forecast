import styled from "styled-components";

export const ForecastWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
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

export const Navigation = styled.nav`
  width: 450px;
  height: 80px;
  display: flex;
  margin: 0 auto;

  flex-direction: row;
  justify-content: current;
  align-items: center;
  & ul {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    & li {
      list-style-type: none;
      display: block;
      margin: 0 10px;
      padding: 6px 16px;
      color: ${(props) => props.theme.palette.blue};
      & a {
        display: block;
        width: 100%;
        height: 100%;
        padding: 6px 16px;
        border: 1px solid ${(props) => props.theme.palette.lightGray};

        transition: 0.2s;
        color: ${(props) => props.theme.palette.blue};
        text-decoration: none;
        &:visited {
          color: ${(props) => props.theme.palette.blue};
        }
        &:hover {
          color: ${(props) => props.theme.palette.white};
          background-color: ${(props) => props.theme.palette.blue};
        }
      }
    }
  }
`;
