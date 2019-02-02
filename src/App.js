import React, { Component } from 'react';
import SetList from "./components/SetList";
import './App.css';
import axios from "axios";

class App extends Component {

    // default State object
    state = {
        sets: []
    };

    componentDidMount() {
        axios
            .get("https://mylegosets-api.herokuapp.com/api/sets")
            .then(response => {

                // create an array of contacts only with relevant data
                const newSets = response.data.map(c => {
                    return {
                        id: c._id,
                        setid: c.setid
                    };
                });

                // create a new "State" object without mutating
                // the original State object.
                const newState = Object.assign({}, this.state, {
                    sets: newSets
                });

                // store the new state object in the component's state
                this.setState(newState);
            })
            .catch(error => console.log(error));
    }

    render() {
        return (
            <div className="App">
                <SetList sets={this.state.sets} />
            </div>
        );
    }
}

export default App;
