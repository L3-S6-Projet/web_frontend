import React from "react";

class LoginForm extends React.Component {
    render() {

        return <div id ='LoginBody'>
            <div id='title'>Scolendar</div>
            <div id='serverAMU'>Serveur AMU</div>
            <div id="loginForm">
                <div class='input-field text-name'>
                <input id = 'rectangle1' type="text" onChange={this.handleChange} autoFocus={this.props.autoFocus} placeholder="Nom utilisateur *" /><br/></div>
                <div className='input-field text-password'>
                    <input id = 'rectangle2'type="password" onChange={this.handleChange} autoFocus={this.props.autoFocus} placeholder="Mot de passe *"/> </div>
                <button id='connexion' onClick={this.onSubmit}><label id='connexionLabel'>Connexion</label></button>
                <div id='forgottenPassword'>Mot de passe oublié ?</div>
            </div>
            <div id='footer'>En se connectant, vous acceptez les termes et conditions.
                <br/> © Scolendar 2020 - Tous droits réservés</div>


        </div>
    }
}


export {LoginForm}