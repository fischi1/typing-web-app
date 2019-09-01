import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import React, { FC, useEffect } from 'react';
import useGermanKeysState from '../keyboard/useGermanKeysState';
import TypingRoot from './TypingRoot';
import { ttKeyPressed } from './typeTracking';



// const testText = "Far... far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic lif.";
//const testText = "asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf";
const testText = "asdf asdf asdf asdf asdf";

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
        const typing = new TypingRoot({
            text: testText
        });
        return(() => {
            typing.destroy();
        });
    }, [])

    return (<>
        <div className={classes.container} id="typing-area-container" />
    </>);
}

export default withStyles(styles)(TypingCanvas);
