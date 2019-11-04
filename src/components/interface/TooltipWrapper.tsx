import { Tooltip } from "@material-ui/core";
import React, { ComponentProps, FC } from "react";
import { CSSProperties } from "@material-ui/styles";

type Props = {
    disabled?: boolean,
    wrapperStyle?: CSSProperties,
    wrapperClassName?: string
} & ComponentProps<typeof Tooltip>;

const TooltipWrapper: FC<Props> = props => {    
    const {children, wrapperClassName, wrapperStyle, ...restProps} = props;

    return <>
        {props.disabled ? (
            <>{children}</>
        ) : (
            <Tooltip {...restProps}>
                <div className={props.wrapperClassName} style={wrapperStyle}>
                    {children}
                </div>
            </Tooltip>
        )}
    </>
}

export default TooltipWrapper;