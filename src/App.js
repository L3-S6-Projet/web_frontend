import React, { Component } from "react";
import './App.css';
import Router from './Routes/Router.js';
import CssBaseline from '@material-ui/core/CssBaseline';

class App extends Component {

    render() {
        return (
            <div className="App">
                <CssBaseline />
                <Router />
            </div>
        );
    }
}

export default App;
