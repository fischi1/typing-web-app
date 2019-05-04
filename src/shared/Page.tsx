import React, { FC, ReactNode } from "react";
import { Theme, createStyles, withStyles, AppBar, Toolbar } from '@material-ui/core';

const styles = (theme : Theme) => createStyles({

});

type Props = {
    children: ReactNode
};

const Page : FC<Props> = (props : Props) => {
    return <div className="page">
    
        <AppBar position="static">
            <Toolbar>
                Shim
            </Toolbar>
        </AppBar>
        {props.children}
    </div>;
}

export default withStyles(styles)(Page);