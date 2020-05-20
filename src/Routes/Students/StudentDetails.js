import React, { Component } from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Avatar from '@material-ui/core/Avatar';
import EmailIcon from '@material-ui/icons/Email';
import { AccountCircle, Call } from "@material-ui/icons";
import { withRouter } from 'react-router-dom';

import Header from '../Teachers/Header.js';
import Calendar from '../../Components/Calendar/Calendar.js';
import CalendarDatePicker from '../../Components/Calendar/DatePicker/CalendarDatePicker.js';
import SelectedDate from "../../Components/Calendar/SelectedDate.js";
import Scolendar from '../../scolendar/src';
import { getUser } from '../../auth.js';
import { capitalize } from '../../Utils/capitalize.js';

import '../Details.css';

class StudentDetails extends Component {
    constructor(props) {
        super(props);
        this.loadOccupancies = this.loadOccupancies.bind(this);

        this.state = {
            selectedDate: SelectedDate.today(),
            view: 'day',
            student: null,
        };

        this.onSelectDay = this.onSelectDay.bind(this);
    }

    componentDidMount() {
        this.loadStudent();
    }

    loadStudent() {
        // eslint-disable-next-line
        const id = this.props.match.params.id;

        const defaultClient = Scolendar.ApiClient.instance;

        const token = defaultClient.authentications['token'];
        token.apiKey = getUser().token;
        token.apiKeyPrefix = 'Bearer';

        const apiInstance = new Scolendar.StudentsApi();

        const callback = (error, data, response) => {
            if (error) {
                console.error(error);
            } else {
                this.setState({ student: data.student });
            }
        };

        apiInstance.studentsIdGet(id, callback);
    }

    loadOccupancies(request, callback) {
        // eslint-disable-next-line
        const id = this.props.match.params.id;

        const apiInstance = new Scolendar.StudentsApi();
        apiInstance.studentsIdOccupanciesGet(id, request, callback);
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
        const paragraphs = [];

        if (this.state.student !== null) {
            let index = 0;
            paragraphs.push(<p key={index++}>L&apos;étudiant participe aux UE suivantes :</p>);

            let lis = this.state.student.subjects
                .map((subject, index) => <li key={index}>{capitalize(subject.name)}, {subject.group.toLowerCase()}</li>);

            paragraphs.push(<ul key={index++}>{lis}</ul>);

            paragraphs.push(
                <p key={index++}>
                    Le nombre total d&apos;heures d&apos;enseignement prévues cette année est {this.state.student.totalHours} heures.
                </p>
            );
        }

        console.log(this.state.student);

        return (
            <div className="teacher-student-details-container">
                <Header
                    type="Student"
                    name={this.state.student === null ? ':' : (this.state.student.firstName + ' ' + this.state.student.lastName)}
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
                                        primary={this.state.student === null ? ':' : (this.state.student.firstName + ' ' + this.state.student.lastName)}
                                        secondary="Nom" />
                                </ListItem>

                                <ListItem>
                                    <ListItemText
                                        primary={this.state.student === null ? ':' : this.state.student.username}
                                        secondary="Nom d'utilisateur"
                                        inset />
                                </ListItem>

                                <ListItem>
                                    <ListItemText
                                        primary="L3 Informatique"
                                        secondary="Classe"
                                        inset />
                                </ListItem>
                            </List>

                            <div className="teacher-student-details-infos-title">
                                Service
                            </div>

                            <div className="teacher-student-details-infos-service">
                                {paragraphs}
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

export default withRouter(StudentDetails);
