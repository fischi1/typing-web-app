import React, { FC } from "react";
import { createStyles, Theme, WithStyles, withStyles, Typography } from "@material-ui/core";
import { RouteComponentProps } from "react-router";
import Page from "../shared/Page";
import GermanKeyboardController from "../shared/keyboard/GermanKeyboardController";
import TypingCanvas from "../shared/typing/TypingCanvas";
import { highlightColors } from "../highlightColors";

const styles = (theme: Theme) => createStyles({
    container: {
        display: "flex",
        height: "27vw"
    },
    left: {
        backgroundColor: highlightColors.gray,
        flex: "0 0 20%"
    }, center: {
        flex: "0 0 60%"
    }, right: {
        backgroundColor: highlightColors.red,
        flex: "0 0 20%"
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
                <Typography>Info on top</Typography>
                <TypingCanvas />
            </div>
            <div className={classes.right}>
                c
            </div>
        </div>
        <br/>
        <br/>
        <br/>
        <GermanKeyboardController />
    </Page>; 
}

export default withStyles(styles)(Home);