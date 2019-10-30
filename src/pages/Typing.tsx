import { Grid, Typography } from "@material-ui/core";
import React, { FC, useMemo, useState } from "react";
import { useHistory, useParams } from "react-router";
import { useSetTitleOnMount } from "../components/context/TitleProvider";
import AspectRatioBox from "../components/interface/AspectRatioBox";
import ChooseDialog from "../components/interface/ChooseDialog";
import DiamondIcon from "../components/interface/DiamondIcon";
import GermanKeyboardController from "../components/keyboard/GermanKeyboardController";
import lessonsData from "../data/lessonsDataImport";
import { Lesson } from "../types/LessonType";
import TypingCanvas from "../typing/TypingCanvas";
import { canvasOptions } from "../typing/TypingRoot";

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
    
    const history = useHistory();

    const [isTyping, setIsTyping] = useState(false);

    const foundLesson = useMemo(() => getLesson(routeParams.uuid), [routeParams.uuid]);    
    
    useSetTitleOnMount("Lesson " + (foundLesson.index + 1));
        

    return <>
        <AspectRatioBox
            width={canvasOptions.areaWidth}
            height={canvasOptions.areaHeight}
        >
            {isTyping ? 
                <TypingCanvas />
            :
                    <Grid container justify="center" alignItems="center" style={{height: "100%"}}>                     
                        <ChooseDialog
                            onYes={() => setIsTyping(true)}
                            onNo={() => history.goBack()}
                        >
                            <Typography align="center" variant="h5">
                                Spend {foundLesson.lesson.gemCost} <DiamondIcon width="28px"/> to start this lesson?
                            </Typography>
                        </ChooseDialog>
                    </Grid>
            }
        </AspectRatioBox>
        <br/>
        <GermanKeyboardController />
    </>; 
}

export default Typing;