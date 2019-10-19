import React, { FC, ComponentProps } from 'react';
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

type Props =
    ComponentProps<typeof LevelProgressionDisplay> &
    ComponentProps<typeof DiamondDisplay>;

const AccountInformation : FC<Props> = props => {

    const classes = useStyles();

    return (
        <div className={classes.rightHeader}>
            <LevelProgressionDisplay  username={props.username} lvl={props.lvl} curXP={props.curXP} nextLvlXP={props.nextLvlXP}/>
            <DiamondDisplay gems={props.gems} />
        </div>
    );
}

export default AccountInformation;
