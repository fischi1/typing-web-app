import React, { FC } from 'react';
import { withStyles, WithStyles, createStyles } from '@material-ui/core/styles';
import { Theme, Typography } from '@material-ui/core';
import DiamondDisplay from './DiamondDisplay';

const styles = (theme: Theme) => createStyles({
    container: {
        flex: "0 0 33%",
        textAlign: "right",
        display:"flex",
        justifyContent:"flex-end"
    }
});
type Props = {
} & WithStyles<typeof styles>;

const AccountInformation : FC<Props> = (props) => {
    const {classes} = props;

    return (
        <div className={classes.container}>
            <Typography paragraph>
                asdf
            </Typography>
            <DiamondDisplay />
        </div>
    );
}

export default withStyles(styles)(AccountInformation);
