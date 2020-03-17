import { canvasOptions } from "../TypingRoot";
import { GameContext, GameObject } from "./GameObject";
import { getDefaultTextStyle, Text } from "./Text";
import { TypeTracker } from "./TypeTracker";

export class StartCountdown extends GameObject {

    countdownText : Text;

    countdownSeconds = process.env.NODE_ENV !== 'production' ? 1 : 3;
    startSize = 500;
    endSize = 250;

    disabled = false;

    private timer = 1;


    constructor(gameContext : GameContext) {
        super();
        
        const textStyle = getDefaultTextStyle();
        textStyle.fontSize = 500;

        this.countdownText = new Text(this.countdownSeconds + "", {x: canvasOptions.areaWidth / 2, y: canvasOptions.areaHeight / 2}, 0, textStyle);
        this.countdownText.pixiText.anchor.x = 0.5;
        this.countdownText.pixiText.anchor.y = 0.5;

        gameContext.addGameObject(this.countdownText);
    }

    init(gameContext : GameContext) : void {
    }

    update(gameContext : GameContext) : void {

        if(this.disabled)
            return;

        this.timer -= gameContext.deltaTime;
        if(this.timer < 0) {
            this.timer = 1;
            this.countdownSeconds--;
            if(this.countdownSeconds > 0)
                this.countdownText.pixiText.text = this.countdownSeconds + "";
            else if(this.countdownSeconds === 0) {
                this.countdownText.pixiText.text = "GO!";
                TypeTracker.instance.startGame();
            } else {
                this.countdownText.pixiText.alpha = 0;
                this.disabled = true;
                return;
            }

        }
        const scale = this.timer * ((this.startSize - this.endSize) / this.startSize) + this.endSize / this.startSize;
        this.countdownText.pixiText.scale.x = scale;
        this.countdownText.pixiText.scale.y = scale;
        this.countdownText.pixiText.alpha = this.timer;
    }

    destroy(gameContext : GameContext) : void {}
}
    