import { Button, createStyles, Grid, makeStyles, Theme, Typography } from "@material-ui/core";
import React, { FC } from "react";
import { useGameResultHistoryDispatch, useGameResultHistoryState } from "../components/context/GameResultHistoryProvider";
import { useSetTitleOnMount } from "../components/context/TitleProvider";
import DebugUserInfo from "../components/general/DebugUserInfo";
import { GameResultType } from "../types/GameResultType";
import lessonsData from "../data/lessonsDataImport";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        padding: theme.spacing(2)
    }
  })
);

const DebugPage : FC<{}> = () => {

    useSetTitleOnMount("Debug");

    const classes = useStyles();

    const gameResultHistoryState = useGameResultHistoryState();
    const gameResultHistoryDispatch = useGameResultHistoryDispatch();

    const add = () => {

        const gameResult : GameResultType = {
            lessonUuid: lessonsData.allIds[0],
            accuracy: Math.random(),
            maxStreak: new Date().getSeconds(),
            resultType: "DONE",
            wpm: new Date().getMilliseconds(),
            date: new Date(),
            gemsEarned: Math.round(Math.random() * 100),
            livesLeft: 10,
            maxLives: 50
        }

        gameResultHistoryDispatch({type: "add", payload: gameResult})
    }

    const clear = () => {
        gameResultHistoryDispatch({type: "clear"});
    }

    return (
        <Grid container spacing={6} className={classes.root}>
            
            <Grid item xs={8}>                
                <Button onClick={add}>add</Button>
                <Button onClick={clear}>clear</Button>

                {gameResultHistoryState.history.map((gameResult, i) => (
                    <div key={i}>
                        <Typography>{JSON.stringify(gameResult)}</Typography>
                    </div>
                ))}

                {gameResultHistoryState.history.length === 0 && 
                    <Typography>Empty</Typography>
                }
            </Grid>

            <Grid item xs={4}>        
                <DebugUserInfo />
            </Grid>

        </Grid>
    ); 
    
}

export default DebugPage;