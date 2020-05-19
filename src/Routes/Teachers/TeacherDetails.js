import React, {Component} from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import EmailIcon from '@material-ui/icons/Email';
import {AccountCircle, Call} from "@material-ui/icons";
import Header from './Header.js'

class TeacherDetails extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Header type="Teacher"/>
                <List>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <AccountCircle/>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Nom de prof" secondary="Nom"/>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Nom utilisateur" secondary="Nom d'utilisateur"/>
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <EmailIcon/>
                            </Avatar>
                        </ListItemAvatar>

                        <ListItemText primary="Mail" secondary="Email"/>
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <Call/>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Num" secondary="Numéro de téléphone"/>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Professeur" secondary="Grade"/>
                    </ListItem>
                </List>
            </div>
        );
    }
}

export default TeacherDetails
