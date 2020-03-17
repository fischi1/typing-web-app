import { GameResultType } from "./GameResultType"

export type GameInfoType = {
    lessonUuid: string
    text: string
    onLoaded: { (): void }
    doneFunction: { (result: GameResultType): void }
    pointsPerLetter: number
}
