import React, { Component } from "react";
import IconButton from '@material-ui/core/IconButton';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import PropTypes from 'prop-types';

import './WeekViewHeader.css';

// https://stackoverflow.com/a/6117889/6262617
function getWeekNumber(d) {
    // Copy date so don't modify original
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    // Set to nearest Thursday: current date + 4 - current day number
    // Make Sunday's day number 7
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
    // Get first day of year
    var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    // Calculate full weeks to nearest Thursday
    var weekNo = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
    // Return array of year and week number
    return weekNo;
}

class WeekViewHeader extends Component {
    render() {
        let jsDate = new Date(this.props.selectedDate.yearNumber, this.props.selectedDate.monthNumber, this.props.selectedDate.dayNumber);

        return (
            <div className="month-view-header">
                <IconButton aria-label="chevron-left" onClick={this.props.onPrevWeek}>
                    <ChevronLeft />
                </IconButton>

                <div className="middle-column">
                    <div className="month-name">Semaine n°{getWeekNumber(jsDate)}</div>
                    <div className="year">{jsDate.toLocaleString('default', { month: 'long' })} {this.props.selectedDate.yearNumber}</div>
                </div>

                <IconButton aria-label="chevron-right" onClick={this.props.onNextWeek}>
                    <ChevronRight />
                </IconButton>
            </div>
        );
    }
}

WeekViewHeader.propTypes = {
    selectedDate: PropTypes.object,
    onNextWeek: PropTypes.func,
    onPrevWeek: PropTypes.func,
};

export default WeekViewHeader;
