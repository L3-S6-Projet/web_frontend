import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import { getUser } from '../auth.js';

import { logout } from '../auth.js';

export default class Logout extends Component {
    render() {
        logout();
        return <Redirect
            to={{
                pathname: "/login"
            }}
        />;
    }
}
