import * as PIXI from 'pixi.js';
import { GameContext } from "./GameObject";
import { PixiSprite } from './PixiSprite';
import { letterScaling } from '../initTyping';

export class Cursor extends PixiSprite {
    static instance : Cursor;
    
    blinkingSpeed = 0.2;
    yOffset = -19;
    xOffset = -5;

    private blinkTimer = 0;
    private hidden = false;

    constructor(sprite: PIXI.Sprite) {
        super(sprite);
        
        if(Cursor.instance) 
            console.error("Letter should only exist once!!!");
        else 
            Cursor.instance = this;
    }

    init(gameContext : GameContext) {
        super.init(gameContext);
        this.sprite.scale.x = letterScaling * 1.5;
        this.sprite.scale.y = letterScaling * 1.5;
    }

    update(gameContext : GameContext) : void {
        this.blinkTimer+=gameContext.deltaTime;
        if(this.blinkTimer >= this.blinkingSpeed) {
            this.blinkTimer = 0;
            this.toggleVisibility();
        }
    }

    toggleVisibility() {
        this.sprite.alpha = this.hidden ? 1 : 0;
        this.hidden = !this.hidden;
    }

    destroy(gameContext : GameContext) : void {
    }

    setPosition(x : number, y : number) {
        this.sprite.x = x + this.xOffset;
        this.sprite.y = y + this.yOffset;
    }
}