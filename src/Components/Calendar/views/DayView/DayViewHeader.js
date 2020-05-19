import React, { Component } from "react";
import IconButton from '@material-ui/core/IconButton';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import PropTypes from 'prop-types';

import '../WeekView/WeekViewHeader.css';

class DayViewHeader extends Component {
    render() {
        let jsDate = new Date(this.props.selectedDate.yearNumber, this.props.selectedDate.monthNumber, this.props.selectedDate.dayNumber);

        return (
            <div className="month-view-header">
                <IconButton aria-label="chevron-left" onClick={this.props.onPrevDay}>
                    <ChevronLeft />
                </IconButton>

                <div className="middle-column">
                    <div className="month-name">{jsDate.toLocaleString('default', { weekday: 'long', day: 'numeric' })}</div>
                    <div className="year">{jsDate.toLocaleString('default', { month: 'long' })} {this.props.selectedDate.yearNumber}</div>
                </div>

                <IconButton aria-label="chevron-right" onClick={this.props.onNextDay}>
                    <ChevronRight />
                </IconButton>
            </div>
        );
    }
}

DayViewHeader.propTypes = {
    selectedDate: PropTypes.object,
    onNextDay: PropTypes.func,
    onPrevDay: PropTypes.func,
};

export default DayViewHeader;
