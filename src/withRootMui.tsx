import React, { ComponentType, FC } from "react";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import getDisplayName from "./shared/functions/getDisplayName";

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
    }
});

const withRootMui = <P extends object>(Component: ComponentType<P>) => {
    var Wrapper: FC<P> = (props: P) => {
        return <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <Component {...props}/>
        </MuiThemeProvider>;
    }
    Wrapper.displayName = `WithRootMui(${getDisplayName(Component)})`;
    return Wrapper;
}

export default withRootMui;