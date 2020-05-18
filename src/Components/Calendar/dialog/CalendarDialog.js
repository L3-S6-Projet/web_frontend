import React, { Component } from "react";
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import Close from '@material-ui/icons/Close';
import SupervisorAccount from '@material-ui/icons/SupervisorAccount';
import List from '@material-ui/icons/List';
import AcountCircle from '@material-ui/icons/AccountCircle';
import LocationOn from '@material-ui/icons/LocationOn';

import './CalendarDialog.css';

var lastPosition = { left: 0, top: 0 };

class CalendarDialog extends Component {
    constructor(props) {
        super(props);
        this.updateWindowWidth = this.updateWindowWidth.bind(this);
    }

    isOpen() {
        return this.props.event !== null;
    }

    updateWindowWidth() {
        if (this.isOpen())
            this.forceUpdate();
    }

    installResizeListener() {
        this.updateWindowWidth();

        window.addEventListener('resize', this.updateWindowWidth, {
            capture: false,
            passive: true,
        });
    }

    uninstallResizeListener() {
        window.removeEventListener('resize', this.updateWindowWidth, {
            capture: false,
            passive: true,
        });
    }

    componentDidMount() {
        this.installResizeListener();
    }

    componentWillUnmount() {
        this.uninstallResizeListener();
    }

    render() {
        console.log('render');
        let content = [];

        const lastPosition = { x: 0, top: 0 };

        // TODO: animate opening and closing

        if (this.isOpen()) {
            const { x, y, width } = this.props.element.getBoundingClientRect();

            const dialogWidth = 294; // as set in css TODO: zoom level
            const dialogHeight = 240; // TODO: not perfect
            const eventHeight = 50; // TODO: not perfect
            const paddingFromEvent = 8;

            const toTheLeft = (x + width + paddingFromEvent + dialogWidth >= window.innerWidth);
            const toTheBottom = (y + dialogHeight <= window.innerHeight);

            lastPosition.left = (toTheLeft) ?
                x - dialogWidth - paddingFromEvent :
                x + width + paddingFromEvent;

            lastPosition.top = (toTheBottom) ? y : y - dialogHeight + eventHeight;

            content = [
                <IconButton key={0} aria-label="close" onClick={this.props.close} className="calendar-dialog-header">
                    <Close />
                </IconButton>,

                <div key={1} className="calendar-dialog-front">
                    <div></div>
                    <div className="calendar-dialog-title">{this.props.event.name}</div>
                    <div></div>
                    <div className="calendar-dialog-date">{this.props.event.date}</div>

                    <SupervisorAccount className="calendar-dialog-icon" />
                    <div>{this.props.event.group}</div>

                    <List className="calendar-dialog-icon" />
                    <div>{this.props.event.class}</div>

                    <AcountCircle className="calendar-dialog-icon" />
                    <div>{this.props.event.professor}</div>

                    <LocationOn className="calendar-dialog-icon" />
                    <div>{this.props.event.classroom}</div>
                </div>
            ];
        }

        return (
            <div className={'calendar-dialog' + (this.isOpen() ? '' : ' hidden')} style={Object.freeze(lastPosition)}>
                {content}
            </div>
        );
    }
}

CalendarDialog.propTypes = {
    event: PropTypes.object,
    element: PropTypes.object,
    close: PropTypes.func,
}

export default CalendarDialog;
