import React, { useState } from "react";
import { Grid, Cell } from "react-mdl";
import WeatherCard from "./WeatherCard/component";

function Weather() {
  const [city, setCity] = useState("San Diego, USA");
  const [temp, setTemp] = useState(" ");
  const [condition, setCondition] = useState(" ");
  const [country, setCountry] = useState(" ");
  const data = async () => {
    const apiRes = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=fba8f47aed24da8bf91fe6fc2885a83e`
    );
    const resJSON = await apiRes.json();
    return resJSON;
  };

  const handleSearch = (e) => {
    e.preventDefault();
    data().then((res) => {
      setTemp(res.main.temp);
      setCondition(res.weather[0].main);
      setCountry(res.sys.country);
    });
  };
  return (
    <div style={{ width: "100%", margin: "auto" }}>
      <Grid className="landing-grid">
        <Cell col={12}>
          <div className="banner-text-weather">
            <h1>Hi, Welcome to you ToDo App (USERNAME)</h1>
            <div>
              <WeatherCard
                temp={temp}
                condition={condition}
                city={city}
                country={country}
              />
              <form>
                <input value={city} onChange={(e) => setCity(e.target.value)} />
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
