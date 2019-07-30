import { createStyles, withStyles, WithStyles } from "@material-ui/core";
import React, { FC } from "react";
import GermanKeyBoardImage from "./GermanKeyboardImage/GermanKeyboardImage";
import useGermanKeysState from "./useGermanKeysState";

const styles = () => createStyles({
    container: {
        textAlign: "center"
    }
});

type Props = {
} & WithStyles<typeof styles>;

const GermanKeyboardController : FC<Props> = (props : Props) => {
    const {classes} = props;    

    const keysState = useGermanKeysState({});
    // const keys = Object.keys(keysState);
    // var numbers : Record<number, boolean> = {};
    // keys.forEach(key => {
    //     if(keysState[+key])
    //         numbers[+key] = keysState[+key];
    // })
    // console.log(numbers);

    return <>
        <div className={classes.container}>
            <GermanKeyBoardImage keysState={keysState} />
        </div>
    </>;
}

export default withStyles(styles)(GermanKeyboardController);