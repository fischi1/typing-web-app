import * as PIXI from "pixi.js";
import { GameContext, GameObject } from "./GameObject";
import { vecToPixiPoint, Vector2 } from "./Vector2";
import pixiColorHelper from "../pixiColorHelper";

export const getDefaultTextStyle = () => {
    return new PIXI.TextStyle({
        fontFamily: "m5x7",
        fontSize: 50,
        fill: pixiColorHelper.white
    });
}

export class Text extends GameObject{
    pixiText : PIXI.Text;

    private startPos : Vector2;

    constructor(text : string, position : Vector2, rotationDeg : number, style : PIXI.TextStyle) {
        super();
        this.pixiText = new PIXI.Text(text, style);
        this.pixiText.angle = rotationDeg;
        this.pixiText.position = vecToPixiPoint(position);
        this.startPos = position;
    }

    init(gameContext : GameContext) : void {
        gameContext.app.stage.addChild(this.pixiText);
    }

    update(gameContext : GameContext) : void {
    }

    destroy(gameContext : GameContext) : void {

    }
}