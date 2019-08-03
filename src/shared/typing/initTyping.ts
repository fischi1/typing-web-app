
import * as PIXI from 'pixi.js';
import bitmapFontTexture from "../../assets/bitmapfont/RobotoMono_0.png";
import dog from "../../assets/images/dog.gif";
import { Cursor } from './gameObjects/Cursor';
import { DebugCat } from './gameObjects/DebugCat';
import { ErrorLetterPool } from './gameObjects/ErrorLetterPool';
import { GameContext, GameObject } from './gameObjects/GameObject';
import { RowOffsetManager } from './gameObjects/RowOffsetManager';
import { TimeDisplay } from './gameObjects/TimeDisplay';
import { TypeTracker } from './gameObjects/TypeTracker';
import { Word } from './gameObjects/Word';
import generateGOs, { generateLetterSprite, LetterGenerationParamsType } from './generateGOs';
import initWordPositions, { InitWordPositionsParams } from './initWordPositions';
import pixiColorHelper from './pixiColorHelper';
import { waitForSoundsLoaded } from './SoundManager';
import { XMLHelper } from './XMLHelper';
import { ProgressBar } from './gameObjects/ProgressBar';
import drawRect from './drawRect';
import { PixiContainer } from './gameObjects/PixiContainer';

const bitmapFontXML = process.env.PUBLIC_URL + '/xml/RobotoMono.xml';

// const testText = "Far... far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic lif.";
const testText = "asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf";

const areaWidth = 1920;
const areaHeight = 500;
const typingAreaWidth = 900;
const typingBgWidth = 950;
const topBarHeight = 50;
const typingOffset = (areaWidth - typingAreaWidth) / 2;
const areaRatio = areaWidth / areaHeight;
export const letterScaling = 0.2;

//Aliases
let Application = PIXI.Application,
    loader = PIXI.Loader.shared,
    Sprite = PIXI.Sprite;

var app : PIXI.Application;

var htmlCanvasContainer : HTMLElement | null;

const words : Word[] = [];
const gameObjects : GameObject[] = [];
var gameContext : GameContext = {deltaTime: 0, timeSinceStart : 0, addGameObject : go => gameObjects.push(go), app: null as any};
var running = true;

export async function init() {
    const fontXMLtext = await (await fetch(bitmapFontXML)).text();
    const fontXML = new DOMParser().parseFromString(fontXMLtext, "text/xml");
    const xmlHelper = new XMLHelper(fontXML);

    let type = "WebGL";
    if(!PIXI.utils.isWebGLSupported()){
        type = "canvas"
    }
    PIXI.utils.skipHello();
    PIXI.utils.sayHello(type);

    app = new Application({ 
        antialias: true,
        transparent: false,
        width: areaWidth,
        height: areaHeight,
    });
    gameContext.app = app;
    
    resizeCanvas();

    app.renderer.backgroundColor = pixiColorHelper.black;

    //Add the canvas that Pixi automatically created for you to the HTML document
    const container = document.getElementById("typing-area-container");
    if(!container)
        return;        
    container.appendChild(app.view);

    //load an image and run the `setup` function when it's done
    loader
        .add("dog", dog)
        .add("bitmapFontTexture", bitmapFontTexture)
    .load(setup);

    //This `setup` function will run when the image has loaded
    async function setup(loader : PIXI.Loader, resources : any) {

        var fontTexture = resources.bitmapFontTexture.texture.baseTexture as PIXI.BaseTexture;
        
        gameObjects.push(new DebugCat(new Sprite(resources.dog.texture)));

        const typingBackgroundRect = new PIXI.Graphics();
        drawRect(typingBackgroundRect, pixiColorHelper.darkgray, 
            {x: (areaWidth - typingBgWidth) / 2, y:topBarHeight }, {x: typingBgWidth, y: areaHeight - topBarHeight} );
        app.stage.addChild(typingBackgroundRect);
        
        const typingContainerRect = new PIXI.Graphics();
        drawRect(typingContainerRect, pixiColorHelper.white, 
            {x: (areaWidth - typingBgWidth) / 2, y:topBarHeight }, {x: typingBgWidth, y: areaHeight - topBarHeight} );
        app.stage.addChild(typingContainerRect);

        const letterContainerGO = new PixiContainer(new PIXI.Container(), typingContainerRect);
        gameObjects.push(letterContainerGO);

        //init text
        var letterParams : LetterGenerationParamsType = {
            words : words,
            gameObjects : gameObjects,
            fontTexture,
            xmlHelper,
            generateSubletter : true,
            container : letterContainerGO.container
        };
        generateGOs(testText,  letterParams); //returns letter[]
        
        //init error letters
        letterParams = {
            words: null,
            gameObjects: gameObjects,
            fontTexture,
            xmlHelper,
            container : letterContainerGO.container
        };
        var errorLetterPool = new ErrorLetterPool(
            generateGOs("########################################",  letterParams) //str should be as long as the longest word, should be moved to a go
        );
        gameObjects.push(errorLetterPool);

        const initWordPositionsParams : InitWordPositionsParams = { 
            words: words,
            letterWidth: xmlHelper.biggestWidth * letterScaling,
            letterHeight: 450 * letterScaling,
            canvasWidth: areaWidth,
            offset: {x: typingOffset, y: topBarHeight},
            rightMargin: typingOffset
        };
        initWordPositions(initWordPositionsParams);

        gameObjects.push(new TypeTracker(words, initWordPositionsParams.letterWidth));
        gameObjects.push(new TimeDisplay(gameContext));
        gameObjects.push(new Cursor(generateLetterSprite("|".charCodeAt(0), letterParams)));
        gameObjects.push(new RowOffsetManager(initWordPositionsParams.letterHeight));
        gameObjects.push(new ProgressBar(pixiColorHelper.green, pixiColorHelper.gray, {x:250, y:0}, {x:15, y: app.view.height}, gameContext));

        //preparing done, init go
        gameObjects.forEach(go => go.init(gameContext));
        await waitForSoundsLoaded();
        app.ticker.add(delta => loop(delta));
    } 
}

export function destroy() {
    console.log("begin destroy");
    running = false;

    gameObjects.forEach(go => go.destroy(gameContext));

    app.stage.destroy();
    app.renderer.destroy(true);
    //app.destroy();

    const textures : Record<string, PIXI.Texture> = PIXI.utils.TextureCache;
    for (let key in textures) {
        textures[key].destroy();
    }

    PIXI.utils.clearTextureCache();
    
    loader.reset();
    console.log("end destroy");
}

var time = 0;

function loop(delta : number) {
    if(!running)
        return;
    var deltaS = delta * 0.01;
    time += deltaS;

    gameContext.deltaTime = deltaS;
    gameContext.timeSinceStart = time;

    gameObjects.forEach(go => {
        if(!running)
            return;
        go.update(gameContext);        
    });
}

window.addEventListener("resize", handleResize);
function handleResize() {   
    resizeCanvas();
}

function resizeCanvas() {
    if(!htmlCanvasContainer) {
        htmlCanvasContainer = document.getElementById("typing-area-container");
    } 
    if(htmlCanvasContainer) {
        const width = window.innerWidth;
        app.renderer.view.style.width = width + "px";
        app.renderer.view.style.height = width / areaRatio + "px";
    }
}