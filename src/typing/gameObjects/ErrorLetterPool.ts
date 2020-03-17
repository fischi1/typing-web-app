import forceToNull from "../../functions/forceToNull"
import { GameContext, GameObject } from "./GameObject"
import { Letter } from "./Letter"

export type InvalidLetter = {
    status: "used" | "free"
    letter: Letter
}

export class ErrorLetterPool extends GameObject {
    static instance: ErrorLetterPool

    private errorLetters: InvalidLetter[]

    constructor(letters: Letter[]) {
        super()
        if (ErrorLetterPool.instance)
            console.error("ErrorLetterPool should only exist once!!!")
        else ErrorLetterPool.instance = this

        this.errorLetters = letters.map(l => ({ status: "free", letter: l }))
    }

    init(gameContext: GameContext) {
        super.init(gameContext)
        this.errorLetters.forEach(el => el.letter.setStatus("invisible"))
    }

    update(gameContext: GameContext): void {}

    destroy(gameContext: GameContext): void {
        ErrorLetterPool.instance = forceToNull<ErrorLetterPool>()
    }

    getLetter(): Letter | null {
        for (var i = 0; i < this.errorLetters.length; i++) {
            if (this.errorLetters[i].status === "free") {
                this.errorLetters[i].status = "used"
                //console.log("giving out letter: " + i);
                return this.errorLetters[i].letter
            }
        }
        return null
    }

    returnLetter(letter: Letter): void {
        var found = this.errorLetters.find((elem, i) => {
            if (elem.letter === letter) {
                //console.log("returning letter: " + i);
                return true
            }
            return false
        })
        if (found) found.status = "free"
    }
}
