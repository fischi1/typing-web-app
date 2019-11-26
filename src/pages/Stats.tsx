import React, { FC, useState, useEffect } from "react";
import { useGameResultHistoryState } from "../components/context/GameResultHistoryProvider";
import { useSetTitleOnMount } from "../components/context/TitleProvider";
import Graph from "../components/general/Graph";
import mapData, { MappedDataType } from "../functions/mapData";
import StatButtons from "../components/general/StatButtons";
import { highlightColors } from "../highlightColors";

export type GraphType = "wpm" | "accuracy" | "maxStreak" | "lessonAmount";

const Stats : FC<{}> = () => {
    
    useSetTitleOnMount("Stats");

    const gameResultHistory = useGameResultHistoryState();

    const [ graphType, setGraphType ] = useState<GraphType>("wpm");

    const [ data, setData ] = useState<MappedDataType[]>([]);

    useEffect(() => {
        setData(mapData(gameResultHistory.history));
    }, [gameResultHistory.history]);

    const getColorForType = (type: GraphType) => {
        switch(type) {
            case "wpm":
                return highlightColors.blue;
            case "accuracy":
                return highlightColors.yellow;
            case "maxStreak":
                return highlightColors.green;
            case "lessonAmount":
                return highlightColors.red;
        }
    }

    return (
        <>
            <StatButtons
                activeDataType={graphType}
                onDataTypeChange={setGraphType}
                wpmValue={<>&nbsp;</>}
                wpmColor={getColorForType("wpm")}
                accuracyValue="a"
                accuracyColor={getColorForType("accuracy")}
                highestStreakValue="a"
                highestStreakColor={getColorForType("maxStreak")}
                lessonsFinishedValue="a"
                lessonsFinishedColor={getColorForType("lessonAmount")}
            />
            <Graph
                mappedData={data}
                type={graphType}
                color={getColorForType(graphType)}
            />
        </>
    ); 
}

export default Stats;