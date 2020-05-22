import React, {Component} from "react";
import {withRouter} from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import './SubjectsForStudentsDetails.css'

class SubjectDetails extends Component {
    constructor(props) {
        super(props);
    }


    render() {
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
                                        primary='TODO'
                                        secondary="Nom"/>
                                </ListItem>

                                <ListItem>
                                    <ListItemText
                                        primary='TODO'
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
                                        primary='TODO'
                                        secondary="Numéro de tel + Email"/>
                                </ListItem>

                                <ListItem>
                                    <ListItemText
                                        primary='TODO'
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
                                        primary='TODO'
                                        secondary="Nb élèves"/>
                                </ListItem>

                                <ListItem>
                                    <ListItemText
                                        primary='TODO'
                                        secondary="Nb élèves"/>
                                </ListItem>
                            </List></Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withRouter(SubjectDetails);
