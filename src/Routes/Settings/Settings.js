import React, { Component } from "react";
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
import { getUser, getUserKind } from "../../auth";
import Scolendar from '../../scolendar/src';

import Popover from '@material-ui/core/Popover';

import Divider from '@material-ui/core/Divider';


export default class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            oldPassword: null,
            newPassword: null,
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
        console.log('OlPass' + this.state.oldPassword)
    }

    onNewPasswordChange(event) {
        this.setState({
            newPassword: event.target.value,
        })
        console.log('NewPass' + this.state.newPassword)
    }

    setPasswordChangeOpen(boolean) {
        this.setState({ passwordChangeOpen: boolean })
    }

    setDeleteDataOpen(boolean) {
        this.setState({ deleteDataOpen: boolean })
    }

    oldPasswordFilled() {
        return this.state.password !== null;
    }

    newPasswordFilled() {
        return this.state.password !== null;
    }

    //Todo : add a function to check invalid form for password


    changePassword(event) {
        event.preventDefault();
        const defaultClient = Scolendar.ApiClient.instance;

        const token = defaultClient.authentications['token'];
        token.apiKey = getUser().token;
        token.apiKeyPrefix = 'Bearer';

        const apiInstance = new Scolendar.ProfileApi();

        const profileUpdateRequest = new Scolendar.ProfileUpdateRequest(); // ProfileUpdateRequest |

        profileUpdateRequest.oldPassword = this.state.oldPassword;
        profileUpdateRequest.password = this.state.newPassword;
        console.log(profileUpdateRequest)

        const callback = function (error, data, response) {
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

    //TODO : Reset entièrement les données du serveur via API
    deleteData() {
        alert('Tout est supprimé');
    }

    render() {
        const kind = getUserKind();

        return (
            <div className="settings-page">
                <div id='title'>Paramètres</div>
                <Paper>
                    <MenuList>
                        <MenuItem onClick={() => this.setPasswordChangeOpen(true)}>Changer mon mot de passe</MenuItem>
                        {kind.administrator && <Divider />}
                        {kind.administrator && <MenuItem onClick={() => this.setDeleteDataOpen(true)}>Supprimer toutes les données du serveur</MenuItem>}
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
                                        {this.state.showOldPassword ? <Visibility /> : <VisibilityOff />}
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
                                        {this.state.showNewPassword ? <Visibility /> : <VisibilityOff />}
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

                <Popover
                    anchorReference="anchorPosition"
                    anchorPosition={{ top: 500, left: 700 }}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                >
                    The content of the Popover.
                </Popover>
            </div>
        );
    }
}


