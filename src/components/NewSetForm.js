import React from "react";
import axios from "axios";

class NewSetForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {setNumberSearchTerm: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({setNumberSearchTerm: event.target.value});
    }

    handleSubmit = event => {
        event.preventDefault();
        const headers = {
            'Content-Type': 'application/json'
        };
        const setDataToSave = {
            setid: this.state.setNumberSearchTerm
        };
        axios
            .post("https://mylegosets-api.herokuapp.com/api/sets", setDataToSave, headers)
            .then(response => {
                this.props.onSubmit(response.data);
                this.setState({setNumberSearchTerm: ''}); //nullstiller formen
            })
            .catch(error => console.log(error));
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Set number:
                    <input type="text" name="addSet" value={this.state.setNumberSearchTerm} onChange={this.handleChange}/>
                </label>
                <input type="submit" value="Legg til"/>
            </form>
        );
    }
}

export default NewSetForm;



