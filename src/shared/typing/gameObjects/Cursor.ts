import * as PIXI from 'pixi.js';
import { letterScaling } from '../initTyping';
import { GameContext } from "./GameObject";
import { PixiSprite } from './PixiSprite';
import pixiColorHelper from '../pixiColorHelper';
import { playFailSound } from '../SoundManager';

export class Cursor extends PixiSprite {
    static instance : Cursor;
    
    blinkingSpeed = 0.2;
    yOffset = -19;
    xOffset = -5;
    blinkingSpeedModifier = 0.25;
    bumpAnimationDuration = 0.6;

    private startBlinkingSpeed = this.blinkingSpeed;
    private startX = 0;
    private startY = 0;
    private blinkTimer = 0;
    private bumpAnimationTimer = 0;
    private hidden = false;
    private state : "normal" | "bump" = "bump";

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
        this.startX = this.sprite.position.x;
        this.startY = this.sprite.position.y;
    }

    update(gameContext : GameContext) : void {
        this.blinkTimer+=gameContext.deltaTime;
        if(this.blinkTimer >= this.blinkingSpeed) {
            this.blinkTimer = 0;
            this.toggleVisibility();
        }

        if(this.state === "bump") {
            this.bumpAnimationTimer += gameContext.deltaTime;
            if(this.bumpAnimationTimer >= this.bumpAnimationDuration) {
                this.switchToNormal();
            }
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

    bump() {        
        if(this.state === "normal") {
            this.blinkingSpeed *= this.blinkingSpeedModifier;
            this.sprite.tint = pixiColorHelper.red;
            this.state = "bump";
        }
        playFailSound();
        this.bumpAnimationTimer = 0;
    }
    
    switchToNormal() {
        this.state = "normal";
        this.sprite.tint = pixiColorHelper.white;
        this.blinkingSpeed = this.startBlinkingSpeed;
    }
}