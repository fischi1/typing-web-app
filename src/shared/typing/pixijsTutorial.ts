
import * as PIXI from 'pixi.js';
import { highlightColors } from '../../highlightColors';

import dog from "../../assets/images/dog.gif";

import tilesheet from "../../assets/images/testTiles.png";


const bitmapFontUrl = process.env.PUBLIC_URL + '/bitmapfont/RobotoMonoBitmap.fnt';

console.log(bitmapFontUrl);

//Aliases
let Application = PIXI.Application,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    Sprite = PIXI.Sprite,
    Rectangle = PIXI.Rectangle,
    Text = PIXI.Text,
    BitmapText = PIXI.extras.BitmapText;

var cat : PIXI.Sprite;
var text : PIXI.Text;
var app : PIXI.Application;

export const init = () => {

    let type = "WebGL";
    if(!PIXI.utils.isWebGLSupported()){
      type = "canvas"
    }

    PIXI.utils.sayHello(type)
    
    app = new Application({ 
        antialias: true,
        transparent: false,
        resolution: 1,
        autoResize: true
      }
    );

    app.renderer.view.style.position = "absolute";
    app.renderer.view.style.display = "block";
    app.renderer.autoResize = true;
    //app.renderer.resize(window.innerWidth, window.innerHeight);

    app.renderer.backgroundColor = parseInt(highlightColors.green.replace(/^#/, ''), 16);

    //Add the canvas that Pixi automatically created for you to the HTML document
    const container = document.getElementById("typing-area-container");

    if(!container)
        return;
        
    container.appendChild(app.view);

    //load an image and run the `setup` function when it's done
     loader
        .add([
            dog,
            tilesheet,
        ]).add("RobotoMonoBitmap", bitmapFontUrl)
    .load(setup);

    //This `setup` function will run when the image has loaded
    function setup() {

        //Create the cat sprite
        cat = new Sprite(resources[dog].texture);
        let tiles = new Sprite(resources[tilesheet].texture);
        
        //Add the cat to the stage
        app.stage.addChild(cat);
        app.stage.addChild(tiles);

        cat.scale.x = 0.5;
        cat.scale.y = 0.5;

        tiles.x = 770;

        //Create the `tileset` sprite from the texture
        let texture = resources[tilesheet].texture.clone();

        //Create a rectangle object that defines the position and
        //size of the sub-image you want to extract from the texture
        //(`Rectangle` is an alias for `PIXI.Rectangle`)

        //Tell the texture to use that rectangular section
        texture.frame = new Rectangle(10, 10, 64, 64);

        //Create the sprite from the texture
        let rocket = new Sprite(texture);

        //Position the rocket sprite on the canvas
        rocket.x = 32;
        rocket.y = 32;

        //Add the rocket to the stage
        app.stage.addChild(rocket);

        const style = new PIXI.TextStyle({
            fontFamily: "Arial",
            wordWrap: true
        });
        text = new Text('', style);
        text.x = 0;
        text.y = 0;
        app.stage.addChild(text);

        const bitmapFontText = new BitmapText('bitmapf onts are supported!\nWoo yay!', { font: '55px Roboto Mono', align: 'left', tint: 0x0000ff});
    
        bitmapFontText.x = 50;
        bitmapFontText.y = 200;

        const bitmapStyle  = { font: '55px Roboto Mono', align: 'left', tint: 0x000000};
    
        app.stage.addChild(bitmapFontText);

        var bitmapFontArr : PIXI.extras.BitmapText[] = [];

        const loremIpsum = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Praesent adipiscing. Phasellus ullamcorper ipsum rutrum nunc. Nunc nonummy metus. Vestibulum volutpat pretium libero. Cras id dui. Aenean ut eros et nisl sagittis vestibulum. Nullam nulla eros, ultricies sit amet, nonummy id, imperdiet feugiat, pede. Sed lectus. Donec mollis hendrerit risus. Phasellus nec sem in justo pellentesque facilisis. Etiam imperdiet imperdiet orci. Nunc nec neque. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Maecenas malesuada. Praesent congue erat at massa. Sed cursus turpis vitae tortor. Donec posuere vulputate arcu. Phasellus accumsan cursus velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi quis porttitor congue, elit erat euismod orci, ac placerat dolor lectus quis orci. Phasellus consectetuer vestibulum elit. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc. Vestibulum fringilla pede sit amet augue. In turpis. Pellentesque posuere. Praesent turpis. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis. Nullam sagittis. Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce id purus. Ut varius tincidunt libero. Phasellus dolor. Maecenas vestibulum mollis diam. Pellentesque ut neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. In ac felis quis tortor malesuada pretium. Pellentesque auctor neque nec urna. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Aenean viverra rhoncus pede. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut non enim eleifend felis pretium feugiat. Vivamus quis mi. Phasellus a est. Phasellus magna. In hac habitasse platea dictumst. Curabitur at lacus ac velit ornare lobortis. Curabitur a felis in nunc fringilla tristique. Morbi mattis ullamcorper velit. Phasellus gravida semper nisi. Nullam vel sem. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Sed hendrerit. Morbi ac felis. Nunc egestas, augue at pellentesque laoreet, felis eros vehicula leo, at malesuada velit leo quis pede. Donec interdum, metus et hendrerit aliquet, dolor diam sagittis ligula, eget egestas libero turpis vel mi. Nunc nulla. Fusce risus nisl, viverra et, tempor et, pretium in, sapien. Donec venenatis vulputate lorem. Morbi nec metus. Phasellus blandit leo ut odio. Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. Sed magna purus, fermentum eu, tincidunt eu, varius ut, felis. In auctor lobortis lacus. Quisque libero metus, condimentum nec, tempor a, commodo mollis, magna. Vestibulum ullamcorper mauris at ligul";

        var curLineX = 0;
        var curLineY = -15;
        for (var i = 0; i < loremIpsum.length; i++) {
            let char = new BitmapText(loremIpsum.charAt(i), bitmapStyle);

            if(curLineX > window.innerWidth) {
                curLineX = 0;
                curLineY += 45;
            }
            char.x = curLineX;
            curLineX += 25;
            char.y = curLineY;
            bitmapFontArr.push(char);
            app.stage.addChild(char);
        }        
        app.ticker.add(delta => loop(delta));
    }
}

var time = 0;
var dir = 1;

function loop(delta : number) {
    var deltaS = delta * 0.01;
    time += deltaS;
    text.text = "" + Math.floor(time);
    if(cat.x > app.view.width || cat.x < 0)
        dir *= -1;
    cat.rotation = Math.PI * time;
    cat.x += deltaS * 200 * dir;
    cat.y = Math.sin(time * 8)  * 250 + 300;
}