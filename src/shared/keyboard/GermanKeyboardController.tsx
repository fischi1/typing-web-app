import React, { FC } from "react";
import { createStyles, withStyles, WithStyles } from "@material-ui/core";
import GermanKeyboardSVG from "./GermanKeyboardSVG";
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

    const keysState = useGermanKeysState();

    return <>
        <div className={classes.container}>
            <GermanKeyboardSVG keys={keysState}/>
        </div>
    </>;
}

export default withStyles(styles)(GermanKeyboardController);