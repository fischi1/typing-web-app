
import * as PIXI from 'pixi.js';
import bitmapFontTexture from "../../assets/bitmapfont/RobotoMono_0.png";
import dog from "../../assets/images/dog.gif";
import { highlightColors } from '../../highlightColors';
import generateGOs, { LetterGenerationParamsType } from './generateGOs';
import { GameObject, GameContext } from './gameObjects/GameObject';
import { Word } from './gameObjects/Word';
import { XMLHelper } from './XMLHelper';
import initWordPositions, { InitWordPositionsParams } from './initWordPositions';

const bitmapFontXML = process.env.PUBLIC_URL + '/xml/RobotoMono.xml';

const testText = "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic lif.";

const areaWidth = 1190;
const areaHeight = 500;
const areaRatio = areaWidth / areaHeight;

//Aliases
let Application = PIXI.Application,
    loader = PIXI.Loader.shared,
    Sprite = PIXI.Sprite,
    Text = PIXI.Text;

var cat : PIXI.Sprite;
var debugTimeText : PIXI.Text;
var app : PIXI.Application;

var htmlCanvasContainer : HTMLElement | null;

const words : Word[] = [];
const gameObjects : GameObject[] = [];
var gameContext : GameContext = {deltaTime: 0, timeSinceStart : 0, addGameObject : go => gameObjects.push(go)};

export async function init() {
    const fontXMLtext = await (await fetch(bitmapFontXML)).text();
    const fontXML = new DOMParser().parseFromString(fontXMLtext, "text/xml");
    const xmlHelper = new XMLHelper(fontXML);
    console.log("biggestWidth: " + xmlHelper.biggestWidth);

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
    
    resizeCanvas();

    app.renderer.backgroundColor = parseInt(highlightColors.darkgray.replace(/^#/, ''), 16);

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
    function setup(loader : PIXI.Loader, resources : any) {

        //Create the cat sprite
        cat = new Sprite(resources.dog.texture);
        var fontTexture = resources.bitmapFontTexture.texture as PIXI.Texture;
        
        //Add the cat to the stage
        app.stage.addChild(cat);
        cat.scale.x = 0.5;
        cat.scale.y = 0.5;

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
        console.log("letters: " + gameObjects.length);

        gameObjects.forEach(go => {
            app.stage.addChild(go.sprite);
        });

        const style = new PIXI.TextStyle({
            fontFamily: "Arial",
            fontSize: "15px",
            fill: 0xffffff,
            wordWrap: true
        });
        debugTimeText = new Text('time', style);
        debugTimeText.x = 0;
        debugTimeText.y = 0;
        app.stage.addChild(debugTimeText);

        //preparing done, init go
        gameObjects.forEach(go => go.init(gameContext));
        app.ticker.add(delta => loop(delta));
    } 
}

var time = 0;
var dir = 1;

function loop(delta : number) {
    var deltaS = delta * 0.01;
    time += deltaS;
    
    debugTimeText.text = "" + Math.floor(time);

    if(cat.x > app.view.width || cat.x < 0)
        dir *= -1;

    cat.rotation = Math.PI * time;
    cat.x += deltaS * 200 * dir;
    cat.y = Math.sin(time * 8)  * 250 + 300;

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