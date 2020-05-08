import React, { Component } from "react";

import { getUser } from '../auth.js';

export default class Classrooms extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const user = getUser();

        return (
            <div>
                <p>TODO: classrooms</p>
            </div>
        );
    }
}
