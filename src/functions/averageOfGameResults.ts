import { GameResultType } from "../types/GameResultType";
import { MappedDataType } from "./mapData";

const averageOfGameResults = (data: GameResultType[]): Record<keyof MappedDataType, string> => {

    var reduced = data.reduce((left, right) => ({
        accuracy: left.accuracy + right.accuracy,
        dayDate: 0,
        gemsEarned: left.gemsEarned + right.gemsEarned,
        livesLeft: left.livesLeft + right.livesLeft,
        maxStreak: left.maxStreak < right.maxStreak ? right.maxStreak : left.maxStreak,
        wpm: left.wpm + right.wpm,
        date: new Date(),
        lessonUuid: "",
        maxLives: 0,
        resultType: "DONE"
    }));

    return {
        accuracy: Math.round((reduced.accuracy / data.length) * 1000) / 1000 + "",
        dayDate: "",
        gemsEarned: "",
        lessonAmount: data.length + "",
        maxStreak: reduced.maxStreak + "",
        livesLeft: "",
        wpm: Math.round((reduced.wpm / data.length) * 100) / 100 + ""
    }
    
}

export default averageOfGameResults;