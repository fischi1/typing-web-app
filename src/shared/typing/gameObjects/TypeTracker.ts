import { ListenerFunction, registerListener, unregisterListener } from "../typeTracking";
import { GameContext, GameObject } from "./GameObject";
import { Word } from "./Word";
import { ErrorLetterPool } from "./ErrorLetterPool";
import { Letter } from "./Letter";

export class TypeTracker extends GameObject{

    words : Word[];

    private wordIndex = 0;
    private curWord : Word;
    private errorLetters : Record<number, Letter | null> = {};
    private curInput = "";

    constructor(words : Word[]) {
        super();
        this.words = words;
        this.curWord = words[0];
    }

    init(gameContext : GameContext) {
        registerListener(this.typingListener);
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
        this.curWord = this.words[++this.wordIndex];
    }    
    
    updateCurrentWord() {
        var i = 0
        while(i < this.curWord.text.length && i < this.curInput.length) {
            let subLetter = this.curWord.letters[i].subLetter;
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

        while(i < this.curWord.text.length) {
            let subLetter = this.curWord.letters[i].subLetter;

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