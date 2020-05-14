import React, {Component} from "react";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Button from "@material-ui/core/Button";
import "./Settings.css"
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Dialog from "@material-ui/core/Dialog";
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import DialogContentText from "@material-ui/core/DialogContentText";
import {getUser} from "../../auth";
import Scolendar from '../../scolendar/src';


export default class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            oldPassword: null,
            newPassword: null,
            showOldPassword: false,
            showNewPassword: false,
            passwordChangeOpen : false,
            deleteDataOpen : false
        };

        this.changePassword = this.changePassword.bind(this);
        this.deleteData = this.deleteData.bind(this);
    }

    handleClickShowOldPassword() {
        this.setState({
            showOldPassword: this.showOldPassword = !this.showOldPassword
        });
    };

    handleClickShowNewPassword() {
        this.setState({
            showNewPassword: this.showNewPassword = !this.showNewPassword
        });
    };

    handleMouseDownPassword(event) {
        event.preventDefault();
    };

    onOldPasswordChange(event) {
        this.setState({
            oldPassword: event.target.value,
        })
        console.log('OlPass'+ this.state.oldPassword)
    }

    onNewPasswordChange(event) {
        this.setState({
            newPassword: event.target.value,
        })
        console.log('NewPass' + this.state.newPassword)
    }

    setPasswordChangeOpen(boolean){
        this.setState({passwordChangeOpen: boolean})
    }

    setDeleteDataOpen(boolean){
        this.setState({deleteDataOpen: boolean})
    }


    //TODO : Mettre ça pour les Étudiants et les Prof seulement
    SettingsStudentTeacher(){
        return (<div id='settings-page'>
                <div id='settings-column'>
                    <div className="spacer"></div>

                    <div id='title'>Changer mon mot de passe :</div>
                    <form onSubmit={this.changePassword}>
                        <TextField variant="filled"
                                   label="Votre ancien mot de passe"
                                   type={this.state.showOldPassword ? 'text' : 'password'}
                                   autoComplete="current-password"
                                   disabled={this.state.loading}
                                   margin="normal"
                                   size="small"
                                   fullWidth={true}
                                   autoFocus
                                   onChange={this.onOldPasswordChange.bind(this)}
                                   value={this.state.oldPassword}
                                   InputProps={{
                                       endAdornment: <InputAdornment position="end">
                                           <IconButton
                                               aria-label="toggle password visibility"
                                               onClick={this.handleClickShowOldPassword.bind(this)}
                                               onMouseDown={
                                                   this.handleMouseDownPassword.bind(this)
                                               }
                                               edge="end"
                                           >
                                               {this.state.showOldPassword ? <Visibility/> : <VisibilityOff/>}
                                           </IconButton>
                                       </InputAdornment>,
                                   }}

                        />

                        <TextField variant="filled"
                                   label="Votre nouveau mot de passe"
                                   type={this.state.showNewPassword ? 'text' : 'password'}
                                   autoComplete="current-password"
                                   disabled={this.state.loading}
                                   margin="normal"
                                   size="small"
                                   fullWidth={true}
                                   autoFocus
                                   onChange={this.onNewPasswordChange.bind(this)}
                                   value={this.state.newPassword}
                                   InputProps={{
                                       endAdornment: <InputAdornment position="end">
                                           <IconButton
                                               aria-label="toggle password visibility"
                                               onClick={this.handleClickShowNewPassword.bind(this)}
                                               onMouseDown={
                                                   this.handleClickShowNewPassword.bind(this)
                                               }
                                               edge="end"
                                           >
                                               {this.state.showNewPassword ? <Visibility/> : <VisibilityOff/>}
                                           </IconButton>
                                       </InputAdornment>,
                                   }}

                        />
                        <div className="container">
                            <div id="controls">
                                <Button
                                    type="submit"
                                    disabled={this.state.loading}
                                    id='settings-button'
                                    variant="contained">
                                    Valider
                                </Button>
                            </div>
                        </div>
                    </form>
                    <div className="spacer"></div>
                </div>
            </div>
        )
    }

    //TODO : Ne marche pas (pas de problème en utilisant Swagger mais le code ne marche pas, peut-être mauvais appel ?)
    changePassword(){
        const defaultClient = Scolendar.ApiClient.instance;

        const token = defaultClient.authentications['token'];
        token.apiKey = getUser().token;
        token.apiKeyPrefix = 'Bearer';

        const apiInstance = new Scolendar.ProfileApi();

        const profileUpdateRequest = new Scolendar.ProfileUpdateRequest(); // ProfileUpdateRequest |

        profileUpdateRequest.oldPassword = this.state.oldPassword;
        profileUpdateRequest.password= this.state.newPassword;
        console.log(profileUpdateRequest)

        const callback = function(error, data, response) {
            if (error) {
                console.error(error);
            } else {
                console.log('API called successfully. Returned data: ' + data);
            }
        };

        apiInstance.profilePut( {
            "old_password": this.state.oldPassword,
            "password": this.state.newPassword,
        }, callback);
    }

    //TODO : Reset entièrement les données du serveur via API
    deleteData (){
        alert('Tout est supprimé');
    }

    //TODO : Modifier le CSS pour les 2 renders (Admin et Prof/Etu)
    render() {
        return (
            <div >
                <div id='title'>Paramètres</div>
                <Paper>
                    <MenuList>
                        <MenuItem onClick={() => this.setPasswordChangeOpen(true)}>Changer mon mot de passe</MenuItem>
                        <MenuItem onClick={() => this.setDeleteDataOpen(true)}>Supprimer toutes les données du serveur</MenuItem>
                    </MenuList>
                </Paper>

                <Dialog
                    open={this.state.passwordChangeOpen}
                    onClose={() => this.setPasswordChangeOpen(false)}
                    id="add-dialog"
                >
                    <DialogTitle id="add-dialog-title">{"Changement de mot de passe"}</DialogTitle>
                    <form onSubmit={this.changePassword}>
                        <TextField variant="filled"
                                   label="Votre ancien mot de passe"
                                   type={this.state.showOldPassword ? 'text' : 'password'}
                                   autoComplete="current-password"
                                   disabled={this.state.loading}
                                   margin="normal"
                                   size="small"
                                   fullWidth={true}
                                   autoFocus
                                   onChange={this.onOldPasswordChange.bind(this)}
                                   value={this.state.oldPassword || ''}
                                   InputProps={{
                                       endAdornment: <InputAdornment position="end">
                                           <IconButton
                                               aria-label="toggle password visibility"
                                               onClick={this.handleClickShowOldPassword.bind(this)}
                                               onMouseDown={
                                                   this.handleMouseDownPassword.bind(this)
                                               }
                                               edge="end"
                                           >
                                               {this.state.showOldPassword ? <Visibility/> : <VisibilityOff/>}
                                           </IconButton>
                                       </InputAdornment>,
                                   }}

                        />
                        <TextField variant="filled"
                                   label="Votre nouveau mot de passe"
                                   type={this.state.showNewPassword ? 'text' : 'password'}
                                   autoComplete="current-password"
                                   disabled={this.state.loading}
                                   margin="normal"
                                   size="small"
                                   fullWidth={true}
                                   autoFocus
                                   onChange={this.onNewPasswordChange.bind(this)}
                                   value={this.state.newPassword}
                                   InputProps={{
                                       endAdornment: <InputAdornment position="end">
                                           <IconButton
                                               aria-label="toggle password visibility"
                                               onClick={this.handleClickShowNewPassword.bind(this)}
                                               onMouseDown={
                                                   this.handleClickShowNewPassword.bind(this)
                                               }
                                               edge="end"
                                           >
                                               {this.state.showNewPassword ? <Visibility/> : <VisibilityOff/>}
                                           </IconButton>
                                       </InputAdornment>,
                                   }}

                        />
                        <DialogActions>
                            <Button onClick={() => this.setPasswordChangeOpen(false)} color="primary">
                                ANNULER
                            </Button>
                            <Button type="submit" id="creation-button" color="primary" autoFocus>
                                SAUVER
                            </Button>
                        </DialogActions>
                    </form>
                </Dialog>
                <Dialog
                    open={this.state.deleteDataOpen}
                    onClose={() => this.setDeleteDataOpen(false)}
                    id="add-dialog"
                 >
                    <DialogTitle id="alert-dialog-title">{"Confirmation"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Voulez vous vraiment supprimer toutes les données ?
                            Cette action n’est pas réversible.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => this.setDeleteDataOpen(false)} color="primary">
                            ANNULER
                        </Button>
                        <Button onClick={() => {
                            this.deleteData();
                            this.setDeleteDataOpen(false)
                        }} color="primary" autoFocus>
                            CONFIRMER
                        </Button>
                    </DialogActions>
                </Dialog>



            </div>
        );
    }
}


