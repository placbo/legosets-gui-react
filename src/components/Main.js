import React from "react";
import { Switch, Route } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import './Main.css';

function Main(props) {
    return (
        <div className="main">
            <Switch>
                <Route path='/login' component={Login}/>
                <Route exact path='/' component={Home}/>
            </Switch>
        </div>
    );
}

export default Main;
