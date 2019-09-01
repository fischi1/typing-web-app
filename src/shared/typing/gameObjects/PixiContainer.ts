import * as PIXI from 'pixi.js';
import { GameContext, GameObject } from "./GameObject";

export class PixiContainer extends GameObject {

    container : PIXI.Container;
    graphicMask : PIXI.Graphics;

    constructor(container : PIXI.Container, mask : PIXI.Graphics) {
        super();
        this.container = container;
        this.graphicMask = mask;
    }

    init(gameContext : GameContext) : void {
        gameContext.app.stage.addChild(this.container);
        this.container.mask = this.graphicMask;
    }

    update(gameContext : GameContext) : void {
    }

    destroy(gameContext : GameContext) : void {}

    hide() {
        this.container.alpha = 0;
    }

    show() {
        this.container.alpha = 1;
    }
}
    