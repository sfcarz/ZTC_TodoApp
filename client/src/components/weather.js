import { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { useSelector } from 'react-redux'

const Weather = () => {
    const { user } = useSelector(state => state.user)
    return (
        <div style={{ width: '100%', margin: 'auto' }}>
            <Grid className="landing-grid">
                <Cell col={12}>
                    <div className="banner-text">
                        <h1>Hi, Welcome to your ToDo App { user }</h1>
                        <h3>What would you like do today?</h3>
                    </div>
                </Cell>
            </Grid>
        </div>
    )
}

export default Weather;