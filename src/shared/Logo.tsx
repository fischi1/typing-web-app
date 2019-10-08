import { Typography } from '@material-ui/core';
import React, { FC } from 'react';
import dog from "../assets/images/dog.gif";

type Props = {
};

const Logo : FC<Props> = props => {

    return (
        <div>
            <Typography variant="h1" >
                Typing Web App
            </Typography>
            <img src={dog} alt="Dog"/>
        </div>
    );
}

export default Logo;
