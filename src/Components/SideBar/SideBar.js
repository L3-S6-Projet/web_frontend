import React, {Component} from "react";
import PropTypes from 'prop-types';
import {Link, NavLink, withRouter} from "react-router-dom";
import CalendarToday from '@material-ui/icons/CalendarToday';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Person from '@material-ui/icons/Person';
import LocationOn from '@material-ui/icons/LocationOn';
import List from '@material-ui/icons/List';
import LibraryBooks from '@material-ui/icons/LibraryBooks';
import Settings from '@material-ui/icons/Settings';
import ExitToApp from '@material-ui/icons/ExitToApp';

import {getUser} from '../../auth.js';

import './SideBar.css';

class SidebarContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="sidebar-container">
                <SidebarWithRouter />
                <div id="sidebar-route-container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

SidebarContainer.propTypes = {
    children: PropTypes.object,
}

export default SidebarContainer;

class Sidebar extends Component {
    constructor(props) {
        super(props);
    }

    userKindAsString(user) {
        if (user.user.kind == 'ADM')
            return 'Administrateur';
        else if (user.user.kind == 'TEA')
            return 'Professeur';

        return 'Étudiant';
    }

    render() {
        const user = getUser();

        // Don't show on login, logout or loading page
        if (user === null || ['/loading', '/logout'].indexOf(this.props.location.pathname) >= 0) return null;

        let sidebar;
        if(this.userKindAsString(user) === 'Administrateur') {
            sidebar = (
                <nav id="sidebar-nav">
                    <NavLink exact className="link" activeClassName="active" to="/"><CalendarToday className="icon" />Emploi du temps</NavLink>
                    <NavLink className="link" activeClassName="active" to="/teachers"><AccountCircle className="icon" />Enseignants</NavLink>
                    <NavLink className="link" activeClassName="active" to="/students"><Person className="icon" />Étudiants</NavLink>
                    <NavLink className="link" activeClassName="active" to="/classrooms"><LocationOn className="icon" />Salles</NavLink>
                    <NavLink className="link" activeClassName="active" to="/classes"><List className="icon" />Classes</NavLink>
                    <NavLink className="link" activeClassName="active" to="/subjects"><LibraryBooks className="icon" />Unités d&apos;enseignement</NavLink>
                    <NavLink className="link" activeClassName="active" to="/settings"><Settings className="icon" />Paramètres</NavLink>
                    <Link className="link" to="/logout"><ExitToApp className="icon" />Déconnexion</Link>
                    <div id="sidebar-nav-indicator"></div>
                </nav>
            );
        }
        else sidebar = (
            <nav id="sidebar-nav">
                <NavLink exact className="link" activeClassName="active" to="/"><CalendarToday className="icon" />Home</NavLink>
                <NavLink className="link" activeClassName="active" to="/teachers"><AccountCircle className="icon" />Emploi du temps</NavLink>
                <NavLink className="link" activeClassName="active" to="/subjects"><LibraryBooks className="icon" />Unités d&apos;enseignement</NavLink>
                <NavLink className="link" activeClassName="active" to="/settings"><Settings className="icon" />Paramètres</NavLink>
                <Link className="link" to="/logout"><ExitToApp className="icon" />Déconnexion</Link>
                <div id="sidebar-nav-indicator"></div>
            </nav>

        )


        return (
            <div id="sidebar">
                <header id="sidebar-header">
                    <p id="sidebar-name">{user.user.first_name} {user.user.last_name}</p>
                    <p id="sidebar-role">{this.userKindAsString(user)}</p>
                </header>
                {sidebar}
                <div className="spacer"></div>
                <p id="sidebar-credits">© Scolendar 2020<br />
                    Tous droits réservés</p>
            </div>
        );
    }
}

Sidebar.propTypes = {
    history: PropTypes.object,
    location: PropTypes.object,
    match: PropTypes.object,
};

let SidebarWithRouter = withRouter(Sidebar);

