import React, { Component } from "react";
import PropTypes from 'prop-types';

import './WeekView.css';
import DetailedEvent from '../../events/DetailedEvent.js';
import { getFormattedDate } from '../../formatted-date.js';
import { buildPartition } from '../../partition.js';
import debounce from '../../../../Utils/debounce-description.js';

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
                    containerWidth={this.frontEvents.current.clientWidth}
                    containerHeight={this.frontEvents.current.clientHeight} />;
        });

        return (
            <div className="week-view">
                <div className="days">
                    <div className="days-spacer"></div>
                    {DAYS.map((value, index) => <div key={index} className="day">{value}</div>)}
                </div>

                <div className="week-view-day-numbers">
                    <div className="week-view-day-numbers-spacer"></div>
                    {week.map((value, index) => <div key={index} className="day">{value.dayNumber}</div>)}
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
}

export default WeekView;

class FrontColumn extends Component {
    render() {
        let paddingLeft = 64 + 2; // 2 for borders

        // Use this to debug a particular day
        /*if (occupancies.length > 0 && new Date(occupancies[0].start * 1000).getDate() == 5) {
            console.log(widths);
        } else {
            return <div className="week-view-front-column"></div>;
        }*/

        const fullColumnWidth = (this.props.containerWidth - paddingLeft) / 7;

        const events = this.props.occupancies.map((event, index) => {
            const column = this.props.partition.parts[event.id] - 1;
            let columnWidth = fullColumnWidth / this.props.partition.widths[event.id];

            return <DetailedEvent
                key={index}
                event={event}
                width={columnWidth}
                left={column * columnWidth}
                onSelect={this.props.onSelect}
                containerWidth={this.props.containerWidth}
                containerHeight={this.props.containerHeight} />;
        });

        return (<div className="week-view-front-column">{events}</div>);
    }
}

FrontColumn.propTypes = {
    partition: PropTypes.object,
    onSelect: PropTypes.func,
    occupancies: PropTypes.array,
    containerWidth: PropTypes.number,
    containerHeight: PropTypes.number,
}
