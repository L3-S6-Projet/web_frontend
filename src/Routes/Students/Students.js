import React, {Component} from "react";

import {getUser} from '../../auth.js';
import Scolendar from '../../scolendar/src';
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Splash from "../Splash/Splash"
import "./Students.css"
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Checkbox from "@material-ui/core/Checkbox";
import clsx from "clsx";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import {withRouter} from "react-router-dom";

class Students extends Component {
    constructor(props) {
        super(props);
        this.state = {
            students: [],
            loaded: false,
            checked: [],
            allChecked: false,
            deleteOpen: false,
            addOpen: false,
            className: null,
            firstName: null,
            lastName: null,
            page: 0,
            total: null,
            confirmationOpen: false,
        }

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
        this.setStudentCreated = this.setStudentCreated.bind(this);
        this.addStudent = this.addStudent.bind(this);

    }


    routeToDetails(id) {
        // eslint-disable-next-line
        this.props.history.push('/students/' + id);
    }

    setPage(page) {
        this.setState({page: page});
        this.loadData();
    }

    componentDidMount() {
        this.loadData()
    }

    onClassChange(event) {
        this.setState({className: event.target.value})
    }

    onFirstNameChange(event) {
        this.setState({firstName: event.target.value})
    }

    onLastNameChange(event) {
        this.setState({lastName: event.target.value})
    }

    setAddOpen(addOpen) {
        this.setState({addOpen: addOpen})
    }

    setDeleteOpen(deleteOpen) {
        this.setState({deleteOpen: deleteOpen})
    }

    setStudentCreated(studentCreatedOpen) {
        this.setState({confirmationOpen: studentCreatedOpen})
    }

    //Load all students
    loadData() {
        const defaultClient = Scolendar.ApiClient.instance;
        const token = defaultClient.authentications['token'];
        token.apiKey = getUser().token;
        token.apiKeyPrefix = 'Bearer';


        const apiInstance = new Scolendar.StudentsApi();


        const opts = {
            'page': +this.state.page + 1
        };

        const callback = (error, data, response) => {
            if (error) {
                console.error(error);
            } else {

                console.log('API called successfully. Returned data: ');
                console.log(data.students);
                this.setState({
                    students: data.students,
                    total: data.total
                })
                this.setState({loaded: true})
            }
        };
        apiInstance.studentsGet(opts, callback);
    }

    CallCheckAll() {
        if (this.state.allChecked) {
            this.unCheckAll()
        } else {
            this.checkAll()
        }
    }

    checkAll() {
        let toAdd = this.state.students.map(t => t.id).filter(id => !this.isChecked(id));
        let checked = [...this.state.checked, ...toAdd];
        this.setState({checked, allChecked: true});
    }

