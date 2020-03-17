import React, { FC, useEffect, useState } from "react"
import { useGameResultHistoryState } from "../components/context/GameResultHistoryProvider"
import { useSetTitleOnMount } from "../components/context/TitleProvider"
import { animationDurationMS } from "../components/general/AnimatedSwitch"
import Graph from "../components/general/Graph"
import StatButtons from "../components/general/StatButtons"
import averageOfGameResults from "../functions/averageOfGameResults"
import mapData, { MappedDataType } from "../functions/mapData"
import { highlightColors } from "../highlightColors"

export type GraphType = keyof MappedDataType

const Stats: FC<{}> = () => {
    useSetTitleOnMount("Stats")

    const gameResultHistory = useGameResultHistoryState()

    const [graphType, setGraphType] = useState<GraphType>("wpm")

    const [data, setData] = useState<MappedDataType[]>([])

    const [buttonData, setButtonData] = useState<Record<
        GraphType,
        string
    > | null>(null)

    const empty = <>&nbsp;</>

    useEffect(() => {
        const timeout = setTimeout(() => {
            const mappedData = mapData(gameResultHistory.history)
            setButtonData(averageOfGameResults(gameResultHistory.history))
            setData(mappedData)
        }, animationDurationMS + 50)

        return () => clearTimeout(timeout)
    }, [gameResultHistory.history])

    const getColorForType = (type: GraphType) => {
        switch (type) {
            case "wpm":
                return highlightColors.blue
            case "accuracy":
                return highlightColors.yellow
            case "maxStreak":
                return highlightColors.green
            case "lessonAmount":
                return highlightColors.red
            default:
                return highlightColors.white
        }
    }

    return (
        <>
            <StatButtons
                activeDataType={graphType}
                onDataTypeChange={setGraphType}
                wpmValue={buttonData ? buttonData.wpm : empty}
                wpmColor={getColorForType("wpm")}
                accuracyValue={buttonData ? buttonData.accuracy : empty}
                accuracyColor={getColorForType("accuracy")}
                highestStreakValue={buttonData ? buttonData.maxStreak : empty}
                highestStreakColor={getColorForType("maxStreak")}
                lessonsFinishedValue={
                    buttonData ? buttonData.lessonAmount : empty
                }
                lessonsFinishedColor={getColorForType("lessonAmount")}
            />
            <Graph
                mappedData={data}
                type={graphType}
                color={getColorForType(graphType)}
            />
        </>
    )
}

export default Stats
