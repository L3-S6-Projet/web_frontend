import React, {Component} from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import EmailIcon from '@material-ui/icons/Email';
import {AccountCircle, Call} from "@material-ui/icons";
import {withRouter} from 'react-router-dom';

import Header from '../Header.js';
import Calendar from '../../Components/Calendar/Calendar.js';
import CalendarDatePicker from '../../Components/Calendar/DatePicker/CalendarDatePicker.js';
import SelectedDate from "../../Components/Calendar/SelectedDate.js";
import Scolendar from '../../scolendar/src';
import {getUser} from '../../auth.js';

import '../Details.css';
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

class TeacherDetails extends Component {
    constructor(props) {
        super(props);
        this.loadOccupancies = this.loadOccupancies.bind(this);

        this.state = {
            selectedDate: SelectedDate.today(),
            view: 'day',
            teacher: null,
            editOpen: false,
            firstName: null,
            lastName: null,
            email: null,
            phone: null,
            grade: null,
            password: null,
            showPassword: false
        };

        this.onSelectDay = this.onSelectDay.bind(this);
    }


    handleClickShowPassword() {
        this.setState({
            showPassword: this.showPassword = !this.showPassword
        });
    };

    handleMouseDownPassword(event) {
        event.preventDefault();
    };
    setEditOpen(addOpen) {
        this.setState({ addOpen: addOpen })
    }

    componentDidMount() {
        this.loadTeacher();
    }

    onNameChange(event) {
        this.setState({ firstName: event.target.value })
    }
    onPasswordChange(event) {
        this.setState({ password: event.target.value })
    }

    onlastNameChange(event) {
        this.setState({ lastName: event.target.value })
    }

    onEmailChange(event) {
        this.setState({ email: event.target.value })
    }

    onPhoneChange(event) {
        this.setState({ phone: event.target.value })
    }

    onGradeChange(event) {
        this.setState({ grade: event.target.value })
    }

    loadTeacher() {
        // eslint-disable-next-line
        const id = this.props.match.params.id;

        const defaultClient = Scolendar.ApiClient.instance;

        const token = defaultClient.authentications['token'];
        token.apiKey = getUser().token;
        token.apiKeyPrefix = 'Bearer';

        const apiInstance = new Scolendar.TeacherApi();

        const callback = (error, data, response) => {
            if (error) {
                console.error(error);
            } else {
                this.setState({ teacher: data.teacher });
            }
        };

        apiInstance.teachersIdGet(id, callback);
    }

    loadOccupancies(request, callback) {
        // eslint-disable-next-line
        const id = this.props.match.params.id;

        const apiInstance = new Scolendar.TeacherApi();
        apiInstance.teachersIdOccupanciesGet(id, request, callback);
    }

    onSelectDay(day) {
        const selectedDate = new SelectedDate(
            day.dayNumber,
            day.monthNumber,
            day.yearNumber
        );

        this.setState({ selectedDate });
    }

