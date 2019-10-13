import pixiColorHelper from '../pixiColorHelper';
import { GameContext, GameObject } from "./GameObject";
import { MultiplierDisplay } from './MultiplierDisplay';
import { PixiSprite } from "./PixiSprite";
import { getDefaultTextStyle, Text } from './Text';
import { TypeTracker, WordListenerFunction } from './TypeTracker';
import { add, vec2, vecToPixiPoint, Vector2 } from './Vector2';

export class EarnedSoFarDisplay extends GameObject{

    earnedSoFarLabel : Text;
    earnedSoFarValue : Text;
    diamond : PixiSprite;

    value = 0;

    readonly pointsPerLetter : number;

    constructor(diamondSprite : PIXI.Sprite, gameContext : GameContext) {
        super();

        const textStyle = getDefaultTextStyle();
        textStyle.fontSize = 40;
        
        const basPos : Vector2 = {x: 1075, y: 20};

        this.earnedSoFarLabel = new Text("Earned so far: ", basPos, 0, textStyle.clone());

        textStyle.align = "right";
        this.earnedSoFarValue = new Text("0", add(basPos, {x: 300, y: 0}), 0, textStyle);
        this.earnedSoFarValue.pixiText.anchor.x = 1;
        this.earnedSoFarValue.pixiText.tint = pixiColorHelper.blue;
        
        this.diamond = new PixiSprite(diamondSprite);
        this.diamond.sprite.position = vecToPixiPoint(add(basPos, {x: 300, y: -15}));
        this.diamond.sprite.scale = vecToPixiPoint(vec2(3.5));

        gameContext.addGameObject(this.earnedSoFarLabel);
        gameContext.addGameObject(this.earnedSoFarValue);
        gameContext.addGameObject(this.diamond);

        this.pointsPerLetter = gameContext.gameInfo.pointsPerLetter;
    }

    init(gameContext : GameContext) {
        super.init(gameContext);
        this.updateText();
        TypeTracker.instance.registerWordCorrectListener(this.wordComplete);
    }

    update(gameContext : GameContext) : void {
    }

    destroy(gameContext : GameContext) : void {

    }

    updateText() {
        this.earnedSoFarValue.pixiText.text = this.value + "";
    }

    wordComplete : WordListenerFunction = (current, next) => {
        if(!current)
            return;

        const pointsToAdd = Math.round(this.pointsPerLetter * MultiplierDisplay.instance.value);

        // console.log("pointsToAdd:" + pointsToAdd);

        this.value += pointsToAdd;
        this.updateText();
    }
}