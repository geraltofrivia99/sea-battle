import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from './pages/Home';
import LoadScreen from './pages/Loading';

export default () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/load" component={LoadScreen}/>
    </Switch>
)