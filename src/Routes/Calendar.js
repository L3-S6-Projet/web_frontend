import React, { Component } from "react";

import { getUser } from '../auth.js';
import CalendarWidget from '../Components/Calendar/Calendar.js';
import Scolendar from '../scolendar/src';

import './Calendar.css';

export default class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = { view: 'month' };
    }

    render() {
        return (
            <div className="calendar-widget">
                <CalendarWidget
                    loadOccupancies={loadOccupancies}
                    showHeader={true}
                    view={this.state.view}
                    onViewChange={view => this.setState({ view })} />
            </div>
        );
    }
}

const loadOccupancies = (request, callback) => {
    const apiInstance = new Scolendar.OccupanciesApi();
    apiInstance.occupanciesGet(request, callback);
};
