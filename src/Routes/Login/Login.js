/* eslint-disable */

import React from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import "./Login.css"

import {
    withRouter
} from 'react-router-dom'

import { setLoggedIn } from '../../auth.js';

import Scolendar from '../../scolendar/src';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            username: "",
            password: "",
        };
    }

    onSubmit() {
        this.setState({
            loading: true,
            ...this.state,
        });

        const api = new Scolendar.AuthApi();
        const loginRequest = new Scolendar.LoginRequest();

        loginRequest.username = this.state.username;
        loginRequest.password = this.state.password;

        api.login(loginRequest, (error, _data, response) => {
            this.setState({
                loading: false,
            });

            const data = JSON.parse(response.text);

            if (data.status === 'success') {
                setLoggedIn(data);
                this.props.history.push('/');
            } else {
                const code = data.code;
                alert('error: ' + code);
            }

        });
    }

    onUsernameChange(event) {
        this.setState({
            username: event.target.value,
        })
    }

    onPasswordChange(event) {
        this.setState({
            password: event.target.value,
        })
    }

    render() {
        // TODO: submit on enter
        // TODO: clear password on submit
        // TODO: focus password field on failed submit

        return (
            <div id='login-page'>
                <div id='login-column'>
                    <div id='title'>Scolendar</div>
                    <div id='tagline'>Serveur AMU</div>

                    <div class="spacer"></div>

                    <div>
                        <TextField variant="filled"
                            label="Nom d'utilisateur *"
                            disabled={this.state.loading}
                            size="small"
                            fullWidth={true}
                            onChange={this.onUsernameChange.bind(this)} />

                        <TextField variant="filled"
                            label="Mot de Passe *"
                            type="password"
                            autoComplete="current-password"
                            disabled={this.state.loading}
                            margin="normal"
                            size="small"
                            fullWidth={true}
                            onChange={this.onPasswordChange.bind(this)} />

                        <div id="controls">
                            <Button
                                disabled={this.state.loading}
                                id="login-button"
                                variant="contained"
                                onClick={this.onSubmit.bind(this)}>
                                Connexion
                            </Button>

                            <a id='forgotten-password' href="#">Mot de passe oublié ?</a>
                        </div>
                    </div>

                    <div class="spacer"></div>

                    <div id='footer'>En se connectant, vous acceptez les <a href="#">termes et conditions</a>.
                        <br /> © Scolendar 2020 - Tous droits réservés
                    </div>
                </div>
            </div >
        );
    }
}

export default withRouter(Login);
