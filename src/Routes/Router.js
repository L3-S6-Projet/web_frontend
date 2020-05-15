import React, {Component} from "react";

import {BrowserRouter, Switch} from "react-router-dom";

import Login from './Login/Login.js';
import Calendar from './Calendar.js';
import NotFound from './NotFound.js';
import Logout from './Logout.js';

import Teachers from './Teachers/Teachers.js';
import TeacherDetails from './Teachers/TeacherDetails.js';

import Students from './Students/Students.js';
import StudentDetails from './Students/StudentDetails.js';

import Classrooms from './Classrooms/Classrooms.js';
import ClassroomDetails from './Classrooms/ClassroomDetails.js';

import Classes from './Classes/Classes.js';
import ClasseDetails from './Classes/ClasseDetails.js';

import Subjects from './Subjects/Subjects.js';
import SubjectDetails from './Subjects/SubjectDetails.js';

import Settings from './Settings/Settings.js';
import Splash from "./Splash/Splash.js"

import SidebarContainer from '../Components/SideBar/SideBar.js';

import {GuardedRoute, GuardProvider} from 'react-router-guards';
import {isLoggedIn} from '../auth.js';

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
                    <SidebarContainer>
                        <Switch>
                            {/* WARNING: don't change the path '/loading', or change it in the Sidebar too */}
                            <GuardedRoute exact path="/loading">
                                <Splash />
                            </GuardedRoute>

                            <GuardedRoute exact path="/login" meta={{ onlyLoggedOut: true }}>
                                <Login />
                            </GuardedRoute>

                            {/* WARNING: don't change the path '/logout', or change it in the Sidebar too */}
                            <GuardedRoute exact path="/logout" meta={{ auth: true }}>
                                <Logout />
                            </GuardedRoute>

                            <GuardedRoute exact path="/teachers/:id" meta={{ auth: true }}>
                                <TeacherDetails />
                            </GuardedRoute>

                            <GuardedRoute exact path="/teachers" meta={{ auth: true }}>
                                <Teachers />
                            </GuardedRoute>

                            <GuardedRoute exact path="/students/:id" meta={{ auth: true }}>
                                <StudentDetails />
                            </GuardedRoute>

                            <GuardedRoute exact path="/students" meta={{ auth: true }}>
                                <Students />
                            </GuardedRoute>

                            <GuardedRoute exact path="/classrooms/:id" meta={{ auth: true }}>
                                <ClassroomDetails />
                            </GuardedRoute>

                            <GuardedRoute exact path="/classrooms" meta={{ auth: true }}>
                                <Classrooms />
                            </GuardedRoute>

                            <GuardedRoute exact path="/classes/:id" meta={{ auth: true }}>
                                <ClasseDetails />
                            </GuardedRoute>
                            <GuardedRoute exact path="/classes" meta={{ auth: true }}>
                                <Classes />
                            </GuardedRoute>

                            <GuardedRoute exact path="/subjects/:id" meta={{ auth: true }}>
                                <SubjectDetails />
                            </GuardedRoute>

                            <GuardedRoute exact path="/subjects" meta={{ auth: true }}>
                                <Subjects />
                            </GuardedRoute>

                            <GuardedRoute exact path="/settings" meta={{ auth: true }}>
                                <Settings />
                            </GuardedRoute>

                            <GuardedRoute exact path="/" meta={{ auth: true }}>
                                <Calendar />
                            </GuardedRoute>

                            <GuardedRoute path="*" meta={{ auth: true }}>
                                <NotFound />
                            </GuardedRoute>
                        </Switch>
                    </SidebarContainer>
                </GuardProvider>
            </BrowserRouter >
        );
    }
}
