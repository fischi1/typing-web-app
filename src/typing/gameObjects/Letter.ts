import * as PIXI from "pixi.js"
import pixiColorHelper from "../pixiColorHelper"
import { letterScaling } from "../TypingRoot"
import { Cursor } from "./Cursor"
import { GameContext } from "./GameObject"
import { PixiSprite } from "./PixiSprite"
import { RowOffsetManager } from "./RowOffsetManager"
import {
    add,
    pixiPointToVec,
    vec2,
    vec2Zero,
    vecToPixiPoint,
    Vector2
} from "./Vector2"

export type LetterStatus =
    | "normal"
    | "selected"
    | "valid"
    | "invalid"
    | "invisible"

export class Letter extends PixiSprite {
    character: string
    index: number
    //letter used for text written by the user
    subLetter?: Letter

    curPos: Vector2 = vec2Zero()

    private startPosition: Vector2 = vec2Zero()

    constructor(
        index: number,
        character: string,
        sprite: PIXI.Sprite,
        container: PIXI.Container
    ) {
        super(sprite, container)
        this.index = index
        this.character = character
        this.sprite = sprite
    }

    init(gameContext: GameContext) {
        super.init(gameContext)
        this.sprite.scale = vecToPixiPoint(vec2(letterScaling))
        this.startPosition = pixiPointToVec(this.sprite.position as PIXI.Point)
        this.curPos = pixiPointToVec(this.sprite.position as PIXI.Point)

        if (this.subLetter) this.subLetter.setStatus("invisible")

        if (this.index === 0 && !this.subLetter && this.character !== "#") {
            Cursor.instance.setPosition(this.curPos)
        }
    }

    update(gameContext: GameContext): void {
        this.sprite.position = vecToPixiPoint(
            add(this.curPos, RowOffsetManager.instance.offset)
        )
    }

    show() {
        this.sprite.alpha = 1
    }

    hide() {
        this.sprite.alpha = 0
    }

    setPos(pos: Vector2) {
        this.curPos = pos
    }

    setStatus(status: LetterStatus) {
        switch (status) {
            case "normal":
                this.sprite.tint = pixiColorHelper.white
                this.show()
                break
            case "invalid":
                this.sprite.tint = pixiColorHelper.red
                this.show()
                break
            case "valid":
                this.sprite.tint = pixiColorHelper.green
                this.show()
                break
            case "selected":
                this.sprite.tint = pixiColorHelper.yellow
                this.show()
                break
            case "invisible":
                this.hide()
                break
            default:
                this.setStatus("normal")
        }
    }
}
