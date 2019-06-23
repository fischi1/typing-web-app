import { Word } from "./gameObjects/Word";

export type InitWordPositionsParams = {
    words: Word[],
    letterWidth: number,
    letterHeight: number,
    canvasWidth: number,
    xOffset: number,
    yOffset: number,
    rightMargin: number
};

const initWordPositions = (params : InitWordPositionsParams) => {
    const {words, letterWidth, letterHeight, canvasWidth, xOffset, yOffset, rightMargin} = params;

    var xPos = xOffset;
    var yPos = yOffset;
    
    words.forEach(word => {
        var wordLength = word.letters.length * letterWidth;
        
        if(xPos + rightMargin + wordLength > canvasWidth) {
            yPos += letterHeight;
            xPos = xOffset;
        }

        word.letters.forEach(letter => {
            letter.sprite.x = xPos;
            letter.sprite.y = yPos;
            xPos += letterWidth;
        });
        xPos += letterWidth;
    });

}

export default initWordPositions;
