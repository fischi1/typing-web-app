import * as PIXI from 'pixi.js';

export type UpdateInfo = {
    deltaTime : number,
    timeSinceStart : number
}

export abstract class GameObject{
    children: GameObject[] = [];
    sprite : PIXI.Sprite;

    constructor(sprite : PIXI.Sprite) {
        this.sprite = sprite;
    }

    init() : void {}

    update(updateInfo : UpdateInfo) : void {}
}