    unCheckAll() {
        let toRemove = this.state.students.map(t => t.id).filter(this.isChecked);
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
        for (const student of this.state.students) {
            if (!this.isChecked(student.id)) {
                console.log(this.state.checked)
                console.log(student.id)
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

        const apiInstance = new Scolendar.StudentsApi();

        const callback = function (error, data, response) {
            if (error) {
                console.error(error);
            } else {
                console.log('API called successfully. Returned data: ' + data);
            }
        };

        apiInstance.studentsDelete(this.state.checked, callback);
        this.setState({checked: []})
        this.loadData();
    }


    //TODO : A FIXER
    // - Réparer la création (sûrement au niveau de récupérer les données pour les mettre dans la bdd)
    // - Vérifier que la création se fait bien pour la fenêtre de confirmation/succes
    addStudent(event) {
        event.preventDefault();
        this.setState({addOpen: false})

        const defaultClient = Scolendar.ApiClient.instance;

        const token = defaultClient.authentications['token'];
        token.apiKey = getUser().token;
        token.apiKeyPrefix = 'Bearer';

        const apiInstance = new Scolendar.StudentsApi();

        const studentCreationRequest = new Scolendar.StudentCreationRequest(); // StudentCreationRequest |
        studentCreationRequest.firstName = this.state.firstName;
        studentCreationRequest.lastName = this.state.lastName;
        studentCreationRequest.classId = this.state.classId;
        console.log(studentCreationRequest)

        const callback = function (error, data, response) {
            if (error) {
                console.error(error);
            } else {
                console.log('API called successfully. Returned data: ' + data);
            }
        };

        apiInstance.studentsPost({
            "first_name": this.state.firstName,
            "last_name": this.state.lastName,
            "class_id": this.state.classId,
        }, callback);
        this.setStudentCreated(true);
        this.loadData();
    }


    render() {
        if (!this.state.loaded)
            return <Splash/>
        const rows = this.state.students;
        let head;
        if (this.state.checked.length === 0) {
            head = (
                <div id="notseleted-header">
                    <div id="title-subjects">Tous les étudiants</div>
                    <div className="spacer"/>
                    <TextField label="Chercher par nom ..."
                               type="text"
                               variant='filled'
                               float="right"
                               InputProps={{
                                   endAdornment: <InputAdornment position="start"><SearchIcon/></InputAdornment>,
                               }}
                               className="field"
                    />
                </div>
            );
        } else {
            head = (
                <div id="selected-header">
                    <div id="count-subjects">{this.state.checked.length} sélectionnés</div>
                    <div className="spacer"/>
                    <IconButton size="small" color="inherit"
                                onClick={() => this.setDeleteOpen(true)}><DeleteIcon/></IconButton>
                </div>
            )
        }

        return (
            <div id="subjects">
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
                                <TableCell>Classe</TableCell>
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
                                    <TableCell component="th" scope="row">
                                        {row.lastName}
                                    </TableCell>
                                    <TableCell>{row.className}</TableCell>
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
                <Fab id="add-button" aria-label="add" onClick={() => this.setAddOpen(true)}>
                    <AddIcon/>
                </Fab>

                <Dialog
                    open={this.state.deleteOpen}
                    onClose={() => this.setDeleteOpen(false)}
                >
                    <DialogTitle id="alert-dialog-title">{"Confirmation"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Voulez vous vraiment supprimer ces {this.state.checked.length} étudiants ? Cette action
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
                    <DialogTitle id="add-dialog-title">{"Nouvel Etudiant"}</DialogTitle>
                    <form onSubmit={this.addStudent}>
                        <DialogContent id="add-dialog-form">
                            <TextField required label="Prénom"
                                       type="text"
                                       variant='filled'
                                       className="add field"
                                       onChange={this.onFirstNameChange.bind(this)}
                            />
                            <TextField required label="Nom"
                                       type="text"
                                       variant='filled'
                                       className="add field"
                                       onChange={this.onLastNameChange.bind(this)}
                            />
                            <FormControl variant="filled"  required className="add field">
                                <InputLabel>Classe</InputLabel>
                                <Select native required onChange={this.onClassChange.bind(this)}>
                                    <option value="" aria-label="None" />
                                    <option value={"ID_Info_L3"}>L3 Informatique</option>
                                    <option value={"ID_Info_M1"}>M1 Informatique</option>
                                </Select>
                            </FormControl>
                        </DialogContent>

                        <DialogActions>
                            <Button onClick={() => this.setAddOpen(false)} color="primary">
                                ANNULER
                            </Button>
                            <Button type="submit" id="creation-button" color="primary" autoFocus onClick={() => this.setStudentCreated(true)}>
                                CRÉER
                            </Button>
                        </DialogActions>

                    </form>
                </Dialog>
                <Dialog
                    open={this.state.confirmationOpen}
                    onClose={() => this.setStudentCreated(false)}
                    id="add-dialog"
                >
                    <DialogTitle id="add-dialog-title">{"Succès"}</DialogTitle>
                    <DialogContentText id="alert-dialog-description">
                        <p>Veuillez transmettre les informations suivantes : </p>
                        <p>Nom d&apos;utilisateur : {this.state.firstName}.{this.state.lastName}</p>
                        <p>Mot de passe : mdpACreer</p>
                    </DialogContentText>
                    <DialogActions>
                        <Button onClick={() => this.setStudentCreated(false)} color="primary">
                            OK
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );


    }

}

export default withRouter(Students);
