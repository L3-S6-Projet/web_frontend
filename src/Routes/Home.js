import React, { Component } from "react";
import { Link } from "react-router-dom";

import { getUser } from '../auth.js';

export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const user = getUser();

        return (
            <div>
                <p>Welcome {user.user.first_name} {user.user.last_name}</p>
                <pre>{JSON.stringify(user, null, 2)}</pre>
                <Link to="/logout">Logout</Link>
            </div>
        );
    }
}
