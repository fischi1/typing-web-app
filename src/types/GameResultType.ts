export type GameResultReasonType = "DONE" | "GAME_OVER";

export type GameResultType = {
    lessonUuid: string,
    resultType : GameResultReasonType,
    accuracy: number,
    wpm: number,
    maxStreak: number,
    date: Date,
    gemsEarned: number,
}