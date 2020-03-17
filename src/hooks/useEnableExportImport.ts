import { useCallback, useEffect } from "react"
import {
    useGameResultHistoryDispatch,
    useGameResultHistoryState
} from "../components/context/GameResultHistoryProvider"
import {
    useUserInfoDispatch,
    useUserInfoState
} from "../components/context/UserInfoProvider"

declare var window: Window & {
    exportUserData: () => string
    importUserData: (data: string) => void
}

type DataType = {
    gameResultHistoryState: ReturnType<typeof useGameResultHistoryState>
    userInfoState: ReturnType<typeof useUserInfoState>
}

const useEnableExportImport = (enableInConsole = false) => {
    const gameResultHistoryState = useGameResultHistoryState()
    const userInfoState = useUserInfoState()

    const gameResultHistoryDispatch = useGameResultHistoryDispatch()
    const userInfoDispatch = useUserInfoDispatch()

    useEffect(() => {
        if (enableInConsole)
            window.exportUserData = () => {
                return JSON.stringify(
                    {
                        gameResultHistoryState: gameResultHistoryState,
                        userInfoState: userInfoState
                    },
                    null,
                    4
                )
            }
    }, [enableInConsole, gameResultHistoryState, userInfoState])

    const importFunc = useCallback(
        (data: string) => {
            const imported = JSON.parse(data) as DataType
            gameResultHistoryDispatch({
                type: "setState",
                payload: imported.gameResultHistoryState
            })
            userInfoDispatch({
                type: "setState",
                payload: imported.userInfoState
            })
        },
        [gameResultHistoryDispatch, userInfoDispatch]
    )

    useEffect(() => {
        if (enableInConsole) window.importUserData = importFunc
    }, [enableInConsole, importFunc])

    return importFunc
}

export default useEnableExportImport
