
import * as PIXI from 'pixi.js';
import { highlightColors } from '../../highlightColors';

import dog from "../../assets/images/dog.gif";

const areaWidth = 1190;
const areaHeight = 500;
const areaRatio = areaWidth / areaHeight;

//Aliases
let Application = PIXI.Application,
    loader = PIXI.Loader.shared,
    Sprite = PIXI.Sprite,
    Text = PIXI.Text;

var cat : PIXI.Sprite;
var debutTimeText : PIXI.Text;
var app : PIXI.Application;

var htmlCanvasContainer : HTMLElement | null;

export const init = () => {

    let type = "WebGL";
    if(!PIXI.utils.isWebGLSupported()){
      type = "canvas"
    }

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
    .load(setup);

    //This `setup` function will run when the image has loaded
    function setup(loader : PIXI.Loader, resources : any) {

        //Create the cat sprite
        cat = new Sprite(resources.dog.texture);
        
        //Add the cat to the stage
        app.stage.addChild(cat);

        cat.scale.x = 0.5;
        cat.scale.y = 0.5;

        const style = new PIXI.TextStyle({
            fontFamily: "Arial",
            fontSize: "15px",
            fill: 0xffffff,
            wordWrap: true
        });
        debutTimeText = new Text('time', style);
        debutTimeText.x = 0;
        debutTimeText.y = 0;
        app.stage.addChild(debutTimeText);

        app.ticker.add(delta => loop(delta));
    } 
}

var time = 0;
var dir = 1;

function loop(delta : number) {
    var deltaS = delta * 0.01;
    time += deltaS;
    
    debutTimeText.text = "" + Math.floor(time);

    if(cat.x > app.view.width || cat.x < 0)
        dir *= -1;

    cat.rotation = Math.PI * time;
    cat.x += deltaS * 200 * dir;
    cat.y = Math.sin(time * 8)  * 250 + 300;
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