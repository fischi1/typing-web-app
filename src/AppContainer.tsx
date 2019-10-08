import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ErrorIcon from '@material-ui/icons/Error';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import PersonIcon from '@material-ui/icons/Person';
import React, { FC, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import AccountInformation from './shared/AccountInformation';
import Logo from './shared/Logo';

type Props = {
};

const TemporaryDrawer : FC<Props> = props => {
    
    const { children } = props;

    const [open, setOpen] = useState<boolean>(false);
    var closeDrawer = () : void => setOpen(false);
    
    const sideList = (
        <div>
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
            <AppBar position="sticky">
                <Toolbar disableGutters>
                    <div>
                        <IconButton
                        color="inherit"
                        aria-label="Open drawer"
                        onClick={() => setOpen(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h1">
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
