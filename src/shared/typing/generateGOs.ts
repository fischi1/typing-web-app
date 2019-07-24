import * as PIXI from 'pixi.js';
import { GameObject } from './gameObjects/GameObject';
import { Letter } from "./gameObjects/Letter";
import { Word } from "./gameObjects/Word";
import { XMLHelper } from './XMLHelper';

export type LetterGenerationParamsType = {
    words: Word[] | null,
    gameObjects : GameObject[],
    fontTexture: PIXI.Texture,
    xmlHelper: XMLHelper,
    generateSubletter?: boolean,
    container: PIXI.Container
}

var counter = 0;

const generateGOs = (text : string, additionalParams : LetterGenerationParamsType) : Letter[] => {
    const splitText = text.split(" ");
    const letters : Letter[] = [];

    splitText.forEach(wordText => {
        generateForWord(wordText, additionalParams, letters);
    });

    return letters;
}

const generateForWord = (wordText : string, additionalParams : LetterGenerationParamsType, letters : Letter[]) => {
    var word : Word = {letters:[], text : wordText, row: 0};
    for(let i = 0; i < wordText.length; i++) {
        let letter = new Letter(counter, wordText.charAt(i), generateLetterSprite(wordText.charCodeAt(i), additionalParams), additionalParams.container);

        word.letters.push(letter);
        letters.push(letter);
        additionalParams.gameObjects.push(letter);

        if(additionalParams.generateSubletter) {
            let subLetter = new Letter(counter, wordText.charAt(i), generateLetterSprite(wordText.charCodeAt(i), additionalParams), additionalParams.container);
            letter.subLetter = subLetter;
            additionalParams.gameObjects.push(subLetter);
        }

        counter++;
    }
    counter++;
    if(additionalParams.words)
        additionalParams.words.push(word);
}

export const generateLetterSprite = (charCode : number, additionalParams : LetterGenerationParamsType) => {
    additionalParams.fontTexture.frame = additionalParams.xmlHelper.getRectangle(charCode);
    return PIXI.Sprite.from(additionalParams.fontTexture.clone());
}

export default generateGOs;