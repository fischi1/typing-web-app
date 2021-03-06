import { Grid } from "@material-ui/core"
import React, { FC, ReactNode } from "react"
import { GraphType } from "../../pages/Stats"
import StatButton from "../interface/StatButton"

type Props = {
    activeDataType: GraphType
    onDataTypeChange: (val: GraphType) => void
    wpmValue: ReactNode
    wpmColor: string
    accuracyValue: ReactNode
    accuracyColor: string
    highestStreakValue: ReactNode
    highestStreakColor: string
    lessonsFinishedValue: ReactNode
    lessonsFinishedColor: string
}

export const statButtonsHeight = "110px"

const StatButtons: FC<Props> = props => (
    <Grid container style={{ height: statButtonsHeight }}>
        <Grid item sm={3}>
            <StatButton
                active={props.activeDataType === "wpm"}
                color={props.wpmColor}
                label="WPM"
                value={props.wpmValue}
                onClick={() => props.onDataTypeChange("wpm")}
            />
        </Grid>
        <Grid item sm={3}>
            <StatButton
                active={props.activeDataType === "accuracy"}
                color={props.accuracyColor}
                label="Accuracy"
                value={props.accuracyValue}
                onClick={() => props.onDataTypeChange("accuracy")}
            />
        </Grid>
        <Grid item sm={3}>
            <StatButton
                active={props.activeDataType === "maxStreak"}
                color={props.highestStreakColor}
                label="Highest Streak"
                value={props.highestStreakValue}
                onClick={() => props.onDataTypeChange("maxStreak")}
            />
        </Grid>
        <Grid item sm={3}>
            <StatButton
                active={props.activeDataType === "lessonAmount"}
                color={props.lessonsFinishedColor}
                label="Lessons completed"
                value={props.lessonsFinishedValue}
                onClick={() => props.onDataTypeChange("lessonAmount")}
            />
        </Grid>
    </Grid>
)

export default StatButtons
