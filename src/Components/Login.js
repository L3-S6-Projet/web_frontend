import React from "react";
import Button from '@material-ui/core/Button';
import styled from "@material-ui/core/styles/styled";
import TextField from '@material-ui/core/TextField';
import "./Login.css"


class LoginForm extends React.Component {

    render() {

        const MyButton = styled(Button)({
            background: '#3F51B5',
            borderRadius: 3,
            border: 0,
            color: 'white'
        });

        const textField = theme => ({
            textField: {
                position: "absolute",
                marginLeft: theme.spacing.unit,
                marginRight: theme.spacing.unit,
                width: 200,
                height : "14.746%",
                background: '#E8E8E8',
                top: 88888,
                left: 65,

            },
        });

        return <div id='LoginPage'>

            <div id='LoginBody'>
                <div id='title'>Scolendar</div>
                <div id='serverAMU'>Serveur AMU</div>
                <div id="loginForm">
                    <div id="input-Username">
                        <TextField variant="filled"
                                   label="Nom d'utilisateur *"
                                   type="text"
                                   className={textField.textField}
                                   autoComplete="current-password"
                                   margin="normal"
                                   size="small" fullWidth="true"/>
                    </div>
                    <br/>
                    <div id="input-Password">
                        <TextField variant="filled"
                                   label="Mot de Passe *"
                                   type="password"
                                   className={textField.textField}
                                   autoComplete="current-password"
                                   margin="normal"
                                   size="small" fullWidth="true"/>
                    </div>
                    <MyButton id="MyButton" variant="contained" onClick={this.onSubmit}>
                        Connexion
                    </MyButton>
                    <div id='forgottenPassword'>Mot de passe oublié ?</div>

                </div>

                <div id='footer'>En se connectant, vous acceptez les termes et conditions.
                    <br/> © Scolendar 2020 - Tous droits réservés
                </div>
            </div>
        </div>
    }
}


export {LoginForm}