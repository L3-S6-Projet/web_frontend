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
import Logout from './Logout.js';
import { GuardProvider, GuardedRoute } from 'react-router-guards';

import { isLoggedIn } from '../auth.js';

const requireLogin = (to, from, next) => {
    const isProtected = to.meta.auth;
    const isOnlyLoggedOut = to.meta.onlyLoggedOut;

    if (isProtected) {
        if (isLoggedIn()) {
            next();
        }
        next.redirect('/login');
    } else if (isOnlyLoggedOut) {
        if (!isLoggedIn()) {
            next();
        }
        next.redirect('/');
    } else {
        next();
    }
};


export default class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <GuardProvider guards={[requireLogin]}>
                    <Switch>
                        <GuardedRoute exact path="/login" meta={{ onlyLoggedOut: true }}>
                            <LoginForm />
                        </GuardedRoute>

                        <GuardedRoute exact path="/logout" meta={{ auth: true }}>
                            <Logout />
                        </GuardedRoute>

                        <GuardedRoute exact path="/" meta={{ auth: true }}>
                            <Home />
                        </GuardedRoute>

                        <GuardedRoute path="*" meta={{ auth: true }}>
                            <NotFound />
                        </GuardedRoute>
                    </Switch>
                </GuardProvider>
            </BrowserRouter>
        );
    }
}
