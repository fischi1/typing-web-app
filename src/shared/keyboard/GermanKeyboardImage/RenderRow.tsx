import { createStyles, Theme, WithStyles, withStyles } from "@material-ui/core";
import React, { FC, useEffect, useState } from "react";
import { KeySprite } from "./imageUrls";

const styles = (theme: Theme) => createStyles({
});

type Props = {
    imgUrls: KeySprite[],
    widthMod: number,
    y: number,
    keysState : Record<number, boolean>
} & WithStyles<typeof styles>;

type ImgInfo = {
    width : number,
    keySprite : KeySprite
}

const RenderRow : FC<Props> = (props : Props) => {
    const [ letters, setLetters ] = useState<ImgInfo[]>([])

    useEffect(() => {
        const newLetters : ImgInfo[] = [];
        var numElems = props.imgUrls.length;

        props.imgUrls.forEach(keyData => {
            var img = new Image();
            img.onload = () => {
                const newLetter = {keySprite: keyData, width: img.width * props.widthMod};
                newLetters.push(newLetter);
                numElems--;
                if(numElems === 0)
                    setLettersAfterDone();
            }
            img.src = keyData.spriteUrl;
        });

        const setLettersAfterDone = () => {
            setLetters(newLetters);
        }
    }, [props.imgUrls, props.widthMod]);

    var x = 0;

    return <>
        {letters.map((letter, i) => {
                const xPos = x;
                x += letter.width

                if(props.keysState[letter.keySprite.keyCode])
                    return null;

                const ret = <img key={i} src={letter.keySprite.spriteUrl} alt="" style={{left:xPos, top : props.y * props.widthMod, width: letter.width}}/>;
                return ret;
            }
        )}
    </>;
}

export default withStyles(styles)(RenderRow);