import React, { Component } from "react";

import './Calendar.css';
import Header from './Header.js';
import MonthView from './views/MonthView.js';
import MonthViewHeader from './views/MonthViewHeader.js';
import CalendarDialog from './dialog/CalendarDialog.js';

export default class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = { dialogEvent: null, dialogElement: null };
    }

    render() {
        return (
            <div className="calendar">
                <Header>
                    <MonthViewHeader />
                </Header>

                <MonthView onSelect={({ event, element }) => this.setState({ dialogEvent: event, dialogElement: element, })} />

                <CalendarDialog event={this.state.dialogEvent} element={this.state.dialogElement} close={() => this.setState({ dialogEvent: null, dialogElement: null })} />
            </div>
        );
    }
}
