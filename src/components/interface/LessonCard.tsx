import { ButtonBase, Card, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import clsx from 'clsx';
import React, { FC } from 'react';
import { Lesson } from '../../types/LessonType';
import DiamondIcon from './DiamondIcon';
import { highlightColors } from '../../highlightColors';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            // marginBottom: theme.spacing(2),
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
            display: "flex"
        },
        indexNumber: {
            fontSize: "4rem",         
            textAlign: "center",   
            marginRight: theme.spacing(2),
        },
        left: {
            flex: "0 0 60px"
        },
        middle: {
            flex: "1",
            minWidth: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
        },
        right: {
            flex: "0 0 96px"
        },
        goButton: {
            width: "96px",
            height: "100%",
            flexDirection: "column",
        },
        goButtonText: {
            fontSize: "2.5rem"
        },
        goButtonDiamondCost: {
            display: "flex",
            alignItems: "center",
            paddingTop: theme.spacing(0.5)
        },
        lineHeightNormal: {
            lineHeight: "normal"
        },
        truncatedLessonText: {
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            marginBottom: theme.spacing(0.5)
        },
        lineHeightOne: {
            lineHeight: 1
        },
        subText: {
            fontSize: "1.4rem",
            color: highlightColors.gray,
            whiteSpace: "nowrap"
        }
        
    })
);

type Props = {
    index: number,
    completed: boolean,
    lesson: Lesson
};

const LessonCard : FC<Props> = props => {    
    const classes = useStyles();

    const yesNo = (val : boolean) => val ? "YES" : "NO";
    const colorBool = (val : boolean) => val ? highlightColors.green : highlightColors.red;

    return (
        <Card className={classes.root}>
            <div className={classes.left}>
                <Typography className={classes.indexNumber}>
                    {props.index}
                </Typography>
            </div>
            <div className={classes.middle}>
                <Typography className={clsx(classes.truncatedLessonText, classes.lineHeightOne)}>{props.lesson.text}</Typography>
                <div style={{display:"flex"}}>
                    <div style={{flex: "1 1 50%"}}>
                        <Typography className={clsx(classes.lineHeightOne, classes.subText)}>Counts towards stats: {yesNo(props.lesson.countsTowardsStats)}</Typography>
                        <Typography className={clsx(classes.lineHeightOne, classes.subText)} style={{color: colorBool(props.completed)}}>Completed: {yesNo(props.completed)}</Typography>
                    </div>
                    <div style={{flex: "1 1 50%"}}>
                        <Typography className={clsx(classes.lineHeightOne, classes.subText)}>XP: {props.lesson.xpForSuccess}</Typography>
                        <Typography className={clsx(classes.lineHeightOne, classes.subText)}><DiamondIcon width="18px" />/Letter: {props.lesson.gemsPerLetter}</Typography>
                    </div>
                </div>
            </div>
            <div className={classes.right}>
                <ButtonBase className={classes.goButton}>
                    <Typography component="div" className={clsx(classes.goButtonText, classes.lineHeightNormal)}>
                        GO!
                    </Typography>
                    <Typography component="div" className={clsx(classes.goButtonDiamondCost, classes.lineHeightNormal)}>
                        <DiamondIcon width="40px" />&nbsp;{props.lesson.gemCost}
                    </Typography>

                </ButtonBase>
            </div>
        </Card>
    );
}

export default LessonCard;
