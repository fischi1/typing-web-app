import React, { FC } from 'react';
import DiamondDisplay from './DiamondDisplay';
import LevelProgressionDisplay from './LevelProgressionDisplay';

type Props = {
};

const AccountInformation : FC<Props> = props => {
    return (
        <div>
            <LevelProgressionDisplay  username="Username" lvl={123} curXP={1234} nextLvlXP={9999}/>
            <DiamondDisplay />
        </div>
    );
}

export default AccountInformation;
