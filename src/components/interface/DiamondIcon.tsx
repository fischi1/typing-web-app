import clsx from 'clsx';
import React, { FC } from 'react';
import diamond from "../../assets/images/diamond.png";
import diamond56 from "../../assets/images/diamond56.png";
import diamond80 from "../../assets/images/diamond80.png";
import { pixelatedStyleClass } from '../../hooks/useGlobalPixelatedStyle';
import { makeStyles } from '@material-ui/core';

type Props = {
    className?: string,
    width?: number
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
    
    const chooseImage = () => {
        switch(props.width) {
            case 28:
                return {image: diamond56, pixelated: false};
            case 40:
                return {image: diamond80, pixelated: true};
        }

        if(props.width && props.width < 20)
            return {image: diamond, pixelated: false};
    
        return {image: diamond, pixelated: true};
    }

    const imgInfo = chooseImage();
    return (

        <img
            src={imgInfo.image}
            alt="gems"
            className={clsx({[pixelatedStyleClass]: imgInfo.pixelated}, classes.diamondIcon, props.className)}
        />
    );
}

export default DiamondIcon;
