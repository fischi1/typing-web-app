import React, { SFC } from 'react';
import withRootMui from './withRootMui';
import { Typography } from '@material-ui/core';

const App:SFC<{}> = () => {
  return <Typography>Sample Text</Typography> 
}

export default withRootMui(App);