import React, { Component } from "react";
import PropTypes from 'prop-types';

import './Calendar.css';
import Header from './Header.js';
import MonthView from './views/MonthView.js';
import MonthViewHeader from './views/MonthViewHeader.js';
import CalendarDialog from './dialog/CalendarDialog.js';
import selectedDate from './SelectedDate.js';
import SelectedDate from "./SelectedDate.js";

class Calendar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dialogEvent: null,
            dialogElement: null,
            selectedDate: new SelectedDate(1, 2, 2020),
        };
    }

    render() {
        return (
            <div className="calendar">
                <Header>
                    <MonthViewHeader
                        selectedDate={this.state.selectedDate}
                        onPrevMonth={() => this.setState({ selectedDate: this.state.selectedDate.previousMonth() })}
                        onNextMonth={() => this.setState({ selectedDate: this.state.selectedDate.nextMonth() })} />
                </Header>

                <MonthView
                    onSelect={({ event, element }) => this.setState({ dialogEvent: event, dialogElement: element, })}
                    occupancies={this.props.occupancies}
                    selectedDate={this.state.selectedDate} />

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
};

export default Calendar;
