import React, { Component } from "react";
import {LoginForm,Splash} from './Components/Splash.js';
import './App.css';

class App extends Component {

    render() {
        return (
            <div className="App">
                <Splash/>
            </div>
        );
    }
}

export default App;
