import React, {Component} from "react";
import {withRouter} from 'react-router-dom'
import PropTypes from 'prop-types'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import {ArrowBack} from "@material-ui/icons";

class Header extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        event.preventDefault()
        this.props.history.goBack()
    }

    render() {
        let type;

        if(this.props.type === "Teacher")
            type = (
                <div id="notseleted-header">
                    <div id="title-teacher">Enseignant(e) " "</div>
                </div>
            )
        else type = (
            <div id="notseleted-header">
                <div id="title-student">Étudiant(e) " "</div>
            </div>
        )


        return (
            <div className="header">
                <div className="today-button-container">
                    <ArrowBack onClick={this.handleClick}/>
                </div>

                <div>
                    {type}
                </div>

                <div className="view-selector-container">
                    <Select value={this.props.view} onChange={(e) => this.props.onChangeView(e.target.value)}>
                        <MenuItem value="month">Month</MenuItem>
                        <MenuItem value="week">Week</MenuItem>
                        <MenuItem value="day">Day</MenuItem>
                    </Select>
                </div>
            </div>
        );
    }
}


const { string, object } = PropTypes
Header.propTypes = {
    type: PropTypes.object,
    onToday: PropTypes.func,
    view: PropTypes.string,
    onChangeView: PropTypes.func,
    title: string.isRequired,
    history: object
}

export default withRouter(Header)
