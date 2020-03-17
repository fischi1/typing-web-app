import { useMemo } from "react"
import { useUserInfoState } from "../components/context/UserInfoProvider"

const initialXP = 150

const useCalculateLvlInfo = () => {
    const userInfo = useUserInfoState()

    const lvlInfo = useMemo(() => {
        var level = 0

        var userXP = userInfo.xp

        while (userXP - initialXP * (level + 1) >= 0) {
            userXP -= initialXP * (level + 1)
            level++
        }

        const xpForNextLevel = initialXP * (level + 1)

        return { xp: userXP, level: level, xpForNextLevel: xpForNextLevel }
    }, [userInfo.xp])

    return lvlInfo
}

export default useCalculateLvlInfo
