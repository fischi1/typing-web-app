import pixiColorHelper from "../pixiColorHelper";
import { canvasOptions } from "../TypingRoot";
import { GameContext, GameObject } from "./GameObject";
import { ProgressBar } from "./ProgressBar";
import { getDefaultTextStyle, Text } from "./Text";


export class MultiplierCountdown extends GameObject{

    progressBar : ProgressBar;
    textObject : Text

    reachedZeroCallback = () : void => {};

    curMaxTime = 0;
    curTime = 0;
    reachedZero = false;

    constructor(gameContext : GameContext) {
        super();

        this.progressBar = new ProgressBar(
            pixiColorHelper.green,
            pixiColorHelper.gray,
            {x:190, y:canvasOptions.topBarHeight},
            {x:10, y: gameContext.app.view.height - canvasOptions.topBarHeight}
        ) 

        gameContext.addGameObject(this.progressBar);
        
        const textStyle = getDefaultTextStyle();
        textStyle.align = "right";
        this.textObject = new Text("0.0", {x:145, y:290}, -90, textStyle);

        gameContext.addGameObject(this.textObject);
    }

    init(gameContext : GameContext) : void {       
        this.resetTimer(1);
    }

    update(gameContext : GameContext) : void {
        this.curTime -= gameContext.deltaTime;
        if(this.curTime <= 0) {
            this.curTime = 0;
            if(!this.reachedZero) {
                this.reachedZero = true;
                //callback
                this.resetTimer(1);
            }
        }
        this.textObject.pixiText.text = this.curTime.toFixed(1);
        this.progressBar.setValue(this.curTime / this.curMaxTime);
    }

    destroy(gameContext : GameContext) : void {
    }

    resetTimer(timeVal : number) {
        this.reachedZero = false;
        this.curMaxTime = timeVal;
        this.curTime = timeVal;
        this.progressBar.setValue(1);
    }
}