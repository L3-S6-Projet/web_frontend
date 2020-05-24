import React, {Component} from "react";
import {withRouter} from 'react-router-dom';
import Header from '../Header.js';
import Calendar from '../../Components/Calendar/Calendar.js';
import CalendarDatePicker from '../../Components/Calendar/DatePicker/CalendarDatePicker.js';
import SelectedDate from "../../Components/Calendar/SelectedDate.js";
import Scolendar from '../../scolendar/src';
import {getUser} from '../../auth.js';

import '../Details.css';
import SubjectsForStudentsDetails from "../StudentsView/SubjectsForStudentsDetails";
import AppBar from './AppBar.js'


class SubjectDetails extends Component {
    constructor(props) {
        super(props);
        this.loadOccupancies = this.loadOccupancies.bind(this);
        this.state = {
            selectedDate: SelectedDate.today(),
            view: 'day',
            subject: null,
        };
        this.onSelectDay = this.onSelectDay.bind(this);
    }

    componentDidMount() {
        this.loadSubject();
    }

    loadSubject() {
        // eslint-disable-next-line
        const id = this.props.match.params.id;

        const defaultClient = Scolendar.ApiClient.instance;

        const token = defaultClient.authentications['token'];
        token.apiKey = getUser().token;
        token.apiKeyPrefix = 'Bearer';

        const apiInstance = new Scolendar.SubjectsApi();

        const callback = (error, data, response) => {
            if (error) {
                console.error(error);
            } else {
                this.setState({ subject: data.subject });
            }
        };
        apiInstance.subjectsIdGet(id, callback);
    }

    loadOccupancies(request, callback) {
        // eslint-disable-next-line
        const id = this.props.match.params.id;

        const apiInstance = new Scolendar.SubjectsApi();
        apiInstance.subjectsIdOccupanciesGet(id, request, callback);
    }

    onSelectDay(day) {
        const selectedDate = new SelectedDate(
            day.dayNumber,
            day.monthNumber,
            day.yearNumber
        );

        this.setState({ selectedDate });
    }

    userKindAsString(user) {
        if (user.user.kind == 'ADM')
            return 'Administrateur';
        else if (user.user.kind == 'TEA')
            return 'Professeur';

        return 'Étudiant';
    }


    render() {
        const user = getUser();
        if (this.userKindAsString(user) === 'Administrateur') {
            return (
                <div className="teacher-student-details-container">
                    <Header
                        type="Subject"
                        name={this.state.subject === null ? ':' : (this.state.subject.name)}
                        view={this.state.view}
                        onChangeView={view => this.setState({view})}/>

                    <div className="teacher-student-details">
                        <div className="left">
                            <div className="teacher-student-details-infos">
                                <AppBar name = {this.state.subject === null ? ':' : (this.state.subject.name)}
                                        classe = {this.state.subject === null ? ':' : (this.state.subject.className)}
                                        time = {this.state.subject === null ? ':' : (this.state.subject.totalHours)}
                                        teachersFirstName = {this.state.subject === null ? ':' : (this.state.subject.teachers[0].firstName)}
                                        teachersLastName = {this.state.subject === null ? ':' : (this.state.subject.teachers[0].lastName)}
                                        groupName = {this.state.subject === null ? ':' : (this.state.subject.groups[0].name)}
                                        groupCount= {this.state.subject === null ? ':' : (this.state.subject.groups[0].count)}
                                />
                            </div>

                            <div className="teacher-student-details-calendar-picker">
                                <CalendarDatePicker
                                    selectedDate={this.state.selectedDate}
                                    onPrevMonth={() => this.setState({selectedDate: this.state.selectedDate.previousMonth()})}
                                    onNextMonth={() => this.setState({selectedDate: this.state.selectedDate.nextMonth()})}
                                    onSelectDay={this.onSelectDay}
                                    view={this.state.view}/>
                            </div>
                        </div>


                        <div className="right">
                            <Calendar
                                loadOccupancies={this.loadOccupancies}
                                showHeader={false}
                                view={this.state.view}
                                setView={null}
                                selectedDate={this.state.selectedDate}/>
                        </div>
                    </div>
                </div>
            );
        } else if (this.userKindAsString(user) === 'Étudiant') {
            return (
                <div className="teacher-student-details-container">
                    <Header
                        type="Subject"
                        name={this.state.subject === null ? ':' : (this.state.subject.name)}
                        view={this.state.view}
                        onChangeView={view => this.setState({view})}/>

                    <div className="teacher-student-details">
                        <SubjectsForStudentsDetails />
                    </div>
                </div>
            )

        }
    }

}

export default withRouter(SubjectDetails);
