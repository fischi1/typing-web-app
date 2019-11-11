import { useGameResultHistoryState } from "../components/context/GameResultHistoryProvider"
import { useState, useEffect } from "react";
import lessonsData from "../data/lessonsDataImport";

const useLessonCompletedCount = () => {
    const gameResultHistoryState = useGameResultHistoryState();

    const [ info, setInfo ] = useState({completed: 0, amount: 0});
    
    useEffect(() => {
        const completed = lessonsData.allIds.map(lessonUuid =>
            gameResultHistoryState.history.some(gameResult =>
                gameResult.lessonUuid === lessonUuid
            )
        )
        .filter(b => b)
        .length;

        setInfo({completed: completed, amount: lessonsData.allIds.length});
    }, [gameResultHistoryState.history]);

    return info;
}

export default useLessonCompletedCount;