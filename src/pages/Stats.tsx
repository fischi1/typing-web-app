import React, { FC } from "react";
import { useGameResultHistoryState } from "../components/context/GameResultHistoryProvider";
import { useSetTitleOnMount } from "../components/context/TitleProvider";
import Graph from "../components/general/Graph";
import mapData from "../functions/mapData";



const Stats : FC<{}> = () => {
    
    useSetTitleOnMount("Stats");

    const gameResultHistory = useGameResultHistoryState();

    const data = mapData(gameResultHistory.history);

    return (
        <>
            <Graph mappedData={data}/>
        </>
    ); 
}

export default Stats;