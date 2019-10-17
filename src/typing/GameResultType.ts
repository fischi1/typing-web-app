export type GameResultReasonType = "DONE" | "GAME_OVER";

export type GameResultType = {
    resultType : GameResultReasonType,
    accuracy: number,
    wpm: number,
    maxStreak: number,
    date: Date
}