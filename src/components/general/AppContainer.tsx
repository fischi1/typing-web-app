import { AppBar, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import React, { FC, useState } from 'react';
import MenuDrawer from './MenuDrawer';
import AccountInformation from '../interface/AccountInformation';
import Logo from '../interface/Logo';


const useStyles = makeStyles(theme => ({
    appbar: {
        backgroundColor: theme.palette.primary.dark,
        borderBottom: "2px solid " + theme.palette.primary.contrastText,
        height: "64px",
        boxShadow: "none"
    },
    header: {
        fontSize: "2.4rem"
    },
    leftHeader: {
        flex: "0 0 33%",
        display: "flex"
    },
    burgerMenuButton: {
        padding: "0px",
        marginRight: theme.spacing(1.5),
        marginLeft: theme.spacing(1.5)
    },
    burgerMenuIcon: {
        width: "0.7em",
        height: "0.7em"
    }
}));

type Props = {
};

const TemporaryDrawer : FC<Props> = props => {
    
    const { children } = props;

    const classes = useStyles();

    const [open, setOpen] = useState<boolean>(false);

    return (
        <>
            <AppBar position="sticky" className={classes.appbar}>
                <Toolbar disableGutters>
                    <div className={classes.leftHeader}>
                        <IconButton
                        color="inherit"
                        aria-label="Open drawer"
                        onClick={() => setOpen(true)}
                        className={classes.burgerMenuButton}
                        >
                            <MenuIcon fontSize="small" className={classes.burgerMenuIcon}/>
                        </IconButton>
                        <Typography variant="h1" className={classes.header}>
                            Level 123
                        </Typography>
                    </div>
                    <Logo />
                    <AccountInformation />
                </Toolbar>
            </AppBar>
            <MenuDrawer 
                open={open}
                onClose={() => setOpen(false)}
            />
            {children}
        </>
    );
}

export default TemporaryDrawer;