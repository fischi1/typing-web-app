import React from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

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

const App: React.FC = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Typography>Text</Typography>
    </MuiThemeProvider>
  );
}

export default App;
