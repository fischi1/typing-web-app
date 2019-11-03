import { createStyles, Grid, makeStyles, Theme, Tooltip, Typography, useTheme } from "@material-ui/core";
import React, { FC, useMemo } from "react";
import { useHistory } from "react-router";
import { useSetTitleOnMount } from "../components/context/TitleProvider";
import { useUserInfoState } from "../components/context/UserInfoProvider";
import LessonCard from "../components/interface/LessonCard";
import lessonsData from "../data/lessonsDataImport";

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
    const history = useHistory();

    const userInfoState = useUserInfoState();

    useSetTitleOnMount("Lessons");

    const unlockInfo = (
        <Typography style={{paddingLeft: theme.spacing(1), paddingRight: theme.spacing(1)}}>
            Increase your level to unlock more lessons
        </Typography>
    )

    const renderedLessons = useMemo(() => {
        const goToLesson = (uuid : string) => {
            history.push("/typing/" + uuid);
        }

        return lessonsData.allIds.map((lessonId, i) => {    
            const lesson = lessonsData.data[lessonId];   
            
            if(!lesson){
                console.error("undefined lesson");
                return null;
            }            
            
            return (
                <Grid item xs={6} xl={4} key={lesson.uuid}>
                    <LessonCard
                        index={i + 1}
                        lesson={lesson}
                        completed={Math.random() > 0.5}
                        notEnoughGems={userInfoState.gems < lesson.gemCost}
                        onStartBtnClicked={() => goToLesson(lessonId)}
                    />
                </Grid>
            );
        })
    }, [history, userInfoState.gems]);
    
    return <>
        <Grid container spacing={2} className={classes.root}>            
            <Grid item xs={12} style={{position: "relative"}}>
                <Tooltip title={unlockInfo} placement="right">
                    <Typography variant="h5" style={{width: "fit-content"}}>
                        Unlocked {Object.keys(lessonsData).length}/99
                    </Typography>
                </Tooltip>
            </Grid>      
            {renderedLessons}
        </Grid>
    </>; 
}

export default Lessons;