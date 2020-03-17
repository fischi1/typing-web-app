import { makeStyles } from "@material-ui/core"
import React, { FC, useState } from "react"
import useKeyEvents from "../../hooks/useKeyEvents"

const useStyles = makeStyles({
    "@global": {
        "*": {
            outline: "1px solid red"
        }
    }
})

const Outlines: FC<{}> = () => {
    useStyles()
    return null
}

type Props = {
    toggleKeyCode?: string
}

const GlobalDebugOutlines: FC<Props> = props => {
    const toggleKeyCode = props.toggleKeyCode
        ? props.toggleKeyCode
        : "NumpadSubtract"

    const [enabled, setEnabled] = useState(false)

    useKeyEvents(
        () => {},
        key => {
            if (
                process.env.NODE_ENV === "development" &&
                key.code === toggleKeyCode
            )
                setEnabled(!enabled)
        }
    )

    return enabled ? <Outlines /> : null
}

export default GlobalDebugOutlines
