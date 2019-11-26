import { Button, Typography, useTheme } from "@material-ui/core";
import React, { FC, ReactNode } from "react";
import { highlightColors } from "../../highlightColors";

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
        <Button
            fullWidth
            style={{backgroundColor: props.active ? highlightColors.darkgray : ""}}
            onClick={props.onClick}
        >
            <div style={{textAlign: "left", width: "100%"}}>
                <div>
                    <Typography component="div" style={{color: props.color}}>{props.label}</Typography>
                </div>
                <div style={{paddingBottom: theme.spacing(1), marginTop: theme.spacing(-1.2)}}>
                    <Typography variant="h5">{props.value}</Typography>
                </div>
                <div style={{backgroundColor: props.color, lineHeight: "0.3rem"}}>
                    &nbsp;
                </div>
            </div>
        </Button>
    )
    
}

export default StatButton;