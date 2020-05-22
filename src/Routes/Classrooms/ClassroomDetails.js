import React, {Component} from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import {AccountCircle} from "@material-ui/icons";
import {withRouter} from 'react-router-dom';

import Header from '../Header.js';
import Calendar from '../../Components/Calendar/Calendar.js';
import CalendarDatePicker from '../../Components/Calendar/DatePicker/CalendarDatePicker.js';
import SelectedDate from "../../Components/Calendar/SelectedDate.js";
import Scolendar from '../../scolendar/src';
import {getUser} from '../../auth.js';

import '../Details.css';

class ClassroomDetails extends Component {
    constructor(props) {
        super(props);
        this.loadOccupancies = this.loadOccupancies.bind(this);

        this.state = {
            selectedDate: SelectedDate.today(),
            view: 'day',
            classroom: null,
        };

        this.onSelectDay = this.onSelectDay.bind(this);
    }

    componentDidMount() {
        this.loadClassroom();
    }

    loadClassroom() {
        // eslint-disable-next-line
        const id = this.props.match.params.id;

        const defaultClient = Scolendar.ApiClient.instance;

        const token = defaultClient.authentications['token'];
        token.apiKey = getUser().token;
        token.apiKeyPrefix = 'Bearer';

        const apiInstance = new Scolendar.ClassroomApi();

        const callback = (error, data, response) => {
            if (error) {
                console.error(error);
            } else {
                this.setState({ classroom: data.classroom });
            }
        };
        apiInstance.classroomsIdGet(id, callback);
    }

    loadOccupancies(request, callback) {
        // eslint-disable-next-line
        const id = this.props.match.params.id;

        const apiInstance = new Scolendar.ClassroomApi();
        apiInstance.classroomsIdOccupanciesGet(id, request, callback);
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

        return (
            <div className="teacher-student-details-container">
                <Header
                    type="Classroom"
                    name={this.state.classroom === null ? ':' : (this.state.classroom.name)}
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
                                        primary={this.state.classroom=== null ? ':' : (this.state.classroom.name)}
                                        secondary="Nom" />
                                </ListItem>

                                <ListItem>
                                    <ListItemText
                                        primary={this.state.classroom === null ? ':' : this.state.classroom.capacity}
                                        secondary="Capacité"
                                        inset />
                                </ListItem>

                            </List>
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

export default withRouter(ClassroomDetails);
