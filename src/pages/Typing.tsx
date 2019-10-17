import React, { FC } from "react";
import GermanKeyboardController from "../components/keyboard/GermanKeyboardController";
import TypingCanvas from "../typing/TypingCanvas";
import { useSetTitleOnMount } from "../components/context/TitleProvider";

const Typing : FC<{}> = () => {
    
    useSetTitleOnMount("Level 1");

    return <>
        <div>  
            <TypingCanvas />
        </div>
        <br/>
        <GermanKeyboardController />
    </>; 
}

export default Typing;