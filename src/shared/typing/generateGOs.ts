import * as PIXI from 'pixi.js';
import { Word } from "./types/Word";
import { Letter } from "./types/Letter";
import { Rectangle } from "pixi.js";

export default function generateGOs(text : string, words : Word[], letters : Letter[], fontTexture : PIXI.Texture) {
    const splitText = text.split(" ");

    splitText.forEach(wordText => {
        generateForWord(wordText, words, letters, fontTexture)
    })
}

function generateForWord(wordText : string, words : Word[], letters : Letter[], fontTexture : PIXI.Texture) {
    var word : Word = {letters:[]};
    for(let i = 0; i < wordText.length; i++) {
        fontTexture.frame = new Rectangle(10, 10, 150, 150);
        let sprite = new PIXI.Sprite(fontTexture);
        let letter = new Letter(wordText.charAt(i), sprite);
        word.letters.push(letter);
        letters.push(letter);
    }
    words.push(word);
}