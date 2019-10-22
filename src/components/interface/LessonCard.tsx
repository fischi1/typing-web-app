import { ButtonBase, Card, Typography, Tooltip } from '@material-ui/core';
import { createStyles, makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import React, { FC } from 'react';
import { Lesson } from '../../types/LessonType';
import DiamondIcon from './DiamondIcon';
import { highlightColors } from '../../highlightColors';

type Props = {
    index: number,
    completed: boolean,
    lesson: Lesson,
    notEnoughGems: boolean
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
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
            fontSize: "2.5rem",
            color: (props: Props) => props.notEnoughGems ? highlightColors.red : "",
        },
        goButtonDiamondCost: {
            display: "flex",
            alignItems: "center",
            position: "relative",
            paddingTop: theme.spacing(0.5),
            color: (props: Props) => props.notEnoughGems ? highlightColors.red : "",
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
        },
        xButtonOverlay: {
            color: highlightColors.red,
            position: "absolute",
            fontSize: "7rem"
        }        
    })
);

const LessonCard : FC<Props> = props => {    
    const classes = useStyles(props);
    const theme = useTheme();

    const yesNo = (val : boolean) => val ? "YES" : "NO";

    const notEnoughInfo = (
        <Typography style={{paddingLeft: theme.spacing(1), paddingRight: theme.spacing(1)}}>
            Not enough gems
        </Typography>
    )

    const button = (                       
        <ButtonBase className={classes.goButton} disabled={props.notEnoughGems}>
            <Typography component="div" className={clsx(classes.goButtonText, classes.lineHeightNormal)}>
                Start
            </Typography>
            <Typography component="div" className={clsx(classes.goButtonDiamondCost, classes.lineHeightNormal)}>
                <DiamondIcon width="40px" />&nbsp;{props.lesson.gemCost}
            </Typography>
        </ButtonBase>
    )
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
                        <Typography className={clsx(classes.lineHeightOne, classes.subText)} style={{color: props.completed ? highlightColors.green : highlightColors.red}}>Completed: {yesNo(props.completed)}</Typography>
                    </div>
                    <div style={{flex: "1 1 50%"}}>
                        <Typography className={clsx(classes.lineHeightOne, classes.subText)}>XP: {props.lesson.xpForSuccess}</Typography>
                        <Typography className={clsx(classes.lineHeightOne, classes.subText)}><DiamondIcon width="18px" />/Letter: {props.lesson.gemsPerLetter}</Typography>
                    </div>
                </div>
            </div>
            <div className={classes.right}> 
                {props.notEnoughGems ? (
                    <Tooltip title={notEnoughInfo} placement="left">
                        <div style={{height: "96px"}}>
                            {button}
                        </div>
                    </Tooltip>
                ) : (
                    <>{button}</>
                )}  
            </div>
        </Card>
    );
}

export default LessonCard;
