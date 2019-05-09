import React, { FC, Suspense, ReactNode, lazy } from "react";
import { Switch, Route } from "react-router";
import { TransitionGroup, CSSTransition } from "react-transition-group";
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Error404 = lazy(() => import("./pages/Error404"));


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
                        <Suspense fallback={<div>Loading...</div>} >    
                            <Route
                            location={location}
                            render={() => switchRoutes}
                            />
                        </Suspense>
                    </CSSTransition>
                </TransitionGroup>
            )}} />
    )
}

export default Routes;