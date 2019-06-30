import * as PIXI from 'pixi.js';
import { GameContext } from "./GameObject";
import { PixiSprite } from './PixiSprite';
import pixiColorHelper from '../pixiColorHelper';
import { letterScaling } from '../initTyping';
import { Cursor } from './Cursor';

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
        this.sprite.scale.x = letterScaling;
        this.sprite.scale.y = letterScaling;
        this.startX = this.sprite.x;
        this.startY = this.sprite.y;

        if(this.subLetter)
            this.subLetter.setStatus("invisible");

        if(this.index === 0){
            Cursor.instance.setPosition(this.sprite.position.x, this.sprite.position.y);
        }
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