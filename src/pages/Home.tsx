import { createStyles, Theme, WithStyles, withStyles } from "@material-ui/core";
import React, { FC } from "react";
import { RouteComponentProps } from "react-router";
import GermanKeyboardController from "../shared/keyboard/GermanKeyboardController";
import Page from "../shared/Page";
import TypingCanvas from "../shared/typing/TypingCanvas";

const styles = (theme: Theme) => createStyles({
    container: {
        
    }
});

type Props = RouteComponentProps & WithStyles<typeof styles>;

const Home : FC<Props> = (props : Props) => {
    const {classes} = props;
    return <Page>
        <div className={classes.container}>  
            {/* <Typography>Info on top</Typography> */}
            <TypingCanvas />
        </div>
        <br/>
        <GermanKeyboardController />
    </Page>; 
}

export default withStyles(styles)(Home);