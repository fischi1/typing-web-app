import forceToNull from "../../functions/forceToNull"
import { GameContext, GameObject } from "./GameObject"
import {
    LetterListenerFunction,
    TypeTracker,
    WordListenerFunction
} from "./TypeTracker"

export class StatTracker extends GameObject {
    static instance: StatTracker

    lastTime = new Date()

    //wpm
    charactersTyped = 0
    timeTakenSoFar = 0

    //accuracy
    letterProgess = 0
    letterStatus: boolean[] = []

    constructor() {
        super()
        if (!!StatTracker.instance)
            console.error("StatTracker.instance already set!!!")
        StatTracker.instance = this
    }

    init(gameContext: GameContext): void {
        TypeTracker.instance.registerWordCorrectListener(this.nextWord)
        TypeTracker.instance.registerErrorListener(this.letterError)
        TypeTracker.instance.registerLetterListener(this.letterCorrect)

        for (let i = 0; i < gameContext.gameInfo.text.length; i++) {
            this.letterStatus[i] = true
        }
    }

    update(gameContext: GameContext): void {}

    destroy(gameContext: GameContext): void {
        StatTracker.instance = forceToNull()
    }

    nextWord: WordListenerFunction = (current, next) => {
        const newTime = new Date()

        if (!current) {
            return
        }

        const timeTakenForWord = newTime.getTime() - this.lastTime.getTime()

        this.lastTime = newTime

        this.timeTakenSoFar += timeTakenForWord
        this.charactersTyped += current.letters.length

        // console.log("WPM: " + this.getWPM());
        // console.log("Accuracy: " + this.getAccuracy());
    }

    letterCorrect: LetterListenerFunction = curIndex => {
        let index = curIndex - 1
        // console.log("letterCorect: " + (curIndex-1));
        if (curIndex > this.letterProgess) this.letterProgess = index
    }

    letterError: LetterListenerFunction = curIndex => {
        // console.warn("letterError: " + (curIndex-1));
        let index = curIndex - 1
        if (index < 0) index = 0
        this.letterStatus[index] = false
    }

    getWPM() {
        var msFor5Chars = (this.timeTakenSoFar / this.charactersTyped) * 5
        var mFor5Chars = msFor5Chars / 1000 / 60
        return 1 / mFor5Chars
    }

    /**
     * TODO must be NaN checked
     */
    getAccuracy() {
        let lettersCorrect = this.letterProgess
        let letterIncorrect = 0

        for (let i = 0; i < this.letterProgess; i++) {
            if (!this.letterStatus[i]) {
                lettersCorrect--
                letterIncorrect++
            }
        }

        return 1 - letterIncorrect / lettersCorrect
    }
}
