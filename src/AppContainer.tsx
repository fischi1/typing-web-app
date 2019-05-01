import React, { ReactNode, SFC, useState } from 'react';
import { withStyles, WithStyles, createStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { AppBar, Toolbar, IconButton, Typography, Theme } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const styles = (theme: Theme) => createStyles({
    list: {
      width: 250,
    },
    content: {
        padding: theme.spacing.unit
    }
  });

type Props = {
    children: ReactNode[]
} & WithStyles<typeof styles>;

const TemporaryDrawer : SFC<Props> = (props) => {
    
    const { classes, children } = props;

    const [open, setOpen] = useState<boolean>(false);
    
    const sideList = (
        <div className={classes.list}>
          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
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
              <Typography variant="h6">
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
