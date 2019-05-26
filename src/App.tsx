import React, { FC } from 'react';
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
    return <>
      <BrowserRouter>
          <AppContainer>
              <Routes />
          </AppContainer> 
      </BrowserRouter>
    </>
}

export default withStyles(styles)(withRootMui(App));