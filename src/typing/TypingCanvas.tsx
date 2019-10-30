import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import React, { FC, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import skeleton from "../assets/images/typingCanvasSkeleton.png";
import useResetFocus from '../hooks/useResetFocus';
import useGermanKeysState from '../components/keyboard/useGermanKeysState';
import { GameResultType } from '../types/GameResultType';
import { ttKeyPressed } from './typeTracking';
import TypingRoot from './TypingRoot';
import { pixelatedStyleClass } from '../hooks/useGlobalPixelatedStyle';
import { Lesson } from '../types/LessonType';

type Props = {
    lesson: Lesson
}

const useStyles = makeStyles({
    skeleton: {
        width: "100%",
        height: "auto",
        backgroundColor: "red"
    }
});

const TypingCanvas : FC<Props> = props => {    

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
            lessonUuid: props.lesson.uuid,
            text: props.lesson.text,
            doneFunction : gameComplete,
            pointsPerLetter : props.lesson.gemsPerLetter,
            onLoaded: showTypingCanvas
        });

        return(() => {
            typing.destroy();
        });
        
    }, [history, props.lesson]);

    return (<>
        <img
            src={skeleton}
            className={clsx(classes.skeleton, pixelatedStyleClass)}
            alt="Loading" 
            style={{display: running ? "none" : "block"}}
        />
        <div id="typing-area-container" style={{display: !running ? "none" : "block"}}/>
    </>);
}

export default TypingCanvas;
