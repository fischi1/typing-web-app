import { Card, Typography, ButtonBase } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React, { FC } from 'react';
import { Lesson } from '../../types/LessonType';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            // marginBottom: theme.spacing(2),
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
            display: "flex"
        },
        indexNumber: {
            fontSize: "4rem",            
            marginRight: theme.spacing(2),
        },
        middle: {
            flex: "1 0 auto"
        },
        right: {
        }
    })
);

type Props = {
    index: number,
    lesson: Lesson
};

const LessonCard : FC<Props> = props => {    
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <div>
                <Typography className={classes.indexNumber}>
                    {props.index}
                </Typography>
            </div>
            <div className={classes.middle}>
                <Typography>{props.index}: {props.lesson.text.substring(0, 20)}</Typography>
            </div>
            <div className={classes.right}>
                <ButtonBase>
                    <Typography>
                        GO!
                    </Typography>
                </ButtonBase>
            </div>
        </Card>
    );
}

export default LessonCard;
