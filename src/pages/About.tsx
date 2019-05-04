import React, { FC } from "react";
import { Typography, WithStyles, Card, CardContent, withStyles, createStyles, Theme } from "@material-ui/core";
import { RouteComponentProps } from "react-router";

const styles = (theme : Theme) => createStyles({
  card: {
    minWidth: 275,
    backgroundColor: theme.palette.secondary.main,
    marginBottom: theme.spacing.unit
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  container: {
      flex: "1 1 100%",
      backgroundColor: theme.palette.secondary.light,
      padding: theme.spacing.unit
  }
});

type Props = RouteComponentProps & WithStyles<typeof styles>;

const About : FC<Props> = (props : Props) => {
    const {classes} = props;

    const card = (
        <Card className={classes.card}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Word of the Day
                </Typography>
                <Typography variant="h5" component="h2">
                    benevolent
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                adjective
                </Typography>
                <Typography component="p">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
                </Typography>
            </CardContent>
        </Card>
    );

    return <div className={classes.container}>     
        <Typography variant="h4">
            About
        </Typography>
        {card}
        {card}
        {card}
        {card}
        {card}
        {card}
        {card}
        {card}
    </div>; 
}

export default withStyles(styles)(About);