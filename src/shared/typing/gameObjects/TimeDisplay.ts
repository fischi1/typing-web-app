import { GameContext, GameObject } from "./GameObject";
import * as PIXI from 'pixi.js';

export class TimeDisplay extends GameObject{
    children: GameObject[] = [];
    
    debugTimeText : PIXI.Text;

    constructor() {
        super();

        const style = new PIXI.TextStyle({
            fontFamily: "Arial",
            fontSize: "15px",
            fill: 0xffffff,
            wordWrap: true
        });
        this.debugTimeText = new PIXI.Text('time', style);
    }

    init(gameContext : GameContext) : void {
        this.debugTimeText.x = 0;
        this.debugTimeText.y = 0;
        this.debugTimeText.text = "0";
        gameContext.app.stage.addChild(this.debugTimeText);
    }

    update(gameContext : GameContext) : void {
        this.debugTimeText.text = "" + Math.floor(gameContext.timeSinceStart);
    }

    destroy(gameContext : GameContext) : void {}
}