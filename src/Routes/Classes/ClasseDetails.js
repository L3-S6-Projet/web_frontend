import React, {Component} from "react";
import {withRouter} from "react-router-dom";

class ClasseDetails extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        // eslint-disable-next-line
        const id = this.props.match.params.id;

        return (
            <div>
                <pre>TODO : CLASSE {id}</pre>
            </div>
        );
    }
}

export default withRouter(ClasseDetails);
