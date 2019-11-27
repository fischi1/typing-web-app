import { Typography, useTheme } from "@material-ui/core";
import React, { FC, ReactNode } from "react";
import HighlightButton from "./HighlightButton";

type Props = {
    active?: boolean,
    color: string,
    label: ReactNode,
    value: ReactNode,
    onClick: () => void
}

const StatButton: FC<Props> = props => {

    const theme = useTheme();

    return (
        <HighlightButton
            active={props.active}
            color={props.color}
            onClick={props.onClick}
        >
            <div>
                <Typography component="div" style={{color: props.color}}>{props.label}</Typography>
            </div>
            <div style={{paddingBottom: theme.spacing(1), marginTop: theme.spacing(-1.2)}}>
                <Typography variant="h5">{props.value}</Typography>
            </div>
        </HighlightButton>
    )
    
}

export default StatButton;