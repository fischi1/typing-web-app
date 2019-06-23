import * as PIXI from 'pixi.js';
import { GameObject, UpdateInfo } from "./GameObject";

export class Letter extends GameObject{
    character : string;

    private startX = 0;
    private startY = 0;

    private speed = -2;
    
    constructor(character : string, sprite : PIXI.Sprite) {
        super(sprite);
        this.character = character;
        this.sprite = sprite;
    }

    init() {
        this.sprite.scale.x = 0.3;
        this.sprite.scale.y = 0.3;
        this.startX = this.sprite.x;
        this.startY = this.sprite.y;
    }

    update(updateInfo : UpdateInfo) : void {
        this.sprite.y = this.startY + Math.sin(updateInfo.timeSinceStart * this.speed) * 100 - 70;
    }
}