import React, { useState } from "react";
import { Form } from "./components/Form/Form";
import { Info } from "./components/Info/Info";

//todo
//add form and first views
//decode time
//display data hourly & daily with charts etc.
//styles

export const App = () => {
  const [cityData, setCityData] = useState({});
  return (
    <>
      <Form setCityData={setCityData} />
      <Info cityData={cityData} />
    </>
  );
};
