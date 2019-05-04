import React, { FC, Suspense, ReactNode } from "react";
import { Switch, Route } from "react-router";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Home from "./pages/Home";
import About from "./pages/About";
import Error404 from "./pages/Error404";


const Routes : FC<{}> = () => {
    const switchRoutes : ReactNode = (        
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
    );

    return (
    <Suspense fallback={<div>Loading...</div>}>
    
        <Route
          render={({ location }) => {
            const { pathname } = location;
            return (
                <TransitionGroup>
                    <CSSTransition 
                        key={pathname}
                        classNames="page"
                        timeout={{
                            enter: 500,
                            exit: 500,
                        }} 
                    >
                        <Route
                        location={location}
                        render={() => switchRoutes}
                        />
                    </CSSTransition>
                </TransitionGroup>
            )}} />
    </Suspense>
    )
}

export default Routes;