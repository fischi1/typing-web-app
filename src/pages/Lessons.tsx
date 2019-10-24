import { createStyles, Grid, makeStyles, Theme, Tooltip, Typography, useTheme } from "@material-ui/core";
import React, { FC } from "react";
import { useSetTitleOnMount } from "../components/context/TitleProvider";
import LessonCard from "../components/interface/LessonCard";
import { Lesson } from "../types/LessonType";
import lessonsDataImport from "../data/lessonsData.json";
import { useUserInfoState } from "../components/context/UserInfoProvider";

const lessonsData: Lesson[] = lessonsDataImport as any;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            padding: theme.spacing(2)
        }
    })
);

const Lessons : FC<{}> = () => {

    const classes = useStyles();
    const theme = useTheme();

    const userInfoState = useUserInfoState();

    useSetTitleOnMount("Lessons");

    const unlockInfo = (
        <Typography style={{paddingLeft: theme.spacing(1), paddingRight: theme.spacing(1)}}>
            Increase your level to unlock more lessons
        </Typography>
    )
    
    return <>
        <Grid container spacing={2} className={classes.root}>            
            <Grid item xs={12} style={{position: "relative"}}>
                <Tooltip title={unlockInfo} placement="right">
                    <Typography variant="h5" style={{width: "fit-content"}}>
                        Unlocked {lessonsData.length}/99
                    </Typography>
                </Tooltip>
            </Grid>
            {lessonsData.map((lesson, index) => (
                <Grid item xs={6} xl={4} key={index}>
                    <LessonCard
                        index={index + 1}
                        lesson={lesson}
                        completed={Math.random() > 0.5}
                        notEnoughGems={userInfoState.gems < lesson.gemCost}
                    />
                </Grid>
            ))}
        </Grid>
    </>; 
}

export default Lessons;