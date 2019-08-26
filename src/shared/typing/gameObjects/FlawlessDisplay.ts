import { GameContext, GameObject } from "./GameObject";
import { Text, getDefaultTextStyle } from './Text';
import pixiColorHelper from '../pixiColorHelper';
import { Vector2, add } from './Vector2';

export class FlawlessDisplay extends GameObject{

    flawlessLabel : Text;
    maxLabel : Text;
    curLabel : Text;
    maxValueLabel : Text;
    curValueLabel : Text;

    constructor(gameContext : GameContext) {
        super();

        const textStyle = getDefaultTextStyle();
        
        const basPos : Vector2 = {x: 275, y: 200};

        this.flawlessLabel = new Text("flawless", basPos, 0, textStyle);

        this.maxLabel = new Text("max", add(basPos, {x: 1, y: 40}), 0, textStyle);
        this.maxLabel.pixiText.tint = pixiColorHelper.gray;
        this.curLabel = new Text("cur", add(basPos, {x: 85, y: 40}), 0, textStyle);
        this.curLabel.pixiText.tint = pixiColorHelper.gray;
        this.maxValueLabel = new Text("1", add(basPos, {x: 35, y: 80}), 0, textStyle);
        this.maxValueLabel.pixiText.anchor.x = 0.5;
        this.curValueLabel = new Text("3", add(basPos, {x: 110, y: 80}), 0, textStyle);
        this.curValueLabel.pixiText.anchor.x = 0.5;

        gameContext.addGameObject(this.flawlessLabel);
        gameContext.addGameObject(this.maxLabel);
        gameContext.addGameObject(this.curLabel);
        gameContext.addGameObject(this.maxValueLabel);
        gameContext.addGameObject(this.curValueLabel);
    }

    init(gameContext : GameContext) {
        super.init(gameContext);
    }

    update(gameContext : GameContext) : void {
    }

    destroy(gameContext : GameContext) : void {

    }
}