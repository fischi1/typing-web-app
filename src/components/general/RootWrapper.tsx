import React, { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import AppContainer from './AppContainer';
import GameResultHistoryProvider from "../context/GameResultHistoryProvider";
import TitleProvider from "../context/TitleProvider";

const RootWrapper: FC<{}> = ({children}) => {
    return (
        <GameResultHistoryProvider>
            <TitleProvider>
                <BrowserRouter>
                    <AppContainer>
                        {children}
                    </AppContainer>
                </BrowserRouter>
            </TitleProvider>
        </GameResultHistoryProvider>
    )
}

export default RootWrapper;