import React, { FC } from "react"
import RootWrapper from "./components/general/RootWrapper"
import Routes from "./components/general/Routes"
import GlobalStyleWrapper from "./components/interface/GlobalStyleWrapper"
import usePrintConsoleHello from "./hooks/usePrintConsoleHello"

const App: FC<{}> = () => {
    usePrintConsoleHello()

    return (
        <GlobalStyleWrapper>
            <RootWrapper>
                <Routes />
            </RootWrapper>
        </GlobalStyleWrapper>
    )
}

export default App
