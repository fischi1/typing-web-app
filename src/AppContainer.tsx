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
import dog from "./assets/images/dog.gif";

const styles = (theme: Theme) => createStyles({
    list: {
      width: 300,
    },
    header: {
        color: theme.palette.primary.contrastText
    },
    appbar: {
        backgroundColor: theme.palette.primary.dark
    },
    headerIcon: {
        width: "50px",
        height: "50px",
        marginLeft: theme.spacing.unit * 1.5,
        imageRendering: "pixelated"
    },
    burgerMenuButton: {
        padding: "0px",
        marginRight: theme.spacing.unit * 1.5,
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
                <Toolbar>
                    <IconButton
                    color="inherit"
                    aria-label="Open drawer"
                    onClick={() => setOpen(true)}
                    className={classes.burgerMenuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.header}>
                        Typing Web App
                    </Typography>
                    <img src={dog} alt="Dog" className={classes.headerIcon}/>
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
