
var curWord = "";

export type ListenerFunction = {
    (newWord : string, oldWord : string, key : string) : boolean
}

var typingShouldPass : ListenerFunction | null;

export const registerForStatus = (func:ListenerFunction) => {
    typingShouldPass = func;
}

export const unregisterForStatus  = () => {
    typingShouldPass = null;
}

export const ttKeyPressed = (key : string) => {
    if(!typingShouldPass)
        return;

    var newWord = curWord;

    if(key.length === 1) {
        if(key === " " )
            newWord = "";
        else
            newWord += key;
    }
    else if(key === "Backspace")
        if(curWord.length > 0)
            newWord = curWord.substring(0, curWord.length - 1);

    if(typingShouldPass(newWord, curWord, key))
        curWord = newWord;
}
