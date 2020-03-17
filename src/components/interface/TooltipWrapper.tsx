import { Tooltip } from "@material-ui/core"
import { CSSProperties } from "@material-ui/styles"
import React, { ComponentProps, FC } from "react"

type Props = {
    disabled?: boolean
    wrapperStyle?: CSSProperties
    wrapperClassName?: string
} & ComponentProps<typeof Tooltip>

const TooltipWrapper: FC<Props> = ({
    disabled,
    children,
    wrapperClassName,
    wrapperStyle,
    ...restProps
}) => (
    <>
        {disabled ? (
            <>{children}</>
        ) : (
            <Tooltip {...restProps}>
                <div className={wrapperClassName} style={wrapperStyle}>
                    {children}
                </div>
            </Tooltip>
        )}
    </>
)

export default TooltipWrapper
