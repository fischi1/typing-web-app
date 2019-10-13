import { createMuiTheme, CssBaseline } from '@material-ui/core';
import { makeStyles, ThemeProvider } from '@material-ui/styles';
import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppContainer from './components/general/AppContainer';
import GlobalDebugOutlines from './components/general/GlobalDebugOutlines';
import usePrintConsoleHello from './hooks/usePrintConsoleHello';
import Routes from './components/general/Routes';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#212121",
            light: "#484848",
            dark: "#000000",
            contrastText: "#ffffff"
        },
        secondary: {
            main: "#212121",
            light: "#484848",
            dark: "#000000",
            contrastText: "#ffffff"
        },
        type: "dark"
    },
    typography: {
        fontFamily: "m5x7",
        fontSize: 24
    },
    overrides : {
        MuiIcon: {
            root: {
                width: "0.1rem",
                height: "0.1rem"
            }
        },
        MuiTypography : {
            root: {
                color: "white"
            }
        }
    }
});

const useStyles = makeStyles({
    "@global" :
    {
        body : {
            backgroundColor: "black",
            overflowX: "hidden",
            minWidth: "1130px",
            width: "auto !important"
        }
    }
});

const App:FC<{}> = () => {

    useStyles();

    usePrintConsoleHello();

    return <>
        <GlobalDebugOutlines />
        <CssBaseline />
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <AppContainer>
                    <Routes />
                </AppContainer> 
            </BrowserRouter>
        </ThemeProvider>
    </>
}

export default App;