import * as PIXI from 'pixi.js';
import { GameObject, GameContext } from "./GameObject";

export class Letter extends GameObject{
    character : string;
    subLetter? : Letter;

    private startX = 0;
    private startY = 0;
    
    constructor(character : string, sprite : PIXI.Sprite) {
        super(sprite);
        this.character = character;
        this.sprite = sprite;
    }

    init(gameContext : GameContext) {
        this.sprite.scale.x = 0.3;
        this.sprite.scale.y = 0.3;
        this.startX = this.sprite.x;
        this.startY = this.sprite.y;
    }

    update(gameContext : GameContext) : void {
    }
}