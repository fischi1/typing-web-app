import React, { FC } from "react";
import { Route, Switch } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Error404 from "./pages/Error404";

const Routes : FC<{}> = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/about">
                <About />
            </Route>
            <Route>
                <Error404 />
            </Route>
        </Switch>
    )
}

export default Routes;