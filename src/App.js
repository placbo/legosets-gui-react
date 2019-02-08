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
                const newState = Object.assign({}, this.state, {
                    sets: response.data
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
                <br/>
                {this.state.sets.length > 0 ? (
                    <SetList sets={this.state.sets}/>
                ) : (
                    <iframe title="waiter gif" src="https://giphy.com/embed/8Bv8MBkdjnPKB6r59o"
                            width="200" height="200" frameBorder="0"
                            className="giphy-embed" allowFullScreen></iframe>
                )}
                <p>
                    <small>Application running in <b>{process.env.NODE_ENV}</b> mode.</small>
                </p>
            </div>
        );
    }
}

export default App;
