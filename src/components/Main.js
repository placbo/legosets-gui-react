import React from "react";
import { Switch, Route } from 'react-router-dom';
import Login from './Login';
import Home from './Home';

function Main(props) {
    return (
        <main>
            <Switch>
                <Route path='/login' component={Login}/>
                <Route exact path='/' component={Home}/>
            </Switch>
        </main>
    );
}

export default Main;
