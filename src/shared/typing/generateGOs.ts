import * as PIXI from 'pixi.js';
import { GameObject } from './gameObjects/GameObject';
import { Letter } from "./gameObjects/Letter";
import { Word } from "./gameObjects/Word";
import pixiColorHelper from './pixiColorHelper';
import { XMLHelper } from './XMLHelper';

export type LetterGenerationParamsType = {
    words: Word[],
    gameObjects : GameObject[],
    fontTexture: PIXI.Texture,
    xmlHelper: XMLHelper
}

export default function generateGOs(text : string, additionalParams : LetterGenerationParamsType) : Letter[] {
    const splitText = text.split(" ");
    const letters : Letter[] = [];

    splitText.forEach(wordText => {
        generateForWord(wordText, additionalParams)
    });

    return letters;
}

function generateForWord(wordText : string, additionalParams : LetterGenerationParamsType) {
    var word : Word = {letters:[]};
    for(let i = 0; i < wordText.length; i++) {
        additionalParams.fontTexture.frame = additionalParams.xmlHelper.getRectangle(wordText.charCodeAt(i));

        let letter = new Letter(wordText.charAt(i), PIXI.Sprite.from(additionalParams.fontTexture.clone()));
        let subLetter = new Letter(wordText.charAt(i), PIXI.Sprite.from(additionalParams.fontTexture.clone()));
        subLetter.sprite.tint = pixiColorHelper.green;
        letter.subLetter = subLetter;

        word.letters.push(letter);

        additionalParams.gameObjects.push(letter);
        additionalParams.gameObjects.push(subLetter);
    }
    additionalParams.words.push(word);
}