import React from "react";
import { ForecastWrapper } from "./Forecast.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Current } from "./Current/Current";
import { Hourly } from "./Hourly/Hourly";
import { Daily } from "./Daily/Daily";

export const Forecast = ({ cityData }) => {
  return (
    <Router>
      <ForecastWrapper>
        <nav>
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
        </nav>
        <Switch>
          <Route exact path="/">
            <Current />
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
