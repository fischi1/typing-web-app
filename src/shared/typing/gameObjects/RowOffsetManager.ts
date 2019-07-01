import { GameContext, GameObject } from "./GameObject";
import * as PIXI from 'pixi.js';
import { Vector2, vec2Zero } from "./Vector2";

export class RowOffsetManager extends GameObject{

    static instance : RowOffsetManager;

    offset : Vector2 = vec2Zero();

    constructor() {
        super();        
        if(RowOffsetManager.instance) 
            console.error("ErrorLetterPool should only exist once!!!");
        else 
            RowOffsetManager.instance = this;
    }

    init(gameContext : GameContext) {
        super.init(gameContext);
    }

    update(gameContext : GameContext) : void {
    }

    destroy(gameContext : GameContext) : void {
    }
}