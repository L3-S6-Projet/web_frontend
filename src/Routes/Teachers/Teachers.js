import React, {Component} from "react";

import {TableContainer, Table, TableHead, TableRow, TableCell, TableBody} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import "./Teachers.css"

import Scolendar from '../../scolendar/src';
import {getUser} from '../../auth.js';
import Splash from "../Splash/Splash";
import Checkbox from '@material-ui/core/Checkbox';

export default class Teachers extends Component {
    constructor(props) {
        super(props);
        this.state = {teachers: [], loaded: false, checked: [], allChecked: false};

        this.checkAll = this.checkAll.bind(this);
        this.isChecked = this.isChecked.bind(this);
        this.check = this.check.bind(this);
        this.unCheck = this.unCheck.bind(this);
        this.unCheckAll = this.unCheckAll.bind(this);
        this.checkAll = this.checkAll.bind(this);
        this.testIfAllChecked = this.testIfAllChecked.bind(this);
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
                this.setState({loaded: true})
            }
        };
        apiInstance.teachersGet(opts, callback);
    }

    CallCheckAll() {
        if (this.state.allChecked) {
            this.unCheckAll()
        } else {
            this.checkAll()
        }
    }

    checkAll() {
        let checked = [...this.state.checked];
        this.state.teachers.forEach((teacher) => {
            if (!this.isChecked(teacher.id))
                checked.push(teacher.id)
        })
        this.setState({checked: checked})
        this.setState({allChecked: true})
    }

    //TODO : Fix this function
    unCheckAll() {
        let checked = [...this.state.checked];
        for (const teacher of this.state.teachers) {
            if (this.isChecked(teacher.id))
                checked.splice(this.state.checked.indexOf(teacher.id), 1)
        }
        this.setState({checked: checked})
        this.setState({allChecked: false})
    }

    isChecked(id) {
        return this.state.checked.includes(id);
    }

    unCheck(id) {
        if (!this.isChecked(id))
            return;
        let checked = [...this.state.checked];
        checked.splice(this.state.checked.indexOf(id), 1)
        this.setState({checked: checked})
        this.setState({allChecked: false})
    }

    check(id) {
        if (this.isChecked(id))
            return;
        let checked = [...this.state.checked];
        checked.push(id);
        this.setState({checked: checked})
        setTimeout(()=>{this.setState({allChecked: this.testIfAllChecked()})},1);

    }

    callCheck(id) {
        if (this.state.checked.includes(id)) {
            this.unCheck(id)
        } else {
            this.check(id)
        }
    }

    testIfAllChecked() {
        for (const teacher of this.state.teachers) {
            if (!this.isChecked(teacher.id)){
                console.log(this.state.checked)
                console.log(teacher.id)
                return false;
            }
        }
        return true;
    }

    render() {
        if (!this.state.loaded)
            return <Splash/>
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
                                <TableCell padding="checkbox">
                                    <Checkbox
                                        checked={this.state.allChecked}
                                        onChange={(event) =>
                                            this.CallCheckAll()
                                        }
                                    />
                                </TableCell>
                                <TableCell>Prénom</TableCell>
                                <TableCell>Nom</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Numéro de téléphone</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell padding="checkbox">
                                        <Checkbox
                                            onChange={event => this.callCheck(row.id)}
                                            checked={this.isChecked(row.id)}
                                        />
                                    </TableCell>
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
