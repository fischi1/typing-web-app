import React, { FC } from "react";
import { Typography, createStyles, Theme, WithStyles, withStyles } from "@material-ui/core";
import { RouteComponentProps } from "react-router";
import cn from "classnames";
import Page from "../shared/Page";
import GermanKeyboardController from "../shared/keyboard/GermanKeyboardController";

const generalStyle = createStyles({
    biggerFont: {
        fontSize: "1.3rem"
    }
});

const styles = (theme: Theme) => createStyles({
    container: {
        padding: theme.spacing.unit
    },
    parOneContainer: {
        fontFamily: "monospace",
        ...generalStyle.biggerFont
    },
    parTwoContainer: {
        fontFamily: "Roboto Mono",
        ...generalStyle.biggerFont
    },
    anotherColor: {
        color: "#38d973"
    },
    textBold: {
        fontWeight: "bold"
    }
});

type Props = RouteComponentProps & WithStyles<typeof styles>;

const Home : FC<Props> = (props : Props) => {
    const {classes} = props;
    return <Page>
        <div className={cn(classes.container)}>     
            <Typography variant="h4">
                Home
            </Typography>
        
            <Typography paragraph className={classes.parOneContainer}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent
                elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in
                hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum
                velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing.
                Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis
                viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo.
                Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus
                at augue. At augue eget arcu dictum varius duis at consectetur lorem. Velit sed
                ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac.
            </Typography>
        
            <Typography paragraph className={classes.parTwoContainer}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent
                elementum <span className={classes.textBold}>facilisis leo ve<span className={classes.anotherColor}>l. Risus</span></span> at ultrices mi tempus imperdiet. Semper risus in
                hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum
                velit laoreet id donec ultrices. Odio morbi quis commodo odi    o aenean sed adipiscing.
                Amet nisl suscipit <span className={classes.anotherColor}>adipiscing bibendum est ultricies</span> integer quis. Cursus euismod quis
                viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo.
                Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus
                at augue. At augue eget arcu dictum varius duis at consectetur lorem. Velit sed
                ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac.
            </Typography>
            
            <Typography paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent
                elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in
                hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum
            </Typography>

            <GermanKeyboardController />
        </div>
    </Page>; 
}

export default withStyles(styles)(Home);