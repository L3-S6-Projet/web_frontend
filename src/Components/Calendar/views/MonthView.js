import React, { Component } from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames';

const DAYS = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];

import './MonthView.css';
import SmallEvent from '../events/SmallEvent.js';

class MonthView extends Component {
    constructor(props) {
        super(props);
        this.cellsRef = React.createRef();
        this.state = { cellHeight: 0 };
    }

    updateCellHeight() {
        this.setState({
            cellHeight: this.cellsRef.current.clientHeight / 5
        });
    }

    componentDidMount() {
        this.updateCellHeight();
        window.addEventListener('resize', this.updateCellHeight.bind(this), {
            capture: false,
            passive: true,
        });
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateCellHeight.bind(this), {
            capture: false,
            passive: true,
        });
    }

    render() {
        // TODO: avoid recomputing this as much
        let cells = this.props.selectedDate.days();

        function getFormattedDate(date) {
            let year = date.getFullYear();
            let month = (1 + date.getMonth()).toString().padStart(2, '0');
            let day = date.getDate().toString().padStart(2, '0');

            return day + '-' + month + '-' + year;
        }

        let today = new Date();

        return (
            <div className="month-container">
                <div className="days">
                    {DAYS.map((value, index) => <div key={index} className="day">{value}</div>)}
                </div>

                <div className="cells" ref={this.cellsRef}>
                    {cells.map((value, index) => {
                        const key = getFormattedDate(new Date(value.yearNumber, value.monthNumber, value.dayNumber));

                        let dayOccupancies = null;

                        if (this.props.occupancies !== null) {
                            let day = this.props.occupancies.days.find(e => e._date == key);

                            if (typeof day !== 'undefined' && day !== null)
                                dayOccupancies = day.occupancies;
                        }

                        return <Cell
                            key={index}
                            date={value}
                            selected={value.dayNumber == today.getDate() && value.monthNumber == today.getMonth() && value.yearNumber == today.getFullYear()}
                            height={this.state.cellHeight}
                            onSelect={this.props.onSelect}
                            occupancies={dayOccupancies} />;
                    })}
                </div>
            </div>
        );
    }
}

MonthView.propTypes = {
    onSelect: PropTypes.func,
    occupancies: PropTypes.object,
    selectedDate: PropTypes.object,
}

export default MonthView;

class Cell extends Component {
    constructor(props) {
        super(props);
        this.ref = React.createRef();
        this.headerRef = React.createRef();
        this.footerRef = React.createRef();
    }

    render() {
        const eventHeight = 55;
        const padding = 8 + 12 + ((this.props.selected) ? -6 : 0);
        const headerSize = (this.headerRef.current !== null) ? this.headerRef.current.clientHeight : Number.MAX_VALUE;
        const footerSize = (this.footerRef.current !== null) ? this.footerRef.current.clientHeight : Number.MAX_VALUE;

        const height = this.props.height;
        const availableHeight = height - padding - headerSize - footerSize;
        const eventsCount = Math.floor(availableHeight / eventHeight);

        const events = (this.props.occupancies || [])
            .slice(0, eventsCount)
            .map((event, index) => <SmallEvent key={index} onSelect={this.props.onSelect} event={event} />);

        const more = (this.props.occupancies || []).length - eventsCount + 1;

        return (
            <div className={classNames('cell', { selected: this.props.selected })} ref={this.ref}>
                <div className={classNames('cell-day-number', { selected: this.props.selected })} ref={this.headerRef}>
                    <div>{this.props.date.dayNumber}</div>
                </div>
                {events}
                <div className="spacer"></div>
                <a className="cell-more" href="#" ref={this.footerRef}>{more} de plus</a>
            </div>
        );
    }
}

Cell.propTypes = {
    date: PropTypes.object,
    selected: PropTypes.bool,
    height: PropTypes.number,
    onSelect: PropTypes.func,
    occupancies: PropTypes.object,
}
