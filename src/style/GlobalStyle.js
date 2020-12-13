import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial;
  }

  #root{
    position: relative;
  }

  body{
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;
