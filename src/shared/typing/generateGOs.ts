import * as PIXI from 'pixi.js';
import { Letter } from "./gameObjects/Letter";
import { Word } from "./gameObjects/Word";
import { XMLHelper } from './XMLHelper';

export type LetterGenerationParamsType = {
    words: Word[],
    letters: Letter[],
    fontTexture: PIXI.Texture,
    xmlHelper: XMLHelper
}

export default function generateGOs(text : string, additionalParams : LetterGenerationParamsType) {
    const splitText = text.split(" ");

    splitText.forEach(wordText => {
        generateForWord(wordText, additionalParams)
    });
}

function generateForWord(wordText : string, additionalParams : LetterGenerationParamsType) {
    var word : Word = {letters:[]};
    for(let i = 0; i < wordText.length; i++) {
        additionalParams.fontTexture.frame = additionalParams.xmlHelper.getRectangle(wordText.charCodeAt(i));
        let sprite = PIXI.Sprite.from(additionalParams.fontTexture.clone());
        let letter = new Letter(wordText.charAt(i), sprite);
        word.letters.push(letter);
        additionalParams.letters.push(letter);
    }
    additionalParams.words.push(word);
}