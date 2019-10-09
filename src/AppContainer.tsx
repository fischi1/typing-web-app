import { AppBar, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import React, { FC, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import AccountInformation from './shared/AccountInformation';
import Logo from './shared/Logo';


const useStyles = makeStyles(theme => ({
    list: {
      width: 300,
    },
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
    var closeDrawer = () : void => setOpen(false);
    
    const sideList = (
        <div>
            <List className={classes.list}>
                <ListItem button {...{component: RouterLink, to: `/`} as any} onClick={closeDrawer}>
                    <ListItemText>
                        Home
                    </ListItemText>
                </ListItem>
                <ListItem button {...{component: RouterLink, to: `/about`} as any} onClick={closeDrawer}>
                    <ListItemText>
                        About
                    </ListItemText>
                </ListItem>
                <ListItem button {...{component: RouterLink, to: `/asdf`} as any} onClick={closeDrawer}>
                    <ListItemText>
                        Wrong link you got
                    </ListItemText>
                </ListItem>
            </List>
        </div>
    );

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
            <Drawer open={open} onClose={() => setOpen(false)}>
                {sideList}
            </Drawer>
            {children}
        </>
    );
}

export default TemporaryDrawer;
