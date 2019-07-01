import * as PIXI from 'pixi.js';
import { letterScaling } from '../initTyping';
import pixiColorHelper from '../pixiColorHelper';
import { playFailSound } from '../SoundManager';
import { GameContext } from "./GameObject";
import { PixiSprite } from './PixiSprite';
import { RowOffsetManager } from './RowOffsetManager';
import { add, vec2, vec2Zero, vecToPixiPoint, Vector2 } from './Vector2';

export class Cursor extends PixiSprite {
    static instance : Cursor;
    
    blinkingSpeed = 0.2;
    offset : Vector2 = {x: -5, y: -19};
    blinkingSpeedModifier = 0.25;
    bumpAnimationDuration = 0.3;

    private startBlinkingSpeed = this.blinkingSpeed;
    private curPos : Vector2 = vec2Zero();
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

        this.sprite.position = vecToPixiPoint(add(this.curPos, RowOffsetManager.instance.offset));
    }

    toggleVisibility() {
        this.sprite.alpha = this.hidden ? 1 : 0;
        this.hidden = !this.hidden;
    }

    destroy(gameContext : GameContext) : void {
    }

    setPosition(position: Vector2) {
        this.curPos = add(this.offset, position);
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