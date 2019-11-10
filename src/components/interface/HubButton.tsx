import React, { FC } from "react";
import { Button, Typography } from "@material-ui/core";

type Props = {
    onClick: () => void
}

const HubButton: FC<Props> = props => (
    <div>
        <Button component="h6" onClick={props.onClick}>
            <Typography color="inherit" variant="h6" style={{textTransform: "none"}}>
                {props.children}
            </Typography>                    
        </Button>
    </div>
)

export default HubButton;