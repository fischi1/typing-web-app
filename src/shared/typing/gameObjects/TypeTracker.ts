import { playFailSound, playSuccessSound, playTypingSound } from "../SoundManager";
import { ListenerFunction, registerListener, unregisterListener } from "../typeTracking";
import { Cursor } from "./Cursor";
import { ErrorLetterPool } from "./ErrorLetterPool";
import { GameContext, GameObject } from "./GameObject";
import { Letter } from "./Letter";
import { PixiContainer } from "./PixiContainer";
import { RowOffsetManager } from "./RowOffsetManager";
import { Word } from "./Word";
import forceToNull from "../../functions/forceToNull";
import { GameResultReasonType } from "../GameResultType";

export type WordListenerFunction =  {(currentWord : Word | null, nextWord : Word | null) : void};
export type LetterListenerFunction = {(curIndex : number) : void};

export class TypeTracker extends GameObject{

    static instance : TypeTracker;

    private words : Word[];

    private active = false;

    private wordIndex = -1;
    private curWord : Word;
    private errorLetters : Record<number, Letter | null> = {};
    private curInput = "";
    private letterWidth : number;
    private letterIndex = 0;

    private lastValidLetters = 0;
    private lastInvalidLetters = 0;
    private letterContainer : PixiContainer

    private wordCorrectRegistered : WordListenerFunction[] = [];
    private errorRegistered : LetterListenerFunction[] = [];
    private letterCorrectRegistered : LetterListenerFunction[] = [];

    private gameDone : {(reason : GameResultReasonType) : void};

    constructor(words : Word[], letterWidth : number, letterContainer : PixiContainer, gameDone : {(reason : GameResultReasonType) : void}) {
        super();
        this.words = words;
        this.curWord = words[0];
        this.letterWidth = letterWidth;
        this.letterContainer = letterContainer;

        this.gameDone = gameDone;

        if(TypeTracker.instance)
            console.error("TypeTracker.instance is already set");
        else
            TypeTracker.instance = this;
    }

    init(gameContext : GameContext) {
        registerListener(this.typingListener);
    }

    update(gameContext : GameContext) {
    }

    destroy(gameContext : GameContext) {
        unregisterListener();
        TypeTracker.instance = forceToNull();
    }    

    typingListener : ListenerFunction = (key) => {

        if(!this.active)
            return;

        if(key === " ") {
            if(this.curWord.text === this.curInput)
                this.nextWord();
            else
                this.addLetter(" ");
        } else if(key.length === 1){
            this.addLetter(key);
        } else if(key === "Backspace") {
            if(this.curInput.length) {
                this.curInput = this.curInput.substr(0, this.curInput.length-1);
            } else {
                Cursor.instance.bump();
                this.error();
            }
        }

        //console.log(this.curInput.replace(/\s/g, "~"));

        this.updateCurrentWord();
    };

    
    addLetter(char:string) {
        if(this.curInput.length < this.curWord.text.length) {
            this.curInput += char;
        } else {
            Cursor.instance.bump();
            this.error();
        }
    }

    nextWord() {
        this.wordIndex++;
        if(this.wordIndex < this.words.length) {
            
            if(this.wordIndex === 0)
                this.wordCorrectRegistered.forEach(func => func(null, this.words[this.wordIndex]));
            else
                this.wordCorrectRegistered.forEach(func => func(this.curWord, this.words[this.wordIndex]));

            if(this.wordIndex < this.words.length && this.wordIndex !== 0) {
                this.letterCorrect(this.letterIndex + 1);
            }

            this.curInput = "";
            this.curWord.letters.forEach(letter => letter.setStatus("valid"));
            this.curWord = this.words[this.wordIndex];
            this.curWord.letters.forEach(letter => letter.setStatus("selected"));
            this.lastInvalidLetters = 0;
            this.lastValidLetters = 0;
            RowOffsetManager.instance.setRow(this.curWord.row);
            playSuccessSound();
        } else {
            this.wordCorrectRegistered.forEach(func => func(this.curWord, null));
            this.finished();
        }
    }    
    
