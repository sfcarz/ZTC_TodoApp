import { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import AddTodo from '../pages/todos/AddTodo';

class Checklist extends Component{
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <div className="banner-text">
                            <h1>TODO</h1>
                            <AddTodo />
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Checklist;