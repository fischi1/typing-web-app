import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppContainer from './AppContainer';
import Routes from './Routes';
import usePrintConsoleHello from './shared/hooks/usePrintConsoleHello';
import { CssBaseline } from '@material-ui/core';

const App:FC<{}> = () => {

    usePrintConsoleHello();

    return <>
        <CssBaseline />
        <BrowserRouter>
            <AppContainer>
                <Routes />
            </AppContainer> 
        </BrowserRouter>
    </>
}

export default App;