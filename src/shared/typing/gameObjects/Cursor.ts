import * as PIXI from 'pixi.js';
import { letterScaling } from '../initTyping';
import { GameContext } from "./GameObject";
import { PixiSprite } from './PixiSprite';
import pixiColorHelper from '../pixiColorHelper';
import { playFailSound } from '../SoundManager';
import { Vector2, vec2Zero, pixiPointToVec, vec2, vecToPixiPoint, add } from './Vector2';

export class Cursor extends PixiSprite {
    static instance : Cursor;
    
    blinkingSpeed = 0.2;
    offset : Vector2 = {x: -5, y: -19};
    blinkingSpeedModifier = 0.25;
    bumpAnimationDuration = 0.6;

    private startBlinkingSpeed = this.blinkingSpeed;
    private startPos : Vector2 = vec2Zero();
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
        this.sprite.scale = vecToPixiPoint(vec2(letterScaling * 1.5));
        this.startPos = pixiPointToVec(this.sprite.position);
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

    setPosition(position: Vector2) {
        this.sprite.position = vecToPixiPoint(add(this.offset, position));
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