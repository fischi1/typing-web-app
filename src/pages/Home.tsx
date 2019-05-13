import React, { FC } from "react";
import { createStyles, Theme, WithStyles, withStyles } from "@material-ui/core";
import { RouteComponentProps } from "react-router";
import Page from "../shared/Page";
import GermanKeyboardController from "../shared/keyboard/GermanKeyboardController";
import TypingCanvas from "../shared/typing/TypingCanvas";
import { highlightColors } from "../highlightColors";

const styles = (theme: Theme) => createStyles({
    container: {
        display: "flex",
        height: "60%"
    },
    left: {
        backgroundColor: highlightColors.gray,
        flex: "1 0 auto"
    }, center: {
        flex: "0 0 1200px"
    }, right: {
        backgroundColor: highlightColors.green,
        flex: "1 0 auto"
    }
});

type Props = RouteComponentProps & WithStyles<typeof styles>;

const Home : FC<Props> = (props : Props) => {
    const {classes} = props;
    return <Page>
        <div className={classes.container}>  
            <div className={classes.left}>
                a
            </div>
            <div className={classes.center}>
                <TypingCanvas />
            </div>
            <div className={classes.right}>
                c
            </div>

        </div>
        <GermanKeyboardController />
    </Page>; 
}

export default withStyles(styles)(Home);