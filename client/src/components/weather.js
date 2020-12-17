import React, { useState, useEffect } from "react";
import { Grid, Cell } from "react-mdl";
import WeatherCard from "./WeatherCard/component";

function Weather() {
  const [query, setQuery] = useState("San Diego, USA");
  const [weather, setWeather] = useState({
    temp: null,
    city: null,
    condition: null,
    country: null,
  });

  const data = async (q) => {
    const apiRes = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&APPID=fba8f47aed24da8bf91fe6fc2885a83e`
    );
    const resJSON = await apiRes.json();
    return resJSON;
  };

  const handleSearch = (e) => {
    e.preventDefault();
    data(query).then((res) => {
      setWeather({
        temp: res.main.temp,
        city: res.name,
        condition: res.weather[0].main,
        country: res.country,
      });
    });
  };

  useEffect(() => {
    data(query).then((res) => {
      setWeather({
        temp: res.main.temp,
        city: res.name,
        condition: res.weather[0].main,
        country: res.country,
      });
    });
  }, []);

  return (
    <div style={{ width: "100%", margin: "auto" }}>
      <Grid className="landing-grid">
        <Cell col={12}>
          <div className="banner-text-weather">
            <h1>Hi, Welcome to you ToDo App (USERNAME)</h1>
            <div>
              <WeatherCard
                temp={weather.temp}
                condition={weather.condition}
                city={weather.city}
                country={weather.country}
              />
              <form>
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <button onClick={(e) => handleSearch(e)}>Search</button>
              </form>
            </div>
          </div>
        </Cell>
      </Grid>
    </div>
  );
}

export default Weather;
