import { Typography } from '@material-ui/core';
import React, { FC } from 'react';
import { highlightColors } from '../../highlightColors';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';

const useStyles = makeStyles({
    container: {
        width: "220px"
    },
    usernameLvlContainer: {
        display:"flex",
        height: "28px",
        justifyContent: "space-between"
    },
    username: {
        fontSize: "2rem",
        lineHeight: "1.7rem",
        display: "inline-block",
        alignSelf: "flex-end"
    },
    level: {
        lineHeight: "1.4rem",
        display: "inline-block",
        alignSelf: "flex-end"
    },
    subText: {
        color: highlightColors.gray
    },
    progressbarContainer: {
        width: "100%",
        height: "5px",
        display: "flex"
    },
    progressFilled: {
        height: "100%",
        backgroundColor: highlightColors.green,
        transition: "width 0.2s ease-in"
    },
    progressEmpty: {
        height: "100%",
        backgroundColor: highlightColors.gray
    },
    progressionTextContainer: {
        justifyContent: "center",
        alignItems: "start",
        display: "flex",
    },
    progressText: {
        lineHeight: "normal !important"
    }
});

type Props = {
    username: string,
    lvl: number,
    curXP: number,
    nextLvlXP: number,
    className?: string
};

const LevelProgressionDisplay : FC<Props> = props => {    
    const {username, lvl, curXP, nextLvlXP, className } = props;
    const classes = useStyles();

    return (
        <div className={clsx(classes.container, className)}>
            <div className={classes.usernameLvlContainer}>
                <Typography className={classes.username}>{username}</Typography>
                <Typography className={clsx(classes.level, classes.subText)}>Lvl{lvl}</Typography>
            </div>
            <div className={classes.progressbarContainer}>
                <div className={classes.progressFilled} style={{width:`${calculatePercentXPBar(curXP, nextLvlXP)}%`}}/>
                <div className={classes.progressEmpty} style={{flex:"1 0 auto"}}/>
            </div>
            <div className={classes.progressionTextContainer}>
                <Typography className={clsx(classes.subText, classes.progressText)}>{curXP}/{nextLvlXP}</Typography>
            </div>
        </div>
    );
}

function calculatePercentXPBar(cur : number, nextLvlUp: number) : number {
    return (cur / nextLvlUp) * 100;
}

export default LevelProgressionDisplay;
