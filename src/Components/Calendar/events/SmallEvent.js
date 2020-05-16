import React, { Component } from "react";
import PropTypes from 'prop-types';

import './SmallEvent.css';

class SmallEvent extends Component {
    constructor(props) {
        super(props);
        this.ref = React.createRef();
        this.onClick = this.onClick.bind(this);
    }

    componentWillUnmount() {
        // TODO: REMOVE THE OPENED DIALOG ON DOM REMOVE
    }

    onClick() {
        this.props.onSelect({
            event: {
                name: 'Algèbre et analyse',
                date: 'Lundi, 30 Avril • 08:00 - 09:45',
                group: 'Groupe 2',
                class: 'L3 MIASHS',
                professor: 'R. BARBANCHON',
                classroom: 'B.001',
            },
            element: this.ref.current,
        });
    }

    render() {
        return (
            <div className="small-event" onClick={this.onClick} ref={this.ref}>
                <div className="small-event-title">Algèbre et analyse</div>
                <div className="small-event-class-name">L3 MIASHS</div>
            </div>
        );
    }
}

SmallEvent.propTypes = {
    onSelect: PropTypes.func,
};

export default SmallEvent;
