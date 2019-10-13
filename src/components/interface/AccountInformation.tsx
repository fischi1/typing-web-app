import React, { FC } from 'react';
import DiamondDisplay from './DiamondDisplay';
import LevelProgressionDisplay from './LevelProgressionDisplay';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    rightHeader: {
        flex: "0 0 33%",
        display: "flex",
        justifyContent: "flex-end"
    }
})

type Props = {
};

const AccountInformation : FC<Props> = props => {

    const classes = useStyles();

    return (
        <div className={classes.rightHeader}>
            <LevelProgressionDisplay  username="Username" lvl={123} curXP={1234} nextLvlXP={9999}/>
            <DiamondDisplay />
        </div>
    );
}

export default AccountInformation;
