import React, {Component} from "react";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Button from "@material-ui/core/Button";

export default class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            oldPassword: null,
            newPassword: null,
            showOldPassword: false,
            showNewPassword: false,
        };
    }

    onSubmit(event) {
        event.preventDefault();
        alert("test");
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

    render() {
        return (
            <div id='settings-page'>
                    <form onSubmit={this.onSubmit.bind(this)}>
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
                                   onChange={this.onNewPasswordChange.bind(this)}
                                   value={this.state.password || ''}
                                   InputProps={{
                                       endAdornment: <InputAdornment position="end">
                                           <IconButton
                                               aria-label="toggle password visibility"
                                               onClick={this.handleClickShowNewPassword.bind(this)}
                                               onMouseDown={
                                                   this.handleMouseDownPassword.bind(this)
                                               }
                                               edge="end"
                                           >
                                               {this.state.showNewPassword ? <Visibility/> : <VisibilityOff/>}
                                           </IconButton>
                                       </InputAdornment>,
                                   }}
                        />

                        <div id="controls">
                            <Button
                                type="submit"
                                disabled={this.state.loading}
                                id="login-button"
                                variant="contained">
                                Sauver
                            </Button>
                        </div>
                   </form>
            </div>
        );
    }
}
