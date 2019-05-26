import React, { FC } from 'react';
import withRootMui from './withRootMui';
import { BrowserRouter } from 'react-router-dom';
import AppContainer from './AppContainer';
import Routes from './Routes';

const App:FC<{}> = () => {
    return <>
      <BrowserRouter>
          <AppContainer>
              <Routes />
          </AppContainer> 
      </BrowserRouter>
    </>
}

export default withRootMui(App);