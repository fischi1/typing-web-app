import React, { ComponentType } from "react";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

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
        fontFamily: "Roboto Mono"
    }
});

export default function withRootMui(Component : ComponentType<{}>) : ComponentType<{}> {
    const Welcome: React.SFC<{}> = () => {
        return <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <Component />
        </MuiThemeProvider>;
    }
    return Welcome;
}