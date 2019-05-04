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
import { Link as RouterLink } from 'react-router-dom';

const styles = (theme: Theme) => createStyles({
    list: {
      width: 250,
    },
    content: {
        display: "flex",
        flexFlow: "column",
        flexDirection: "column",
        minHeight: "100%",
        height: "100%",
        backgroundColor: "red" 
    },
    header: {
        color: theme.palette.primary.contrastText
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
          </List>
        </div>
      );

    return (
        <>
          <AppBar position="sticky">
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={() => setOpen(true)}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" className={classes.header}>
                Mini variant drawer
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer open={open} onClose={() => setOpen(false)}>
              {sideList}
          </Drawer>
          <div className={classes.content}>
              {children}
          </div>
        </>
    );
}

export default withStyles(styles)(TemporaryDrawer);
