import React, { FC } from "react";
import { Typography, createStyles, Theme, WithStyles, withStyles } from "@material-ui/core";
import { RouteComponentProps } from "react-router";
import cn from "classnames";

const styles = (theme: Theme) => createStyles({
    container: {
        flex: "1 1 100%",
        backgroundColor: theme.palette.primary.dark,
        padding: theme.spacing.unit,
        color: theme.palette.primary.contrastText
    }
  });

type Props = RouteComponentProps & WithStyles<typeof styles>;


const Home : FC<Props> = (props : Props) => {
    console.log(props);
    const {classes} = props;
    return <div className={cn(classes.container, "page")}>     
        <Typography variant="h4" color="inherit">
            Home
        </Typography>
      
        <Typography paragraph color="inherit">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent
            elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in
            hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum
            velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing.
            Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis
            viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo.
            Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus
            at augue. At augue eget arcu dictum varius duis at consectetur lorem. Velit sed
            ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac.
        </Typography>
      
      <Typography paragraph color="inherit">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent
          elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in
          hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum
          velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing.
          Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis
          viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo.
          Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus
          at augue. At augue eget arcu dictum varius duis at consectetur lorem. Velit sed
          ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac.
      </Typography>
      
      <Typography paragraph color="inherit">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent
          elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in
          hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum
          velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing.
          Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis
          viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo.
          Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus
          at augue. At augue eget arcu dictum varius duis at consectetur lorem. Velit sed
          ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac.
      </Typography>
      
      <Typography paragraph color="inherit">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent
          elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in
          hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum
          velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing.
          Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis
          viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo.
          Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus
          at augue. At augue eget arcu dictum varius duis at consectetur lorem. Velit sed
          ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac.
      </Typography>
      
      <Typography paragraph color="inherit">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent
          elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in
          hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum
          velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing.
          Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis
          viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo.
          Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus
          at augue. At augue eget arcu dictum varius duis at consectetur lorem. Velit sed
          ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac.
      </Typography>
      
      <Typography paragraph color="inherit">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent
          elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in
          hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum
          velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing.
          Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis
          viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo.
          Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus
          at augue. At augue eget arcu dictum varius duis at consectetur lorem. Velit sed
          ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac.
      </Typography>
      
      <Typography paragraph color="inherit">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent
          elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in
          hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum
          velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing.
          Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis
          viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo.
          Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus
          at augue. At augue eget arcu dictum varius duis at consectetur lorem. Velit sed
          ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac.
      </Typography>
      
      <Typography paragraph color="inherit">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent
          elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in
          hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum
          velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing.
          Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis
          viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo.
          Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus
          at augue. At augue eget arcu dictum varius duis at consectetur lorem. Velit sed
          ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac.
      </Typography>
      
      <Typography paragraph color="inherit">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent
          elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in
          hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum
          velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing.
          Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis
          viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo.
          Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus
          at augue. At augue eget arcu dictum varius duis at consectetur lorem. Velit sed
          ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac.
      </Typography>
    </div>; 
}

export default withStyles(styles)(Home);