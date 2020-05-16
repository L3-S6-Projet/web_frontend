import React, { Component } from "react";
import IconButton from '@material-ui/core/IconButton';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';

import './MonthViewHeader.css';

export default class MonthViewHeader extends Component {
    render() {
        return (
            <div className="month-view-header">
                <IconButton aria-label="chevron-left">
                    <ChevronLeft />
                </IconButton>

                <div className="middle-column">
                    <div className="month-name">Avril</div>
                    <div className="year">2020</div>
                </div>

                <IconButton aria-label="chevron-right">
                    <ChevronRight />
                </IconButton>
            </div>
        );
    }
}
