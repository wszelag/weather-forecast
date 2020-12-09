import React, { useState } from "react";
import { Form } from "./components/Form/Form";
import { InfoWrapper } from "./components/InfoWrapper/InfoWrapper";
import { ThemeProvider } from "styled-components";
import { theme } from "./style/theme";
import { GlobalStyle, Wrapper } from "./style/GlobalStyle";

export const App = () => {
  const [cityData, setCityData] = useState({ empty: true });
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Wrapper>
          <Form setCityData={setCityData} />
          <InfoWrapper cityData={cityData} />
        </Wrapper>
      </ThemeProvider>
    </>
  );
};
