import React from 'react';
import styled from '@emotion/styled';
import Location from './location';
import Icon from './icon';
import Condition from './condition';


const WeatherCard = (props) => {
    const red = 100;
    const Card = styled.div`
    background: linear-gradient(to bottom, rgba(${red},200,200), lightblue);
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
  `

    return(
        <Card className="card">
            <Location/>
            <Icon/>
            <Condition/>
        </Card>
    );
}

export default WeatherCard;