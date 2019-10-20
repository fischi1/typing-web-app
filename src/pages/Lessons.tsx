import { createStyles, Grid, makeStyles, Theme, Tooltip, Typography, useTheme } from "@material-ui/core";
import React, { FC } from "react";
import { useSetTitleOnMount } from "../components/context/TitleProvider";
import LessonCard from "../components/interface/LessonCard";
import { Lesson } from "../types/LessonType";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            padding: theme.spacing(2)
        }
    })
);


const lesson : Lesson = {
    countsTowardsStats: true,
    gemCost: 500,
    levelRequirement: 5,
    gemsPerLetter: 3,
    text: "Far... far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic lif.",
    xpForSuccess: 50
}

const Lessons : FC<{}> = () => {

    const classes = useStyles();
    const theme = useTheme();

    useSetTitleOnMount("Lessons");

    const items = Array.from(Array(99).keys());

    const unlockInfo = (
        <Typography style={{paddingLeft: theme.spacing(1), paddingRight: theme.spacing(1)}}>
            Increase your level to unlock more lessons
        </Typography>
    )
    
    return <>
        <Grid container spacing={2} className={classes.root}>            
            <Grid item xs={12} style={{position: "relative"}}>
                <Tooltip title={unlockInfo} placement="right">
                    <Typography variant="h5" style={{width: "fit-content"}}>Unlocked 10/99</Typography>
                </Tooltip>
            </Grid>
            {items.map(index => (
                <Grid item xs={6} key={index}>
                    <LessonCard index={index + 1} lesson={lesson} />
                </Grid>
            ))}
        </Grid>
    </>; 
}

export default Lessons;