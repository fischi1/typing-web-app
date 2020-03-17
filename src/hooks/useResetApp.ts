import { useGameResultHistoryDispatch } from "../components/context/GameResultHistoryProvider"
import { useUserInfoDispatch } from "../components/context/UserInfoProvider"

const useResetApp = () => {
    const userInfoDispatch = useUserInfoDispatch()
    const gameHistoryDispatch = useGameResultHistoryDispatch()

    return () => {
        userInfoDispatch({ type: "resetProgression" })
        gameHistoryDispatch({ type: "clear" })
    }
}

export default useResetApp
