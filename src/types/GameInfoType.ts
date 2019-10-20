import { GameResultType } from "./GameResultType";

export type GameInfoType = {
    text : string,
    onLoaded: {() : void}
    doneFunction : { (result : GameResultType) : void }
    pointsPerLetter : number
}