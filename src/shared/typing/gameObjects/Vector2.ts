import * as PIXI from 'pixi.js';

export type Vector2 = {
    x: number,
    y: number
}

export const vec2Zero = () : Vector2 => {
    return {x:0, y: 0};
}

export const pixiPointToVec = (point : PIXI.Point) : Vector2 => {
    return {x: point.x, y: point.y};
}

export const vecToPixiPoint = (vec : Vector2) : PIXI.Point => {
    return new PIXI.Point(vec.x, vec.y);
}

export const vec2 = (val : number) : Vector2 => {
    return {x: val, y: val};
}

export const add = (vecA: Vector2, vecB: Vector2) : Vector2 => {
    return {x: vecA.x + vecB.x, y: vecA.y + vecB.y};
}

export const lerp = (from: Vector2, to: Vector2, t : number) : Vector2 => {
    t = Math.min(1, t);
    t = Math.max(0, t);
    return {x: to.x * t +  from.x * (1-t), y: to.y * t +  from.y * (1-t)}
}