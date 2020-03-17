import { makeStyles } from "@material-ui/core"
import React, { FC } from "react"
import { Switch, useLocation } from "react-router"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import { appbarHeight } from "./AppContainer"

export const animationDurationMS = 800

const useStyles = makeStyles({
    "@global": {
        ".fade-enter": {
            transform: "translateX(100%)"
        },
        ".fade-enter.fade-enter-active": {
            transform: "translateX(0)",
            transition: `transform ${animationDurationMS}ms ease-in`
        },
        ".fade-exit": {
            transform: "translateX(0)"
        },
        ".fade-exit.fade-exit-active": {
            transform: "translateX(-100%)",
            transition: `transform ${animationDurationMS}ms ease-in`
        }
    },
    transitionGroup: {
        position: "relative"
    },
    routeSection: {
        position: "absolute",
        width: "100%",
        height: `calc(100vh - ${appbarHeight})`,
        top: 0,
        left: 0
    }
})

const AnimatedSwitch: FC<{}> = props => {
    const classes = useStyles()
    const location = useLocation()

    return (
        <div>
            <TransitionGroup className={classes.transitionGroup}>
                <CSSTransition
                    key={location.key}
                    classNames="fade"
                    timeout={animationDurationMS}
                >
                    <section className={classes.routeSection}>
                        <Switch location={location}>{props.children}</Switch>
                    </section>
                </CSSTransition>
            </TransitionGroup>
        </div>
    )
}

export default AnimatedSwitch
