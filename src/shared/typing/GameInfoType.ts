import { GameResultType } from "./GameResultType";

export type GameInfoType = {
    text : string,
    doneFunction : { (result : GameResultType) : void }
    pointsPerLetter : number
}