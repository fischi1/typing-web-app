import { ListenerFunction, registerListener, unregisterListener } from "../typeTracking";
import { GameContext, GameObject } from "./GameObject";
import { Word } from "./Word";
import { ErrorLetterPool } from "./ErrorLetterPool";
import { Letter } from "./Letter";
import { Cursor } from "./Cursor";

export class TypeTracker extends GameObject{

    words : Word[];

    private wordIndex = -1;
    private curWord : Word;
    private errorLetters : Record<number, Letter | null> = {};
    private curInput = "";
    private letterWidth : number;

    constructor(words : Word[], letterWidth : number) {
        super();
        this.words = words;
        this.curWord = words[0];
        this.letterWidth = letterWidth;
    }

    init(gameContext : GameContext) {
        registerListener(this.typingListener);
        this.nextWord();
    }

    update(gameContext : GameContext) {
    }

    destroy(gameContext : GameContext) {
        unregisterListener();
    }    

    typingListener : ListenerFunction = (key) => {
        if(key === " ") {
            if(this.curWord.text === this.curInput)
                this.nextWord();
            else
                this.curInput += " ";
        } else if(key.length === 1){
            this.curInput += key;
        } else if(key === "Backspace") {
            if(this.curInput.length)
                this.curInput = this.curInput.substr(0, this.curInput.length-1);
        }

        this.updateCurrentWord();
    };

    nextWord() {
        this.curInput = "";
        this.curWord.letters.forEach(letter => letter.setStatus("valid"));
        this.curWord = this.words[++this.wordIndex];
        this.curWord.letters.forEach(letter => letter.setStatus("selected"));
    }    
    
    updateCurrentWord() {
        var i = 0
        var subLetter : Letter | undefined;
        while(i < this.curWord.text.length && i < this.curInput.length) {
            subLetter = this.curWord.letters[i].subLetter;
            if(subLetter) {
                if(this.curWord.text[i] === this.curInput[i]) {
                    subLetter.setStatus("valid");
                } else if(!this.errorLetters[i]){
                    let errorLetter = ErrorLetterPool.instance.getLetter();
                    if(errorLetter) {
                        errorLetter.setStatus("invalid");
                        errorLetter.sprite.position = subLetter.sprite.position;
                        this.errorLetters[i] = errorLetter;
                    }
                }
            }
            i++;
        }

        //position cursor
        if(i < this.curWord.letters.length) { //before the last letter for word
            subLetter = this.curWord.letters[i].subLetter;
            if(subLetter)
                Cursor.instance.setPosition(subLetter.sprite.position.x, subLetter.sprite.y);
        } else { //after the last letter of the word
            subLetter = this.curWord.letters[this.curWord.letters.length-1].subLetter;
            if(subLetter)
                Cursor.instance.setPosition(subLetter.sprite.position.x + this.letterWidth, subLetter.sprite.y);
        }

        while(i < this.curWord.text.length) {
            subLetter = this.curWord.letters[i].subLetter;

            if(subLetter)
                subLetter.setStatus("invisible");
            
            let errorLetter = this.errorLetters[i];
            if(errorLetter) {
                //console.log("errorLetter");
                //console.log(errorLetter);
                errorLetter.setStatus("invisible");
                ErrorLetterPool.instance.returnLetter(errorLetter);
                this.errorLetters[i] = null;
            }

            i++;
        }
    }
}