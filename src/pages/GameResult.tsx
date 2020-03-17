import { Typography } from "@material-ui/core"
import React, { FC, useEffect } from "react"
import { Redirect, useHistory, useLocation } from "react-router"
import { useGameResultHistoryDispatch } from "../components/context/GameResultHistoryProvider"
import { useSetTitleOnMount } from "../components/context/TitleProvider"
import {
    useUserInfoDispatch,
    useUserInfoState
} from "../components/context/UserInfoProvider"
import GameResultDisplay from "../components/general/GameResultDisplay"
import lessonsData from "../data/lessonsDataImport"
import { GameResultType } from "../types/GameResultType"

const GameResult: FC<{}> = () => {
    useSetTitleOnMount("Lesson Result")

    const location = useLocation<GameResultType | undefined>()
    const history = useHistory()
    const userInfoState = useUserInfoState()
    const userInfoDispatch = useUserInfoDispatch()

    const gameResult = location.state

    const gameResultHistoryDispatch = useGameResultHistoryDispatch()

    useEffect(() => {
        window.history.replaceState(undefined, "")

        if (gameResult && gameResult.resultType === "DONE") {
            userInfoDispatch({ type: "lessonComplete", payload: gameResult })
            gameResultHistoryDispatch({ type: "add", payload: gameResult })
        }
    }, [gameResult, gameResultHistoryDispatch, userInfoDispatch])

    if (!gameResult) return <Redirect to="/" />

    const lesson = lessonsData.data[gameResult.lessonUuid]

    if (!lesson)
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
            onRepeatClicked={() =>
                history.push("/typing/" + gameResult.lessonUuid)
            }
            repeatDisabled={lesson.gemCost > userInfoState.gems}
        />
    )
}

export default GameResult
