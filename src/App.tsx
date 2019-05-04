import React, { FC } from 'react';
import withRootMui from './withRootMui';
import AppContainer from "./AppContainer";
import { BrowserRouter } from "react-router-dom";
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