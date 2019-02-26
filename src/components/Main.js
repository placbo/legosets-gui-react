import React, {Component} from "react";
import {Switch, Route} from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import './Main.css';

class Main extends Component {

    render() {
        return (
            <div className="main">
                <Switch>
                    <Route path='/login' component={Login}/>
                    <Route exact path='/' component={Home}/>
                </Switch>
            </div>
        );
    }
}

export default Main;
