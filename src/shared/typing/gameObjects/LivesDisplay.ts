import * as PIXI from 'pixi.js';
import { GameContext, GameObject } from "./GameObject";
import { PixiSprite } from "./PixiSprite";
import { vecToPixiPoint, vec2 } from "./Vector2";



export class LivesDisplay extends GameObject{

    readonly scaling = 0.75;
    readonly widthInTiles = 9;
    readonly heightInTiles = 12;
    readonly posX = 1510;
    readonly posY = 60;
    readonly tileWidth = 48;

    display : PixiSprite;

    coverTiles : PixiSprite[];

    coveredTilesNum = 0;

    constructor(display : PIXI.Sprite, destTextures : PIXI.BaseTexture[], gameContext : GameContext) {
        super();
        this.display = new PixiSprite(display);
        
        gameContext.addGameObject(this.display);
        this.display.sprite.scale = vecToPixiPoint(vec2(this.scaling));
        this.display.sprite.x = this.posX;
        this.display.sprite.y = this.posY;

        const scaledTileWidth = this.tileWidth * this.scaling;

        this.coverTiles = [];

        for(let x = 0; x < this.widthInTiles; x++) {
            for(let y = 0; y < this.heightInTiles; y++) {
                var sprite = new PixiSprite(new PIXI.Sprite(new PIXI.Texture(getRandomBaseTexture(destTextures))));
                sprite.sprite.scale = vecToPixiPoint(vec2(this.scaling));
                sprite.sprite.x = this.posX + x * scaledTileWidth;
                sprite.sprite.y = this.posY + y * scaledTileWidth;
                sprite.sprite.alpha = 0;

                this.coverTiles[x + (y * this.widthInTiles)] = sprite;

                gameContext.addGameObject(sprite);
            }
        }

        this.coverTiles.sort(() => Math.random() - .5);
    }

    init(gameContext : GameContext) {
        super.init(gameContext);
    }

    counter = 0;

    update(gameContext : GameContext) : void {
        this.counter += gameContext.deltaTime;

        if(this.counter >= 0.1) {
            this.counter = 0;
            if(this.coveredTilesNum + 2 > this.coverTiles.length)
                this.setCoveredTiles(0);
            else
                this.setCoveredTiles(this.coveredTilesNum + 2);
        }
    }

    destroy(gameContext : GameContext) : void {

    }

    setCoveredTiles(val : number) {
        this.coveredTilesNum = val;

        let i = 0;
        this.coverTiles.forEach(pSprite => {
            pSprite.sprite.alpha = i < this.coveredTilesNum ? 1 : 0;
            i++;
        });

    }

}

const getRandomBaseTexture = (destTextures : PIXI.BaseTexture[]) : PIXI.BaseTexture => {
    const index = Math.floor(Math.random() * destTextures.length); 

    return destTextures[index];
}