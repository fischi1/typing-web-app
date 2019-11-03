import React, { FC, useEffect } from "react";
import { Redirect, useLocation } from "react-router";
import { useGameResultHistoryDispatch } from "../components/context/GameResultHistoryProvider";
import { useSetTitleOnMount } from "../components/context/TitleProvider";
import GameResultDisplay from "../components/interface/GameResultDisplay";
import { GameResultType } from "../types/GameResultType";

const GameResult : FC<{}> = () => {

    useSetTitleOnMount("Lesson Result");
    
    const location = useLocation<GameResultType | undefined>();
    
    const gameResult = location.state;

    // debug
    // const gameResult : GameResultType | undefined = {
    //     lessonUuid: "8e54a235-d0f8-4676-b120-6eef79b5eedf",
    //     accuracy: 0.9696969696969697,
    //     date: new Date(),
    //     gemsEarned: 14,
    //     maxStreak: 6,
    //     resultType: "DONE",
    //     wpm: 42.542415801468735
    // };

    const gameResultHistoryDispatch = useGameResultHistoryDispatch();

    useEffect(() => {
        window.history.replaceState(undefined, "");
        
        if(gameResult && gameResult.resultType === "DONE")
            gameResultHistoryDispatch({type: "add", payload: gameResult});
    }, [gameResult, gameResultHistoryDispatch]);

    if(!gameResult)
        return <Redirect to="/"/>;

    return (
        <GameResultDisplay 
            result={gameResult}
        />
    ); 
}

export default GameResult;