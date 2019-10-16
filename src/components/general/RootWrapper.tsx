import React, { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import AppContainer from './AppContainer';
import GameResultHistoryProvider from "../context/GameResultHistoryProvider";

const RootWrapper: FC<{}> = ({children}) => {
    return (
        <GameResultHistoryProvider>
            <BrowserRouter>
                <AppContainer>
                        {children}
                </AppContainer>
            </BrowserRouter>
        </GameResultHistoryProvider>
    )
}

export default RootWrapper;