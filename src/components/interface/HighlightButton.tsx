import React, { FC, ComponentProps } from "react";
import { Button } from "@material-ui/core";
import { highlightColors } from "../../highlightColors";

type Props = {
    active?: boolean,
    color?: string
} & Omit<ComponentProps<typeof Button>, "fullWidth" | "color">

const HighlightButton: FC<Props> = props => {

    const {style, color = highlightColors.white, active, children, ...restProps} = props

    return (        
        <Button
            fullWidth
            style={{...{backgroundColor: active ? highlightColors.darkgray : ""}, ...style}}
            {...restProps}
        >
            <div style={{textAlign: "left", width: "100%"}}>
                <div>
                    {children}
                </div>
                <div style={{backgroundColor: color, lineHeight: "0.3rem"}}>
                    &nbsp;
                </div>
            </div>
        </Button>
    )
}

export default HighlightButton;