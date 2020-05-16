import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from 'prop-types';

import './Header.css';

class Header extends Component {
    render() {
        let { children } = this.props;

        return (
            <div className="header">
                <div className="today-button-container">
                    <Button className="today-button" onClick={this.props.onToday}>Aujourd&apos;hui</Button>
                </div>

                <div>
                    {children}
                </div>

                <div className="view-selector-container">
                    <Select value="month">
                        <MenuItem value="month">Month</MenuItem>
                        <MenuItem value="week">Week</MenuItem>
                        <MenuItem value="day">Day</MenuItem>
                    </Select>
                </div>
            </div>
        );
    }
}

Header.propTypes = {
    children: PropTypes.object,
    onToday: PropTypes.func,
}

export default Header;
