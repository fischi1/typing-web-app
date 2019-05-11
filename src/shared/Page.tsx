import React, { FC, ReactNode } from "react";
import { Theme, createStyles, withStyles, AppBar, Toolbar, WithStyles } from '@material-ui/core';
import cn from "classnames";

const styles = (theme : Theme) => createStyles({
    pageContainer: {
        backgroundColor: theme.palette.primary.light
    }
});

type Props = {
    children: ReactNode
} & WithStyles<typeof styles>;

const Page : FC<Props> = (props : Props) => {
    const {classes} = props;

    return <div className={cn("page", classes.pageContainer)} >
    
        <AppBar position="static">
            <Toolbar>
                Shim
            </Toolbar>
        </AppBar>
        {props.children}
    </div>;
}

export default withStyles(styles)(Page);