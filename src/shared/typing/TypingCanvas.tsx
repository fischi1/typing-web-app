import React, { FC, useEffect } from 'react';
import { withStyles, WithStyles, createStyles } from '@material-ui/core/styles';
import { init } from './pixijsTutorial';

const styles = () => createStyles({
    container: {
    }
});

type Props = {
} & WithStyles<typeof styles>;

const TypingCanvas : FC<Props> = (props) => {    
    const { classes } = props;

    useEffect(() => {
        init();
        return(() => {
            
        });
    }, [])

    return (
        <div className={classes.container} id="typing-area-container" />
    );
}

export default withStyles(styles)(TypingCanvas);
