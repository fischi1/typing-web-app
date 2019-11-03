import { Grid, Typography } from "@material-ui/core";
import React, { FC, useMemo, useState } from "react";
import { useHistory, useParams } from "react-router";
import { useSetTitleOnMount } from "../components/context/TitleProvider";
import { useUserInfoState, useUserInfoDispatch } from "../components/context/UserInfoProvider";
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

    const userInfoState = useUserInfoState();
    const userInfoDispatch = useUserInfoDispatch();

    const [isTyping, setIsTyping] = useState(false);

    const foundLesson = useMemo(() => getLesson(routeParams.uuid), [routeParams.uuid]);    
    
    useSetTitleOnMount("Lesson " + (foundLesson.index + 1));     

    const notEnoughGems = foundLesson.lesson.gemCost > userInfoState.gems;

    const startLesson = () => {
        userInfoDispatch({
            type: "removeGems",
            amount: foundLesson.lesson.gemCost
        });
        setIsTyping(true);
    }
    
    var dialogText = (
        <Typography align="center" variant="h5">
            Spend {foundLesson.lesson.gemCost} <DiamondIcon width="28px"/> to start this lesson?
        </Typography>
    );

    if(notEnoughGems)
        dialogText = (
            <Typography align="center" variant="h5" color="error">
                You don't have enough <DiamondIcon width="28px"/> for this lesson<br/>
                You need {foundLesson.lesson.gemCost - userInfoState.gems} more...
            </Typography>
        )

    return <>
        <AspectRatioBox
            width={canvasOptions.areaWidth}
            height={canvasOptions.areaHeight}
        >
            {isTyping ? 
                <TypingCanvas
                    lesson={foundLesson.lesson}
                />
            :
                    <Grid container justify="center" alignItems="center" style={{height: "100%"}}>                     
                        <ChooseDialog
                            onYes={startLesson}
                            onNo={() => history.goBack()}
                            hideButtons={notEnoughGems}
                            noBackground
                        >
                            {dialogText}
                        </ChooseDialog>
                    </Grid>
            }
        </AspectRatioBox>
        <br/>
        <GermanKeyboardController />
    </>; 
}

export default Typing;