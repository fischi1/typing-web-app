import pixiColorHelper from "../pixiColorHelper";
import { canvasOptions } from "../TypingRoot";
import { GameContext, GameObject } from "./GameObject";
import { ProgressBar } from "./ProgressBar";
import { getDefaultTextStyle, Text } from "./Text";


export class MultiplierCountdown extends GameObject{

    progressBar : ProgressBar;
    textObject : Text

    private debugTimer = 0;

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
        this.textObject = new Text("3.1", {x:145, y:290}, -90, textStyle);

        gameContext.addGameObject(this.textObject);
    }

    init(gameContext : GameContext) : void {       
    }

    update(gameContext : GameContext) : void {
        this.debugTimer += gameContext.deltaTime;
        if(this.debugTimer > 0.125 / (2 * 2)) {
            this.debugTimer = 0;
            this.progressBar.setValue(Math.random());
        }
    }

    destroy(gameContext : GameContext) : void {
    }
}