import * as PIXI from 'pixi.js';
import { GameContext, GameObject } from "./GameObject";
import { PixiSprite } from "./PixiSprite";
import { vecToPixiPoint, vec2 } from "./Vector2";
import { TypeTracker } from './TypeTracker';



export class LivesDisplay extends GameObject{

    readonly tilesPerError = 3;

    readonly scaling = 0.75;
    readonly widthInTiles = 9;
    readonly heightInTiles = 12;
    readonly posX = 1510;
    readonly posY = 60;
    readonly tileWidth = 48;

    private display : PixiSprite;

    private coverTiles : PixiSprite[];

    private coveredTilesNum = 0;

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
        TypeTracker.instance.registerErrorListener(this.errorCallback);
    }

    update(gameContext : GameContext) : void {
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

    errorCallback = () => {
        this.setCoveredTiles(this.coveredTilesNum +  this.tilesPerError);
        if(this.coveredTilesNum >= this.coverTiles.length)
            TypeTracker.instance.failure();
    }

}

const getRandomBaseTexture = (destTextures : PIXI.BaseTexture[]) : PIXI.BaseTexture => {
    const index = Math.floor(Math.random() * destTextures.length); 

    return destTextures[index];
}