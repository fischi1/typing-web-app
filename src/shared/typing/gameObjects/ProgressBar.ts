import * as PIXI from "pixi.js";
import { GameContext, GameObject } from "./GameObject";
import { lerp, clamp } from "../../functions/mathHelper";
import { Vector2 } from "./Vector2";
import drawRect from "../drawRect";

/**
 * used by MultiplierCountdown
 */
export class ProgressBar extends GameObject{

    private barActiveGraphics : PIXI.Graphics;
    private barNotActiveGraphics : PIXI.Graphics;

    private activeColor : number;
    private notActiveColor : number;

    private actualHeight = 0;
    private currentHeight = 0;
    private position : Vector2;
    private bounds : Vector2;

    constructor(activeColor : number, notActiveColor : number, position : Vector2, bounds : Vector2) {
        super();
        this.position = position;
        this.bounds = bounds;
        this.currentHeight = bounds.y;
        this.actualHeight = bounds.y;

        this.barActiveGraphics = new PIXI.Graphics();
        this.barNotActiveGraphics = new PIXI.Graphics();
        this.activeColor = activeColor;
        this.notActiveColor = notActiveColor;      

        drawRect(this.barNotActiveGraphics, this.notActiveColor, position, bounds);
    }

    init(gameContext : GameContext) : void {      
        gameContext.app.stage.addChild(this.barNotActiveGraphics);
        gameContext.app.stage.addChild(this.barActiveGraphics);  
    }

    update(gameContext : GameContext) : void {
        this.currentHeight = lerp(this.currentHeight, this.actualHeight, gameContext.deltaTime * 30);

        this.draw();
    }

    destroy(gameContext : GameContext) : void {
    }

    draw() {
        drawRect(this.barActiveGraphics, this.activeColor, 
            {x: this.position.x, y: this.position.y + this.currentHeight}, {x: this.bounds.x, y: this.bounds.y - this.currentHeight});
    }

    setValue(val : number) {
        this.actualHeight = this.bounds.y * clamp(1 - val);
    }
}