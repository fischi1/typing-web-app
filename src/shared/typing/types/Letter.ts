import * as PIXI from 'pixi.js';
import { GameObject } from "./GameObject";

export type Letter = {
    character : string;
    sprite : PIXI.Sprite;
} & GameObject;