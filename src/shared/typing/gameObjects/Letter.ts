import * as PIXI from 'pixi.js';
import { GameContext } from "./GameObject";
import { PixiSprite } from './PixiSprite';
import pixiColorHelper from '../pixiColorHelper';

export type LetterStatus = 
    "normal" | "selected" | "valid" | "invalid" | "invisible";


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
            this.subLetter.setStatus("invisible");
    }

    update(gameContext : GameContext) : void {
    }

    show() {
        this.sprite.alpha = 1;
    }

    hide() {
        this.sprite.alpha = 0;
    }

    setStatus(status : LetterStatus) {
        switch(status) {
            case "normal":
                this.sprite.tint = pixiColorHelper.white;
                this.show();
                break;
            case "invalid":
                this.sprite.tint = pixiColorHelper.red;
                this.show();
                break;
            case "valid":
                this.sprite.tint = pixiColorHelper.green;
                this.show();
                break;
            case "selected":
                this.sprite.tint = pixiColorHelper.yellow;
                this.show();
                break;
            case "invisible":
                this.hide();
                break;
            default:
                this.setStatus("normal");
        }
    }
}