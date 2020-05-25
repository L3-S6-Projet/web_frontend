import React, {Component} from "react";
import {withRouter} from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import '../Details.css'
import Scolendar from "../../scolendar/src";
import {getUser} from "../../auth";

class SubjectsForTeachersDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subjectsTeachers: [],
            className: null,
            name: null,
            prof: null,
        }
    }

    componentDidMount() {
        this.loadData();
    }

    // Load all subjects
    loadData() {
        const defaultClient = Scolendar.ApiClient.instance;
        const token = defaultClient.authentications['token'];
        token.apiKey = getUser().token;
        token.apiKeyPrefix = 'Bearer';

        const apiInstance = new Scolendar.RoleProfessorApi();

        const user = getUser();
        const id = user.user.id;


        const callback = (error, data, response) => {
            if (error) {
                console.error(error);
            } else {

                console.log('API called successfully. Returned data: ');
                console.log(data)
                this.setState({
                    subjectsTeachers: data.subjects,
                })
                this.setState({loaded: true})
            }
        };
        apiInstance.teachersIdSubjectsGet(id, callback);
    }


    render() {
        //TODO TO FIX (array undefined but api access is ok)
        console.log(this.state.subjectsTeachers === null ? ':' : (this.state.subjectsTeachers.className));
        return (
            <div className="subjectStudentDetails-page">
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper>
                            <div className="teacher-student-details-infos-title">
                                Informations
                            </div>
                            <List className="teacher-student-details-infos-list">
                                <ListItem>
                                    <ListItemText
                                        primary="Nom"
                                        secondary="Nom"/>
                                </ListItem>

                                <ListItem>
                                    <ListItemText
                                        primary='Classe'
                                        secondary="Classe"/>
                                </ListItem>

                            </List>
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper>
                            <div className="teacher-student-details-infos-title">
                                Enseignants
                            </div>
                            <List className="teacher-student-details-infos-list">
                                <ListItem>
                                    <ListItemText
                                        primary='Nom Prénom 1'
                                        secondary="Numéro de tel + Email"/>
                                </ListItem>

                                <ListItem>
                                    <ListItemText
                                        primary='Nom Prénom 2'
                                        secondary="Numéro de tel + Email"/>
                                </ListItem>
                            </List>
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper>
                            <div className="teacher-student-details-infos-title">
                                Groupes
                            </div>
                            <List className="teacher-student-details-infos-list">
                                <ListItem>
                                    <ListItemText
                                        primary='Groupe 1'
                                        secondary="Nb élèves"/>
                                </ListItem>

                                <ListItem>
                                    <ListItemText
                                        primary='Groupe 2'
                                        secondary="Nb élèves"/>
                                </ListItem>
                            </List></Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withRouter(SubjectsForTeachersDetails);
