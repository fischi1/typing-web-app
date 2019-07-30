import { createStyles, Theme, WithStyles, withStyles } from "@material-ui/core";
import React, { FC } from "react";
import keyboardLayout from "../../../assets/images/keyboard/pressed_keyboard.png";

import RenderRow from "./RenderRow";
import { row1Urls, row2Urls, row3Urls, row4Urls, row5Urls } from "./imageUrls";


const styles = (theme: Theme) => createStyles({
    container: {
        display: "flex",
        justifyContent: "center",
        "& img":{
            //imageRendering: "pixelated",
            position: "absolute"
        }
    },
    imgContainer: {
        width: "1000px",
        position: "relative"
    }
});

type Props = WithStyles<typeof styles>;


const GermanKeyBoardImage : FC<Props> = (props : Props) => {
    const {classes} = props;
    const backgroundWidth = 1000;
    const widthMod = backgroundWidth / 1800;


    return (
        <div className={classes.container}>
            <div className={classes.imgContainer}>
                <img src={keyboardLayout} alt="" style={{left: 0, top: 0, width: backgroundWidth}}/>
                {/* height 114 */}
                <RenderRow imgUrls={row1Urls} widthMod={widthMod} y={0} /> 
                {/* height 120 */}
                <RenderRow imgUrls={row2Urls} widthMod={widthMod} y={114} />
                {/* height 120 */}
                <RenderRow imgUrls={row3Urls} widthMod={widthMod} y={114 + 120} />
                {/* height 120 */}
                <RenderRow imgUrls={row4Urls} widthMod={widthMod} y={114 + 120 + 120} />
                {/* height 126 */}
                <RenderRow imgUrls={row5Urls} widthMod={widthMod} y={114 + 120 + 120 + 120} />
            </div>
        </div>
    );
}

export default withStyles(styles)(GermanKeyBoardImage);