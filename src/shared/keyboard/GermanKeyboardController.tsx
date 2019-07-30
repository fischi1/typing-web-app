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
    console.log(keysState);

    return <>
        <div className={classes.container}>
            <GermanKeyBoardImage />
        </div>
    </>;
}

export default withStyles(styles)(GermanKeyboardController);