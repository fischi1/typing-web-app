import React, { FC, useMemo } from "react";
import GermanKeyboardController from "../components/keyboard/GermanKeyboardController";
import TypingCanvas from "../typing/TypingCanvas";
import { useSetTitleOnMount } from "../components/context/TitleProvider";
import { useParams } from "react-router";
import lessonsData from "../data/lessonsDataImport";
import { Lesson } from "../types/LessonType";

const getLesson = (uuid?: string) => {
    const lesson = lessonsData.data[uuid ? uuid : lessonsData.allIds[0]];

    if(!lesson)
        return {
            lesson: lessonsData.data[lessonsData.allIds[0]] as Lesson,
            index: 0
        }

    return {
        lesson: lesson,
        index: lessonsData.allIds.findIndex(l => l === uuid)
    };
}

const Typing : FC<{}> = () => {

    const routeParams = useParams<{uuid?: string}>();

    const foundLesson = useMemo(() => getLesson(routeParams.uuid), [routeParams.uuid]);
    
    
    useSetTitleOnMount("Lesson " + (foundLesson.index + 1));
        

    return <>
        <div>  
            <TypingCanvas />
        </div>
        <br/>
        <GermanKeyboardController />
    </>; 
}

export default Typing;