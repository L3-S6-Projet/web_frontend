import React, { Component } from "react";
import { LoginForm, Splash } from './Components/Splash.js';
import './App.css';
import Router from './Routes/Router.js';

class App extends Component {

    render() {
        return (
            <div className="App">
                <Router />
            </div>
        );
    }
}

export default App;
