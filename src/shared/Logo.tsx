import React, { FC } from 'react';
import { withStyles, WithStyles, createStyles } from '@material-ui/core/styles';
import { Typography, Theme } from '@material-ui/core';
import dog from "../assets/images/dog.gif";
import cn from "classnames";

const styles = (theme: Theme) => createStyles({
    headerContainer: {
        display: "flex",
        flex: "0 0 33%",
        justifyContent: "center"
    },
    header: {
        fontSize: "2.4rem"
    },
    headerLogoText : {
        paddingTop: "6px"
    },
    headerIcon: {
        width: "50px",
        height: "50px",
        marginLeft: theme.spacing.unit,
        imageRendering: "pixelated"
    }
  });

type Props = {
} & WithStyles<typeof styles>;

const Logo : FC<Props> = (props) => {
    
    const { classes} = props;

    return (
        <div className={classes.headerContainer}>
            <Typography variant="h1" className={cn(classes.header, classes.headerLogoText)}>
                Typing Web App
            </Typography>
            <img src={dog} alt="Dog" className={classes.headerIcon}/>
        </div>
    );
}

export default withStyles(styles)(Logo);
