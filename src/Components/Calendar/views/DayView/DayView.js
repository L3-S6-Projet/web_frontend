import React, { Component } from "react";
import PropTypes from 'prop-types';

import '../WeekView/WeekView.css';
import { getFormattedDate } from '../../formatted-date.js';
import { buildPartition } from '../../partition.js';
import debounce from '../../../../Utils/debounce-description.js';
import FrontColumn from '../FrontColumn.js';

class DayView extends Component {
    constructor(props) {
        super(props);
        this.frontEvents = React.createRef();

        this.updateDimensions = debounce(this.updateDimensions.bind(this), 100, false);
    }

    updateDimensions() {
        if (this.frontEvents.current !== null)
            this.forceUpdate();
    }

    componentDidMount() {
        this.updateDimensions();

        window.addEventListener('resize', this.updateDimensions.bind(this), {
            capture: false,
            passive: true,
        });
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions.bind(this), {
            capture: false,
            passive: true,
        });
    }


    render() {
        let paddingLeft = 64 + 2; // 2 for borders

        // TODO
        let jsDate = new Date(this.props.selectedDate.yearNumber, this.props.selectedDate.monthNumber, this.props.selectedDate.dayNumber);

        const value = this.props.selectedDate;
        const key = getFormattedDate(new Date(value.yearNumber, value.monthNumber, value.dayNumber));

        let dayOccupancies = [];

        let dayPartition = null;

        if (this.props.occupancies !== null) {
            let day = this.props.occupancies.days.find(e => e._date == key);

            if (typeof day !== 'undefined' && day !== null) {
                dayOccupancies = day.occupancies;

                // Cache the partition
                if (!day.hasOwnProperty('partition'))
                    day.partition = buildPartition(day.occupancies);

                dayPartition = day.partition;
            }
        }

        let column;

        if (this.frontEvents.current === null)
            column = <div></div>;
        else
            column = <FrontColumn
                occupancies={dayOccupancies}
                partition={dayPartition}
                onSelect={this.props.onSelect}
                containerWidth={this.frontEvents.current.clientWidth - paddingLeft} // TODO
                containerHeight={this.frontEvents.current.clientHeight} />;

        const today = new Date();
        const selected = this.props.selectedDate.dayNumber == today.getDate() && this.props.selectedDate.monthNumber == today.getMonth() && this.props.selectedDate.yearNumber == today.getFullYear()
        const dayClassName = 'day' + ((selected) ? ' selected' : '');

        return (
            <div className="week-view">
                <div className="days left">
                    <div className="days-spacer"></div>
                    <div className="day">{jsDate.toLocaleString('default', { weekday: 'long' })}</div>
                </div>

                <div className="week-view-day-numbers left">
                    <div className="week-view-day-numbers-spacer"></div>
                    <div className={dayClassName}><div>{this.props.selectedDate.dayNumber}</div></div>
                </div>

                {/* TODO: selected day number */}

                <div className="week-view-week">
                    <div className="back">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className="front" ref={this.frontEvents}>
                        <div className="week-view-week-colum">
                            <div>08:00</div>
                            <div>09:00</div>
                            <div>10:00</div>
                            <div>11:00</div>
                            <div>12:00</div>
                            <div>13:00</div>
                            <div>14:00</div>
                            <div>15:00</div>
                            <div>16:00</div>
                            <div>17:00</div>
                            <div>18:00</div>
                            <div>19:00</div>
                        </div>
                        {column}
                    </div>
                </div>
            </div>
        );
    }
}

DayView.propTypes = {
    onSelect: PropTypes.func,
    occupancies: PropTypes.object,
    selectedDate: PropTypes.object,
}

export default DayView;
