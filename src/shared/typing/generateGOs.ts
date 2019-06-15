import { Word } from "./types/Word";
import { Letter } from "./types/Letter";

export default function generateGOs(text : string, words : Word[], letters : Letter[], fontXML : string) {
    const splitText = text.split(" ");

    splitText.forEach(wordText => {
        console.log(wordText);
    })
}
/*
function generateForWord(wordText : string, words : Word[], letters : Letter[]) {
    var word : Word = {letters:[]};
    for(let i = 0; i < wordText.length; i++) {
        let letter : Letter = {
            character : wordText.charAt(i),
            children: [],
            sprite : {},

        };
    }
}*/