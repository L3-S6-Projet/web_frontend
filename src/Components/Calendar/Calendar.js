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

// TODO: load only needed date
// TODO: offer to select the view from the props
// TODO: offer to hide the top ribbon
// TODO: monthView selected

class Calendar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dialogEvent: null,
            dialogElement: null,
            selectedDate: SelectedDate.today(),
            view: this.props.defaultView,
        };

        this.setView = this.setView.bind(this);
        this.onSelect = this.onSelect.bind(this);
    }

    setView(view) {
        this.setState({ view });
    }

    onSelect({ event, element }) {
        this.setState({ dialogEvent: event, dialogElement: element, })
    }

    render() {
        let viewHeader;
        let view;

        let occupancies = JSON.parse(JSON.stringify(this.props.occupancies));

        // TODO: fixme
        // Fix the date by adding x hours to compensate for UTC / wrong time parsing
        if (occupancies !== null)
            for (let day of occupancies.days) {
                for (let i = 0; i < day.occupancies.length; i++) {
                    const occupancy = day.occupancies[i];
                    occupancy.start += 3600;
                    occupancy.end += 3600;
                }
            }

        if (this.state.view == 'month') {
            viewHeader = <MonthViewHeader
                selectedDate={this.state.selectedDate}
                onPrevMonth={() => this.setState({ selectedDate: this.state.selectedDate.previousMonth() })}
                onNextMonth={() => this.setState({ selectedDate: this.state.selectedDate.nextMonth() })} />;

            view = <MonthView
                onSelect={this.onSelect}
                occupancies={occupancies}
                selectedDate={this.state.selectedDate} />
        } else if (this.state.view == 'week') {
            viewHeader = <WeekViewHeader
                selectedDate={this.state.selectedDate}
                onPrevWeek={() => this.setState({ selectedDate: this.state.selectedDate.previousWeek() })}
                onNextWeek={() => this.setState({ selectedDate: this.state.selectedDate.nextWeek() })} />;

            view = <WeekView
                onSelect={this.onSelect}
                occupancies={occupancies}
                selectedDate={this.state.selectedDate} />;
        } else {
            viewHeader = <DayViewHeader
                selectedDate={this.state.selectedDate}
                onPrevDay={() => this.setState({ selectedDate: this.state.selectedDate.previousDay() })}
                onNextDay={() => this.setState({ selectedDate: this.state.selectedDate.nextDay() })} />;

            view = <DayView
                onSelect={this.onSelect}
                occupancies={occupancies}
                selectedDate={this.state.selectedDate} />;
        }

        return (
            <div className="calendar">
                <Header onToday={() => this.setState({ selectedDate: SelectedDate.today() })} view={this.state.view} onChangeView={this.setView}>
                    {viewHeader}
                </Header>

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
    occupancies: PropTypes.object,
    defaultView: PropTypes.string,
};

export default Calendar;
