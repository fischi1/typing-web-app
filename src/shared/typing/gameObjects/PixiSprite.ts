import { GameObject, GameContext } from "./GameObject";

export class PixiSprite extends GameObject {

    sprite : PIXI.Sprite;

    constructor(sprite : PIXI.Sprite) {
        super();
        this.sprite = sprite;
    }

    init(gameContext : GameContext) : void {
        gameContext.app.stage.addChild(this.sprite);
    }

    update(gameContext : GameContext) : void {}

    destroy(gameContext : GameContext) : void {}
}
    