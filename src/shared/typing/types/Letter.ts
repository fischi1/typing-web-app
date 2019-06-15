import * as PIXI from 'pixi.js';
import { GameObject } from "./GameObject";

export class Letter extends GameObject{
    character : string;

    private randomTime = 0;
    constructor(character : string, sprite : PIXI.Sprite) {
        super(sprite);
        this.character = character;
        this.sprite = sprite;
    }

    update(deltaTime : number) : void {
        this.randomTime += deltaTime;

        if(this.randomTime > 1.5) {
            this.randomTime = 0;
            this.sprite.x = Math.random() * 1000;
            this.sprite.y = Math.random() * 500;
            this.sprite.tint = PIXI.utils.rgb2hex([Math.random(), Math.random(), Math.random()]);
        }
    }
}