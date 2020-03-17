import forceToNull from "../../functions/forceToNull"
import { GameContext } from "./GameObject"
import { getDefaultTextStyle, Text } from "./Text"
import { TypeTracker, WordListenerFunction } from "./TypeTracker"

const getTextStyle = () => {
    var textStyle = getDefaultTextStyle()
    textStyle.fontSize = 60
    return textStyle
}

export class MultiplierDisplay extends Text {
    static instance: MultiplierDisplay

    readonly minMultiplier: number
    readonly maxMultiplier: number
    readonly increaseStep: number
    readonly decreaseStep: number
    readonly minFontsize: number
    readonly maxFontsize: number

    value: number

    constructor() {
        super("3.7", { x: (1920 - 950) * 0.5, y: 53 }, 0, getTextStyle())

        this.pixiText.anchor.y = 1

        this.minMultiplier = 1
        this.maxMultiplier = 3
        this.increaseStep = 0.1
        this.decreaseStep = 0.3
        this.minFontsize = 35
        this.maxFontsize = 70

        if (MultiplierDisplay.instance)
            console.error("MultiplierDisplay.instance is already set")
        else MultiplierDisplay.instance = this

        this.value = this.minMultiplier
        this.updateText()
    }

    init(gameContext: GameContext) {
        super.init(gameContext)

        TypeTracker.instance.registerWordCorrectListener(this.increase)
        TypeTracker.instance.registerErrorListener(this.decrease)
    }

    update(gameContext: GameContext): void {}

    destroy(gameContext: GameContext): void {
        MultiplierDisplay.instance = forceToNull()
    }

    updateText() {
        if (this.value <= 1) {
            this.pixiText.alpha = 0
            return
        }
        this.pixiText.alpha = 1
        this.pixiText.text = this.value.toFixed(1) + "x"
        const diff = this.maxMultiplier - this.minMultiplier
        this.pixiText.style = this.getFontSizeStyle(
            (this.value - this.minMultiplier) / diff
        )
    }

    getFontSizeStyle(sizeMultiplier: number) {
        sizeMultiplier = Math.min(1, Math.max(0.01, sizeMultiplier))
        var textStyle = getDefaultTextStyle()
        textStyle.fontSize =
            this.minFontsize +
            (this.maxFontsize - this.minFontsize) * sizeMultiplier
        return textStyle
    }

    increase: WordListenerFunction = (currentWord, nextWord) => {
        if (!currentWord) return
        this.value += this.increaseStep
        this.value = Math.min(this.value, this.maxMultiplier)
        this.updateText()
    }

    decrease = () => {
        this.value -= this.decreaseStep
        this.value = Math.max(this.value, this.minMultiplier)
        this.updateText()
    }
}
