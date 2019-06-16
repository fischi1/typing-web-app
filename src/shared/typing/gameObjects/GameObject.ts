import * as PIXI from 'pixi.js';

export abstract class GameObject{
    children: GameObject[] = [];
    sprite : PIXI.Sprite;

    constructor(sprite : PIXI.Sprite) {
        this.sprite = sprite;
    }

    init() : void {}

    update(deltaTime : number) : void {}
}