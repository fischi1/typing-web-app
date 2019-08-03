import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import React, { FC, useEffect } from 'react';
import useGermanKeysState from '../keyboard/useGermanKeysState';
import TypingRoot from './initTyping';
import { ttKeyPressed } from './typeTracking';

const styles = () => createStyles({
    container: {
    }
});

type Props = {
} & WithStyles<typeof styles>;

const TypingCanvas : FC<Props> = (props) => {    
    const { classes } = props;

    useGermanKeysState({onKeyDown: key => {
        ttKeyPressed(key);
    }})

    useEffect(() => {
        const typing = new TypingRoot();
        return(() => {
            typing.destroy();
        });
    }, [])

    return (<>
        <div className={classes.container} id="typing-area-container" />
    </>);
}

export default withStyles(styles)(TypingCanvas);
