import React, {Component} from "react";

import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import DeleteIcon from '@material-ui/icons/Delete';
import InputAdornment from '@material-ui/core/InputAdornment';
import Dialog from '@material-ui/core/Dialog';
import TableFooter from '@material-ui/core/TableFooter';
import Fab from '@material-ui/core/Fab';
import TablePagination from '@material-ui/core/TablePagination';
import AddIcon from '@material-ui/icons/Add';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import Checkbox from '@material-ui/core/Checkbox';
import clsx from 'clsx';
import "./Classrooms.css"

import Scolendar from '../../scolendar/src';
import {getUser} from '../../auth.js';
import Splash from "../Splash/Splash";

import {withRouter} from "react-router-dom";

class Classrooms extends Component {
    constructor(props) {
        super(props);
        this.state= {
            classrooms: [],
            loaded: false,
            checked: [],
            allChecked: false,
            deleteOpen: false,
            addOpen: false,
            name :null,
            capacity: 0,
            page : 0,
            total: null
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
        this.addClassroom = this.addClassroom.bind(this);
    }

    routeToDetails(id) {
        // eslint-disable-next-line
        this.props.history.push('/classrooms/' + id);
    }

    setPage(page){
        this.setState({page : page});
        this.loadData();
    }

    onNameChange(event){
        this.setState({name : event.target.value})
    }
    onCapacityChange(event){
        this.setState({capacity : event.target.value})
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

    // Load all classrooms
    loadData() {
        const defaultClient = Scolendar.ApiClient.instance;
        const token = defaultClient.authentications['token'];
        token.apiKey = getUser().token;
        token.apiKeyPrefix = 'Bearer';


        const apiInstance = new Scolendar.ClassroomApi();

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
                    classrooms: data.classrooms,
                    total: data.total
                })
                this.setState({loaded: true})
            }
        };
        apiInstance.classroomsGet(opts, callback);
    }

    CallCheckAll() {
        if (this.state.allChecked) {
            this.unCheckAll()
        } else {
            this.checkAll()
        }
    }

    checkAll() {
        let toAdd = this.state.classrooms.map(t => t.id).filter(id => !this.isChecked(id));
        let checked = [...this.state.checked, ...toAdd];
        this.setState({checked, allChecked: true});
    }

    unCheckAll() {
        let toRemove = this.state.classrooms.map(t => t.id).filter(this.isChecked);
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
        for (const classroom of this.state.classrooms) {
            if (!this.isChecked(classroom.id)) {
                console.log(this.state.checked)
                console.log(classroom.id)
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

        const apiInstance = new Scolendar.ClassroomApi();

        const callback = function (error, data, response) {
            if (error) {
                console.error(error);
            } else {
                console.log('API called successfully. Returned data: ' + data);
            }
        };
        apiInstance.classroomsDelete(this.state.checked, callback);
        this.setState({checked: []})
        this.loadData();
    }

    //TODO : Vérifier dans la liste car l 'ajout du côté serveur mais je ne le vois pas dans la liste...
    addClassroom(event){
        event.preventDefault();
        this.setState({addOpen: false})

        const defaultClient = Scolendar.ApiClient.instance;

        const token = defaultClient.authentications['token'];
        token.apiKey = getUser().token;
        token.apiKeyPrefix = 'Bearer';

        const apiInstance = new Scolendar.ClassroomApi();

        const classroomCreationRequest = new Scolendar.ClassroomCreationRequest(); // ClassroomCreationRequest |

        classroomCreationRequest.name = this.state.name;
        classroomCreationRequest.capacity= this.state.capacity;
        console.log(classroomCreationRequest)

        const callback = function(error, data, response) {
            if (error) {
                console.error(error);
            } else {
                console.log('API called successfully. Returned data: ' + data);
            }
        };

        apiInstance.classroomsPost({
            "name": this.state.name,
            "capacity": this.state.capacity,
        }, callback);
        this.loadData();
    }

    render() {
        if (!this.state.loaded)
            return <Splash/>
        const rows = this.state.classrooms;
        let head;
        if (this.state.checked.length === 0) {
            head = (
                <div id="notseleted-header">
                    <div id="title-classrooms">Toutes les salles</div>
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
                    <div id="count-classrooms">{this.state.checked.length} sélectionnés</div>
                    <div className="spacer"/>
                    <IconButton size="small" color="inherit"
                                onClick={() => this.setDeleteOpen(true)}><DeleteIcon/></IconButton>
                </div>
            )
        }
        return (
            <div id="classrooms">
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
                                <TableCell>Nom</TableCell>
                                <TableCell>Capacité</TableCell>
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
                                        <a href="" onClick={() => this.routeToDetails(row.id)}>{row.name}</a>
                                    </TableCell>
                                    <TableCell component="th" scope="row">{row.capacity}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                        <TableFooter>
                            <TablePagination
                                count ={this.state.total}
                                page = {this.state.page}
                                onChangePage={(event,page)=>{this.setPage(page)}}
                                rowsPerPage = {10}
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
                            Voulez vous vraiment supprimer ces {this.state.checked.length} salles ? Cette action
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
                    <DialogTitle id="add-dialog-title">{"Nouvelle salle"}</DialogTitle>
                    <form onSubmit={this.addClassroom}>
                        <DialogContent id="add-dialog-form">
                            <TextField required label="Nom"
                                       type="text"
                                       variant='filled'
                                       className="add field"
                                       onChange={this.onNameChange.bind(this)}
                            />
                            <TextField required label="Capacité"
                                       type="text"
                                       variant='filled'
                                       className="add field"
                                       onChange={this.onCapacityChange.bind(this)}
                            />

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
            </div>
        );
    }
}


export default withRouter(Classrooms);