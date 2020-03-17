import { Button, Typography } from "@material-ui/core"
import React, { FC } from "react"

type Props = {
    onClick?: () => void
    type?: "button" | "submit"
    disabled?: boolean
}

const HubButton: FC<Props> = props => (
    <div>
        <Button
            onClick={props.onClick}
            type={props.type ?? "button"}
            disabled={props.disabled}
        >
            <Typography
                color="inherit"
                variant="h6"
                style={{ textTransform: "none" }}
            >
                {props.children}
            </Typography>
        </Button>
    </div>
)

export default HubButton
