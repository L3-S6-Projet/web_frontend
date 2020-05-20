import PropTypes from 'prop-types';
import React, { Component } from "react";
import IconButton from '@material-ui/core/IconButton';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import SelectedDate from '../SelectedDate.js';

import './CalendarDatePicker.css';

class CalendarDatePicker extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const columns = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
            .map((day, index) => {
                return (
                    <div key={index} className="calendar-date-picker-column-header calendar-date-picker-cell">
                        {day}
                    </div>
                );
            });

        const today = SelectedDate.today();

        const days = this.props.selectedDate.days()
            .map((day, index) => {
                //const isSelected = this.props.selectedDate.equals(day);

                let dayWeek = (new SelectedDate(day.dayNumber, day.monthNumber, day.yearNumber)).week();

                let isSelected;

                if (this.props.view === 'day')
                    isSelected = this.props.selectedDate.equals(day);
                else if (this.props.view === 'week')
                    isSelected = dayWeek.some(x => this.props.selectedDate.equals(x));
                else if (this.props.view === 'month')
                    isSelected = false;

                const isToday = today.equals(day);

                let className = 'calendar-date-picker-cell calendar-date-picker-cell-day';

                if (isSelected)
                    className += ' selected';

                if (isToday)
                    className += ' today';

                return (
                    <div key={index} className={className} onClick={() => this.props.onSelectDay(day)}>
                        <div>{day.dayNumber}</div>
                    </div>
                );
            });

        let jsDate = new Date(this.props.selectedDate.yearNumber, this.props.selectedDate.monthNumber, this.props.selectedDate.dayNumber);

        return (
            <div className="calendar-date-picker">
                <div className="calendar-date-picker-controls">
                    <div className="calendar-date-picker-date">
                        {jsDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
                    </div>

                    <div className="spacer"></div>

                    <IconButton aria-label="chevron-left" size='small' onClick={this.props.onPrevMonth}>
                        <ChevronLeft />
                    </IconButton>

                    <IconButton aria-label="chevron-right" size='small' onClick={this.props.onNextMonth}>
                        <ChevronRight />
                    </IconButton>
                </div>

                <div className="calendar-date-picker-days">
                    {columns}
                    {days}
                </div>
            </div>
        );
    }
}

CalendarDatePicker.propTypes = {
    onPrevMonth: PropTypes.func,
    onNextMonth: PropTypes.func,
    selectedDate: PropTypes.object,
    onSelectDay: PropTypes.func,
    view: PropTypes.string,
};

export default CalendarDatePicker;
