import { makeStyles } from "@material-ui/core"
import React, { FC, useMemo } from "react"
import keyboardLayout from "../../../assets/images/keyboard/pressed_keyboard.png"
import useWindowSize from "../../../hooks/useWindowSize"
import { row1Urls, row2Urls, row3Urls, row4Urls, row5Urls } from "./imageUrls"
import RenderRow from "./RenderRow"

const useStyles = makeStyles({
    container: {
        display: "flex",
        justifyContent: "center",
        "& img": {
            position: "absolute"
        }
    },
    imgContainer: {
        width: "1000px",
        position: "relative"
    }
})

type Props = {
    keysState: Record<number, boolean>
}

const maxWidth = 1500
const minWidth = 1200
const backgroundWidth = 1000
const widthMod = backgroundWidth / 1800

const GermanKeyBoardImage: FC<Props> = props => {
    const classes = useStyles()
    const windowSize = useWindowSize()

    const zoom = useMemo(() => {
        if (!windowSize.width || windowSize.width > maxWidth) return 100

        const val = (windowSize.width - minWidth) / (maxWidth - minWidth)
        const ret = Math.round(val * 100)

        return ret < 20 ? 20 : ret
    }, [windowSize.width])

    return (
        <div className={classes.container}>
            <div className={classes.imgContainer} style={{ zoom: `${zoom}%` }}>
                <img
                    src={keyboardLayout}
                    alt=""
                    style={{ left: 0, top: 0, width: backgroundWidth }}
                />
                {/* height 114 */}
                <RenderRow
                    imgUrls={row1Urls}
                    widthMod={widthMod}
                    y={0}
                    keysState={props.keysState}
                />
                {/* height 120 */}
                <RenderRow
                    imgUrls={row2Urls}
                    widthMod={widthMod}
                    y={114}
                    keysState={props.keysState}
                />
                {/* height 120 */}
                <RenderRow
                    imgUrls={row3Urls}
                    widthMod={widthMod}
                    y={114 + 120}
                    keysState={props.keysState}
                />
                {/* height 120 */}
                <RenderRow
                    imgUrls={row4Urls}
                    widthMod={widthMod}
                    y={114 + 120 + 120}
                    keysState={props.keysState}
                />
                {/* height 126 */}
                <RenderRow
                    imgUrls={row5Urls}
                    widthMod={widthMod}
                    y={114 + 120 + 120 + 120}
                    keysState={props.keysState}
                />
            </div>
        </div>
    )
}

export default GermanKeyBoardImage
