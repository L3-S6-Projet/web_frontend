import React, { Component } from "react";
import PropTypes from 'prop-types';

import './Calendar.css';
import Header from './Header.js';
import MonthView from './views/MonthView/MonthView.js';
import MonthViewHeader from './views/MonthView/MonthViewHeader.js';
import WeekView from './views/WeekView/WeekView.js';
import WeekViewHeader from './views/WeekView/WeekViewHeader.js';
import DayView from './views/DayView/DayView.js';
import DayViewHeader from './views/DayView/DayViewHeader.js';
import CalendarDialog from './dialog/CalendarDialog.js';
import SelectedDate from "./SelectedDate.js";
import Scolendar from '../../scolendar/src';
import { getUser } from '../../auth.js';

// TODO: load only needed date
// TODO: offer to select the view from the props
// TODO: offer to hide the top ribbon

class Calendar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dialogEvent: null,
            dialogElement: null,
            selectedDate: SelectedDate.today(),
            occupancies: null,
        };

        this.onSelect = this.onSelect.bind(this);
    }

    componentDidMount() {
        const defaultClient = Scolendar.ApiClient.instance;

        const token = defaultClient.authentications['token'];
        token.apiKey = getUser().token;
        token.apiKeyPrefix = 'Bearer';

        const callback = (error, data, response) => {
            if (error) {
                // TODO: handle error
                console.error(error);
            } else {
                // TODO: fixme, maybe use Date.fromUTC ?
                // Fix the date by adding x hours to compensate for UTC / wrong time parsing
                for (let day of data.days) {
                    for (let i = 0; i < day.occupancies.length; i++) {
                        const occupancy = day.occupancies[i];
                        occupancy.start += 3600;
                        occupancy.end += 3600;
                    }
                }

                this.setState({ occupancies: data });
            }
        };

        /*
        var opts = { 
            'start': 56, // Integer | Start timestamp of the occupancies
            'end': 56, // Integer | End timestamp of the occupancies
            'occupanciesPerDay': 56 // Integer | Pass 0 to return ALL the events.
        };
        */

        const request = {};

        this.props.loadOccupancies(request, callback);
    }

    onSelect({ event, element }) {
        this.setState({ dialogEvent: event, dialogElement: element, })
    }

    render() {
        let viewHeader;
        let view;

        let selectedDate = (this.props.showHeader) ?
            this.state.selectedDate :
            this.props.selectedDate;

        if (this.props.view == 'month') {
            viewHeader = <MonthViewHeader
                selectedDate={this.state.selectedDate}
                onPrevMonth={() => this.setState({ selectedDate: this.state.selectedDate.previousMonth() })}
                onNextMonth={() => this.setState({ selectedDate: this.state.selectedDate.nextMonth() })} />;

            view = <MonthView
                onSelect={this.onSelect}
                occupancies={this.state.occupancies}
                selectedDate={selectedDate}
                showHeader={this.props.showHeader} />
        } else if (this.props.view == 'week') {
            viewHeader = <WeekViewHeader
                selectedDate={this.state.selectedDate}
                onPrevWeek={() => this.setState({ selectedDate: this.state.selectedDate.previousWeek() })}
                onNextWeek={() => this.setState({ selectedDate: this.state.selectedDate.nextWeek() })} />;

            view = <WeekView
                onSelect={this.onSelect}
                occupancies={this.state.occupancies}
                selectedDate={selectedDate}
                showHeader={this.props.showHeader} />;
        } else {
            viewHeader = <DayViewHeader
                selectedDate={this.state.selectedDate}
                onPrevDay={() => this.setState({ selectedDate: this.state.selectedDate.previousDay() })}
                onNextDay={() => this.setState({ selectedDate: this.state.selectedDate.nextDay() })} />;

            view = <DayView
                onSelect={this.onSelect}
                occupancies={this.state.occupancies}
                selectedDate={selectedDate}
                showHeader={this.props.showHeader} />;
        }

        let header;

        if (this.props.showHeader)
            header = (
                <Header
                    onToday={() => this.setState({ selectedDate: SelectedDate.today() })}
                    view={this.props.view}
                    onChangeView={this.props.onViewChange}>
                    {viewHeader}
                </Header>
            );

        return (
            <div className="calendar">
                {header}

                {view}

                <CalendarDialog
                    event={this.state.dialogEvent}
                    element={this.state.dialogElement}
                    close={() => this.setState({ dialogEvent: null, dialogElement: null })} />
            </div>
        );
    }
}

Calendar.propTypes = {
    loadOccupancies: PropTypes.func,
    showHeader: PropTypes.bool,
    view: PropTypes.string,
    onViewChange: PropTypes.func,
    selectedDate: PropTypes.object,
    onSelectedDateChange: PropTypes.func, // TODO: on click (not header)
};

export default Calendar;
