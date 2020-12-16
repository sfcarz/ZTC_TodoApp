import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import WeatherCard from "./WeatherCard/component";

class Weather extends Component {
  render() {
    const data = async () => {
      const apiRes = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=London,gb&units=metric&APPID=fba8f47aed24da8bf91fe6fc2885a83e"
      );
      const resJSON = await apiRes.json();
      return resJSON;
    };
    console.log(data());
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <div className="banner-text-weather">
              <h1>Hi, Welcome to you ToDo App (USERNAME)</h1>
              <div>
                <WeatherCard
                  temp={-20}
                  condition="Tornado"
                  city="San Diego"
                  country="USA"
                />
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Weather;
