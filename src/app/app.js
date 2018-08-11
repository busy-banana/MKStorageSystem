import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, HashRouter, Route } from 'react-router-dom';
import AppContainer from './modules/appContainer';
import Home from './modules/home';

const start = () => {
    ReactDOM.render((
        <HashRouter>
            <Switch>
                <Route exact path="/" component={AppContainer}/>
                <Route path="/home" component={Home}/>
            </Switch>
        </HashRouter>
        ), document.getElementById('app')
    )
};

start();
