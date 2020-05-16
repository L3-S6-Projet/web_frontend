import React, { Component } from "react";
import PropTypes from 'prop-types';

import { capitalize } from '../../../Utils/capitalize.js';

import './SmallEvent.css';

class SmallEvent extends Component {
    constructor(props) {
        super(props);
        this.ref = React.createRef();
        this.onClick = this.onClick.bind(this);
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
        return (
            <div className="small-event" onClick={this.onClick} ref={this.ref}>
                <div className="small-event-title">{capitalize(this.props.event.subjectName)}</div>
                <div className="small-event-class-name">{capitalize(this.props.event.className)}</div>
            </div>
        );
    }
}

SmallEvent.propTypes = {
    onSelect: PropTypes.func,
    event: PropTypes.object,
};

export default SmallEvent;
