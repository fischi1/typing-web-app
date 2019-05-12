import React, { FC } from 'react';
import { withStyles, WithStyles, createStyles } from '@material-ui/core/styles';
import { Theme, Typography } from '@material-ui/core';
import diamond from "../assets/images/diamond.png";
import { highlightColors } from '../highlightColors';

const styles = (theme: Theme) => createStyles({
    container: {
        display: "flex" 
    },
    diamondIcon: {
        height: "50px",
        width: "auto",
        imageRendering: "pixelated",
        marginLeft: "-19px",
        marginTop: "8px"
    },
    diamondText: {
        color: highlightColors.blue,
        fontSize: "2.4rem",
        borderBottom: "3px solid " + highlightColors.blue,
        paddingRight: "17px",
        paddingLeft: "2px",
        height: "52px"
    }
});

type Props = {
} & WithStyles<typeof styles>;

const DiamondDisplay : FC<Props> = (props) => {    
    const { classes } = props;

    return (
        <div className={classes.container}>
            <Typography className={classes.diamondText}>1214501</Typography>
            <img src={diamond} alt="Diamond Icon" className={classes.diamondIcon}/>
        </div>
    );
}

export default withStyles(styles)(DiamondDisplay);
