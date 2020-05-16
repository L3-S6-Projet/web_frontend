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
        let cells = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34];

        return (
            <div className="month-container">
                <div className="days">
                    {DAYS.map((value, index) => <div key={index} className="day">{value}</div>)}
                </div>

                <div className="cells" ref={this.cellsRef}>
                    {cells.map((value, index) => <Cell key={index} dayNumber={value} selected={value == 22} height={this.state.cellHeight} onSelect={this.props.onSelect} />)}
                </div>
            </div>
        );
    }
}

MonthView.propTypes = {
    onSelect: PropTypes.func,
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

        let events = [];

        for (var i = 0; i < eventsCount; i++)
            events.push(<SmallEvent key={i} onSelect={this.props.onSelect} />);

        return (
            <div className={classNames('cell', { selected: this.props.selected })} ref={this.ref}>
                <div className={classNames('cell-day-number', { selected: this.props.selected })} ref={this.headerRef}>
                    <div>{this.props.dayNumber}</div>
                </div>
                {events}
                <div className="spacer"></div>
                <a className="cell-more" href="#" ref={this.footerRef}>5 de plus</a>
            </div>
        );
    }
}

Cell.propTypes = {
    dayNumber: PropTypes.number,
    selected: PropTypes.bool,
    height: PropTypes.number,
    onSelect: PropTypes.func,
}
