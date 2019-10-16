import { Button, Typography } from "@material-ui/core";
import React, { FC } from "react";
import { useGameResultHistoryDispatch, useGameResultHistoryState } from "../components/context/GameResultHistoryProvider";
import { GameResultType } from "../typing/GameResultType";

const Stats : FC<{}> = () => {

    const gameResultHistoryState = useGameResultHistoryState();
    const gameResultHistoryDispatch = useGameResultHistoryDispatch();

    const add = () => {

        const gameResult : GameResultType = {
            accuracy: Math.random(),
            maxStreak: new Date().getSeconds(),
            resultType: Math.random() > 0.5 ? "DONE" : "GAME_OVER",
            wpm: new Date().getMilliseconds()
        }

        gameResultHistoryDispatch({type: "add", payload: gameResult})
    }

    const clear = () => {
        gameResultHistoryDispatch({type: "clear"});
    }

    return <>
        <Typography variant="h5" align="center">Stats</Typography>
        <div style={{margin: "0 1em 0 1em"}}>

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

        </div>
    </>; 
}

export default Stats;