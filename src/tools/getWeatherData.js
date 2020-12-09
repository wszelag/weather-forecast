import { APIkey } from "../config/APIconfig";

//fetching data and updating state

export const getWeatherData = (cityName, setCityData) => {
  const cityData = {};
  const baseInfoURL = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${APIkey}`;

  fetch(baseInfoURL)
    .then((res) => res.json())
    .then((data) => {
      cityData.id = data.sys.id;
      cityData.name = data.name;
      cityData.country = data.sys.country;
      cityData.lat = data.coord.lat;
      cityData.lon = data.coord.lon;
    })
    .catch((err) => console.error(err))
    .then(() => {
      const detailsURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${cityData.lat}&lon=${cityData.lon}&units=metric&exclude=minutely&appid=${APIkey}`;
      fetch(detailsURL)
        .then((res) => res.json())
        .then((data) => {
          if (data.cod === "400") {
            console.error("ERROR");
            cityData.error = "ENTER CORRECT CITY NAME";
          } else {
            cityData.current = data.current;
            cityData.daily = data.daily;
            cityData.hourly = data.hourly;
            cityData.error = "";
          }
          setCityData(() => cityData);
        });
    });

  return cityData;
};
