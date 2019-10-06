
import FontFaceObserver from "fontfaceobserver";
import * as PIXI from 'pixi.js';
import bitmapFontTexture from "../../assets/bitmapfont/RobotoMono_0.png";
import damageDisplay from "../../assets/images/damageDisplay.png";
import dest1 from "../../assets/images/dest1.png";
import dest2 from "../../assets/images/dest2.png";
import dest3 from "../../assets/images/dest3.png";
import diamond from "../../assets/images/diamond.png";
import dog from "../../assets/images/dog.gif";
import drawRect from './drawRect';
import { GameInfoType } from './GameInfoType';
import { Cursor } from './gameObjects/Cursor';
import { DebugCat } from './gameObjects/DebugCat';
import { EarnedSoFarDisplay } from "./gameObjects/EarnedSoFarDisplay";
import { ErrorLetterPool } from './gameObjects/ErrorLetterPool';
import { FlawlessDisplay } from './gameObjects/FlawlessDisplay';
import { GameContext, GameObject } from './gameObjects/GameObject';
import { LivesDisplay } from "./gameObjects/LivesDisplay";
import { MultiplierCountdown } from "./gameObjects/MultiplierCountdown";
import { MultiplierDisplay } from './gameObjects/MultiplierDisplay';
import { PixiContainer } from './gameObjects/PixiContainer';
import { RowOffsetManager } from './gameObjects/RowOffsetManager';
import { TimeDisplay } from './gameObjects/TimeDisplay';
import { TypeTracker } from './gameObjects/TypeTracker';
import { Word } from './gameObjects/Word';
import generateGOs, { generateLetterSprite, LetterGenerationParamsType } from './generateGOs';
import initWordPositions, { InitWordPositionsParams } from './initWordPositions';
import pixiColorHelper from './pixiColorHelper';
import { waitForSoundsLoaded } from './SoundManager';
import { XMLHelper } from './XMLHelper';
import { StartCountdown } from "./gameObjects/StartCountdown";
import { StatTracker } from "./gameObjects/StatTracker";

const bitmapFontXML = process.env.PUBLIC_URL + '/xml/RobotoMono.xml';

const areaWidth = 1920;
const areaHeight = 500;
const typingAreaWidth = 900;
const typingBgWidth = 950;
const topBarHeight = 50;
const typingOffset = (areaWidth - typingAreaWidth) / 2;
const areaRatio = areaWidth / areaHeight;
export const letterScaling = 0.2;

export const canvasOptions = {
    areaWidth : areaWidth,
    areaHeight : areaHeight,
    typingAreaWidth : typingAreaWidth,
    typingBgWidth : typingBgWidth,
    topBarHeight : topBarHeight,
    typingOffset : typingOffset,
    areaRatio : areaRatio,
    letterScaling : letterScaling
}

let type = "WebGL";
if(!PIXI.utils.isWebGLSupported()){
    type = "canvas"
}
PIXI.utils.skipHello();
PIXI.utils.sayHello(type);

class TypingRoot {
    app: PIXI.Application = new PIXI.Application({
        antialias: true,
        transparent: false,
        width: areaWidth,
        height: areaHeight
    });

    loader = new PIXI.Loader();

    htmlCanvasContainer: HTMLElement | null = null;

    words: Word[] = [];
    gameObjects: GameObject[] = [];
    gameContext: GameContext;

    gameInfo: GameInfoType;

    running = true;
    time = 0;

    constructor(gameInfo: GameInfoType) {
        this.gameInfo = gameInfo;

        this.gameContext = {
            deltaTime: 0,
            timeSinceStart: 0,
            addGameObject: go => this.gameObjects.push(go),
            app: null as any,
            gameInfo: this.gameInfo
        }

        this.init();
    }

