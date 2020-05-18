import React, { Component } from "react";

import { capitalize } from '../../../Utils/capitalize.js';
import PropTypes from 'prop-types';
import './DetailedEvent.css';
import { getWeekDay } from '../../../Utils/week-day.js';

// TODO: merge CSS with SmallEvent

class DetailedEvent extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.ref = React.createRef();
    }

    componentWillUnmount() {
        // TODO: REMOVE THE OPENED DIALOG ON DOM REMOVE
    }

    onClick() {
        let start = new Date(this.props.event.start * 1000);
        let end = new Date(this.props.event.end * 1000);

        function pad(i) {
            if (i < 10) {
                i = "0" + i;
            }

            return i;
        }

        let firstPart = start.toLocaleDateString('default', {
            weekday: 'long',
            month: 'long',
            day: 'numeric'
        });

        let startHour = pad(start.getHours()) + ':' + pad(start.getMinutes());
        let endHour = pad(end.getHours()) + ':' + pad(end.getMinutes());

        // 'Lundi, 30 Avril • 08:00 - 09:45'

        this.props.onSelect({
            event: {
                name: capitalize(this.props.event.subjectName),
                date: firstPart + ' • ' + startHour + ' - ' + endHour,
                group: this.props.event.groupName || 'Toute la classe',
                class: this.props.event.className,
                professor: this.props.event.teacherName,
                classroom: this.props.event.classroomName,
            },
            element: this.ref.current,
        });
    }

    render() {
        const start = new Date(this.props.event.start * 1000);
        const end = new Date(this.props.event.end * 1000);

        let paddingTop = 8;

        // 0-6
        const day = getWeekDay(start.getDate(), start.getMonth(), start.getFullYear());

        const columnWidth = this.props.containerWidth / 7;
        const cellHeight = this.props.containerHeight / 11 - 15;

        let duration = (end.getHours() - start.getHours()) + (end.getMinutes() - start.getMinutes()) / 60;

        const styles = {
            //width: columnWidth,
            width: this.props.width,
            //left: 0, // day * columnWidth,
            left: this.props.left,
            top: paddingTop + (Math.max(start.getHours(), 8) - 8 + start.getMinutes() / 60) * cellHeight,
            height: cellHeight * duration,
        };

        return (
            <div className="detailed-event" style={styles} onClick={this.onClick} ref={this.ref}>
                <div className="detailed-event-title">{capitalize(this.props.event.subjectName)}</div>
                <div className="detailed-event-class-name">{capitalize(this.props.event.className)}</div>
            </div>
        );
    }
}

DetailedEvent.propTypes = {
    event: PropTypes.object,
    onSelect: PropTypes.func,
    containerWidth: PropTypes.number,
    containerHeight: PropTypes.number,
    width: PropTypes.number,
    left: PropTypes.number,
};

export default DetailedEvent;
