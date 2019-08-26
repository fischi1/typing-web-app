import pixiColorHelper from '../pixiColorHelper';
import { GameContext, GameObject } from "./GameObject";
import { PixiSprite } from "./PixiSprite";
import { getDefaultTextStyle, Text } from './Text';
import { add, vec2, vecToPixiPoint, Vector2 } from './Vector2';

export class EarnedSoFarDisplay extends GameObject{

    earnedSoFarLabel : Text;
    earnedSoFarValue : Text;
    diamond : PixiSprite;

    constructor(diamondSprite : PIXI.Sprite, gameContext : GameContext) {
        super();

        const textStyle = getDefaultTextStyle();
        textStyle.fontSize = 40;
        
        const basPos : Vector2 = {x: 1075, y: 20};

        this.earnedSoFarLabel = new Text("Earned so far: ", basPos, 0, textStyle.clone());

        textStyle.align = "right";
        this.earnedSoFarValue = new Text("50", add(basPos, {x: 300, y: 0}), 0, textStyle);
        this.earnedSoFarValue.pixiText.anchor.x = 1;
        this.earnedSoFarValue.pixiText.tint = pixiColorHelper.blue;
        
        this.diamond = new PixiSprite(diamondSprite);
        this.diamond.sprite.position = vecToPixiPoint(add(basPos, {x: 300, y: -15}));
        this.diamond.sprite.scale = vecToPixiPoint(vec2(3.5));

        gameContext.addGameObject(this.earnedSoFarLabel);
        gameContext.addGameObject(this.earnedSoFarValue);
        gameContext.addGameObject(this.diamond);
    }

    init(gameContext : GameContext) {
        super.init(gameContext);
    }

    update(gameContext : GameContext) : void {
    }

    destroy(gameContext : GameContext) : void {

    }
}