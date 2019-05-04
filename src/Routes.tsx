import React, { FC, lazy, Suspense } from "react";
import { Switch, Route } from "react-router";
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Error404 = lazy(() => import('./pages/Error404'));

const Routes : FC<{}> = () => {
    return (
    <Suspense fallback={<div>Loading...</div>}>
        <Switch>
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
        </Switch>
    </Suspense>
    )
}

export default Routes;