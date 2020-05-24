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

export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modif: [],
            loaded: false,
            selectedDate: SelectedDate.today(),
            view: 'day',
            nextOccupancy: [],
        }
    }

    componentDidMount() {
        this.loadModifications();
        this.loadNextOccupancy();
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
        return (
            <div className="home-page">
                <div id='title'>Accueil</div>

                <Grid item xs container direction="row" spacing={6}>
                    <Grid item xs={10}>
                        <Grid item xs container direction="row" spacing={6}>
                            <Grid item xs={12}>
                                <Paper>Votre prochain cours est dans TEMPS minutes
                                    en {this.state.nextOccupancy.classroomName} de {this.state.nextOccupancy.start} à {this.state.nextOccupancy.end}.
                                    C&apos;est un cours
                                    de {this.state.nextOccupancy.subjectName} avec {this.state.nextOccupancy.teacherName}.
                                </Paper>
                            </Grid>
                            <Grid item xs={8}>
                                <Paper>Dernières modifs</Paper>
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

            </div>
        );
    }
}

export default withRouter(Home);

