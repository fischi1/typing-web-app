import { makeStyles } from "@material-ui/core";
import React, { FC } from "react";
import { Route, Switch, useLocation } from "react-router";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import About from "../pages/About";
import Error404 from "../pages/Error404";
import Home from "../pages/Home";

const durationMS = 800;

const useStyles = makeStyles({
    '@global': {   
        ".fade-enter": {
            transform: "translateX(100%)"
        },        
        ".fade-enter.fade-enter-active": { 
            transform: "translateX(0)",
            transition: `transform ${durationMS}ms ease-in`
        },        
        ".fade-exit": { 
            transform: "translateX(0)",
        },        
        ".fade-exit.fade-exit-active": {
            transform: "translateX(-100%)",
            transition: `transform ${durationMS}ms ease-in`
        }
    },
    transitionGroup: {
        position: "relative"
    },
    routeSection: {
        position: "absolute",
        width: "100%",
        top: 0,
        left: 0
    }
});

const Routes : FC<{}> = () => {
    const classes = useStyles();
    const location = useLocation();

    return (
        <div>
            <TransitionGroup className={classes.transitionGroup}> 
                <CSSTransition key={location.key} classNames="fade" timeout={durationMS}>
                    <section className={classes.routeSection}>
                        <Switch location={location}>
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
                    </section>
                </CSSTransition>
            </TransitionGroup>
        </div>
    )
}

export default Routes;