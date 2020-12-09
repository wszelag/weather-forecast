import React from "react";
import { getWeatherData } from "../../tools/getWeatherData";
import { useForm } from "react-hook-form";
import {
  FormWrapper,
  FormContainer,
  TextInput,
  SubmitInput,
  RequireMessage
} from "./Form.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";

export const Form = ({ setCityData }) => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    getWeatherData(data.cityName, setCityData);
  };

  return (
    <FormWrapper>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          name="cityName"
          placeholder="..."
          ref={register({ required: true })}
        />
        {errors.cityName && (
          <RequireMessage>
            <FontAwesomeIcon icon={faTimes} />
          </RequireMessage>
        )}
        <SubmitInput type="submit">
          <FontAwesomeIcon icon={faSearch} />
        </SubmitInput>
      </FormContainer>
    </FormWrapper>
  );
};
