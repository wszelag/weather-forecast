import React from "react";
import { ForecastWrapper, Navigation } from "./Forecast.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Current } from "./Current/Current";
import { Hourly } from "./Hourly/Hourly";
import { Daily } from "./Daily/Daily";
import { Header } from "./Header";

export const Forecast = ({ cityData }) => {
  return (
    <Router>
      <ForecastWrapper>
        <Header
          name={cityData.name}
          country={cityData.country}
          dt={cityData.current.dt}
          weatherName={cityData.current.weather[0].main}
        />
        <Navigation>
          <ul>
            <li>
              <Link to="/">Current</Link>
            </li>
            <li>
              <Link to="/daily">Daily</Link>
            </li>
            <li>
              <Link to="/hourly">Hourly</Link>
            </li>
          </ul>
        </Navigation>
        <Switch>
          <Route exact path="/">
            <Current data={cityData} />
          </Route>
          <Route path="/daily">
            <Daily />
          </Route>
          <Route path="/hourly">
            <Hourly />
          </Route>
        </Switch>
      </ForecastWrapper>
    </Router>
  );
};
