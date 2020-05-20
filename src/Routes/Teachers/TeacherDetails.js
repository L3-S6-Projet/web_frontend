import React, { Component } from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Avatar from '@material-ui/core/Avatar';
import EmailIcon from '@material-ui/icons/Email';
import { AccountCircle, Call } from "@material-ui/icons";
import { withRouter } from 'react-router-dom';

import Header from './Header.js';
import Calendar from '../../Components/Calendar/Calendar.js';
import CalendarDatePicker from '../../Components/Calendar/DatePicker/CalendarDatePicker.js';
import SelectedDate from "../../Components/Calendar/SelectedDate.js";
import Scolendar from '../../scolendar/src';
import { getUser } from '../../auth.js';

import '../Details.css';

class TeacherDetails extends Component {
    constructor(props) {
        super(props);
        this.loadOccupancies = this.loadOccupancies.bind(this);

        this.state = {
            selectedDate: SelectedDate.today(),
            view: 'day',
            teacher: null,
        };

        this.onSelectDay = this.onSelectDay.bind(this);
    }

    componentDidMount() {
        this.loadTeacher();
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
                    service.projet +
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
                        parts.push(service.projet + ' heures de projet');

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

        console.log(this.state.teacher);

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
                </div>
            </div>
        );
    }
}

export default withRouter(TeacherDetails);
