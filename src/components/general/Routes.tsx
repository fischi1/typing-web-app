import React, { FC } from "react";
import { Redirect, Route } from "react-router";
import About from "../../pages/About";
import DebugPage from "../../pages/DebugPage";
import GameResult from "../../pages/GameResult";
import Settings from "../../pages/Settings";
import Home from "../../pages/Home";
import Lessons from "../../pages/Lessons";
import Stats from "../../pages/Stats";
import Typing from "../../pages/Typing";
import AnimatedSwitch from "./AnimatedSwitch";

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
            <Route exact path="/settings">
                <Settings />
            </Route>
            <Route exact path="/about">
                <About />
            </Route>
            <Route exact path="/typing/:uuid">
                <Typing />
            </Route>
            <Route exact path="/gameresult">
                <GameResult />
            </Route>
            
            {process.env.NODE_ENV === "development" &&
                <Route exact path="/debug">
                    <DebugPage />
                </Route>
            }            
            {process.env.NODE_ENV === "development" &&
                <Route exact path="/typing">
                    <Typing />
                </Route>
            }
            

            <Route>
                <Redirect to="/" />
            </Route>
        </AnimatedSwitch>
    );

}

export default Routes;