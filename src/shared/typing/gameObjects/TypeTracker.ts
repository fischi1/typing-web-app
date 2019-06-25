import { ListenerFunction, registerForStatus, unregisterForStatus } from "../typeTracking";
import { GameContext, GameObject } from "./GameObject";

export class TypeTracker extends GameObject{    

    typingShouldPass : ListenerFunction = (newWord, oldWord, key) => {
        console.log(newWord);
        return true;
    };

    init(gameContext : GameContext) {
        registerForStatus(this.typingShouldPass);
    }

    update(gameContext : GameContext) {
    }

    destroy(gameContext : GameContext) {
        unregisterForStatus();
    }
}