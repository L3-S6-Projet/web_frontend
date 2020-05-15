import React, {Component} from "react";

import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import DeleteIcon from '@material-ui/icons/Delete';
import InputAdornment from '@material-ui/core/InputAdornment';
import Dialog from '@material-ui/core/Dialog';
import Select from '@material-ui/core/Select';
import TableFooter from '@material-ui/core/TableFooter';
import Fab from '@material-ui/core/Fab';
import InputLabel from '@material-ui/core/InputLabel';
import TablePagination from '@material-ui/core/TablePagination';
import FormControl from '@material-ui/core/FormControl';
import AddIcon from '@material-ui/icons/Add';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import clsx from 'clsx';
import debounce from "../../Utils/debounce-description"
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
//import PopupState, {bindTrigger, bindPopover} from 'material-ui-popup-state';
import "./Teachers.css"

import Scolendar from '../../scolendar/src';
import {getUser} from '../../auth.js';
import Splash from "../Splash/Splash";
import Checkbox from '@material-ui/core/Checkbox';
import {withRouter} from "react-router-dom";

export class Teachers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            teachers: [],
            loaded: false,
            checked: [],
            allChecked: false,
            deleteOpen: false,
            addOpen: false,
            successOpen: false,
            firstName: null,
            lastName: null,
            email: null,
            phone: null,
            grade: null,
            page: 1,
            total: null,
            query: null,
            popOverOpen: false,
            popOverText: null,
            newPassword: null,
            newUsername: null
        };

        this.checkAll = this.checkAll.bind(this);
        this.isChecked = this.isChecked.bind(this);
        this.check = this.check.bind(this);
        this.unCheck = this.unCheck.bind(this);
        this.unCheckAll = this.unCheckAll.bind(this);
        this.checkAll = this.checkAll.bind(this);
        this.testIfAllChecked = this.testIfAllChecked.bind(this);
        this.deleteChecked = this.deleteChecked.bind(this);
        this.setDeleteOpen = this.setDeleteOpen.bind(this);
        this.setAddOpen = this.setAddOpen.bind(this);
        this.setPage = this.setPage.bind(this);
        this.addTeacher = this.addTeacher.bind(this);
        this.onQueryChange = this.onQueryChange.bind(this);
        this.setPopOverOpen = this.setPopOverOpen.bind(this);
        this.setPopOverText = this.setPopOverText.bind(this);
        this.setSuccessOpen = this.setSuccessOpen.bind(this);
        this.setNewPassword = this.setNewPassword.bind(this);
        this.setNewUsername = this.setNewUsername.bind(this)
    }

    setNewPassword(newPassword) {
        this.setState({newPassword: newPassword})
    }

    setNewUsername(newUsername) {
        this.setState({newUsername: newUsername})
    }

    setSuccessOpen(successOpen) {
        this.setState({successOpen: successOpen})
        if (!successOpen) {
            this.setState({
                newPassword: null,
                newUsername: null
            })
        }
    }

    setPopOverText(text) {
        this.setState({popOverText: text})
    }

    setPopOverOpen(popOverOpen) {
        this.setState({popOverOpen: popOverOpen})
    }

    setPage(page) {
        this.setState({page: page});
        setTimeout(() => this.loadData(), 200);
    }

    onQueryChange(event) {
        this.setState({query: event.target.value})
        let immediate = false
        if (event.target.value === "")
            immediate = true;
        debounce(this.loadData(), 200, false)
    }

    onNameChange(event) {
        this.setState({firstName: event.target.value})
    }

    onlastNameChange(event) {
        this.setState({lastName: event.target.value})
    }

    onEmailChange(event) {
        this.setState({email: event.target.value})
    }

    onPhoneChange(event) {
        this.setState({phone: event.target.value})
    }

    onGradeChange(event) {
        this.setState({grade: event.target.value})
    }

    setAddOpen(addOpen) {
        this.setState({addOpen: addOpen})
    }

    setDeleteOpen(deleteOpen) {
        this.setState({deleteOpen: deleteOpen})
    }

    componentDidMount() {
        this.loadData();
    }



    routeToDetails(id) {
        // eslint-disable-next-line
        this.props.history.push('/teachers/' + id);
    }

    // Load all teachers
    loadData() {
        const defaultClient = Scolendar.ApiClient.instance;

        const token = defaultClient.authentications['token'];
        token.apiKey = getUser().token;
        token.apiKeyPrefix = 'Bearer';

        const apiInstance = new Scolendar.TeacherApi();

        const opts = {
            'page': this.state.page,
            'query': this.state.query
        };

        //console.log(opts)

        const callback = (error, data, response) => {
            if (error) {
                console.error(error);
            } else {
                console.log('API called successfully. Returned data: ' + data);
                window.data = data;
                this.setState({
                    teachers: data.teachers,
                    total: data.total
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
        let toAdd = this.state.teachers.map(t => t.id).filter(id => !this.isChecked(id));
        let checked = [...this.state.checked, ...toAdd];
        this.setState({checked, allChecked: true});
    }

    unCheckAll() {
        let toRemove = this.state.teachers.map(t => t.id).filter(this.isChecked);
        let checked = this.state.checked.filter(id => !toRemove.includes(id));
        this.setState({checked, allChecked: false})
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
        setTimeout(() => {
            this.setState({allChecked: this.testIfAllChecked()})
        }, 1);

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
            if (!this.isChecked(teacher.id)) {
                console.log(this.state.checked)
                console.log(teacher.id)
                return false;
            }
        }
        return true;
    }

    deleteChecked() {
        const defaultClient = Scolendar.ApiClient.instance;

        const token = defaultClient.authentications['token'];
        token.apiKey = getUser().token;
        token.apiKeyPrefix = 'Bearer';

        const apiInstance = new Scolendar.TeacherApi();


        const callback = function (error, data, response) {
            if (error) {
                console.error(error);
            } else {
                console.log('API called successfully. Returned data: ' + data);
            }
        };
        apiInstance.teachersDelete(this.state.checked, callback);
        this.setState({checked : []})
        this.loadData();
    }

    addTeacher(event) {
        event.preventDefault();
        this.setState({addOpen: false})


        const defaultClient = Scolendar.ApiClient.instance;

        const token = defaultClient.authentications['token'];
        token.apiKey = getUser().token;
        token.apiKeyPrefix = 'Bearer';

        const apiInstance = new Scolendar.TeacherApi();

        const teacherCreationRequest = new Scolendar.TeacherCreationRequest(); // TeacherCreationRequest |

        teacherCreationRequest.firstName = this.state.firstName;
        teacherCreationRequest.lastName = this.state.lastName;
        teacherCreationRequest.phoneNumber = this.state.phone;
        teacherCreationRequest.email = this.state.email;
        teacherCreationRequest.rank = this.state.grade;
        //console.log(teacherCreationRequest)


        const callback = (error, data, response) => {
            if (error) {
                console.error(error);
            } else {
                console.log('Teacher added successfully. Returned data: ');
                console.log(data)
                this.setState({
                    newPassword: data.password,
                    newUsername: data.username,
                    successOpen: true
                })
            }
        };
        apiInstance.teachersPost({
            "first_name": this.state.firstName,
            "last_name": this.state.lastName,
            "email": this.state.email,
            "phone_number": this.state.phone,
            "rank": this.state.grade
        }, callback);
    }

    render() {
        if (!this.state.loaded)
            return <Splash/>
        const rows = this.state.teachers;
        let head;
        if (this.state.checked.length === 0) {
            head = (
                <div id="notseleted-header">
                    <div id="title-teachers">Tous les enseignants</div>
                    <div className="spacer"/>
                    <TextField label="Chercher par nom ..."
                               type="text"
                               variant='filled'
                               float="right"
                               onChange={this.onQueryChange.bind(this)}
                               InputProps={{
                                   endAdornment: <InputAdornment position="end"><SearchIcon/></InputAdornment>,
                               }}
                               className="field"
                    />
                </div>
            );
        } else {
            head = (
                <div id="selected-header">
                    <div id="count-teachers">{this.state.checked.length} sélectionnés</div>
                    <div className="spacer"/>
                    <IconButton size="small" color="inherit"
                                onClick={() => this.setDeleteOpen(true)}><DeleteIcon/></IconButton>
                </div>
            )
        }
        return (
            <div id="teachers">
                <div id="table-head">
                    {head}
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
                                <TableRow key={row.id}
                                          className={clsx(
                                              {
                                                  "row-selected": this.isChecked(row.id)
                                              })
                                          }>
                                    <TableCell padding="checkbox">
                                        <Checkbox
                                            onChange={event => this.callCheck(row.id)}
                                            checked={this.isChecked(row.id)}
                                        />
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        <a href="" onClick={() => this.routeToDetails(row.id)}>{row.firstName}</a>
                                    </TableCell>
                                    <TableCell component="th" scope="row">{row.lastName}</TableCell>
                                    <TableCell component="th" scope="row">{row.email}</TableCell>
                                    <TableCell component="th" scope="row">{row.phoneNumber}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                        <TableFooter>
                            <TablePagination
                                count={this.state.total}
                                page={this.state.page}
                                onChangePage={(event, page) => {
                                    this.setPage(page)
                                }}
                                rowsPerPage={10}
                                rowsPerPageOptions={[]}
                            />
                        </TableFooter>
                    </Table>
                </TableContainer>

                <Dialog
                    open={this.state.deleteOpen}
                    onClose={() => this.setDeleteOpen(false)}
                >
                    <DialogTitle id="alert-dialog-title">{"Confirmation"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Voulez vous vraiment supprimer ces {this.state.checked.length} enseignants ? Cette action
                            n’est pas réversible.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => this.setDeleteOpen(false)} color="primary">
                            ANNULER
                        </Button>
                        <Button onClick={() => {
                            this.deleteChecked();
                            this.setDeleteOpen(false)
                        }} color="primary" autoFocus>
                            CONFIRMER
                        </Button>
                    </DialogActions>
                </Dialog>
                <Dialog
                    open={this.state.addOpen}
                    onClose={() => this.setAddOpen(false)}
                    id="add-dialog"
                >
                    <DialogTitle id="add-dialog-title">{"Nouvel enseignant"}</DialogTitle>
                    <form onSubmit={this.addTeacher}>
                        <DialogContent id="add-dialog-form">
                            <TextField required label="Prénom"
                                       type="text"
                                       variant='filled'
                                       className="add field"
                                       onChange={this.onNameChange.bind(this)}
                            />
                            <TextField required label="Nom"
                                       type="text"
                                       variant='filled'
                                       className="add field"
                                       onChange={this.onlastNameChange.bind(this)}
                            />
                            <TextField label="Email"
                                       type="email"
                                       variant='filled'
                                       className="add field"
                                       onChange={this.onEmailChange.bind(this)}
                            />
                            <TextField label="Numéro de téléphone"
                                       type="tel"
                                       variant='filled'
                                       className="add field"
                                       onChange={this.onPhoneChange.bind(this)}
                            />
                            <FormControl variant="filled" required className="add field">
                                <InputLabel>Grade</InputLabel>
                                <Select native required onChange={this.onGradeChange.bind(this)}>
                                    <option value="" aria-label="None"/>
                                    <option value={"MACO"}>MACO</option>
                                    <option value={"PROF"}>PROF</option>
                                    <option value={"PRAG"}>PRAG</option>
                                    <option value={"ATER"}>ATER</option>
                                    <option value={"PAST"}>PAST</option>
                                    <option value={"MONI"}>MONI</option>
                                </Select>
                            </FormControl>

                        </DialogContent>
                        <DialogActions>
                            <Button onClick={() => this.setAddOpen(false)} color="primary">
                                ANNULER
                            </Button>
                            <Button type="submit" id="creation-button" color="primary" autoFocus>
                                CRÉER
                            </Button>
                        </DialogActions>
                    </form>
                </Dialog>
                <Dialog
                    open={this.state.successOpen}
                    onClose={() => this.setSuccessOpen(false)}
                >
                    <DialogTitle id="alert-dialog-title">{"Succès"}</DialogTitle>
                    <DialogContent>
                            Veuillez transmettre les informations suivantes : <br/>
                            Nom d’utilisateur : {this.state.newUsername} <br/>
                            Mot de passe : {this.state.newPassword}
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => this.setSuccessOpen(false)} color="primary">
                            OK
                        </Button>
                    </DialogActions>
                </Dialog>
                <Fab id="add-button" aria-label="add" onClick={() => this.setAddOpen(true)}>
                    <AddIcon/>
                </Fab>
                <Popover open={this.state.popOverOpen}>
                    {this.state.popOverText}
                </Popover>
            </div>
        );
    }
}


export default withRouter(Teachers);

