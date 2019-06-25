
import * as PIXI from 'pixi.js';
import bitmapFontTexture from "../../assets/bitmapfont/RobotoMono_0.png";
import dog from "../../assets/images/dog.gif";
import { GameContext, GameObject } from './gameObjects/GameObject';
import { TypeTracker } from './gameObjects/TypeTracker';
import { Word } from './gameObjects/Word';
import generateGOs, { LetterGenerationParamsType } from './generateGOs';
import initWordPositions, { InitWordPositionsParams } from './initWordPositions';
import pixiColorHelper from './pixiColorHelper';
import { waitForSoundsLoaded } from './SoundManager';
import { XMLHelper } from './XMLHelper';
import { TimeDisplay } from './gameObjects/TimeDisplay';
import { DebugCat } from './gameObjects/DebugCat';

const bitmapFontXML = process.env.PUBLIC_URL + '/xml/RobotoMono.xml';

const testText = "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic lif.";

const areaWidth = 1190;
const areaHeight = 500;
const areaRatio = areaWidth / areaHeight;

//Aliases
let Application = PIXI.Application,
    loader = PIXI.Loader.shared,
    Sprite = PIXI.Sprite;

var app : PIXI.Application;

var htmlCanvasContainer : HTMLElement | null;

const words : Word[] = [];
const gameObjects : GameObject[] = [];
var gameContext : GameContext = {deltaTime: 0, timeSinceStart : 0, addGameObject : go => gameObjects.push(go), app: null as any};

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

    app.renderer.backgroundColor = pixiColorHelper.darkgray;

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

        var fontTexture = resources.bitmapFontTexture.texture as PIXI.Texture;
        
        gameObjects.push(new DebugCat(new Sprite(resources.dog.texture)))

        //init text
        var letterParams : LetterGenerationParamsType = {
            words: words,
            gameObjects: gameObjects,
            fontTexture,
            xmlHelper
        };
        var letters = generateGOs(testText,  letterParams);
        const initWordPositionsParams : InitWordPositionsParams = { 
            words: words,
            letterWidth: xmlHelper.biggestWidth * 0.3,
            letterHeight: 450 * 0.3,
            canvasWidth: areaWidth,
            xOffset: 20,
            yOffset: 0,
            rightMargin: 20
        };
        initWordPositions(initWordPositionsParams);

        gameObjects.push(new TypeTracker());
        gameObjects.push(new TimeDisplay());

        //preparing done, init go
        gameObjects.forEach(go => go.init(gameContext));
        await waitForSoundsLoaded();
        app.ticker.add(delta => loop(delta));
    } 
}

var time = 0;

function loop(delta : number) {
    var deltaS = delta * 0.01;
    time += deltaS;

    gameContext.deltaTime = deltaS;
    gameContext.timeSinceStart = time;

    gameObjects.forEach(go => {
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
        const width = window.innerWidth * 0.6;
        app.renderer.view.style.width = width + "px";
        app.renderer.view.style.height = width / areaRatio + "px";
    }
}