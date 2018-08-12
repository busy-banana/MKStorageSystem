import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory,IndexRoute } from 'react-router';
import AppContainer from './modules/AppContainer';
import Home from './modules/Home';
import Login from './modules/Login';
import './style.css';

const start = () => {
    ReactDOM.render(
        <Router history={hashHistory}>
            <Route path="/" component={AppContainer}>
                <IndexRoute component={Login}/>
                <Route path="/home" components={Home}/>
                <Route path="/login" components={Login}/>
            </Route>
        </Router>
        , document.getElementById('app')
    )
};

start();
