import React from "react";
import axios from "axios";
import { instanceOf } from 'prop-types';
import './Login.css';
import { withCookies, Cookies } from 'react-cookie';


class Login extends React.Component {

    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    constructor(props) {
        super(props);
        this.state = {disabled: false};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        if (event.target.value.length > 3) {
            this.setState( {disabled: !this.state.disabled} );
            const headers = {
                'Content-Type': 'application/json'
            };
            const load = {
                'secret': event.target.value
            };
            axios
                .post("https://mylegosets-api.herokuapp.com/login", load, headers)
                .then(response => {
                    console.log(response);
                    if (response.data.token){
                        const { cookies } = this.props;
                        cookies.set('token', response.data.token, { path: '/' });
                    }
                })
                .catch(error => console.log(error));
        }
    }

    render() {
        return (
            <div className="login">
                <p>Login</p>
                <form>
                    <input disabled={this.state.disabled} type="password" name="legosetsapipassword" autoComplete="off" size="4"
                           onChange={this.handleChange}/>
                </form>
            </div>
        );
    }
}

export default withCookies(Login);
