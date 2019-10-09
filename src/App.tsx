import { createMuiTheme, CssBaseline } from '@material-ui/core';
import { makeStyles, ThemeProvider } from '@material-ui/styles';
import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppContainer from './AppContainer';
import Routes from './Routes';
import usePrintConsoleHello from './shared/hooks/usePrintConsoleHello';

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
            backgroundColor: "black"
        }
    }
});

const App:FC<{}> = () => {

    useStyles();

    usePrintConsoleHello();

    return <>
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