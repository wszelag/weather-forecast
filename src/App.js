import React, { useState } from "react";
import { Form } from "./components/Form/Form";
import { InfoWrapper } from "./components/InfoWrapper/InfoWrapper";

export const App = () => {
  const [cityData, setCityData] = useState({ empty: true });
  return (
    <>
      <Form setCityData={setCityData} />
      <InfoWrapper cityData={cityData} />
    </>
  );
};
