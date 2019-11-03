import { Container, Grid, Typography, useTheme, Button } from "@material-ui/core";
import React, { FC, ReactNode } from "react";
import lessonsData from "../../data/lessonsDataImport";
import numberToRoundedString from "../../functions/numberToRoundedString";
import { GameResultType } from "../../types/GameResultType";
import DotDotDotText from "./DotDotDotText";
import DiamondIcon from "./DiamondIcon";
import { highlightColors } from "../../highlightColors";

type Props = {
    result: GameResultType
}

const GameResultDisplay: FC<Props> = props => {

    const result = props.result;
    console.log(result);
    const lesson = lessonsData.data[result.lessonUuid];

    const theme = useTheme();

    const lessonSuccess = result.resultType === "DONE";

    if(!lesson)
        return (
            <Typography color="error">
                Lesson with id {result.lessonUuid} not found!
            </Typography>
        )
        
    const generateValItem = (label: ReactNode, value: ReactNode, textRed?: boolean) => {
        return <>
            <Grid item xs={2}>
                <Typography>
                    {label}
                </Typography>
            </Grid>
            <Grid item xs={4}>
                <Typography style={{color: textRed ? highlightColors.red : highlightColors.blue}}>
                    {value}
                </Typography>
            </Grid>
        </>
    }

    return (
        <Grid container justify="center" alignItems="center">
            <Container maxWidth="md">
                <Grid container>
                    <Grid item xs={12} style={{marginBottom: theme.spacing(5), marginTop: theme.spacing(7)}}>
                        <Typography align="center" variant="h4" style={{color: lessonSuccess ? highlightColors.green : highlightColors.red}}>
                            {lessonSuccess ? "Lesson finished" : "Lesson failed"}
                        </Typography>
                        <Typography align="center" component="div" variant="h5">
                            <DotDotDotText>
                                {lesson.text + lesson.text + lesson.text + lesson.text + lesson.text}
                            </DotDotDotText>
                        </Typography>
                    </Grid>

                    {generateValItem("Speed:", numberToRoundedString(result.wpm, 2) + " WPM")}
                    {generateValItem("Accuracy:", numberToRoundedString(result.accuracy, 4))}
                    {generateValItem("Max streak:", result.maxStreak + " words")}
                    {generateValItem("Lives left:", 999)}
                    {generateValItem(
                        <span>
                            <DiamondIcon width="28px" /> earned:
                        </span>,
                        lessonSuccess ? result.gemsEarned : 0,
                        !lessonSuccess
                    )}
                    {generateValItem("XP earned:", lessonSuccess ? lesson.xpForSuccess : 0, !lessonSuccess)}

                    <Grid item xs={12} style={{height: theme.spacing(6)}}>
                        &nbsp;
                    </Grid>
                    <Grid item xs={4} style={{textAlign: "center"}}>
                        <Button>View stats</Button>
                    </Grid>
                    <Grid item xs={4} style={{textAlign: "center"}}>
                        <Button>Repeat lesson</Button>
                    </Grid>
                    <Grid item xs={4} style={{textAlign: "center"}}>
                        <Button>Choose another lesson</Button>
                    </Grid>
                </Grid>
            </Container>
        </Grid>
    )
}

export default GameResultDisplay;