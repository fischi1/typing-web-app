import * as PIXI from 'pixi.js';
import { GameObject, GameContext } from "./GameObject";
import { Soundmanager } from '../SoundManager';

export class Letter extends GameObject{
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
        this.sprite.scale.x = 0.3;
        this.sprite.scale.y = 0.3;
        this.startX = this.sprite.x;
        this.startY = this.sprite.y;

        if(this.subLetter)
            this.subLetter.hide();
    }

    update(gameContext : GameContext) : void {
        if(this.subLetter) {
            if(gameContext.timeSinceStart > this.index * 0.1 && this.subLetter.sprite.alpha === 0) {
                this.subLetter.show();
                new Soundmanager().play();
            }
        }
    }

    show() {
        this.sprite.alpha = 1;
    }

    hide() {
        this.sprite.alpha = 0;
    }
}