import { Grid } from "@material-ui/core";
import React, { FC, useMemo } from "react";
import { useHistory } from "react-router";
import { Lesson } from "../../types/LessonType";
import { useUserInfoState } from "../context/UserInfoProvider";
import LessonCard from "../interface/LessonCard";
import { useGameResultHistoryState } from "../context/GameResultHistoryProvider";

type Props = {
    lvlFilteredLessons: Lesson[]
}

const LessonList: FC<Props> = props => {

    const history = useHistory();
    const userInfoState = useUserInfoState();
    const gameResultHistoryState = useGameResultHistoryState();

    const renderedLessons = useMemo(() => {

        const goToLesson = (uuid : string) => {
            history.push("/typing/" + uuid);
        }

        return props.lvlFilteredLessons.map((lesson, i) => { 

            const completed = !!gameResultHistoryState.history.find(gameResult => gameResult.lessonUuid === lesson.uuid);
            
            return (
                <Grid item xs={6} xl={4} key={lesson.uuid}>
                    <LessonCard
                        index={i + 1}
                        lesson={lesson}
                        completed={completed}
                        notEnoughGems={userInfoState.gems < lesson.gemCost}
                        onStartBtnClicked={() => goToLesson(lesson.uuid)}
                    />
                </Grid>
            );
        })

    }, [gameResultHistoryState.history, history, props.lvlFilteredLessons, userInfoState.gems]);

    return (
        <>{renderedLessons}</>
    )
}

export default LessonList;