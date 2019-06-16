import * as PIXI from 'pixi.js';

type RectangleDictionary = {
    [index:number] : PIXI.Rectangle 
}

export class XMLHelper {
    private xmlDoc : Document;
    private rectangleDic : RectangleDictionary;
    
    biggestWidth : number = 0;

    constructor(xmlDoc : Document) {
        this.xmlDoc = xmlDoc;
        this.rectangleDic = this.initDic();
    }

    getCount() : number {
        const countAttr = this.xmlDoc.getElementsByTagName("chars")[0].getAttribute("count");
        const count = countAttr ? +countAttr : 0;
        return count;
    }

    getRectangleForChar(char: string): PIXI.Rectangle {
        const code = char.charCodeAt(0);
        return this.getRectangle(code);
    }

    getRectangle(charCode : number) : PIXI.Rectangle {
        return this.rectangleDic[charCode];
    }

    private initDic() : RectangleDictionary {
        var ret : RectangleDictionary = {};
    
        const chars = this.xmlDoc.getElementsByTagName("char");

        for(let i = 0; i < chars.length; i++) {
            const elem = chars[i];

            var id = +(elem.getAttribute("id") as string);
            var width = +(elem.getAttribute("width") as string);

            if(width > this.biggestWidth)
                this.biggestWidth = width;

            ret[id] = new PIXI.Rectangle(
                +(elem.getAttribute("x") as string),
                +(elem.getAttribute("y") as string),
                width,
                +(elem.getAttribute("height") as string)
            );
        }

        return ret;
    }
}