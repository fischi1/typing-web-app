import React, { FC } from "react";
import { Route, Switch, RouteProps } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Error404 from "./pages/Error404";
import Page from "./shared/Page";

type CustomRouteProps = {

} & RouteProps;

const CustomRoute : FC<CustomRouteProps> = props => {
    return (
        <Route {...props}>
            <Page>
                {props.children}
            </Page>
        </Route>
    )
} 

const Routes : FC<{}> = () => {
    return (
        <Switch>
            <CustomRoute exact path="/">
                <Home />
            </CustomRoute>
            <CustomRoute exact path="/about">
                <About />
            </CustomRoute>
            <CustomRoute>
                <Error404 />
            </CustomRoute>
        </Switch>
    )
}

export default Routes;