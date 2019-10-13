import React, { FC } from "react";
import GermanKeyboardController from "../shared/keyboard/GermanKeyboardController";
import TypingCanvas from "../typing/TypingCanvas";

const Typing : FC<{}> = () => {
    return <>
        <div>  
            <TypingCanvas />
        </div>
        <br/>
        <GermanKeyboardController />
    </>; 
}

export default Typing;