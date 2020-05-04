import React from "react";

class LoginForm extends React.Component {
    render() {

        return <div id ='LoginBody'>
            <div id='title'>Scolendar</div>
            <div id='serverAMU'>Serveur AMU</div>
            <div id="login">
                <label id =''>Nom utilisateur *</label><br/>
                <input id = 'rectangle1' type="text" onChange={this.handleChange} autoFocus={this.props.autoFocus}/><br/>
                <label id=''>Mot de passe *</label><br/>
                <input id = 'rectangle2'type="text" onChange={this.handleChange} autoFocus={this.props.autoFocus}/>
                <button id='connexion' onClick={this.onSubmit}><label id='label'>Connexion</label></button>
                <div id='mdp'>Mot de passe oublié ?</div>
            </div>
            <div id='PiedDePage'>En se connectant, vous acceptez les termes et conditions.
                <br/> © Scolendar 2020 - Tous droits réservés</div>


        </div>
    }
}


export {LoginForm}