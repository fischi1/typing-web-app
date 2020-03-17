import { GameContext } from "./GameObject"
import { PixiSprite } from "./PixiSprite"
import { vec2, vecToPixiPoint } from "./Vector2"

export class DebugCat extends PixiSprite {
    private dir = 1

    init(gameContext: GameContext) {
        super.init(gameContext)

        this.sprite.scale = vecToPixiPoint(vec2(0.3))
        this.sprite.alpha = 0.5
    }

    update(gameContext: GameContext): void {
        if (this.sprite.x > gameContext.app.view.width || this.sprite.x < 0)
            this.dir *= -1

        this.sprite.rotation = Math.PI * gameContext.timeSinceStart
        this.sprite.x += gameContext.deltaTime * 100 * this.dir
        this.sprite.y = Math.sin(gameContext.timeSinceStart * 8) * 170 + 250
    }

    destroy(gameContext: GameContext): void {}
}
