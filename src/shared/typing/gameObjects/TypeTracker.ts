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

export class TypeTracker extends GameObject{

    static instance : TypeTracker;

    private words : Word[];

    private active = false;

    private wordIndex = -1;
    private curWord : Word;
    private errorLetters : Record<number, Letter | null> = {};
    private curInput = "";
    private letterWidth : number;

    private lastValidLetters = 0;
    private lastInvalidLetters = 0;
    private letterContainer : PixiContainer

    private wordCorrectRegistered : {(word : Word) : void;}[] = [];
    private errorRegistered : {() : void}[] = [];

    constructor(words : Word[], letterWidth : number, letterContainer : PixiContainer) {
        super();
        this.words = words;
        this.curWord = words[0];
        this.letterWidth = letterWidth;
        this.letterContainer = letterContainer;

        if(TypeTracker.instance)
            console.error("TypeTracker.instance is already set");
        else
            TypeTracker.instance = this;
    }

    init(gameContext : GameContext) {
        registerListener(this.typingListener);
        this.nextWord();
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

        console.log(this.curInput.replace(/\s/g, "~"));

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
            
            if(this.wordIndex > 0)
                this.wordCorrectRegistered.forEach(func => func(this.curWord));

            this.curInput = "";
            this.curWord.letters.forEach(letter => letter.setStatus("valid"));
            this.curWord = this.words[this.wordIndex];
            this.curWord.letters.forEach(letter => letter.setStatus("selected"));
            this.lastInvalidLetters = 0;
            this.lastValidLetters = 0;
            RowOffsetManager.instance.setRow(this.curWord.row);
            playSuccessSound();
        } else {
            console.log("done");
            this.wordCorrectRegistered.forEach(func => func(this.curWord));
            this.active = false;
        }
    }    
    
    updateCurrentWord() {
        var i = 0
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

        //position cursor
        if(i < this.curWord.letters.length) { //before the last letter for word
            subLetter = this.curWord.letters[i].subLetter;
            if(subLetter)
                Cursor.instance.setPosition(subLetter.curPos);
        } else { //after the last letter of the word
            subLetter = this.curWord.letters[this.curWord.letters.length-1].subLetter;
            if(subLetter)
                Cursor.instance.setPosition({x: subLetter.curPos.x + this.letterWidth, y: subLetter.curPos.y});
        }

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
        } else if(validLetters < this.lastValidLetters) {
            //backspace
            playTypingSound();
        }

        if(invalidLetters > this.lastInvalidLetters) {
            this.error();
            playFailSound();
        } else if(invalidLetters < this.lastInvalidLetters) {
            //backspace on error
            playTypingSound();
        }

        this.lastInvalidLetters = invalidLetters;
        this.lastValidLetters = validLetters;
    }

    error() {
        //console.error("typing error");
        this.errorRegistered.forEach(func => func());
    }

    /**
     * registers a callback function when a word was typed correctly
     * @param func 
     */
    registerWordCorrectListener(func : (word : Word) => void) {
        this.wordCorrectRegistered.push(func);
    }

    /**
     * 
     * @param func 
     */
    registerErrorListener(func: () => void) {
        this.errorRegistered.push(func);
    }

    /**
     * Called by StartCountdown
     */
    startGame() {
        this.active = true;
        Cursor.instance.active = true;
        this.letterContainer.show();
    }
}