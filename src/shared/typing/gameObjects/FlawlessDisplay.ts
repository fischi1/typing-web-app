import pixiColorHelper from '../pixiColorHelper';
import { GameContext, GameObject } from "./GameObject";
import { getDefaultTextStyle, Text } from './Text';
import { TypeTracker, WordListenerFunction } from "./TypeTracker";
import { add, Vector2 } from './Vector2';
import forceToNull from '../../functions/forceToNull';

export class FlawlessDisplay extends GameObject{

    static instance: FlawlessDisplay;

    private flawlessLabel : Text;
    private maxLabel : Text;
    private curLabel : Text;
    private maxValueLabel : Text;
    private curValueLabel : Text;

    private maxValue = 0;
    private curValue = 0;
    private wordAlreadyWrong = false;

    constructor(gameContext : GameContext) {
        super();

        const textStyle = getDefaultTextStyle();
        
        const basPos : Vector2 = {x: 275, y: 200};

        this.flawlessLabel = new Text("flawless", basPos, 0, textStyle);

        this.maxLabel = new Text("max", add(basPos, {x: 1, y: 40}), 0, textStyle);
        this.maxLabel.pixiText.tint = pixiColorHelper.gray;
        this.curLabel = new Text("cur", add(basPos, {x: 85, y: 40}), 0, textStyle);
        this.curLabel.pixiText.tint = pixiColorHelper.gray;
        this.maxValueLabel = new Text("0", add(basPos, {x: 35, y: 80}), 0, textStyle);
        this.maxValueLabel.pixiText.anchor.x = 0.5;
        this.curValueLabel = new Text("0", add(basPos, {x: 110, y: 80}), 0, textStyle);
        this.curValueLabel.pixiText.anchor.x = 0.5;

        gameContext.addGameObject(this.flawlessLabel);
        gameContext.addGameObject(this.maxLabel);
        gameContext.addGameObject(this.curLabel);
        gameContext.addGameObject(this.maxValueLabel);
        gameContext.addGameObject(this.curValueLabel);

        if(!!FlawlessDisplay.instance)
            console.error("FlawlessDisplay.instance is already set");
        FlawlessDisplay.instance = this;
    }

    init(gameContext : GameContext) {
        super.init(gameContext);
        TypeTracker.instance.registerErrorListener(this.errorCallback);
        TypeTracker.instance.registerWordCorrectListener(this.wordCompleteCallback);
    }

    update(gameContext : GameContext) : void {
    }

    destroy(gameContext : GameContext) : void {
        FlawlessDisplay.instance = forceToNull();
    }

    errorCallback = () => {
        this.curValue = 0;
        this.wordAlreadyWrong = true;
        this.updateText();
    }

    wordCompleteCallback : WordListenerFunction = (currentWord, nextWord) => {

        if(!currentWord)
            return;

        if(!this.wordAlreadyWrong)
            this.curValue++;

        this.wordAlreadyWrong = false;

        if(this.maxValue < this.curValue)
            this.maxValue = this.curValue;

        this.updateText();
    }

    updateText(){
        this.curValueLabel.pixiText.text = this.curValue + "";
        this.maxValueLabel.pixiText.text = this.maxValue + "";
    }

    getMaxStreak() {
        return this.maxValue;
    }
}