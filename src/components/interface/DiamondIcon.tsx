import clsx from 'clsx';
import React, { FC } from 'react';
import diamond from "../../assets/images/diamond.png";
import { pixelatedStyleClass } from '../../hooks/useGlobalPixelatedStyle';
import { makeStyles } from '@material-ui/core';

type Props = {
    className?: string,
    width?: string
};

const useStyles = makeStyles({
    diamondIcon: {
        width: (props: Props) => props.width ? props.width : "50px",
        height: "auto",
        display: "inline-block"
    }
});

const DiamondIcon : FC<Props> = (props) => {
    const classes = useStyles(props);

    return (
        <img
            src={diamond}
            alt="gems"
            className={clsx(pixelatedStyleClass, classes.diamondIcon, props.className)}
        />
    );
}

export default DiamondIcon;
