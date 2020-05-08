import React, { Component } from "react";

import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import "./Teachers.css"

import Scolendar from '../../scolendar/src';
import { getUser } from '../../auth.js';

export default class Teachers extends Component {
    constructor(props) {
        super(props);
        this.state = { teachers: [] };
    }

    componentDidMount() {
        this.loadData();
    }

    // Load all teachers
    loadData() {
        var defaultClient = Scolendar.ApiClient.instance;

        var token = defaultClient.authentications['token'];
        token.apiKey = getUser().token;
        token.apiKeyPrefix = 'Bearer';

        var apiInstance = new Scolendar.TeacherApi();

        var opts = {};

        var callback = (error, data, response) => {
            if (error) {
                console.error(error);
            } else {
                console.log('API called successfully. Returned data: ' + data);
                this.setState({
                    teachers: data.teachers,
                })
            }
        };

        apiInstance.teachersGet(opts, callback);
    }

    render() {
        const rows = this.state.teachers;

        return (
            <div id="teachers">
                <div id="title-and-textField">
                    <div id="title-teachers">Tous les enseignants</div>
                    <div className="spacer"></div>
                    <TextField label="Chercher par nom ..."
                               type="text"
                               variant='outlined'
                               float="right"
                               InputProps={{
                                   endAdornment: <InputAdornment position="start"><SearchIcon/></InputAdornment>,
                               }}
                    />
                </div>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Prénom</TableCell>
                                <TableCell>Nom</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Numéro de téléphone</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell component="th" scope="row">
                                        {row.firstName}
                                    </TableCell>
                                    <TableCell>{row.lastName}</TableCell>
                                    <TableCell>{row.email}</TableCell>
                                    <TableCell>{row.phoneNumber}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        );
    }
}
