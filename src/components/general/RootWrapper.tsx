import React, { FC } from "react"
import { BrowserRouter } from "react-router-dom"
import GameResultHistoryProvider from "../context/GameResultHistoryProvider"
import TitleProvider from "../context/TitleProvider"
import UserInfoProvider from "../context/UserInfoProvider"
import AppContainer from "./AppContainer"

const RootWrapper: FC<{}> = ({ children }) => (
    <GameResultHistoryProvider>
        <TitleProvider>
            <UserInfoProvider>
                <BrowserRouter>
                    <AppContainer>{children}</AppContainer>
                </BrowserRouter>
            </UserInfoProvider>
        </TitleProvider>
    </GameResultHistoryProvider>
)

export default RootWrapper
