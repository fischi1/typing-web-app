import { Word } from "./gameObjects/Word";
import { Vector2 } from "./gameObjects/Vector2";

export type InitWordPositionsParams = {
    words: Word[],
    letterWidth: number,
    letterHeight: number,
    canvasWidth: number,
    offset: Vector2
    rightMargin: number
};

const initWordPositions = (params : InitWordPositionsParams) => {
    const {words, letterWidth, letterHeight, canvasWidth, offset, rightMargin} = params;

    var xPos = offset.x;
    var yPos = offset.y;
    var row = 0;
    
    words.forEach(word => {
        var wordLength = word.letters.length * letterWidth;
        
        if(xPos + rightMargin + wordLength > canvasWidth) {
            yPos += letterHeight;
            xPos = offset.x;
            row++;
        }

        word.row = row;

        word.letters.forEach(letter => {
            letter.sprite.x = xPos;
            letter.sprite.y = yPos;

            if(letter.subLetter) {
                letter.subLetter.sprite.x = xPos;
                letter.subLetter.sprite.y = yPos + letterHeight / 2;
            }

            xPos += letterWidth;
        });
        xPos += letterWidth;
    });

}

export default initWordPositions;
