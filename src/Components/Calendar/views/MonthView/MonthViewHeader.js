import React, { Component } from "react";
import IconButton from '@material-ui/core/IconButton';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import PropTypes from 'prop-types';

import './MonthViewHeader.css';

class MonthViewHeader extends Component {
    render() {
        let jsDate = new Date(this.props.selectedDate.yearNumber, this.props.selectedDate.monthNumber, this.props.selectedDate.dayNumber);

        return (
            <div className="month-view-header">
                <IconButton aria-label="chevron-left" onClick={this.props.onPrevMonth}>
                    <ChevronLeft />
                </IconButton>

                <div className="middle-column">
                    <div className="month-name">{jsDate.toLocaleString('default', { month: 'long' })}</div>
                    <div className="year">{this.props.selectedDate.yearNumber}</div>
                </div>

                <IconButton aria-label="chevron-right" onClick={this.props.onNextMonth}>
                    <ChevronRight />
                </IconButton>
            </div>
        );
    }
}

MonthViewHeader.propTypes = {
    selectedDate: PropTypes.object,
    onNextMonth: PropTypes.func,
    onPrevMonth: PropTypes.func,
};

export default MonthViewHeader;
