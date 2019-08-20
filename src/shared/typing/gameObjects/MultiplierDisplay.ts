import { GameContext } from "./GameObject";
import { Text, getDefaultTextStyle } from './Text';

export class MultiplierDisplay extends Text{
    
    constructor() {
        var textStyle = getDefaultTextStyle();
        textStyle.fontSize = 60;
        super("3.7", {x: (1920 - 950) * 0.5, y: 8}, 0, textStyle);
        
        this.timer = 0;
        this.up = false;
        this.value = 3.7;
    }

    init(gameContext : GameContext) {
        super.init(gameContext);
    }

    value : number;
    timer : number;
    up : boolean;

    update(gameContext : GameContext) : void {
        this.timer += gameContext.deltaTime;
        if(this.timer >= 0.05) {
            this.timer = 0;

            if(this.up){
                this.value += 0.1;
            }  else {
                this.value -= 0.1;
            }

            if(this.value < 0) {
                this.value = 0;
                this.up = !this.up;
            } else if(this.value > 5) {
                this.value = 5;
                this.up = !this.up;
            }

            this.pixiText.text = this.value.toFixed(1) + "x";

        }
    }
}