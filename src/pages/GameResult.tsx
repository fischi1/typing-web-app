import { Typography } from "@material-ui/core";
import React, { FC, useEffect } from "react";
import { useLocation } from "react-router";
import { useGameResultHistoryDispatch } from "../components/context/GameResultHistoryProvider";
import { GameResultType } from "../types/GameResultType";
import { useSetTitleOnMount } from "../components/context/TitleProvider";

const GameResult : FC<{}> = () => {

    useSetTitleOnMount("Lesson Result");
    
    const location = useLocation<GameResultType | undefined>();
    
    const gameResult = location.state;

    const gameResultHistoryDispatch = useGameResultHistoryDispatch();

    useEffect(() => {
        window.history.replaceState(undefined, "");
        
        if(gameResult && gameResult.resultType === "DONE")
            gameResultHistoryDispatch({type: "add", payload: gameResult});
    }, [gameResult, gameResultHistoryDispatch]);

    return <>
        <Typography variant="h3" align="center">Finished</Typography>
        <Typography>{JSON.stringify(gameResult)}</Typography>
    </>; 
}

export default GameResult;