    updateCurrentWord() {
        var i = 0;
        var subLetter : Letter | undefined;
        var validLetters = 0;
        var invalidLetters = 0;

        while(i < this.curWord.text.length && i < this.curInput.length) {
            subLetter = this.curWord.letters[i].subLetter;
            if(subLetter) {
                if(this.curWord.text[i] === this.curInput[i]) {
                    subLetter.setStatus("valid");
                    validLetters++;
                } else {
                    invalidLetters++;
                    if(!this.errorLetters[i]){
                        let errorLetter = ErrorLetterPool.instance.getLetter();
                        if(errorLetter) {
                            errorLetter.setStatus("invalid");
                            errorLetter.setPos(subLetter.curPos);
                            this.errorLetters[i] = errorLetter;
                        }
                    }
                }
            }
            i++;
        }

        var curLetter : Letter | undefined;
        //position cursor and find the current index for the letter
        if(i < this.curWord.letters.length) { //before the last letter for word
            curLetter = this.curWord.letters[i];
            subLetter = curLetter.subLetter;
            this.letterIndex = curLetter.index;
            if(subLetter)
                Cursor.instance.setPosition(subLetter.curPos);
        } else { //after the last letter of the word
            curLetter = this.curWord.letters[this.curWord.letters.length-1];
            subLetter = curLetter.subLetter;
            this.letterIndex = curLetter.index + 1;
            if(subLetter)
                Cursor.instance.setPosition({x: subLetter.curPos.x + this.letterWidth, y: subLetter.curPos.y});
        }
        // console.log("letterIndex: " + this.letterIndex);

        while(i < this.curWord.text.length) {
            subLetter = this.curWord.letters[i].subLetter;

            if(subLetter)
                subLetter.setStatus("invisible");
            
            let errorLetter = this.errorLetters[i];
            if(errorLetter) {
                errorLetter.setStatus("invisible");
                ErrorLetterPool.instance.returnLetter(errorLetter);
                this.errorLetters[i] = null;
            }

            i++;
        }

        //sounds and events
        if(validLetters > this.lastValidLetters) {
            playTypingSound();
            this.letterCorrect(this.letterIndex);
        } else if(validLetters < this.lastValidLetters) {
            //backspace
            playTypingSound();
        }

        if(invalidLetters > this.lastInvalidLetters) {
            playFailSound();
            this.error();
        } else if(invalidLetters < this.lastInvalidLetters) {
            //backspace on error
            playTypingSound();
        }

        this.lastInvalidLetters = invalidLetters;
        this.lastValidLetters = validLetters;
    }

    letterCorrect(curIndex : number) {
        this.letterCorrectRegistered.forEach(func => func(curIndex));
    }

    error() {
        //console.error("typing error");
        this.errorRegistered.forEach(func => func(this.getLetterIndex()));
    }

    /**
     * registers a callback function when a word was typed correctly
     * @param func 
     */
    registerWordCorrectListener(func : WordListenerFunction) {
        this.wordCorrectRegistered.push(func);
    }

    registerErrorListener(func: LetterListenerFunction) {
        this.errorRegistered.push(func);
    }

    registerLetterListener(func: LetterListenerFunction) {
        this.letterCorrectRegistered.push(func);
    }

    /**
     * @returns the index of the current letter
     */
    getLetterIndex() {
        return this.letterIndex;    
    }

    /**
     * Called by StartCountdown
     */
    startGame() {
        this.active = true;
        Cursor.instance.active = true;
        this.letterContainer.show();
        this.nextWord();
    }

    finished() {
        console.log("GAME FINISHED!");
        this.active = false;
        this.gameDone("DONE");
    }

    /**
     * called by LivesDisplay if no lives are left
     */
    failure() {
        console.log("GAME OVER!");
        this.active = false;
        this.gameDone("GAME_OVER");
    }
}