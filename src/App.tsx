import React, { FC, useEffect } from 'react';
import withRootMui from './withRootMui';
import { BrowserRouter } from 'react-router-dom';
import AppContainer from './AppContainer';
import Routes from './Routes';
import { createStyles, withStyles } from '@material-ui/core';

const styles = createStyles({
    '@global': {
        body: {
            minWidth: "1400px"
        }
    }
});

const App:FC<{}> = () => {

    useEffect(() => {
        console.log(
            "\n" + 
            " ______   __     ______     ______     __  __     __    \n" +
            "/\\  ___\\ /\\ \\   /\\  ___\\   /\\  ___\\   /\\ \\_\\ \\   /\\ \\   \n" +
            "\\ \\  __\\ \\ \\ \\  \\ \\___  \\  \\ \\ \\____  \\ \\  __ \\  \\ \\ \\  \n" +
            " \\ \\_\\    \\ \\_\\  \\/\\_____\\  \\ \\_____\\  \\ \\_\\ \\_\\  \\ \\_\\ \n" +
            "  \\/_/     \\/_/   \\/_____/   \\/_____/   \\/_/\\/_/   \\/_/ \n\n" + 
            "                                https://lukasfischer.me"
        );
    }, [])

    return <>
      <BrowserRouter>
          <AppContainer>
              <Routes />
          </AppContainer> 
      </BrowserRouter>
    </>
}

export default withStyles(styles)(withRootMui(App));