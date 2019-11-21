import React, { FC } from "react";
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { useGameResultHistoryState } from "../components/context/GameResultHistoryProvider";
import { useSetTitleOnMount } from "../components/context/TitleProvider";
import mapData from "../functions/mapData";
import { highlightColors } from "../highlightColors";

const Stats : FC<{}> = () => {
    
    useSetTitleOnMount("Stats");

    const gameResultHistory = useGameResultHistoryState();

    const data = mapData(gameResultHistory.history);

    const tickFormatter = (time: number) => {
        const date = new Date(time * (1000 * 3600 * 24));
        return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;
    }

    return (
        <>
            <div style={{position: "relative", width: "100%", height: "90%", backgroundColor: highlightColors.white}}>
                <ResponsiveContainer
                    width="100%" height="100%"
                >
                    <LineChart 
                        data={data}
                        margin={{top: 5, right: 30, left: 20, bottom: 5}}
                    >
                        <XAxis
                            dataKey="dayDate"
                            type="number"    
                            domain = {['auto', 'auto']}
                            tickFormatter = {tickFormatter}
                        />
                        <YAxis/>
                        <CartesianGrid strokeDasharray="3 3"/>
                        <Tooltip/>
                        <Legend />
                        <Line type="monotone" dataKey="wpm" stroke={highlightColors.darkgray} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </>
    ); 
}

export default Stats;