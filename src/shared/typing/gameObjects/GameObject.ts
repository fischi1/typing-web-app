import * as PIXI from 'pixi.js';

export type GameContext = {
    deltaTime : number,
    timeSinceStart : number,
    addGameObject(go : GameObject) : void
}

export abstract class GameObject{
    children: GameObject[] = [];
    sprite : PIXI.Sprite;

    constructor(sprite : PIXI.Sprite) {
        this.sprite = sprite;
    }

    init(gameContext : GameContext) : void {}

    update(gameContext : GameContext) : void {}
}