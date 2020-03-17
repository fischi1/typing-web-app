import React, { FC } from "react"
import GermanKeyBoardImage from "./GermanKeyboardImage/GermanKeyboardImage"
import useGermanKeysState from "./useGermanKeysState"

type Props = {}

const GermanKeyboardController: FC<Props> = () => {
    const keysState = useGermanKeysState({})

    return (
        <div>
            <GermanKeyBoardImage keysState={keysState} />
        </div>
    )
}

export default GermanKeyboardController
