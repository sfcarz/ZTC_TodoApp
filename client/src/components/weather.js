import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import WeatherCard from "./WeatherCard/component";

class Weather extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <div className="banner-text-weather">
              <h1>Hi, Welcome to you ToDo App (USERNAME)</h1>
              <div>
                <WeatherCard temp="5" />
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Weather;
