import React, {Component} from "react";
import {withRouter} from 'react-router-dom'
import PropTypes from 'prop-types'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import {ArrowBack} from "@material-ui/icons";
import IconButton from '@material-ui/core/IconButton';
import Edit from '@material-ui/icons/Edit';

class Header extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(event) {
        event.preventDefault()
        this.props.history.goBack()
    }

    render() {
        let type;
        if (this.props.type === "Teacher")
            type = (
                <div className="notselected-header">
                    <div className="title-teacher">Enseignant(e) &quot;{this.props.name}&quot;</div>
                </div>
            )
        else if (this.props.type === "Student")
            type = (
            <div className="notselected-header">
                <div className="title-teacher">Étudiant(e) &quot;{this.props.name}&quot;</div>
            </div>
        )
        else if (this.props.type === "Classroom")
            type = (
                <div className="notselected-header">
                    <div className="title-teacher">Salle &quot;{this.props.name}&quot;</div>
                </div>
            )
        else if (this.props.type === "Classe")
            type = (
                <div className="notselected-header">
                    <div className="title-teacher">Classe &quot;{this.props.name}&quot;</div>
                </div>
            )
        else if (this.props.type === "Subject")
            type = (
                <div className="notselected-header">
                    <div className="title-teacher">Unité d&apos;enseignement &quot;{this.props.name}&quot;</div>
                </div>
            );

        return (
            <div className="header">
                <IconButton aria-label="chevron-left" onClick={this.handleClick}>
                    <ArrowBack />
                </IconButton>

                <div>
                    {type}
                </div>

                <div className="view-selector-container">
                    <Select value={this.props.view} onChange={(e) => this.props.onChangeView(e.target.value)}>
                        <MenuItem value="month">Month</MenuItem>
                        <MenuItem value="week">Week</MenuItem>
                        <MenuItem value="day">Day</MenuItem>
                    </Select>
                    <div className="edit-button">
                        <IconButton aria-label="edit" onClick={(e) => {/*TODO*/}}>
                            <Edit/>
                        </IconButton>
                    </div>
                </div>
            </div>
        );
    }
}

Header.propTypes = {
    type: PropTypes.string,
    //onToday: PropTypes.func,
    view: PropTypes.string,
    onChangeView: PropTypes.func,
    //title: PropTypes.string.isRequired,
    name: PropTypes.string,
    history: PropTypes.object
}

export default withRouter(Header)
