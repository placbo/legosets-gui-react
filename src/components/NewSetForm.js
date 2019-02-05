import React from "react";
import axios from "axios";

class NewSetForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit = event => {
        event.preventDefault();

        const headers = {
            'Content-Type': 'application/json'
        };
        const set = {
            setid: this.state.value
        };
        axios
            .post("https://mylegosets-api.herokuapp.com/api/sets", set, headers)
            .then(response => {
                console.log(response);
                this.props.onSubmit(response.data);
                //TODO: add response.data in setlist
                this.setState({value: ''});
            })
            .catch(error => console.log(error));
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Set number:
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
                </label>
                <input type="submit" value="Legg til"/>
            </form>
        );
    }
}

export default NewSetForm;



