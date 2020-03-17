import { Grid } from "@material-ui/core"
import React, { FC } from "react"
import { useHistory } from "react-router"
import useTimeoutOnMount from "../../hooks/useTimeout"
import { Lesson } from "../../types/LessonType"
import { useGameResultHistoryState } from "../context/GameResultHistoryProvider"
import { useUserInfoState } from "../context/UserInfoProvider"
import LessonCard from "../interface/LessonCard"
import { animationDurationMS } from "./AnimatedSwitch"

type Props = {
    lvlFilteredLessons: Lesson[]
}

const LessonList: FC<Props> = props => {
    const history = useHistory()
    const userInfoState = useUserInfoState()
    const gameResultHistoryState = useGameResultHistoryState()

    const timeOutAfterRender = useTimeoutOnMount(animationDurationMS + 50)

    const goToLesson = (uuid: string) => {
        history.push("/typing/" + uuid)
    }

    return (
        <>
            {props.lvlFilteredLessons.map((lesson, i) => {
                let completed = false

                if (timeOutAfterRender)
                    completed = !!gameResultHistoryState.history.find(
                        gameResult => gameResult.lessonUuid === lesson.uuid
                    )

                return (
                    <Grid item xs={6} xl={4} key={lesson.uuid}>
                        <LessonCard
                            index={i + 1}
                            lesson={timeOutAfterRender ? lesson : null}
                            completed={completed}
                            notEnoughGems={userInfoState.gems < lesson.gemCost}
                            onStartBtnClicked={() => goToLesson(lesson.uuid)}
                        />
                    </Grid>
                )
            })}
        </>
    )
}

export default LessonList
