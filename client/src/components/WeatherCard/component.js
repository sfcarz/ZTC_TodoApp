import React from "react";
import styled from "@emotion/styled";
import Location from "./location";
import Icon from "./icon";
import Condition from "./condition";

const WeatherCard = (props) => {
  let highColor = (1 - (props.temp - 12) / 28) * 255;
  let lowColor = highColor - 150;

  const Card = styled.div`
    background: linear-gradient(
      to top,
      rgb(255, ${highColor}, 0),
      rgb(255, ${lowColor}, 0)
    );
    margin: 0 auto;
    margin-left: 70%;
    margin-top: 100px;
    width: 200px;
    height: 240px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 15px;
    color: white;
  `;

  return (
    <Card className="card">
      <Location />
      <Icon condition={props.condition} />
      <Condition />
    </Card>
  );
};

export default WeatherCard;
