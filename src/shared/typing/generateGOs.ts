import * as PIXI from 'pixi.js';
import { Letter } from "./types/Letter";
import { Word } from "./types/Word";
import { XMLHelper } from './XMLHelper';

export default function generateGOs(text : string, words : Word[], letters : Letter[], fontTexture : PIXI.Texture, xmlHelper : XMLHelper) {
    const splitText = text.split(" ");

    splitText.forEach(wordText => {
        generateForWord(wordText, words, letters, fontTexture, xmlHelper)
    });
}

function generateForWord(wordText : string, words : Word[], letters : Letter[], fontTexture : PIXI.Texture, xmlHelper : XMLHelper) {
    var word : Word = {letters:[]};
    for(let i = 0; i < wordText.length; i++) {
        fontTexture.frame = xmlHelper.getRectangleForChar("l");
        let sprite = new PIXI.Sprite(fontTexture);
        let letter = new Letter(wordText.charAt(i), sprite);
        word.letters.push(letter);
        letters.push(letter);
    }
    words.push(word);
}