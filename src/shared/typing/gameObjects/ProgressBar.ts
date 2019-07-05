import * as PIXI from "pixi.js";
import { GameContext, GameObject } from "./GameObject";
import { lerp, clamp } from "../../functions/mathHelper";
import { Vector2 } from "./Vector2";


export class ProgressBar extends GameObject{

    private barActiveGraphics : PIXI.Graphics;
    private barNotActiveGraphics : PIXI.Graphics;

    private activeColor : number;
    private notActiveColor : number;

    private debugTimer = 0;
    private actualHeight = 0;
    private currentHeight = 0;
    private position : Vector2;
    private bounds : Vector2;

    constructor(activeColor : number, notActiveColor : number, position : Vector2, bounds : Vector2, gameContext : GameContext) {
        super();
        this.position = position;
        this.bounds = bounds;
        this.currentHeight = bounds.y;
        this.actualHeight = bounds.y;

        this.barActiveGraphics = new PIXI.Graphics();
        this.barNotActiveGraphics = new PIXI.Graphics();
        this.activeColor = activeColor;
        this.notActiveColor = notActiveColor;      

        this.barNotActiveGraphics.beginFill(this.notActiveColor);
        this.barNotActiveGraphics.drawRect(position.x, position.y, bounds.x, bounds.y);
        this.barNotActiveGraphics.endFill();

        gameContext.app.stage.addChild(this.barNotActiveGraphics);
        gameContext.app.stage.addChild(this.barActiveGraphics);
    }

    init(gameContext : GameContext) : void {        
    }

    update(gameContext : GameContext) : void {
        this.debugTimer += gameContext.deltaTime;
        if(this.debugTimer > 1) {
            this.debugTimer = 0;
            this.setValue(Math.random());
        }

        this.currentHeight = lerp(this.currentHeight, this.actualHeight, gameContext.deltaTime * 30);

        this.draw();
    }

    destroy(gameContext : GameContext) : void {
    }

    draw() {
        this.barActiveGraphics.clear();
        this.barActiveGraphics.beginFill(this.activeColor);
        this.barActiveGraphics.drawRect(this.position.x, this.position.y + this.currentHeight, this.bounds.x, this.bounds.y - this.currentHeight);
        this.barActiveGraphics.endFill();
    }

    setValue(val : number) {
        this.actualHeight = this.bounds.y * clamp(val);
    }
}