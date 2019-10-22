import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { FC } from 'react';
import { highlightColors } from '../../highlightColors';
import DiamondIcon from './DiamondIcon';

const useStyles = makeStyles({
    container: {
        display: "flex" 
    },
    diamondIcon: {
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
    gems: number
};

const DiamondDisplay : FC<Props> = (props) => {    
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Typography className={classes.diamondText}>{props.gems}</Typography>
            <DiamondIcon width="57px" className={classes.diamondIcon} />
        </div>
    );
}

export default DiamondDisplay;
