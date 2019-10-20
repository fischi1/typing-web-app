import { createMuiTheme, CssBaseline } from '@material-ui/core';
import { makeStyles, ThemeProvider } from '@material-ui/styles';
import React, { FC } from 'react';
import GlobalDebugOutlines from './components/general/GlobalDebugOutlines';
import RootWrapper from './components/general/RootWrapper';
import Routes from './components/general/Routes';
import usePrintConsoleHello from './hooks/usePrintConsoleHello';
import { highlightColors } from './highlightColors';
import useGlobalPixelatedStyle from './hooks/useGlobalPixelatedStyle';

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
        },
        MuiCard: {
            root: {
                backgroundColor: highlightColors.darkgray,
                borderRadius: 0
            }
        },
        MuiTooltip: {
            tooltip: {
                borderRadius: 0,
                backgroundColor: highlightColors.darkgray,
                maxWidth: "none"
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
        },
        "::selection" : {
            backgroundColor: highlightColors.deer
        },
        "::-moz-selection" : {
            backgroundColor: highlightColors.deer
        }
    }
});

const App:FC<{}> = () => {

    useStyles();

    usePrintConsoleHello();
    useGlobalPixelatedStyle();

    return <>
        <GlobalDebugOutlines />
        <CssBaseline />
        <ThemeProvider theme={theme}>
            <RootWrapper>
                <Routes />
            </RootWrapper>
        </ThemeProvider>
    </>
}

export default App;