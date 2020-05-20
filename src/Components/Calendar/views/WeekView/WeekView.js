import React, { Component } from "react";
import PropTypes from 'prop-types';

import './WeekView.css';
import { getFormattedDate } from '../../formatted-date.js';
import { buildPartition } from '../../partition.js';
import debounce from '../../../../Utils/debounce-description.js';
import FrontColumn from '../FrontColumn.js';

const DAYS = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];

class WeekView extends Component {
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
        let week = this.props.selectedDate.week();
        let paddingLeft = 64 + 2; // 2 for borders

        const columns = week.map((value, index) => {
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

            if (this.frontEvents.current === null)
                return <div key={index}></div>;
            else
                return <FrontColumn
                    key={index}
                    occupancies={dayOccupancies}
                    partition={dayPartition}
                    onSelect={this.props.onSelect}
                    containerWidth={(this.frontEvents.current.clientWidth - paddingLeft) / 7}
                    containerHeight={this.frontEvents.current.clientHeight} />;
        });

        const today = new Date();

        return (
            <div className="week-view">
                <div className="days">
                    <div className="days-spacer"></div>
                    {DAYS.map((value, index) => <div key={index} className="day">{value}</div>)}
                </div>

                <div className="week-view-day-numbers">
                    <div className="week-view-day-numbers-spacer"></div>
                    {week.map((value, index) => {
                        const selected = value.dayNumber == today.getDate() && value.monthNumber == today.getMonth() && value.yearNumber == today.getFullYear()
                        const className = 'day' + ((selected) ? ' selected' : '');
                        return <div key={index} className={className}><div>{value.dayNumber}</div></div>;
                    })}
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
                        {columns}
                    </div>
                </div>
            </div>
        );
    }
}

WeekView.propTypes = {
    onSelect: PropTypes.func,
    occupancies: PropTypes.object,
    selectedDate: PropTypes.object,
    showHeader: PropTypes.bool,
}

export default WeekView;
