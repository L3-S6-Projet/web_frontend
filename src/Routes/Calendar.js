import React, { Component } from "react";

import { getUser } from '../auth.js';
import CalendarWidget from '../Components/Calendar/Calendar.js';

import './Calendar.css';

export default class Calendar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const user = getUser();

        return (
            <div className="calendar-widget">
                <CalendarWidget />
            </div>
        );
    }
}
