import React, {Component} from "react";

import {withRouter} from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import './Home.css'

import '../Details.css';
import Scolendar from '../../scolendar/src';
import Calendar from "../../Components/Calendar/Calendar.js";
import {getUser} from '../../auth.js';
import SelectedDate from "../../Components/Calendar/SelectedDate";

export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modif :[],
            loaded: false,
            selectedDate: SelectedDate.today(),
            view: 'day',
        }
        this.loadOccupancies = this.loadOccupancies.bind(this);
    }

    loadOccupancies(request, callback) {
        const user = getUser();

        // eslint-disable-next-line
        const id = user.user.id ;

        const apiInstance = new Scolendar.RoleStudentApi();
        apiInstance.studentsIdOccupanciesGet(id, request, callback);
    }

    componentDidMount() {
        this.loadModifications();
    }


    loadModifications () {
        const defaultClient = Scolendar.ApiClient.instance;
        const token = defaultClient.authentications['token'];
        token.apiKey = getUser().token;
        token.apiKeyPrefix = 'Bearer';

        const apiInstance = new Scolendar.RoleStudentApi();

        const callback = function(error, data, response) {
            if (error) {
                console.error(error);
            } else {

                console.log('API called successfully. Returned data: ');
                this.setState({
                    modif: data.modifications,
                })
                this.setState({loaded: true})
            }
        };
        apiInstance.profileLastOccupanciesModificationsGet(callback);
    }


    render() {
        /*let paragraphs = [];
        if (this.state.occupancies !== null) {
                let text = "Votre prochain cours est dans " +
                    (this.state.occupancies.days.occupancies.classroom.end - this.state.occupancies.days.occupancies.classroom.start) + " minutes, en " +
                    this.state.occupancies.days.occupancies.classroom.classroomName +" de "+
                    this.state.occupancies.days.occupancies.classroom.start + " à " + this.state.occupancies.days.occupancies.classroom.end +"."
                    + "C'est un cours de " + this.state.occupancies.days.occupancies.classroom.subjectName +
                    " avec " + this.state.occupancies.days.occupancies.classroom.teacherName +"."
                ;

                paragraphs.push(text);
        }
*/
        return (
            <div className="home-page">
                <div id='title'>Accueil</div>

                    <Grid item xs container direction="row" spacing={3}>
                        <Grid item xs={10}>
                            <Grid item xs container direction="row" spacing={3}>
                                <Grid item xs={12}>
                                    <Paper>Prochain cours</Paper>
                                </Grid>
                                <Grid item xs={8}>
                                    <Paper>Dernières modifs</Paper>
                                </Grid>
                                <Grid item xs={4}>

                                        <Grid item container direction="column" spacing={2}>

                                                    <Grid item container direction="row" spacing={1}>
                                                        <Grid item xs={12}>
                                                            <Paper>Progrès</Paper>
                                                        </Grid>

                                                        <Grid item xs={12}>
                                                            <Paper>Contacts</Paper>
                                                        </Grid>
                                                    </Grid>

                                        </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={2}>
                            <Paper>Liens</Paper>
                        </Grid>
                    </Grid>
                <div className="right">
                    <Calendar
                        loadOccupancies={this.loadOccupancies}
                        showHeader={false}
                        view={this.state.view}
                        setView={null}
                        selectedDate={this.state.selectedDate} />
                </div>
            </div>
        );
    }
}


export default withRouter(Home);

