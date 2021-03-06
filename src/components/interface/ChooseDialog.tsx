import { Button, Card, Grid, Typography, useTheme } from "@material-ui/core"
import React, { FC } from "react"

type Props = {
    onYes: () => void
    onNo: () => void
    yesText?: string
    noText?: string
    hideButtons?: boolean
    noBackground?: boolean
}

const ChooseDialog: FC<Props> = props => {
    const theme = useTheme()

    const yesText = props.yesText ? props.yesText : "Yes"
    const noText = props.noText ? props.noText : "No"

    return (
        <Card
            style={{
                padding: theme.spacing(4),
                background: props.noBackground ? "none" : ""
            }}
        >
            <div>{props.children}</div>
            {!props.hideButtons && (
                <Grid
                    container
                    spacing={4}
                    alignItems="center"
                    justify="center"
                    style={{ marginTop: theme.spacing(1.5) }}
                >
                    <Grid item>
                        <Button onClick={props.onYes}>
                            {props.noBackground ? (
                                yesText
                            ) : (
                                <Typography component="span">
                                    {yesText}
                                </Typography>
                            )}
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button onClick={props.onNo}>
                            {props.noBackground ? (
                                noText
                            ) : (
                                <Typography component="span">
                                    {noText}
                                </Typography>
                            )}
                        </Button>
                    </Grid>
                </Grid>
            )}
        </Card>
    )
}

export default ChooseDialog
