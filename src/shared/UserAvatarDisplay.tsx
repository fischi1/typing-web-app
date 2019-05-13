import React, { FC } from 'react';
import { withStyles, WithStyles, createStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core';

const styles = (theme: Theme) => createStyles({
});

type Props = {
} & WithStyles<typeof styles>;

const UserAvatarDisplay : FC<Props> = (props) => {    
    const { classes } = props;

    return (
        <div className={""}>
            asdf
        </div>
    );
}

export default withStyles(styles)(UserAvatarDisplay);
