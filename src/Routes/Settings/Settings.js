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
import {getUser, getUserKind} from "../../auth";
import Scolendar from '../../scolendar/src';
import Divider from '@material-ui/core/Divider';


export default class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,

            errorMessage: null,
            showEmptyErrors: false,

            oldPassword: null,
            oldPasswordError: null,
            newPassword: null,
            newPasswordError: null,

            showOldPassword: false,
            showNewPassword: false,
            passwordChangeOpen: false,
            deleteDataOpen: false
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
    }

    onNewPasswordChange(event) {
        this.setState({
            newPassword: event.target.value,
        })
    }

    setPasswordChangeOpen(boolean) {
        this.setState({passwordChangeOpen: boolean})
    }

    setDeleteDataOpen(boolean) {
        this.setState({deleteDataOpen: boolean})
    }

    oldPasswordFilled() {
        return this.state.oldPassword !== null;
    }

    newPasswordFilled() {
        return this.state.newPassword !== null;
    }

    validate(showEmptyErrors) {
        let valid = true;

        let oldPasswordError = null;
        let newPasswordError = null;

        if (!this.oldPasswordFilled() || this.state.oldPassword.length < 3) {
            if (this.oldPasswordFilled() || showEmptyErrors)
                oldPasswordError = 'Le mot de passe doit avoir au moins trois charactères.';
            valid = false;
        }

        if (!this.newPasswordFilled() || this.state.newPassword.length < 3) {
            if (this.newPasswordFilled() || showEmptyErrors)
                newPasswordError = 'Le mot de passe doit avoir au moins trois charactères.';
            valid = false;
        }
        this.setState({showEmptyErrors, oldPasswordError, newPasswordError});
        return valid;
    }

    changePassword(event) {
        event.preventDefault();

        // Don't accept form if it's not valid
        if (!this.validate(true))
            return;

        this.setState({
            loading: true,
        });

        const defaultClient = Scolendar.ApiClient.instance;
        const token = defaultClient.authentications['token'];
        token.apiKey = getUser().token;
        token.apiKeyPrefix = 'Bearer';

        const apiInstance = new Scolendar.ProfileApi();
        const profileUpdateRequest = new Scolendar.ProfileUpdateRequest(); // ProfileUpdateRequest |
        profileUpdateRequest.oldPassword = this.state.oldPassword;
        profileUpdateRequest.password = this.state.newPassword;
        console.log(profileUpdateRequest)

        const callback = function (error, _data, response) {
            this.setState({
                loading: false,
            });

            if (typeof response === 'undefined') {
                this.handleError(error.message);
                return;
            }

            const data = JSON.parse(response.text);

            if (data.status !== 'success') {
                const code = data.code;
                this.handleError(code);
            }

            if (error) {
                console.error(error);
            } else {
                console.log('API called successfully. Returned data: ' + data);
            }
        };

        apiInstance.profilePut({
            "old_password": this.state.oldPassword,
            "password": this.state.newPassword,
        }, callback);
        this.setPasswordChangeOpen(false);
    }

    handleError(errorMessage) {
        this.setState({errorMessage, password: ''});
    }

    deleteData() {
        alert('Fonction pas encore implémentée.');
    }

    render() {
        const kind = getUserKind();
        let errorMessage = null;

        if (this.state.errorMessage !== null) {
            errorMessage = (
                <p id="error-message">{this.state.errorMessage}</p>
            );
        }
        return (
            <div className="settings-page">
                <div id='title'>Paramètres</div>
                <Paper>
                    <MenuList>
                        <MenuItem onClick={() => this.setPasswordChangeOpen(true)}>Changer mon mot de passe</MenuItem>
                        {kind.administrator && <Divider/>}
                        {kind.administrator &&
                        <MenuItem onClick={() => this.setDeleteDataOpen(true)}>Supprimer toutes les données du
                            serveur</MenuItem>}
                    </MenuList>
                </Paper>

                <Dialog
                    open={this.state.passwordChangeOpen}
                    onClose={() => this.setPasswordChangeOpen(false)}
                    id="add-dialog"
                >
                    <DialogTitle id="add-dialog-title">{"Changement de mot de passe"}</DialogTitle>
                    <form onSubmit={this.changePassword}>
                        {errorMessage}
                        <TextField variant="filled"
                                   label="Votre ancien mot de passe"
                                   type={this.state.showOldPassword ? 'text' : 'password'}
                                   autoComplete="current-password"
                                   disabled={this.state.loading}
                                   margin="normal"
                                   fullWidth={true}
                                   error={this.state.errorMessage !== null || this.state.oldPasswordError !== null}
                                   helperText={this.state.oldPasswordError}
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
                                   error={this.state.errorMessage !== null || this.state.newPasswordError !== null}
                                   helperText={this.state.newPasswordError}
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


