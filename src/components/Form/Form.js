import React from "react";
import { getWeatherData } from "../../tools/getWeatherData";
import { useForm } from "react-hook-form";

export const Form = ({ setCityData }) => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    getWeatherData(data.cityName, setCityData);
  };
  return (
    <section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="cityName" ref={register({ required: true })} />
        {errors.cityName && <span>This field is required</span>}
        <input type="submit" value="check" />
      </form>
    </section>
  );
};
