import React, { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import AppContainer from './AppContainer';
import GameResultHistoryProvider from "../context/GameResultHistoryProvider";
import TitleProvider from "../context/TitleProvider";
import UserInfoProvider from "../context/UserInfoProvider";

const RootWrapper: FC<{}> = ({children}) => {
    return (
        <GameResultHistoryProvider>
            <TitleProvider>
                <UserInfoProvider>
                    <BrowserRouter>
                        <AppContainer>
                            {children}
                        </AppContainer>
                    </BrowserRouter>
                </UserInfoProvider>
            </TitleProvider>
        </GameResultHistoryProvider>
    )
}

export default RootWrapper;