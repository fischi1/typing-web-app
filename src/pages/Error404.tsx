import React, { FC } from "react";
import { Typography, createStyles, Theme, WithStyles, withStyles } from "@material-ui/core";
import { RouteComponentProps } from "react-router";
import Page from "../shared/Page";

const styles = (theme: Theme) => createStyles({
    message: {
        paddingTop: theme.spacing.unit
    }
});

type Props = RouteComponentProps & WithStyles<typeof styles>;

const Error404 : FC<Props> = (props : Props) => {
    return <Page>
        <Typography variant="h5" align="center" className={props.classes.message}>Not Found</Typography>
    </Page>; 
}

export default withStyles(styles)(Error404);