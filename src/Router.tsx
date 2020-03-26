import React from "react";
import { Route, Switch } from "react-router-dom";
import Loadable from 'react-loadable';

const LoadableHome = Loadable({
	loader: () => import('./pages/Home'),
	loading() {
		return <div>Loading...</div>
	}
})

const LoadableMain = Loadable({
	loader: () => import('./pages/Main'),
	loading() {
		return <div>Loading...</div>
	}
})

const LoadableLoadScreen = Loadable({
	loader: () => import('./pages/Loading'),
	loading() {
		return <div>Loading...</div>
	}
})

const LoadableLogo = Loadable({
	loader: () => import('./pages/Logo'),
	loading() {
		return <div>Loading...</div>
	}
})

const LoadableGOL = Loadable({
	loader: () => import('./pages/GOL'),
	loading() {
		return <div>Loading...</div>
	}
})

const LoadableSaper = Loadable({
	loader: () => import('./pages/Saper'),
	loading() {
		return <div>Loading...</div>
	}
})


export default () => (
    <Switch>
        <Route exact path="/" component={LoadableMain} />
        <Route exact path="/sb" component={LoadableHome} />
        <Route exact path="/load" component={LoadableLoadScreen}/>
        <Route exact path="/logo" component={LoadableLogo}/>
        <Route exact path="/gol" component={LoadableGOL}/>
				<Route exact path="/saper" component={LoadableSaper}/>
    </Switch>
)