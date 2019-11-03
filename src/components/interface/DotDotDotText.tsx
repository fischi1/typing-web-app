import React, { FC, CSSProperties } from "react";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";

const useStyles = makeStyles({
    root: {
        minWidth: 0
    },
    text: {
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
    }
});

type Props = {
    style?: CSSProperties,
    className?: string
}

const DotDotDotText: FC<Props> = props => {

    const classes = useStyles();

    return (
        <div className={clsx(classes.root, props.className)} style={props.style}>
            <div className={classes.text}>
                {props.children}
            </div>
        </div>
    )
}

export default DotDotDotText;