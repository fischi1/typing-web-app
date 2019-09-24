import { GameContext } from "./GameObject";
import { Text, getDefaultTextStyle } from './Text';

export class MultiplierDisplay extends Text{
    
    readonly minMultiplier : number;
    readonly maxMultiplier : number;
    readonly minFontsize : number;
    readonly maxFontsize : number;

    value : number;

    constructor() {
        var textStyle = getDefaultTextStyle();
        textStyle.fontSize = 60;
        super("3.7", {x: (1920 - 950) * 0.5, y: 53}, 0, textStyle);

        this.pixiText.anchor.y = 1;

        this.minMultiplier = 1;
        this.maxMultiplier = 3;
        this.minFontsize = 35;
        this.maxFontsize = 70;

        this.value = this.minMultiplier;
        this.updateText();
    }

    init(gameContext : GameContext) {
        super.init(gameContext);
    }

    update(gameContext : GameContext) : void {
    }

    updateText() {
        if(this.value === 1) {
            this.pixiText.alpha = 0;
            return;
        }
        this.pixiText.alpha = 1;
        this.pixiText.text = this.value.toFixed(1) + "x";
        const diff = this.maxMultiplier - this.minMultiplier;
        this.pixiText.style = this.getFontSizeStyle((this.value - this.minMultiplier)/(diff));
    }

    getFontSizeStyle(sizeMultiplier : number) {
        sizeMultiplier = Math.min(1, Math.max(0.01, sizeMultiplier));
        var textStyle = getDefaultTextStyle();
        textStyle.fontSize = this.minFontsize  + (this.maxFontsize - this.minFontsize) * sizeMultiplier;
        return textStyle;
    }
}