import { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Checklist extends Component{
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <div className="banner-text">
                            <h1>TODO</h1>
                            <h3>moooo</h3>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Checklist;