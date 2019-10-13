import React, { FC } from "react";
import { Route, Redirect } from "react-router";
import About from "../../pages/About";
import AnimatedSwitch from "./AnimatedSwitch";
import Home from "../../pages/Home";
import Lessons from "../../pages/Lessons";
import Stats from "../../pages/Stats";
import Help from "../../pages/Help";
import Typing from "../../pages/Typing";
import GameResult from "../../pages/GameResult";


const Routes : FC<{}> = () => {

    return (
        <AnimatedSwitch>            
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/lessons">
                <Lessons />
            </Route>
            <Route exact path="/stats">
                <Stats />
            </Route>
            <Route exact path="/help">
                <Help />
            </Route>
            <Route exact path="/about">
                <About />
            </Route>

            <Route exact path="/typing">
                <Typing />
            </Route>
            <Route exact path="/gameresult">
                <GameResult />
            </Route>
            <Route>
                <Redirect to="/" />
            </Route>
        </AnimatedSwitch>
    );

}

export default Routes;