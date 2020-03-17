import {
    Button,
    Container,
    Grid,
    Typography,
    useTheme
} from "@material-ui/core"
import React, { FC, ReactNode } from "react"
import numberToRoundedString from "../../functions/numberToRoundedString"
import { highlightColors } from "../../highlightColors"
import { GameResultType } from "../../types/GameResultType"
import { Lesson } from "../../types/LessonType"
import DiamondIcon from "../interface/DiamondIcon"
import DotDotDotText from "../interface/DotDotDotText"
import TooltipWrapper from "../interface/TooltipWrapper"

type Props = {
    result: GameResultType
    lesson: Lesson
    onStatsClicked: () => void
    onRepeatClicked: () => void
    onChooseAnotherLessonClicked: () => void
    repeatDisabled?: boolean
}

const GameResultDisplay: FC<Props> = props => {
    const result = props.result

    const theme = useTheme()

    const lessonSuccess = result.resultType === "DONE"

    const generateValItem = (
        label: ReactNode,
        value: ReactNode,
        textRed?: boolean
    ) => {
        return (
            <>
                <Grid item xs={2}>
                    <Typography>{label}</Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography
                        style={{
                            color: textRed
                                ? highlightColors.red
                                : highlightColors.blue
                        }}
                    >
                        {value}
                    </Typography>
                </Grid>
            </>
        )
    }

    const notEnoughInfo = (
        <Typography
            style={{
                paddingLeft: theme.spacing(1),
                paddingRight: theme.spacing(1)
            }}
        >
            Not enough gems
        </Typography>
    )

    return (
        <Grid container justify="center" alignItems="center">
            <Container maxWidth="md">
                <Grid container>
                    <Grid
                        item
                        xs={12}
                        style={{
                            marginBottom: theme.spacing(5),
                            marginTop: theme.spacing(7)
                        }}
                    >
                        <Typography
                            align="center"
                            variant="h4"
                            style={{
                                color: lessonSuccess
                                    ? highlightColors.green
                                    : highlightColors.red
                            }}
                        >
                            {lessonSuccess
                                ? "Lesson finished"
                                : "Lesson failed"}
                        </Typography>
                        <Typography align="center" component="div" variant="h5">
                            <DotDotDotText>{props.lesson.text}</DotDotDotText>
                        </Typography>
                    </Grid>

                    {generateValItem(
                        "Speed:",
                        numberToRoundedString(result.wpm, 2) + " WPM"
                    )}
                    {generateValItem(
                        "Accuracy:",
                        numberToRoundedString(result.accuracy, 4)
                    )}
                    {generateValItem(
                        "Max streak:",
                        result.maxStreak + " words"
                    )}
                    {generateValItem(
                        "Lives left:",
                        `${result.livesLeft} / ${result.maxLives}`
                    )}
                    {generateValItem(
                        <span>
                            <DiamondIcon width={28} /> earned:
                        </span>,
                        lessonSuccess ? result.gemsEarned : 0,
                        !lessonSuccess
                    )}
                    {generateValItem(
                        "XP earned:",
                        lessonSuccess ? props.lesson.xpForSuccess : 0,
                        !lessonSuccess
                    )}

                    <Grid item xs={12} style={{ height: theme.spacing(6) }}>
                        &nbsp;
                    </Grid>
                    <Grid item xs={4} style={{ textAlign: "center" }}>
                        <Button onClick={props.onStatsClicked}>
                            View Stats
                        </Button>
                    </Grid>
                    <Grid item xs={4} style={{ textAlign: "center" }}>
                        <TooltipWrapper
                            title={notEnoughInfo}
                            placement="top"
                            disabled={!props.repeatDisabled}
                        >
                            <Button
                                disabled={props.repeatDisabled}
                                onClick={props.onRepeatClicked}
                            >
                                Repeat lesson
                            </Button>
                        </TooltipWrapper>
                    </Grid>
                    <Grid item xs={4} style={{ textAlign: "center" }}>
                        <Button onClick={props.onChooseAnotherLessonClicked}>
                            Choose another lesson
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </Grid>
    )
}

export default GameResultDisplay
