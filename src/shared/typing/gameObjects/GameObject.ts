
export type GameContext = {
    deltaTime : number,
    timeSinceStart : number,
    addGameObject(go : GameObject) : void,
    app: PIXI.Application
}

export abstract class GameObject{
    children: GameObject[] = [];

    init(gameContext : GameContext) : void {}

    update(gameContext : GameContext) : void {}

    destroy(gameContext : GameContext) : void {}
}