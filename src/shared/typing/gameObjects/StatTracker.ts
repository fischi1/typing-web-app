import { GameObject, GameContext } from "./GameObject";
import { WordListenerFunction, TypeTracker } from "./TypeTracker";
import { throwStatement } from "@babel/types";

export class StatTracker extends GameObject {
    
    lastTime = new Date();

    charactersTyped = 0;
    timeTakenSoFar = 0;

    init(gameContext : GameContext) : void {      
        TypeTracker.instance.registerWordCorrectListener(this.nextWord);
    }

    update(gameContext : GameContext) : void {
    }

    destroy(gameContext : GameContext) : void {
    }

    nextWord : WordListenerFunction = (current, next) => {

        if(!current)
            return;
        
        const newTime = new Date();

        const timeTakenForWord = newTime.getTime() - this.lastTime.getTime();

        this.lastTime = newTime;

        this.timeTakenSoFar += timeTakenForWord;
        this.charactersTyped += current.letters.length;

        console.log("WPM: " + this.getWPM());

    }

    getWPM() {
        var msFor5Chars = (this.timeTakenSoFar / this.charactersTyped) * 5;
        var mFor5Chars = msFor5Chars / 1000 / 60
        return 1 / (mFor5Chars);
    }
}