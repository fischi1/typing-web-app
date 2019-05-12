import React, { FC } from 'react';
import { withStyles, WithStyles, createStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core';
import DiamondDisplay from './DiamondDisplay';
import LevelProgressionDisplay from './LevelProgressionDisplay';

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
            <LevelProgressionDisplay additionalProps={ {style:{marginRight: "8px"}} } username="Username" lvl={123} curXP={1234} nextLvlXP={9999}/>
            <DiamondDisplay />
        </div>
    );
}

export default withStyles(styles)(AccountInformation);
