import React from "react";
import Button from '@material-ui/core/Button';
import styled from "@material-ui/core/styles/styled";

import TextField from '@material-ui/core/TextField';


class LoginForm extends React.Component {

    render() {

        const MyButton = styled(Button)({
            background: '#3F51B5',
            borderRadius: 3,
            border: 0,
            color: 'white',
            height: 23,
            top: 398,
            left: 0,
        });

        const textField = theme => ({
            textField: {
                marginLeft: theme.spacing.unit,
                marginRight: theme.spacing.unit,
                width: 200,
                background: '#E8E8E8',
                top: 800,
                left: 65,
            },
        });

        return <div id='LoginPage'>

            <div id='LoginBody'>
                <div id='title'>Scolendar</div>
                <div id='serverAMU'>Serveur AMU</div>
                <div id="loginForm">
                    <TextField variant="filled"
                               id="standard-password-input"
                               label="UserName *"
                               type="text"
                               className={textField.textField}
                               autoComplete="current-password"
                               margin="normal"
                               size="small"/>
                               <br/>
                    <TextField variant="filled"
                               id="standard-password-input"
                               label="Password *"
                               type="password"
                               className={textField.textField}
                               autoComplete="current-password"
                               margin="normal"
                               size="small"/>

                    <MyButton variant="contained" onClick={this.onSubmit}>Connexion</MyButton>
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