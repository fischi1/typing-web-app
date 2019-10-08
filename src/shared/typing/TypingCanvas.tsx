import React, { FC, useEffect } from 'react';
import useResetFocus from '../hooks/useResetFocus';
import useGermanKeysState from '../keyboard/useGermanKeysState';
import { GameResultType } from './GameResultType';
import { ttKeyPressed } from './typeTracking';
import TypingRoot from './TypingRoot';
import { useHistory } from 'react-router';

const testText = "Far... far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic lif.";
// const testText = "asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf";
// const testText = "asdf asdf asdf asdf asdf";

type Props = {
};

const TypingCanvas : FC<Props> = (props) => {    

    const history = useHistory();

    useGermanKeysState({onKeyDown: key => {
        ttKeyPressed(key);
    }});

    useResetFocus();

    useEffect(() => {

        const gameComplete = (result : GameResultType) : void=> {
            console.log(result);
            history.push("about");
        };

        const typing = new TypingRoot({
            text: testText,
            doneFunction : gameComplete,
            pointsPerLetter : 5
        });

        return(() => {
            typing.destroy();
        });
        
    }, [history]);

    return (<>
        <div id="typing-area-container"/>
    </>);
}

export default TypingCanvas;
