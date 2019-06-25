import * as PIXI from 'pixi.js';
import { GameContext } from "./GameObject";
import { PixiSprite } from './PixiSprite';

export class Letter extends PixiSprite{
    character : string;
    index: number;
    subLetter? : Letter;

    private startX = 0;
    private startY = 0;
    
    constructor(index: number, character : string, sprite : PIXI.Sprite) {
        super(sprite);
        this.index = index;
        this.character = character;
        this.sprite = sprite;
    }

    init(gameContext : GameContext) {
        super.init(gameContext);
        this.sprite.scale.x = 0.3;
        this.sprite.scale.y = 0.3;
        this.startX = this.sprite.x;
        this.startY = this.sprite.y;

        if(this.subLetter)
            this.subLetter.hide();
    }

    update(gameContext : GameContext) : void {
    }

    show() {
        this.sprite.alpha = 1;
    }

    hide() {
        this.sprite.alpha = 0;
    }
}