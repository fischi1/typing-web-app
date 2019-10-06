import { GameContext, GameObject } from "./GameObject";
import { TypeTracker, WordListenerFunction, LetterCorrectListenerFunction } from "./TypeTracker";
import forceToNull from "../../functions/forceToNull";

export class StatTracker extends GameObject {
    
    static instance : StatTracker;

    lastTime = new Date();

    charactersTyped = 0;
    timeTakenSoFar = 0;

    constructor() {
        super();
        if(!!StatTracker.instance)
            console.error("StatTracker.instance already set!!!");
        StatTracker.instance = this;
    }

    init(gameContext : GameContext) : void {      
        TypeTracker.instance.registerWordCorrectListener(this.nextWord);
        TypeTracker.instance.registerErrorListener(this.letterError);
        TypeTracker.instance.registerLetterListener(this.letterCorrect);
    }

    update(gameContext : GameContext) : void {
    }

    destroy(gameContext : GameContext) : void {
        StatTracker.instance = forceToNull();
    }

    nextWord : WordListenerFunction = (current, next) => {

        const newTime = new Date();

        if(!current){            
            return;
        }        

        const timeTakenForWord = newTime.getTime() - this.lastTime.getTime();

        this.lastTime = newTime;

        this.timeTakenSoFar += timeTakenForWord;
        this.charactersTyped += current.letters.length;

        // console.log("WPM: " + this.getWPM());

    }

    letterCorrect : LetterCorrectListenerFunction = (curIndex) => {
        console.log("letterCorrect: " + curIndex);
    }

    letterError = () => {
        console.log("letterError")
    }

    getWPM() {
        var msFor5Chars = (this.timeTakenSoFar / this.charactersTyped) * 5;
        var mFor5Chars = msFor5Chars / 1000 / 60
        return 1 / (mFor5Chars);
    }
}