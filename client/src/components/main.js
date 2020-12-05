import React from 'react';
import { Route, Switch } from 'react-router-dom';
import signIn from './signIn';
import signUp from './signUp';



const Main = () => (
    <Switch>
        <Route path="/signIn" component={signIn} />
        <Route path="/signUp" component={signUp} />
    </Switch>
)

export default Main;