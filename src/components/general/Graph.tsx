import { Card, Typography, useTheme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { FC, useEffect, useRef } from "react";
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, TooltipProps, XAxis, YAxis } from "recharts";
import { MappedDataType } from "../../functions/mapData";
import { highlightColors } from "../../highlightColors";
import { GraphType } from "../../pages/Stats";

const useStyles = makeStyles({
    '@global': {
        '.recharts-cartesian-axis-tick-value': {
            fontFamily: "m5x7",
            fontSize: "1.2vw"
        }
    }
});

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
    mappedData: MappedDataType[],
    type: GraphType,
    color: string
}

const Graph: FC<Props> = props => {

    const drawRef = useRef(0);

    useEffect(() => {
        drawRef.current++;
    }, [props.type, props.mappedData])

    useStyles();

    const mappedData = props.mappedData;

    return (
        <div style={{position: "relative", width: "100%", height: "calc(100% - 110px)"}}>
            <ResponsiveContainer
                width="100%" height="100%"
            >
                <LineChart 
                    data={mappedData}
                    margin={{top: 5, right: 30, left: 20, bottom: 5}}
                    key={drawRef.current}
                >
                    <XAxis
                        dataKey="dayDate"
                        type="number"    
                        domain={mappedData.length > 0 ?
                            [mappedData[0].dayDate, mappedData[mappedData.length-1].dayDate] :
                            ["auto", "auto"]
                        }
                        tickFormatter = {dateNumberToDateStr}
                        stroke={highlightColors.white}
                    />
                    <YAxis
                        stroke={highlightColors.white}
                    />
                    <CartesianGrid strokeDasharray="7 7"/>
                    <Tooltip
                        content={<CustomTooltip />}
                    />
                    <Line type="monotone" dataKey={props.type} stroke={props.color} strokeWidth={3}/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Graph;