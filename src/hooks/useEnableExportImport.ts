import { useGameResultHistoryState, useGameResultHistoryDispatch } from "../components/context/GameResultHistoryProvider";
import { useUserInfoState, useUserInfoDispatch } from "../components/context/UserInfoProvider";
import { useEffect } from "react";

declare var window: Window & 
    {
        exportUserData: () =>  string,
        importUserData: (data: string) => void
    };

type DataType = {
    gameResultHistoryState: ReturnType<typeof useGameResultHistoryState>,
    userInfoState: ReturnType<typeof useUserInfoState>
}

const useEnableExportImport = () => {
    const gameResultHistoryState = useGameResultHistoryState();
    const userInfoState = useUserInfoState();

    const gameResultHistoryDispatch = useGameResultHistoryDispatch();
    const userInfoDispatch = useUserInfoDispatch();

    useEffect(() => {
        window.exportUserData = () => {
            return JSON.stringify(
                {
                    gameResultHistoryState: gameResultHistoryState,
                    userInfoState: userInfoState
                },
                null,
                4
            );
        };
    }, [gameResultHistoryState, userInfoState]);

    useEffect(() => {
        window.importUserData = data => {
            const imported = JSON.parse(data) as DataType;
            gameResultHistoryDispatch({type: "setState", payload: imported.gameResultHistoryState});
            userInfoDispatch({type: "setState", payload: imported.userInfoState})
        }
    }, [gameResultHistoryDispatch, userInfoDispatch])
}

export default useEnableExportImport;