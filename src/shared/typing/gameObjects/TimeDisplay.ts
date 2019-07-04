import { GameContext, GameObject } from "./GameObject";
import { defaultTextStyle, Text } from "./Text";

export class TimeDisplay extends GameObject{
    
    textObject : Text;

    constructor(gameContext : GameContext) {
        super();
        const textStyle = defaultTextStyle;
        textStyle.fontSize=15;
        textStyle.fontFamily="Verdana";
        this.textObject = new Text("Text", {x:0, y:0}, 0, textStyle);
        gameContext.addGameObject(this.textObject);
    }

    init(gameContext : GameContext) : void {
    }

    update(gameContext : GameContext) : void {
        const floorTime = Math.floor(gameContext.timeSinceStart);
        this.textObject.pixiText.text = floorTime+ "." + Math.floor((gameContext.timeSinceStart - floorTime) * 10);
    }

    destroy(gameContext : GameContext) : void {
    }
}