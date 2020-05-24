import React, {Component} from "react";

import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';

import Scolendar from '../../scolendar/src';
import {getUser} from '../../auth.js';
import Splash from "../Splash/Splash";
import {withRouter} from "react-router-dom";

class SubjectsForStudents extends Component {
    constructor(props) {
        super(props);
        this.state= {
            subjectsStudent: [],
            loaded: false,
            className :null,
            name: null,
            prof : null,
            page : 0,
            total: null,
            id : 0,
        }
    }

    routeToDetails(name) {
        // eslint-disable-next-line
        this.props.history.push('/subjectsStudents/' + name);
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

    render() {
        if (!this.state.loaded)
            return <Splash/>
        const rows = this.state.subjectsStudent;
        let head = (
                <div id="notseleted-header">
                    <div id="title-subjects">Toutes les unités d&apos;enseignement</div>
                    <div className="spacer"/>
                </div>
            )
        return (
            <div id="subjects">
                <div id="table-head">
                    {head}
                </div>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Classe</TableCell>
                                <TableCell>Nom</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.name}>
                                    <TableCell component="th" scope="row">
                                        <a href="" onClick={() => this.routeToDetails(row.name)}>{row.className}</a>
                                    </TableCell>
                                    <TableCell component="th" scope="row">{row.name}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        );
    }
}

export default withRouter(SubjectsForStudents);