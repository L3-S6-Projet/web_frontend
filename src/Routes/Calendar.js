import React, { Component } from "react";

import { getUser } from '../auth.js';
import CalendarWidget from '../Components/Calendar/Calendar.js';
import Scolendar from '../scolendar/src';

import './Calendar.css';

export default class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = { occupancies: null };
    }

    componentDidMount() {
        this.loadData();
    }

    loadData() {
        // TODO: only load needed data

        const defaultClient = Scolendar.ApiClient.instance;

        const token = defaultClient.authentications['token'];
        token.apiKey = getUser().token;
        token.apiKeyPrefix = 'Bearer';

        const apiInstance = new Scolendar.OccupanciesApi();

        const opts = {};

        const callback = (error, data, response) => {
            if (error) {
                // TODO: handle error
                console.error(error);
            } else {
                this.setState({ occupancies: data });
            }
        };
        apiInstance.occupanciesGet(opts, callback);
    }

    render() {
        return (
            <div className="calendar-widget">
                <CalendarWidget
                    occupancies={this.state.occupancies}
                    defaultView='week' />
            </div>
        );
    }
}
