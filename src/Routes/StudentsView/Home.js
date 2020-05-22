import React, {Component} from "react";


import {withRouter} from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import './Home.css'


export class Home extends Component {
    constructor(props) {
        super(props);

    }

    render() {
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
            </div>
        );
    }
}


export default withRouter(Home);

