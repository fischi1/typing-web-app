import { Typography, makeStyles } from '@material-ui/core';
import React, { FC } from 'react';
import dog from "../../assets/images/dog.gif";
import clsx from "clsx";
import { pixelatedStyleClass } from '../../hooks/useGlobalPixelatedStyle';


const useStyles = makeStyles( theme => ({
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
        marginLeft: theme.spacing()
    }
}));

type Props = {
};

const Logo : FC<Props> = props => {

    const classes = useStyles();

    return (
        <div className={classes.headerContainer}>
            <Typography variant="h1" className={clsx(classes.header, classes.headerLogoText)}>
                Typing Web App
            </Typography>
            <img src={dog} alt="Dog" className={clsx(classes.headerIcon, pixelatedStyleClass)}/>
        </div>
    );
}

export default Logo;
