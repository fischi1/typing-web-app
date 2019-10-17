import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import React, { FC, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import skeleton from "../assets/images/typingCanvasSkeleton.png";
import useResetFocus from '../hooks/useResetFocus';
import useGermanKeysState from '../components/keyboard/useGermanKeysState';
import { GameResultType } from './GameResultType';
import { ttKeyPressed } from './typeTracking';
import TypingRoot from './TypingRoot';

const useStyles = makeStyles({
    skeleton: {
        width: "100%",
        height: "auto",
        imageRendering: "pixelated",
        backgroundColor: "red"
    },
    skeletonMoz: {
        imageRendering: "-moz-crisp-edges"
    },
    skeletonCrisp: {
        imageRendering: "crisp-edges"
    }
});

const testText = "Far... far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic lif.";
// const testText = "asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf";
// const testText = "asdf asdf asdf asdf asdf";

const TypingCanvas : FC<{}> = () => {    

    const history = useHistory();

    const classes = useStyles();

    useGermanKeysState({onKeyDown: key => {
        ttKeyPressed(key);
    }});

    useResetFocus();

    const [ running, setRunning ] = useState(false);

    const showTypingCanvas = () => {
        setRunning(true);
    }

    useEffect(() => {

        const gameComplete = (result : GameResultType) : void=> {
            history.push("/gameresult", result);
        };

        const typing = new TypingRoot({
            text: testText,
            doneFunction : gameComplete,
            pointsPerLetter : 5,
            onLoaded: showTypingCanvas
        });

        return(() => {
            typing.destroy();
        });
        
    }, [history]);

    return (<>
        <img
            src={skeleton}
            className={clsx(classes.skeleton, classes.skeletonCrisp, classes.skeletonMoz)}
            alt="Loading" 
            style={{display: running ? "none" : "block"}}
        />
        <div id="typing-area-container" style={{display: !running ? "none" : "block"}}/>
    </>);
}

export default TypingCanvas;
