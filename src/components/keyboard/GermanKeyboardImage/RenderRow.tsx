import React, { FC, useEffect, useState } from "react"
import { KeySprite } from "./imageUrls"

type Props = {
    imgUrls: KeySprite[]
    widthMod: number
    y: number
    keysState: Record<number, boolean>
}

type ImgInfo = {
    width: number
    keySprite: KeySprite
}

const RenderRow: FC<Props> = (props: Props) => {
    const [letters, setLetters] = useState<ImgInfo[]>([])

    useEffect(() => {
        var numElems = props.imgUrls.length
        const newLetters: ImgInfo[] = new Array(numElems)

        props.imgUrls.forEach((keyData, i) => {
            var img = new Image()
            img.onload = () => {
                const newLetter = {
                    keySprite: keyData,
                    width: img.width * props.widthMod
                }
                newLetters[i] = newLetter
                numElems--
                if (numElems === 0) setLettersAfterDone()
            }
            img.src = keyData.spriteUrl
        })

        const setLettersAfterDone = () => {
            setLetters(newLetters)
        }
    }, [props.imgUrls, props.widthMod])

    var x = 0

    return (
        <>
            {letters.map((letter, i) => {
                const xPos = x
                x += letter.width

                if (props.keysState[letter.keySprite.keyCode]) return null

                const ret = (
                    <img
                        key={i}
                        src={letter.keySprite.spriteUrl}
                        alt=""
                        style={{
                            left: xPos,
                            top: props.y * props.widthMod,
                            width: letter.width
                        }}
                    />
                )
                return ret
            })}
        </>
    )
}

export default RenderRow
