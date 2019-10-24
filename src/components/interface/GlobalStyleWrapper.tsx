import { createMuiTheme, CssBaseline } from '@material-ui/core';
import { makeStyles, ThemeProvider } from '@material-ui/styles';
import React, { FC, ReactNode } from 'react';
import { highlightColors } from '../../highlightColors';
import useGlobalPixelatedStyle from '../../hooks/useGlobalPixelatedStyle';
import GlobalDebugOutlines from '../general/GlobalDebugOutlines';

type Props = {
    children: ReactNode
}

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

const GlobalStyleWrapper: FC<{}> = props => {

    useStyles();

    useGlobalPixelatedStyle();

    return <>
        <GlobalDebugOutlines />
        <CssBaseline />
        <ThemeProvider theme={theme}>
            {props.children}
        </ThemeProvider>
    </>
}

export default GlobalStyleWrapper;