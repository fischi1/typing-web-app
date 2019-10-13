import { GameObject, GameContext } from "./GameObject";

export class PixiSprite extends GameObject {

    sprite : PIXI.Sprite;
    container : PIXI.Container | null;

    constructor(sprite : PIXI.Sprite, container : PIXI.Container | null = null) {
        super();
        this.sprite = sprite;
        this.container = container;
    }

    init(gameContext : GameContext) : void {
        if(this.container)
            this.container.addChild(this.sprite);
        else
            gameContext.app.stage.addChild(this.sprite);
    }

    update(gameContext : GameContext) : void {}

    destroy(gameContext : GameContext) : void {}
}
    