import { Typography } from "@material-ui/core"
import React, { FC, useEffect, useState } from "react"
import { useHistory } from "react-router"
import { useGameResultHistoryDispatch } from "../components/context/GameResultHistoryProvider"
import { useSetTitleOnMount } from "../components/context/TitleProvider"
import {
    useUserInfoDispatch,
    useUserInfoState
} from "../components/context/UserInfoProvider"
import GameResultDisplay from "../components/general/GameResultDisplay"
import lessonsData from "../data/lessonsDataImport"
import { GameResultType } from "../types/GameResultType"

const retrieveAndClearGameResult = () => {
    const str = sessionStorage.getItem("gameresult")
    if (!str) return null

    const obj = JSON.parse(str)

    sessionStorage.removeItem("gameresult")

    return obj as GameResultType
}

const GameResult: FC<{}> = () => {
    useSetTitleOnMount("Lesson Result")

    const history = useHistory()
    const userInfoState = useUserInfoState()
    const userInfoDispatch = useUserInfoDispatch()

    const [gameResult, setGameResult] = useState<GameResultType>()

    const gameResultHistoryDispatch = useGameResultHistoryDispatch()

    useEffect(() => {
        const newGameResult = retrieveAndClearGameResult()

        if (!newGameResult) {
            history.push("/")
            return
        }

        if (newGameResult.resultType === "DONE") {
            userInfoDispatch({ type: "lessonComplete", payload: newGameResult })
            gameResultHistoryDispatch({ type: "add", payload: newGameResult })
        }

        setGameResult(newGameResult)
    }, [gameResultHistoryDispatch, history, userInfoDispatch])

    if (!gameResult) return null

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