    async init() {
        window.addEventListener("resize", this.handleResize, true);

        const fontXMLtext = await (await fetch(bitmapFontXML)).text();
        const fontXML = new DOMParser().parseFromString(fontXMLtext, "text/xml");
        const xmlHelper = new XMLHelper(fontXML);

        this.gameContext.app = this.app;

        this.resizeCanvas();

        this.app.renderer.backgroundColor = pixiColorHelper.black;

        //Add the canvas that Pixi automatically created for you to the HTML document
        const container = document.getElementById("typing-area-container");
        if (!container) return;
        container.appendChild(this.app.view);

        //This `setup` function will run when the image has loaded
        var setup = async (loader: PIXI.Loader, resources: any) => {
        var fontTexture = resources.bitmapFontTexture.texture
            .baseTexture as PIXI.BaseTexture;

        this.gameObjects.push(
            new DebugCat(new PIXI.Sprite(resources.dog.texture))
        );

        const typingBackgroundRect = new PIXI.Graphics();
        drawRect(
            typingBackgroundRect,
            pixiColorHelper.darkgray,
            { x: (areaWidth - typingBgWidth) / 2, y: topBarHeight },
            { x: typingBgWidth, y: areaHeight - topBarHeight }
        );
        this.app.stage.addChild(typingBackgroundRect);

        const typingContainerRect = new PIXI.Graphics();
        drawRect(
            typingContainerRect,
            pixiColorHelper.white,
            { x: (areaWidth - typingBgWidth) / 2, y: topBarHeight },
            { x: typingBgWidth, y: areaHeight - topBarHeight }
        );
        this.app.stage.addChild(typingContainerRect);

        const letterContainerGO = new PixiContainer(
            new PIXI.Container(),
            typingContainerRect
        );
        this.gameObjects.push(letterContainerGO);
        letterContainerGO.hide();

        //init text
        var letterParams: LetterGenerationParamsType = {
            words: this.words,
            gameObjects: this.gameObjects,
            fontTexture,
            xmlHelper,
            generateSubletter: true,
            container: letterContainerGO.container
        };
        generateGOs(this.gameInfo.text, letterParams); //returns letter[]

        //init error letters
        letterParams = {
            words: null,
            gameObjects: this.gameObjects,
            fontTexture,
            xmlHelper,
            container: letterContainerGO.container
        };
        var errorLetterPool = new ErrorLetterPool(
            generateGOs("########################################", letterParams) //str should be as long as the longest word
        );
        this.gameObjects.push(errorLetterPool);

        const initWordPositionsParams: InitWordPositionsParams = {
            words: this.words,
            letterWidth: xmlHelper.biggestWidth * letterScaling,
            letterHeight: 450 * letterScaling,
            canvasWidth: areaWidth,
            offset: { x: typingOffset, y: topBarHeight },
            rightMargin: typingOffset
        };
        initWordPositions(initWordPositionsParams);

        //tracking of the user
        this.gameObjects.push(
            new TypeTracker(
            this.words,
            initWordPositionsParams.letterWidth,
            letterContainerGO
            )
        );
        this.gameObjects.push(
            new Cursor(generateLetterSprite("|".charCodeAt(0), letterParams))
        );
        this.gameObjects.push(
            new RowOffsetManager(initWordPositionsParams.letterHeight)
        );

        //UI
        this.gameObjects.push(new TimeDisplay(this.gameContext));
        this.gameObjects.push(new MultiplierCountdown(this.gameContext));
        this.gameObjects.push(new FlawlessDisplay(this.gameContext));
        this.gameObjects.push(new StartCountdown(this.gameContext));

        (resources.damageDisplay.texture
            .baseTexture as PIXI.BaseTexture).scaleMode = PIXI.SCALE_MODES.NEAREST;
        (resources.dest1.texture.baseTexture as PIXI.BaseTexture).scaleMode =
            PIXI.SCALE_MODES.NEAREST;
        (resources.dest2.texture.baseTexture as PIXI.BaseTexture).scaleMode =
            PIXI.SCALE_MODES.NEAREST;
        (resources.dest3.texture.baseTexture as PIXI.BaseTexture).scaleMode =
            PIXI.SCALE_MODES.NEAREST;
        this.gameObjects.push(
            new LivesDisplay(
            new PIXI.Sprite(resources.damageDisplay.texture),
            [
                resources.dest1.texture.baseTexture as PIXI.BaseTexture,
                resources.dest2.texture.baseTexture as PIXI.BaseTexture,
                resources.dest3.texture.baseTexture as PIXI.BaseTexture
            ],
            this.gameContext
            )
        );

        (resources.diamond.texture.baseTexture as PIXI.BaseTexture).scaleMode =
            PIXI.SCALE_MODES.NEAREST;
        this.gameObjects.push(
            new EarnedSoFarDisplay(
            new PIXI.Sprite(resources.diamond.texture),
            this.gameContext
            )
        );
        this.gameObjects.push(new MultiplierDisplay());
        this.gameObjects.push(new StatTracker())

        //preparing done, init go
        this.gameObjects.forEach(go => go.init(this.gameContext));
        await waitForSoundsLoaded();
        this.app.ticker.add(delta => this.loop(delta));
    };

    //load an image and run the `setup` function when it's done
    this.loader
        .add("dog", dog)
        .add("bitmapFontTexture", bitmapFontTexture)
        .add("damageDisplay", damageDisplay)
        .add("dest1", dest1)
        .add("dest2", dest2)
        .add("dest3", dest3)
        .add("diamond", diamond)
        .load((loader: PIXI.Loader, resources: any) => {
            var m5x7 = new FontFaceObserver("m5x7", {
            weight: 400
            });

            Promise.all([m5x7]).then(() => {
            setup(loader, resources);
            });
        });
    }

    destroy() {
        console.log("begin destroy");
        this.running = false;

        this.gameObjects.forEach(go => go.destroy(this.gameContext));

        this.app.stage.destroy();
        this.app.renderer.destroy(true);
        //app.destroy();

        const textures: Record<string, PIXI.Texture> = PIXI.utils.TextureCache;
        for (let key in textures) {
        textures[key].destroy();
        }

        PIXI.utils.clearTextureCache();

        this.loader.reset();
        window.removeEventListener("resize", this.handleResize, true);
        console.log("end destroy");
    }

    loop(delta: number) {
        if (!this.running) return;
        var deltaS = delta * 0.01;
        this.time += deltaS;

        this.gameContext.deltaTime = deltaS;
        this.gameContext.timeSinceStart = this.time;

        this.gameObjects.forEach(go => {
            if (!this.running)
                return;
            go.update(this.gameContext);
        });
    }

    handleResize = () => {
        if (this.resizeCanvas) this.resizeCanvas();
    };

    resizeCanvas() {
        if (!this.htmlCanvasContainer) {
            this.htmlCanvasContainer = document.getElementById(
                "typing-area-container"
            );
        }
        if (this.htmlCanvasContainer) {
            const width = window.innerWidth;
            this.app.renderer.view.style.width = width + "px";
            this.app.renderer.view.style.height = width / areaRatio + "px";
        }
    }
}

export default TypingRoot;