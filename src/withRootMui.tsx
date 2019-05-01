import React, { ComponentType } from "react";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#0277bd",
      light: "#58a5f0",
      dark: "#004c8c",
      contrastText: "#ffffff"
    },
    secondary: {
      main: "#d32f2f",
      light: "#ff6659",
      dark: "#9a0007",
      contrastText: "#ffffff"
    }
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