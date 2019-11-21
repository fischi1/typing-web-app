import React, { FC } from "react";
import { TooltipProps, ResponsiveContainer, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line } from "recharts";
import { useTheme, Card, Typography } from "@material-ui/core";
import { MappedDataType } from "../../functions/mapData";
import { highlightColors } from "../../highlightColors";

const dateNumberToDateStr = (time: number) => {
    const date = new Date(time * (1000 * 3600 * 24));
    return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;
}

const CustomTooltip: FC<TooltipProps> = props => {
    const theme = useTheme();
    
    if(!props.active || !props.payload)
        return null;

    const payload = props.payload[0].payload as MappedDataType;

    return (
        <Card style={{paddingLeft: theme.spacing(1), paddingRight: theme.spacing(1)}}>            
            <Typography style={{color: highlightColors.blue}} variant="h6">{dateNumberToDateStr(+payload.dayDate)}</Typography>
            <Typography>Lessons finised: {payload.lessonAmount}</Typography>
            <Typography>WPM: {Math.round(payload.wpm * 100) / 100}</Typography>
            <Typography>Accuracy: {Math.round(payload.accuracy * 10000) / 10000}</Typography>
            <Typography>Max Streak: {payload.maxStreak}</Typography>
        </Card>
    )
}

type Props = {
    mappedData: MappedDataType[]
}

const Graph: FC<Props> = props => {

    return (
        <div style={{position: "relative", width: "100%", height: "90%"}}>
            <ResponsiveContainer
                width="100%" height="100%"
            >
                <LineChart 
                    data={props.mappedData}
                    margin={{top: 5, right: 30, left: 20, bottom: 5}}
                >
                    <XAxis
                        dataKey="dayDate"
                        type="number"    
                        domain = {['auto', 'auto']}
                        tickFormatter = {dateNumberToDateStr}
                        stroke={highlightColors.white}
                    />
                    <YAxis
                        stroke={highlightColors.white}
                    />
                    <CartesianGrid strokeDasharray="3 2"/>
                    <Tooltip
                        content={<CustomTooltip />}
                    />
                    <Legend />
                    <Line type="monotone" dataKey="wpm" stroke={highlightColors.white} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Graph;