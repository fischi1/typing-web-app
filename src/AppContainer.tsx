import React, { ReactNode } from 'react';
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
    fullList: {
      width: 'auto',
    },
    content: {
        padding: theme.spacing.unit
    }
  });

type Props = {
    children: ReactNode[]
} & WithStyles<typeof styles>;

type State = {
    open: boolean
};

class TemporaryDrawer extends React.Component<Props,State> {
  constructor(props : Props) {
      super(props);
      this.state = {
        open: false
      };
  }

  render() {
    const { classes, children } = this.props;

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
              onClick={() => this.setState({open:true})}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              Mini variant drawer
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer open={this.state.open} onClose={() => this.setState({open: false})}>
            {sideList}
        </Drawer>
        <div className={classes.content}>
            {children}
        </div>
      </>
    );
  }
}

export default withStyles(styles)(TemporaryDrawer);
