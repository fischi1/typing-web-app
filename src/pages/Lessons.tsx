import { createStyles, Grid, makeStyles, Theme, Tooltip, Typography, useTheme } from "@material-ui/core";
import React, { FC } from "react";
import { useSetTitleOnMount } from "../components/context/TitleProvider";
import LessonList from "../components/general/LessonList";
import lessonsData from "../data/lessonsDataImport";
import useCalculateLvlInfo from "../hooks/useCalculateLvlInfo";
import { Lesson } from "../types/LessonType";

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

    useSetTitleOnMount("Lessons");

    
    const lvlInfo = useCalculateLvlInfo();    
        
    const filteredLessons: Lesson[] = [];
    lessonsData.allIds.forEach(lessonId => {
        const lesson = lessonsData.data[lessonId];           
        if(!lesson){
            console.error("undefined lesson");
            return;
        }    
        
        if(lesson.levelRequirement <= lvlInfo.level)
            filteredLessons.push(lesson);
    })

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
                        Unlocked {filteredLessons.length}/{lessonsData.allIds.length}
                    </Typography>
                </Tooltip>
            </Grid>      
            <LessonList
                lvlFilteredLessons={filteredLessons}
            />
        </Grid>
    </>; 
}

export default Lessons;