import React, { Component } from "react";
import { Link } from "react-router-dom";

import { getUser } from '../auth.js';

export default class Calendar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const user = getUser();

        return (
            <div>
                <p>TODO: calendar</p>
                <Link to="/notfound">notfound</Link>
            </div>
        );
    }
}
