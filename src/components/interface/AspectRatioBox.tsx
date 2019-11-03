import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";
import React, { CSSProperties, FC } from "react";

type Props = {
    className?: string,
    style?: CSSProperties,
    width: number,
    height: number
}

const useStyles = makeStyles({
    outside: {
        height: 0,
        paddingTop: (props: Props) => `${(props.height/props.width) * 100}%`,
        position: "relative",
        overflow: "hidden"    
    },
    inside: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%"
    }      
});

const AspectRatioBox: FC<Props> = props => {
    const classes = useStyles(props);

    return (
        <div className={clsx(classes.outside, props.className)} style={props.style}>
            <div className={classes.inside} >
                {props.children}
            </div>
        </div>
    )
}

export default AspectRatioBox;