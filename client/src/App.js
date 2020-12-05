import React from 'react';
import { Route, Switch } from 'react-router-dom';
import signIn from './components/signIn';
import signUp from './components/signUp';



const Main = () => (
    <Switch>
        <Route path="/signIn" component={signIn} />
        <Route path="/signUp" component={signUp} />
    </Switch>
)

export default Main;