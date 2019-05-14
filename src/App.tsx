import React, { FC } from 'react';
import withRootMui from './withRootMui';
import TypingCanvas from './shared/typing/TypingCanvas';

const App:FC<{}> = () => {
    return <>
        <TypingCanvas />
    </>
}

export default withRootMui(App);