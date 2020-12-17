/** @format */

import React, { useState } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../client/Home';
import SignUpComp from '../pages/SignUpComp';
import SignUp from '../pages/SignUp';
import LogIn from '../pages/LogIn';
import MemberModifiy from '../pages/MemberModifiy';
import Board from '../pages/Board/Board';
import BoardDetail from '../pages/Board/BoardDetail';
import QnA from '../pages/Board/QnA';
import QnADetail from '../pages/Board/QnADetail';
import QnAWriteForm from '../pages/Board/QnAWriteForm';
import ReservationConfirm from '../pages/ReservationConfirm/ReservationConfirm';
import AboutCustom from '../components/AboutCustom';
import CompanyInfo from '../components/CompanyInfo';
import AS from '../components/AS';
import Es from '../components/Es';
import BS from '../components/BS';
import GS from '../components/GS';
import QnAUpdateForm from '../pages/Board/QnAUpdateForm';
import DetailService from './DetailService';
import D_home from '../pages/D_home';
import Public from '../pages/Public';
import Education from '../pages/Education';
import Food from '../pages/Food';
import Medical from '../pages/Medical';
import Reservation from '../components/Reservation';

const AppRouter = () => {
    const [user, setUser] = useState(null);
    const logout = () => setUser(null);
    const cureentUser = JSON.parse(sessionStorage.getItem('User'));
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home user={user} logout={logout} />
                </Route>

                <Route exact path="/SignUp">
                    <SignUp />
                </Route>

                <Route exact path="/SignUpComp">
                    <SignUpComp />
                </Route>

                <Route exact path="/Login">
                    {/* 아버지    /  아들이 준 데이터를 받음*/}
                    <LogIn
                        onLogin={(loginUser) => {
                            setUser(loginUser);
                        }}
                    />
                </Route>

                <Route exact path="/Reservation">
                    <Reservation logout={logout} />
                </Route>

                {/* Detail Service */}
                <Route exact path="/DetailService" logout={logout}>
                    <DetailService />
                </Route>

                <Route exact path="/DetailService/Home" logout={logout}>
                    <D_home />
                </Route>

                <Route exact path="/DetailService/Public" logout={logout}>
                    <Public />
                </Route>

                <Route exact path="/DetailService/Education" logout={logout}>
                    <Education />
                </Route>

                <Route exact path="/DetailService/Medical" logout={logout}>
                    <Medical />
                </Route>

                <Route exact path="/DetailService/Food" logout={logout}>
                    <Food />
                </Route>

                <Route exact path="/MemberModifiy">
                    <MemberModifiy cureentUser={cureentUser} logout={logout} />
                </Route>

                <Route path="/ReservationConfirm">
                    <ReservationConfirm logout={logout} />
                </Route>

                <Route exact path="/Board">
                    <Board logout={logout} />
                </Route>

                <Route
                    exact
                    path="/BoardDetail/:num"
                    render={(props) => (
                        <BoardDetail
                            logout={logout}
                            // 렌더할때 BoardInfo에서 세팅해둔 값을
                            // props.location으로 받음
                            routeProps={props}
                        />
                    )}
                ></Route>
                <Route exact path="/QnA">
                    <QnA logout={logout} cureentUser={cureentUser} />
                </Route>

                <Route exact path="/QnAWriteForm">
                    <QnAWriteForm logout={logout} />
                </Route>
                <Route exact path="/AboutCustom">
                    <AboutCustom logout={logout} cureentUser={cureentUser} />
                </Route>
                <Route exact path="/CompanyInfo" logout={logout}>
                    <CompanyInfo />
                </Route>
                <Route exact path="/AS">
                    <AS logout={logout} cureentUser={cureentUser} />
                </Route>
                <Route exact path="/Es">
                    <Es logout={logout} />
                </Route>
                <Route exact path="/BS">
                    <BS logout={logout} />
                </Route>
                <Route exact path="/GS">
                    <GS logout={logout} />
                </Route>
                <Route
                    exact
                    path="/QnADetail/:seq"
                    render={(props) => (
                        <QnADetail logout={logout} routeProps={props} />
                    )}
                ></Route>

                <Route
                    exact
                    path="/QnAUpdateForm/:seq"
                    render={(props) => (
                        <QnAUpdateForm logout={logout} routeProps={props} />
                    )}
                ></Route>
            </Switch>
        </Router>
    );
};

export default AppRouter;
