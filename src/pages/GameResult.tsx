import React, { FC, useEffect } from "react";
import { Redirect, useLocation, useHistory } from "react-router";
import { useGameResultHistoryDispatch } from "../components/context/GameResultHistoryProvider";
import { useSetTitleOnMount } from "../components/context/TitleProvider";
import GameResultDisplay from "../components/general/GameResultDisplay";
import { GameResultType } from "../types/GameResultType";
import lessonsData from "../data/lessonsDataImport";
import { Typography } from "@material-ui/core";
import { useUserInfoState, useUserInfoDispatch } from "../components/context/UserInfoProvider";

const GameResult : FC<{}> = () => {

    useSetTitleOnMount("Lesson Result");
    
    const location = useLocation<GameResultType | undefined>();
    const history = useHistory();
    const userInfoState = useUserInfoState();
    const userInfoDispatch = useUserInfoDispatch();
    
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
        
        if(gameResult && gameResult.resultType === "DONE") {
            userInfoDispatch({type: "lessonComplete", payload: gameResult});
            gameResultHistoryDispatch({type: "add", payload: gameResult});
        }
    }, [gameResult, gameResultHistoryDispatch, userInfoDispatch]);

    if(!gameResult)
        return <Redirect to="/"/>;               
        
    const lesson = lessonsData.data[gameResult.lessonUuid];

    if(!lesson)
        return (
            <Typography color="error">
                Lesson with id {gameResult.lessonUuid} not found!
            </Typography>
        )

    return (
        <GameResultDisplay 
            result={gameResult}
            lesson={lesson}
            onChooseAnotherLessonClicked={() => history.push("/lessons")}
            onStatsClicked={() => history.push("/stats")}
            onRepeatClicked={() => history.push("/typing/" + gameResult.lessonUuid)}
            repeatDisabled={lesson.gemCost > userInfoState.gems}
        />
    ); 
}

export default GameResult;