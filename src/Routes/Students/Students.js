import React, { Component } from "react";

import { getUser } from '../../auth.js';
import Scolendar from '../../scolendar/src';
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import "./Students.css"

export default class Students extends Component {
    constructor(props) {
        super(props);
        this.state={students :[]}
    }

    componentDidMount() {
        this.loadData()
    }

    loadData(){
        var defaultClient = Scolendar.ApiClient.instance;
        var token = defaultClient.authentications['token'];
        token.apiKey = getUser().token;
        token.apiKeyPrefix = 'Bearer';


        var apiInstance = new Scolendar.StudentsApi();

        var opts={}

        var callback = (error, data, response) => {
            if (error) {
                console.error(error);
            } else {

                console.log('API called successfully. Returned data: ');
                console.log(data.students);
                this.setState({
                    students :data.students})
            }
        };
        apiInstance.studentsGet(opts, callback);
    }

    render() {
        const rows=this.state.students;
        return (
            <div id="students">
                <div id="title-and-textField">
                    <div id="title-students">Tous les étudiants</div>
                    <div className="spacer"/>
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
                                <TableCell>Classe</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell component="th" scope="row">
                                        {row.firstName}
                                    </TableCell>
                                    <TableCell>{row.lastName}</TableCell>
                                    <TableCell>{row.className}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        );
    }
}
