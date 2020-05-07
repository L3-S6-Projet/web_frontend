import React, { Component } from "react";
import { useParams, withRouter } from "react-router-dom";

import { getUser } from '../auth.js';

class Teacher extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        // eslint-disable-next-line
        const id = this.props.match.params.id;

        return (
            <div>
                <pre>{id}</pre>
            </div>
        );
    }
}

export default withRouter(Teacher);
