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
            errorMessage: null,
            showEmptyErrors: false,
            username: null,
            usernameError: null,
            password: null,
            passwordError: null,
        };
    }

    onSubmit(event) {
        event.preventDefault();

        // Don't accept form if it's not valid
        if (!this.validate(true))
            return;

        this.setState({
            loading: true,
        });

        const api = new Scolendar.AuthApi();
        const loginRequest = new Scolendar.LoginRequest();

        loginRequest.username = this.state.username;
        loginRequest.password = this.state.password;

        api.login(loginRequest, (error, _data, response) => {
            this.setState({
                loading: false,
            });

            // Network or other error
            if (typeof response === 'undefined') {
                this.handleError(error.message);
                return;
            }

            const data = JSON.parse(response.text);

            if (data.status === 'success') {
                this.handleSuccess(data);
            } else {
                const code = data.code;
                this.handleError(code);
            }
        });
    }

    handleError(errorMessage) {
        this.setState({ errorMessage, password: '' });
    }

    handleSuccess(data) {
        setLoggedIn(data);

        // eslint-disable-next-line
        this.props.history.push('/');
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

    validate(showEmptyErrors) {
        let valid = true;

        let usernameError = null;
        let passwordError = null;

        if (!this.usernameFilled() || this.state.username.length < 3) {
            if (this.usernameFilled() || showEmptyErrors)
                usernameError = 'Le nom d\'utilisateur doit avoir au moins trois charactères.';

            valid = false;
        }

        if (!this.passwordFilled() || this.state.password.length < 3) {
            if (this.passwordFilled() || showEmptyErrors)
                passwordError = 'Le mot de passe doit avoir au moins trois charactères.';

            valid = false;
        }

        this.setState({ showEmptyErrors, usernameError, passwordError });
        return valid;
    }

    usernameFilled() {
        return this.state.username !== null;
    }

    passwordFilled() {
        return this.state.password !== null;
    }

    render() {
        let errorMessage = null;

        if (this.state.errorMessage !== null) {
            errorMessage = (
                <p id="error-message">{this.state.errorMessage}</p>
            );
        }

        return (
            <div id='login-page'>
                <div id='login-column'>
                    <div id='title'>Scolendar</div>
                    <div id='tagline'>Serveur AMU</div>

                    <div className="spacer"></div>

                    <form onSubmit={this.onSubmit.bind(this)}>
                        {errorMessage}

                        <TextField variant="filled"
                            label="Nom d'utilisateur *"
                            disabled={this.state.loading}
                            size="small"
                            fullWidth={true}
                            error={this.state.errorMessage !== null || this.state.usernameError !== null}
                            helperText={this.state.usernameError}
                            onBlur={e => this.validate(this.state.showEmptyErrors)}
                            autoFocus
                            onChange={this.onUsernameChange.bind(this)}
                            value={this.state.username || ''} />

                        <TextField variant="filled"
                            label="Mot de Passe *"
                            type="password"
                            autoComplete="current-password"
                            disabled={this.state.loading}
                            margin="normal"
                            size="small"
                            fullWidth={true}
                            error={this.state.errorMessage !== null || this.state.passwordError !== null}
                            helperText={this.state.passwordError}
                            onBlur={e => this.validate(this.state.showEmptyErrors)}
                            onChange={this.onPasswordChange.bind(this)}
                            value={this.state.password || ''} />

                        <div id="controls">
                            <Button
                                type="submit"
                                disabled={this.state.loading}
                                id="login-button"
                                variant="contained">
                                Connexion
                            </Button>

                            <a id='forgotten-password' href="#">Mot de passe oublié ?</a>
                        </div>
                    </form>

                    <div className="spacer"></div>

                    <div id='footer'>En se connectant, vous acceptez les <a href="#">termes et conditions</a>.
                        <br /> © Scolendar 2020 - Tous droits réservés
                    </div>
                </div>
            </div >
        );
    }
}

export default withRouter(Login);
