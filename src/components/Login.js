import React from "react";
import axios from "axios";
import {Redirect} from "react-router-dom";
import {withCookies, Cookies} from 'react-cookie';
import {instanceOf} from 'prop-types';
import './Login.css';


class Login extends React.Component {

    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            disabled: false,
            toHomeScreen: false
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        if (event.target.value.length > 3) {
            this.setState({disabled: true});
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
                    if (response.data.token) {
                        const {cookies} = this.props;
                        cookies.set('token', response.data.token, {path: '/'});
                        this.setState(() => ({
                            toHomeScreen: true
                        }));
                    }
                })
                .catch(error => {
                    alert("Feil kode, dust!");
                    this.setState({disabled: false});
                });
        }
    }

    render() {
        if (this.state.toHomeScreen === true) {
            return <Redirect to='/'/>
        }
        return (
            <div className="login">
                <p>Login</p>
                <form>
                    <input disabled={this.state.disabled} type="password" name="legosetsapipassword" autoComplete="off"
                           size="4"
                           onChange={this.handleChange}/>
                </form>
            </div>
        );
    }
}

export default withCookies(Login);
