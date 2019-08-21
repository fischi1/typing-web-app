import * as PIXI from 'pixi.js';
import { GameContext, GameObject } from "./GameObject";
import { PixiSprite } from "./PixiSprite";
import { vecToPixiPoint, vec2 } from "./Vector2";

const scaling = 0.75;
const widthInTiles = 9;
const heightInTiles = 12;
const posX = 1510;
const posY = 60;
const tileWidth = 48;

export class LivesDisplay extends GameObject{

    display : PixiSprite;

    constructor(display : PIXI.Sprite, destTextures : PIXI.BaseTexture[], gameContext : GameContext) {
        super();
        this.display = new PixiSprite(display);
        
        gameContext.addGameObject(this.display);
        this.display.sprite.scale = vecToPixiPoint(vec2(scaling));
        this.display.sprite.x = posX;
        this.display.sprite.y = posY;

        const scaledTileWidth = tileWidth * scaling;

        for(let x = 0; x < widthInTiles; x++) {
            for(let y = 0; y < heightInTiles; y++) {
                var sprite = new PixiSprite(new PIXI.Sprite(new PIXI.Texture(getRandomBaseTexture(destTextures))));
                sprite.sprite.scale = vecToPixiPoint(vec2(scaling));
                sprite.sprite.x = posX + x * scaledTileWidth;
                sprite.sprite.y = posY + y * scaledTileWidth;
                sprite.sprite.alpha = 0;
                gameContext.addGameObject(sprite);
            }
        }
    }

    init(gameContext : GameContext) {
        super.init(gameContext);
    }

    update(gameContext : GameContext) : void {
    }

    destroy(gameContext : GameContext) : void {

    }
}

const getRandomBaseTexture = (destTextures : PIXI.BaseTexture[]) : PIXI.BaseTexture => {
    const index = Math.floor(Math.random() * destTextures.length); 

    return destTextures[index];
}