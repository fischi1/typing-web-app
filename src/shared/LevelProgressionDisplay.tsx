import { Typography } from '@material-ui/core';
import React, { FC } from 'react';

type Props = {
    username: string,
    lvl: number,
    curXP: number,
    nextLvlXP: number,
    className?: string
};

const LevelProgressionDisplay : FC<Props> = props => {    
    const {username, lvl, curXP, nextLvlXP, className } = props;

    return (
        <div className={className}>
            <div>
                <Typography>{username}</Typography>
                <Typography>Lvl{lvl}</Typography>
            </div>
            <div>
                <div style={{width:`${calculatePercentXPBar(curXP, nextLvlXP)}%`}}/>
                <div style={{flex:"1 0 auto"}}/>
            </div>
            <div >
                <Typography>{curXP}/{nextLvlXP}</Typography>
            </div>
        </div>
    );
}

function calculatePercentXPBar(cur : number, nextLvlUp: number) : number {
    return (cur / nextLvlUp) * 100;
}

export default LevelProgressionDisplay;
