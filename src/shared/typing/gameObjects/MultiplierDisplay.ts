import { GameContext } from "./GameObject";
import { Text, getDefaultTextStyle } from './Text';

export class MultiplierDisplay extends Text{
    
    readonly minMultiplier : number;
    readonly maxMultiplier : number;
    readonly minFontsize : number;
    readonly maxFontsize : number;

    value : number;
    timer : number;
    up : boolean;

    constructor() {
        var textStyle = getDefaultTextStyle();
        textStyle.fontSize = 60;
        super("3.7", {x: (1920 - 950) * 0.5, y: 53}, 0, textStyle);

        this.pixiText.anchor.y = 1;
        
        this.timer = 0;
        this.up = false;

        this.minMultiplier = 1;
        this.maxMultiplier = 3;
        this.minFontsize = 35;
        this.maxFontsize = 70;

        this.value = this.minMultiplier;
    }

    init(gameContext : GameContext) {
        super.init(gameContext);
    }

    update(gameContext : GameContext) : void {
        this.timer += gameContext.deltaTime;
        if(this.timer >= 0.02) {
            this.timer = 0;

            if(this.up){
                this.value += 0.1;
            }  else {
                this.value -= 0.1;
            }

            if(this.value < this.minMultiplier) {
                this.value = this.minMultiplier;
                this.up = !this.up;
            } else if(this.value > this.maxMultiplier) {
                this.value = this.maxMultiplier;
                this.up = !this.up;
            }

            this.pixiText.text = this.value.toFixed(1) + "x";
            const diff = this.maxMultiplier - this.minMultiplier;
            this.pixiText.style = this.getFontSizeStyle((this.value - this.minMultiplier)/(diff));

        }
    }

    getFontSizeStyle(sizeMultiplier : number) {
        sizeMultiplier = Math.min(1, Math.max(0.01, sizeMultiplier));
        var textStyle = getDefaultTextStyle();
        textStyle.fontSize = this.minFontsize  + (this.maxFontsize - this.minFontsize) * sizeMultiplier;
        return textStyle;
    }
}