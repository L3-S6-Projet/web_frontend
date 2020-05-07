import React, { Component } from "react";

import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";

import { LoginForm } from './Login.js';
import Home from './Home.js';
import NotFound from './NotFound.js';

export default class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/login">
                        <LoginForm />
                    </Route>

                    <Route exact path="/">
                        <Home />
                    </Route>

                    <Route path="*">
                        <NotFound />
                    </Route>
                </Switch>
            </BrowserRouter>
        );
    }
}
