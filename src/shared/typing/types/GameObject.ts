export type GameObject = {
    children: GameObject[];
    update: (deltaTime : number) => void;
}