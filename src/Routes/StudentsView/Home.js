import React, {Component} from "react";

import {withRouter} from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import './Home.css'
import '../Details.css';
import Scolendar from '../../scolendar/src';
import {getUser} from '../../auth.js';
import SelectedDate from "../../Components/Calendar/SelectedDate";
import LinearProgress from "@material-ui/core/LinearProgress";
import ListItem from "@material-ui/core/ListItem";

export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modif: [],
            loaded: false,
            selectedDate: SelectedDate.today(),
            view: 'day',
            nextOccupancy: [],
            subjectsStudent:[],
        }
    }

    componentDidMount() {
        this.loadModifications();
        this.loadNextOccupancy();
        this.loadSubjects();
    }

    loadNextOccupancy() {
        const user = getUser();

        // eslint-disable-next-line
        const id = user.user.id;

        const start = Math.floor(Date.now() / 1000);
        const end = start + 604800; // one week
        var opts = {
            'start': start,
            'end': end,
            'occupanciesPerDay': 1
        };

        const callback = (error, data, response) => {
            const nextOccupancy = data.days
                .flatMap(x => x.occupancies)
                .reduce((best, e) => {
                    if (best == null) return e;
                    if (best.start < e.start) return best;
                    return e;
                }, null);

            this.setState({nextOccupancy: nextOccupancy});
        };

        const apiInstance = new Scolendar.RoleStudentApi();
        apiInstance.studentsIdOccupanciesGet(id, opts, callback);
    }


    loadSubjects() {
        const defaultClient = Scolendar.ApiClient.instance;
        const token = defaultClient.authentications['token'];
        token.apiKey = getUser().token;
        token.apiKeyPrefix = 'Bearer';

        const apiInstance = new Scolendar.RoleStudentApi();

        const user = getUser();
        const id = user.user.id ;


        const callback = (error, data, response) =>  {
            if (error) {
                console.error(error);
            } else {

                console.log('API called successfully. Returned data: ');
                this.setState({
                    subjectsStudent: data.subjects,
                })
                this.setState({loaded: true})
            }
        };
        apiInstance.studentsIdSubjectsGet(id, callback);
    }

    loadModifications() {
        const defaultClient = Scolendar.ApiClient.instance;
        const token = defaultClient.authentications['token'];
        token.apiKey = getUser().token;
        token.apiKeyPrefix = 'Bearer';

        const apiInstance = new Scolendar.RoleStudentApi();

        const callback = (error, data, response) => {
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
        let start = new Date(this.state.nextOccupancy.start * 1000);
        let end = new Date(this.state.nextOccupancy.end * 1000);
        function pad(i) {
            if (i < 10) {
                i = "0" + i;
            }
            return i;
        }
        let startHour = pad(start.getHours()) + ':' + pad(start.getMinutes());
        let endHour = pad(end.getHours()) + ':' + pad(end.getMinutes());


        const lastModif = this.state.modif.map((onemodif, index) =>
            <ListItem secondary="Nom"  key={index}>  {onemodif.modificationType} {onemodif.occupancy.subjectName} pour les {onemodif.occupancy.className} </ListItem>
    );


        const contacts = this.state.subjectsStudent.map((subject, index) =>
            <ListItem  key={index}> {subject.teachers.map( (prof, index) =>
                <ListItem   key={index}>{prof.lastName} </ListItem> )}</ListItem>
        );

        const links = this.state.subjectsStudent.map((subject, index) =>
                <ListItem   key={index}>{subject.name} </ListItem>
        );

        return (
            <div className="home-page">
                <div id='title'>Accueil</div>

                <Grid item xs container direction="row" spacing={6}>
                    <Grid item xs={9}>
                        <Grid item xs container direction="row" spacing={6}>
                            <Grid item xs={12}>
                                <Paper>Votre prochain cours est en {this.state.nextOccupancy.classroomName} de {startHour} à {endHour}.
                                    C&apos;est un cours
                                    de {this.state.nextOccupancy.subjectName} avec {this.state.nextOccupancy.teacherName}.
                                </Paper>
                            </Grid>
                            <Grid item xs={8}>
                                <Paper> <div id='title-progress'>Dernières modifications</div>
                                    <ul>{lastModif}</ul>
                                </Paper>
                            </Grid>
                            <Grid item xs={4}>

                                <Grid item container direction="column" spacing={6}>
                                    <Grid item container direction="row" spacing={6}>
                                        <Grid item xs={12}>
                                            <Paper>
                                                <div id='title-progress'>Progrès</div>
                                                Vous avez atteint 50% de votre année.
                                                <LinearProgress className="LinearProgressBar" color="secondary"
                                                                variant="determinate" value={50}/>
                                            </Paper>
                                        </Grid>

                                        <Grid item xs={12}>
                                            <Paper> <div id='title-progress'>Contact</div>
                                                <ul>{contacts}</ul>
                                            </Paper>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper> <div id='title-progress'>Liens</div>
                            <ul>{links}</ul></Paper>
                    </Grid>
                </Grid>

            </div>
        );
    }
}

export default withRouter(Home);

