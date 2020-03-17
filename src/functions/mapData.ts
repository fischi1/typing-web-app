import { GameResultType } from "../types/GameResultType"

const transformToDayNr = (date: Date) => {
    return Math.round(
        new Date(
            date.getUTCFullYear(),
            date.getUTCMonth(),
            date.getUTCDate(),
            0,
            0,
            0,
            0
        ).getTime() /
            (1000 * 3600 * 24)
    )
}

export type MappedDataType = {
    dayDate: number
    wpm: number
    accuracy: number
    gemsEarned: number
    livesLeft: number
    maxStreak: number
    lessonAmount: number
}

const mapData = (gameResultHistory: GameResultType[]): MappedDataType[] => {
    var dayData: Record<number, GameResultType[]> = {}

    gameResultHistory.forEach(gameResult => {
        var dayNumber = transformToDayNr(new Date(gameResult.date))

        if (!dayData[dayNumber]) dayData[dayNumber] = []

        dayData[dayNumber].push(gameResult)
    })

    var keys = Object.keys(dayData)

    return keys.map(key => {
        let gameResultArr = dayData[+key]

        let reduced = gameResultArr.reduce((left, right) => ({
            accuracy: left.accuracy + right.accuracy,
            date: new Date(),
            gemsEarned: left.gemsEarned + right.gemsEarned,
            lessonUuid: "",
            livesLeft: left.livesLeft + right.livesLeft,
            maxLives: left.maxLives + right.maxLives,
            maxStreak:
                left.maxStreak > right.maxStreak
                    ? left.maxStreak
                    : right.maxStreak,
            resultType: "DONE",
            wpm: left.wpm + right.wpm
        }))

        return {
            dayDate: +key,
            wpm: reduced.wpm / gameResultArr.length,
            accuracy: reduced.accuracy / gameResultArr.length,
            gemsEarned: reduced.gemsEarned / gameResultArr.length,
            livesLeft: reduced.livesLeft / gameResultArr.length,
            maxStreak: reduced.maxStreak,
            lessonAmount: gameResultArr.length
        }
    })
}

export default mapData
