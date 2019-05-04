import React, { FC } from "react";
import { Switch, Route } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Error404 from "./pages/Error404";

const Routes : FC<{}> = () => {
    return <Switch>
        <Route
          exact
          path="/"
          component={Home}
        />
        <Route
          path="/about"
          component={About}
        />
        <Route
          component={Error404}
        />
    </Switch>;
}

export default Routes;