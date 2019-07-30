import { createStyles, Theme, WithStyles, withStyles } from "@material-ui/core";
import React, { FC, useEffect, useState } from "react";

const styles = (theme: Theme) => createStyles({
});

type Props = {
    imgUrls: string[],
    widthMod: number,
    y: number
} & WithStyles<typeof styles>;

type ImgInfo = {
    width : number,
    url : string
}

const RenderRow : FC<Props> = (props : Props) => {
    const [ letters, setLetters ] = useState<ImgInfo[]>([])

    useEffect(() => {
        const newLetters : ImgInfo[] = [];
        var numElems = props.imgUrls.length;

        props.imgUrls.forEach(url => {
            var img = new Image();
            img.onload = () => {
                const newLetter = {url: url, width: img.width * props.widthMod};
                newLetters.push(newLetter);
                numElems--;
                if(numElems === 0)
                    setLettersAfterDone();
            }
            img.src = url;
        });

        const setLettersAfterDone = () => {
            setLetters(newLetters);
        }
    }, [props.imgUrls, props.widthMod]);

    var x = 0;

    return <>
        {letters.map((letter, i) => {
                const ret = <img key={i} src={letter.url} alt="" style={{left:x, top : props.y * props.widthMod, width: letter.width}}/>;
                x += letter.width
                return ret;
            }
        )}
    </>;
}

export default withStyles(styles)(RenderRow);