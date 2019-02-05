import React, {Component} from 'react';
import SetList from "./components/SetList";
import NewSetForm from "./components/NewSetForm";
import './App.css';
import axios from "axios";

class App extends Component {

    state = {
        sets: []
    };

    addNewSet = (set) => {
        this.setState(prevState => ({
            sets: prevState.sets.concat(set)
        }))
    };

    componentDidMount() {
        axios
            .get("https://mylegosets-api.herokuapp.com/api/sets")
            .then(response => {
                const newSets = response.data.map(c => {
                    return {
                        id: c._id,
                        setid: c.setid
                    };
                });
                // create a new "State" object without mutating the original State object.
                const newState = Object.assign({}, this.state, {
                    sets: newSets
                });
                this.setState(newState);
            })
            .catch(error => console.log(error));
    }

    render() {
        return (
            <div className="App">
                <br/>
                <NewSetForm onSubmit={this.addNewSet}/>
                <br/>
                <SetList sets={this.state.sets}/>
            </div>
        );
    }
}

export default App;