    render() {
        let rank = null;

        if (this.state.teacher !== null) {
            const mapping = {
                "MACO": "Maître de conférences",
                "PROF": "Professeur",
                "PRAG": "PRAG",
                "ATER": "ATER",
                "PAST": "PAST",
                "MONI": "Moniteur",
            };
            rank = mapping[this.state.teacher.rank];
        }

        const paragraphs = [];

        if (this.state.teacher !== null) {
            for (let service of this.state.teacher.services) {
                let text = "Pour l'année " + service.class + ", l'enseignant ";

                let total = (
                    service.cm +
                    service.project +
                    service.td +
                    service.tp +
                    service.administration +
                    service.external
                );

                if (total <= 0) {
                    text += "n'a pas proposé de cours."
                } else {
                    text += "à proposé ";

                    let parts = [];

                    if (service.cm > 0)
                        parts.push(service.cm + ' heures de CM');

                    if (service.projet > 0)
                        parts.push(service.project + ' heures de projet');

                    if (service.td > 0)
                        parts.push(service.td + ' heures de TD');

                    if (service.tp > 0)
                        parts.push(service.tp + ' heures de TP');

                    if (service.administration > 0)
                        parts.push(service.administration + ' heures d\'administration');

                    if (service.external > 0)
                        parts.push(service.external + ' heures externes');

                    text += parts.slice(0, -1).join(', ') + ' et ' + parts.slice(-1);
                    text += '.';
                }

                paragraphs.push(text);
            }

            paragraphs.push(
                'La valeur total de son service est de ' + this.state.teacher.totalService + ' heures.'
            );
        }

        return (
            <div className="teacher-student-details-container">
                <Header
                    type="Teacher"
                    name={this.state.teacher === null ? ':' : (this.state.teacher.firstName + ' ' + this.state.teacher.lastName)}
                    view={this.state.view}
                    onChangeView={view => this.setState({ view })} />

                <div className="teacher-student-details">
                    <div className="left">
                        <div className="teacher-student-details-infos">
                            <div className="teacher-student-details-infos-title">
                                Informations
                            </div>

                            <List className="teacher-student-details-infos-list">
                                <ListItem>
                                    <ListItemIcon>
                                        <AccountCircle />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={this.state.teacher === null ? ':' : (this.state.teacher.firstName + ' ' + this.state.teacher.lastName)}
                                        secondary="Nom" />
                                </ListItem>

                                <ListItem>
                                    <ListItemText
                                        primary={this.state.teacher === null ? ':' : this.state.teacher.username}
                                        secondary="Nom d'utilisateur"
                                        inset />
                                </ListItem>

                                <ListItem>
                                    <ListItemIcon>
                                        <EmailIcon />
                                    </ListItemIcon>

                                    <ListItemText
                                        primary={this.state.teacher === null ? ':' : (this.state.teacher.email === null ? 'Non ajouté' : this.state.teacher.email)}
                                        secondary="Email" />
                                </ListItem>

                                <ListItem>
                                    <ListItemIcon>
                                        <Call />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={this.state.teacher === null ? ':' : (this.state.teacher.phoneNumber === null ? 'Non ajouté' : this.state.teacher.phoneNumber)}
                                        secondary="Numéro de téléphone" />
                                </ListItem>

                                <ListItem>
                                    <ListItemText primary={rank} secondary="Grade" inset />
                                </ListItem>
                            </List>

                            <div className="teacher-student-details-infos-title">
                                Service
                            </div>

                            <div className="teacher-student-details-infos-service">
                                {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
                            </div>
                        </div>

                        <div className="teacher-student-details-calendar-picker">
                            <CalendarDatePicker
                                selectedDate={this.state.selectedDate}
                                onPrevMonth={() => this.setState({ selectedDate: this.state.selectedDate.previousMonth() })}
                                onNextMonth={() => this.setState({ selectedDate: this.state.selectedDate.nextMonth() })}
                                onSelectDay={this.onSelectDay}
                                view={this.state.view} />
                        </div>
                    </div>
                    <div className="right">
                        <Calendar
                            loadOccupancies={this.loadOccupancies}
                            showHeader={false}
                            view={this.state.view}
                            setView={null}
                            selectedDate={this.state.selectedDate} />
                    </div>

                    <Dialog
                        open={this.state.editOpen}
                        onClose={() => this.setEditOpen(false)}
                        id="edit-dialog"
                    >
                        <DialogTitle id="add-dialog-title">{"Edition"}</DialogTitle>
                        <form onSubmit={this.editTeacher}>
                            <DialogContent id="edit-dialog-form">
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
                                        <option value="" aria-label="None" />
                                        <option value={"MACO"}>MACO</option>
                                        <option value={"PROF"}>PROF</option>
                                        <option value={"PRAG"}>PRAG</option>
                                        <option value={"ATER"}>ATER</option>
                                        <option value={"PAST"}>PAST</option>
                                        <option value={"MONI"}>MONI</option>
                                    </Select>
                                </FormControl>
                                <TextField variant="filled"
                                           label="Mot de Passe "
                                           type={this.state.showPassword ? 'text' : 'password'}
                                           autoComplete="current-password"
                                           disabled={this.state.loading}
                                           margin="normal"
                                           size="small"
                                           onChange={this.onPasswordChange.bind(this)}
                                           value={this.state.password || ''}
                                           InputProps={{
                                               endAdornment: <InputAdornment position="end">
                                                   <IconButton
                                                       aria-label="toggle password visibility"
                                                       onClick={this.handleClickShowPassword.bind(this)}
                                                       onMouseDown={
                                                           this.handleMouseDownPassword.bind(this)
                                                       }
                                                       edge="end"
                                                   >
                                                       {this.state.showPassword ? <Visibility/> : <VisibilityOff/>}
                                                   </IconButton>
                                               </InputAdornment>,
                                           }}
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
            </div>
        );
    }
}

export default withRouter(TeacherDetails);
