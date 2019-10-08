import React, { FC } from "react";
import GermanKeyboardController from "../shared/keyboard/GermanKeyboardController";
import TypingCanvas from "../shared/typing/TypingCanvas";

type Props = {
};

const Home : FC<Props> = props => {
    return <>
        <div>  
            <TypingCanvas />
        </div>
        <br/>
        <GermanKeyboardController />
    </>; 
}

export default Home;