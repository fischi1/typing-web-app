import React, { ReactNode, useState, FC } from 'react';
import { withStyles, WithStyles, createStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { AppBar, Toolbar, IconButton, Typography, Theme } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import PersonIcon from '@material-ui/icons/Person';
import ErrorIcon from '@material-ui/icons/Error';
import { Link as RouterLink } from 'react-router-dom';
import Logo from './shared/Logo';
import AccountInformation from './shared/AccountInformation';

const styles = (theme: Theme) => createStyles({
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
        marginRight: theme.spacing.unit * 1.5,
        marginLeft: theme.spacing.unit * 1.5
    }
  });

type Props = {
    children: ReactNode
} & WithStyles<typeof styles>;

const TemporaryDrawer : FC<Props> = (props) => {
    
    const { classes, children} = props;

    const [open, setOpen] = useState<boolean>(false);
    var closeDrawer = () : void => setOpen(false);
    
    const sideList = (
        <div className={classes.list}>
            <List>
                <ListItem button {...{component: RouterLink, to: `/`} as any} onClick={closeDrawer}>
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText>
                        Home
                    </ListItemText>
                </ListItem>
                <ListItem button {...{component: RouterLink, to: `/about`} as any} onClick={closeDrawer}>
                    <ListItemIcon>
                        <PersonIcon />
                    </ListItemIcon>
                    <ListItemText>
                        About
                    </ListItemText>
                </ListItem>
                <ListItem button {...{component: RouterLink, to: `/asdf`} as any} onClick={closeDrawer}>
                    <ListItemIcon>
                        <ErrorIcon />
                    </ListItemIcon>
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
                            <MenuIcon />
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

export default withStyles(styles)(TemporaryDrawer);
