import React, { FC } from "react"
import { Redirect, Route } from "react-router"
import About from "../../pages/About"
import DebugPage from "../../pages/DebugPage"
import GameResult from "../../pages/GameResult"
import Home from "../../pages/Home"
import Lessons from "../../pages/Lessons"
import Stats from "../../pages/Stats"
import Typing from "../../pages/Typing"
import UserIntroduction from "../../pages/UserIntroduction"
import AnimatedSwitch from "./AnimatedSwitch"
import UsernameGivenRoute from "./UsernameGivenRoute"

const Routes: FC<{}> = () => (
    <AnimatedSwitch>
        <Route exact path="/intro">
            <UserIntroduction />
        </Route>
        <UsernameGivenRoute exact path="/">
            <Home />
        </UsernameGivenRoute>
        <UsernameGivenRoute exact path="/lessons">
            <Lessons />
        </UsernameGivenRoute>
        <UsernameGivenRoute exact path="/stats">
            <Stats />
        </UsernameGivenRoute>
        <UsernameGivenRoute exact path="/about">
            <About />
        </UsernameGivenRoute>
        <UsernameGivenRoute exact path="/typing/:uuid">
            <Typing />
        </UsernameGivenRoute>
        <UsernameGivenRoute exact path="/gameresult">
            <GameResult />
        </UsernameGivenRoute>

        {process.env.NODE_ENV === "development" && (
            <Route exact path="/debug">
                <DebugPage />
            </Route>
        )}
        {process.env.NODE_ENV === "development" && (
            <Route exact path="/typing">
                <Typing />
            </Route>
        )}

        <UsernameGivenRoute>
            <Redirect to="/" />
        </UsernameGivenRoute>
    </AnimatedSwitch>
)

export default Routes
