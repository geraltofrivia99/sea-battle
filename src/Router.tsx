import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from './pages/Home';
import LoadScreen from './pages/Loading';
import Logo from './pages/Logo';
import Main from './pages/Main';

export default () => (
    <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/sea-battle" component={Home} />
        <Route exact path="/load" component={LoadScreen}/>
        <Route exact path="/logo" component={Logo}/>
    </Switch>
)