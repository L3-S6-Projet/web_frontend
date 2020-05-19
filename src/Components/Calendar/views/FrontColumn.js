import React, { Component } from 'react';
import PropTypes from 'prop-types';

import DetailedEvent from '../events/DetailedEvent.js';

import './FrontColumn.css';

class FrontColumn extends Component {
    render() {
        let paddingLeft = 64 + 2; // 2 for borders

        // Use this to debug a particular day
        /*if (occupancies.length > 0 && new Date(occupancies[0].start * 1000).getDate() == 5) {
            console.log(widths);
        } else {
            return <div className="week-view-front-column"></div>;
        }*/

        const events = this.props.occupancies.map((event, index) => {
            const column = this.props.partition.parts[event.id] - 1;
            let columnWidth = this.props.containerWidth / this.props.partition.widths[event.id];

            return <DetailedEvent
                key={index}
                event={event}
                width={columnWidth}
                left={column * columnWidth}
                onSelect={this.props.onSelect}
                containerWidth={this.props.containerWidth}
                containerHeight={this.props.containerHeight} />;
        });

        return (<div className="week-view-front-column">{events}</div>);
    }
}

FrontColumn.propTypes = {
    partition: PropTypes.object,
    onSelect: PropTypes.func,
    occupancies: PropTypes.array,
    containerWidth: PropTypes.number,
    containerHeight: PropTypes.number,
}

export default FrontColumn;
