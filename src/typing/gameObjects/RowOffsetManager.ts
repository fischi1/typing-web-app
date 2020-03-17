import forceToNull from "../../functions/forceToNull"
import { GameContext, GameObject } from "./GameObject"
import { lerp, vec2Zero, Vector2 } from "./Vector2"

export class RowOffsetManager extends GameObject {
    static instance: RowOffsetManager

    offset: Vector2 = vec2Zero()
    snap = 6

    private speed = -5
    private row = 0
    private lineHeight = 0
    private actualOffset: Vector2 = vec2Zero()

    constructor(lineHeight: number) {
        super()
        if (RowOffsetManager.instance)
            console.error("RowOffsetManager should only exist once!!!")
        else RowOffsetManager.instance = this

        this.lineHeight = lineHeight
    }

    init(gameContext: GameContext) {
        super.init(gameContext)
    }

    update(gameContext: GameContext): void {
        if (this.row > 0)
            this.actualOffset.y =
                -(this.row - 1) * this.lineHeight - this.lineHeight * 0.5

        this.offset = lerp(
            this.offset,
            this.actualOffset,
            gameContext.deltaTime * this.snap
        )
        //this.offset.y = Math.sin(gameContext.timeSinceStart * this.speed) * 200 + 100;
    }

    destroy(gameContext: GameContext): void {
        RowOffsetManager.instance = forceToNull<RowOffsetManager>()
    }

    setRow(row: number) {
        this.row = row
    }
}
