import React, { FC, useRef, useState } from "react";
import { Theme, createStyles, withStyles, WithStyles } from "@material-ui/core";
import GermanKeyboardSVG from "./GermanKeyboardSVG";
import useKeyEvents from "../hooks/useKeyEvents";

const styles = (theme : Theme) => createStyles({
    container: {
        textAlign: "center"
    }
});

type Props = {
} & WithStyles<typeof styles>;

const GermanKeyboardController : FC<Props> = (props : Props) => {
    const {classes} = props;    
    const [keys, setKeys] = useState(false);

    const keyUpRef = useRef<any>();
    const keyDownRef = useRef<any>();

    keyDownRef.current = (e : KeyboardEvent) => {      
        console.log(e);  
        if(e.code === "KeyA") {
            console.log("down");
            setKeys(true);
        }
    };
    keyUpRef.current = (e : KeyboardEvent) => {    
        if(e.code === "KeyA") {
            console.log("up");
            setKeys(false);
        }
    };

    useKeyEvents(keyUpRef.current, keyDownRef.current);

    return <>
        <div className={classes.container}>
            <GermanKeyboardSVG keys={keys}/>
        </div>
    </>;
}

export default withStyles(styles)(GermanKeyboardController);