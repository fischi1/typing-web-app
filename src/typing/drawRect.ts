import * as PIXI from "pixi.js";
import { Vector2 } from "./gameObjects/Vector2";

const drawRect = (graphics : PIXI.Graphics, color : number, position : Vector2, bounds : Vector2) => {    
    graphics.clear();
    graphics.beginFill(color);
    graphics.drawRect(position.x, position.y, bounds.x, bounds.y);
    graphics.endFill();
}

export default drawRect;