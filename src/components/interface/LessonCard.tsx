import { Button, Card, Theme, Typography, useTheme } from "@material-ui/core"
import { createStyles, makeStyles } from "@material-ui/styles"
import clsx from "clsx"
import React, { FC } from "react"
import { highlightColors } from "../../highlightColors"
import { Lesson } from "../../types/LessonType"
import DiamondIcon from "./DiamondIcon"
import TooltipWrapper from "./TooltipWrapper"

type Props = {
    index: number
    completed: boolean
    lesson: Lesson | null
    notEnoughGems: boolean
    onStartBtnClicked?: () => void
}

const height = "96px"

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
            display: "flex"
        },
        indexNumber: {
            fontSize: "4rem",
            textAlign: "center",
            marginRight: theme.spacing(2)
        },
        left: {
            flex: "0 0 60px"
        },
        middle: {
            flex: "1",
            minWidth: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
        },
        right: {
            flex: "0 0 " + height
        },
        goButton: {
            width: height,
            height: "100%",
            flexDirection: "column",
            display: "block",
            paddingTop: theme.spacing(1),
            opacity: (props: Props) => (props.notEnoughGems ? 0.1 : 1)
        },
        goButtonText: {
            fontSize: "2.5rem",
            textTransform: "none"
        },
        goButtonDiamondCost: {
            display: "flex",
            alignItems: "center",
            position: "relative",
            paddingTop: theme.spacing(0.5)
        },
        lineHeightNormal: {
            lineHeight: "normal"
        },
        truncatedLessonText: {
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            marginBottom: theme.spacing(0.5)
        },
        lineHeightOne: {
            lineHeight: 1
        },
        subText: {
            fontSize: "1.4rem",
            color: highlightColors.gray,
            whiteSpace: "nowrap"
        },
        xButtonOverlay: {
            color: highlightColors.red,
            position: "absolute",
            fontSize: "7rem"
        }
    })
)

const LessonCard: FC<Props> = props => {
    const classes = useStyles(props)
    const theme = useTheme()

    const yesNo = (val: boolean) => (val ? "YES" : "NO")

    const notEnoughInfo = (
        <Typography
            style={{
                paddingLeft: theme.spacing(1),
                paddingRight: theme.spacing(1)
            }}
        >
            Not enough gems
        </Typography>
    )

    if (!props.lesson)
        return (
            <Card className={classes.root}>
                <div style={{ height: height }}>&nbsp;</div>
            </Card>
        )

    const button = (
        <Button
            className={classes.goButton}
            disabled={props.notEnoughGems}
            onClick={props.onStartBtnClicked}
        >
            <Typography
                component="div"
                className={clsx(classes.goButtonText, classes.lineHeightNormal)}
            >
                Start
            </Typography>
            <Typography
                component="div"
                className={clsx(
                    classes.goButtonDiamondCost,
                    classes.lineHeightNormal
                )}
            >
                <DiamondIcon width={40} />
                &nbsp;{props.lesson.gemCost}
            </Typography>
        </Button>
    )

    return (
        <Card className={classes.root}>
            <div className={classes.left}>
                <Typography className={classes.indexNumber}>
                    {props.index}
                </Typography>
            </div>
            <div className={classes.middle}>
                <Typography
                    className={clsx(
                        classes.truncatedLessonText,
                        classes.lineHeightOne
                    )}
                >
                    {props.lesson.text}
                </Typography>
                <div style={{ display: "flex" }}>
                    <div style={{ flex: "1 1 50%" }}>
                        <Typography
                            className={clsx(
                                classes.lineHeightOne,
                                classes.subText
                            )}
                        >
                            Words: {props.lesson.words}
                        </Typography>
                        <Typography
                            className={clsx(
                                classes.lineHeightOne,
                                classes.subText
                            )}
                            style={{
                                color: props.completed
                                    ? highlightColors.green
                                    : highlightColors.red
                            }}
                        >
                            Completed: {yesNo(props.completed)}
                        </Typography>
                    </div>
                    <div style={{ flex: "1 1 50%" }}>
                        <Typography
                            className={clsx(
                                classes.lineHeightOne,
                                classes.subText
                            )}
                        >
                            XP: {props.lesson.xpForSuccess}
                        </Typography>
                        <Typography
                            className={clsx(
                                classes.lineHeightOne,
                                classes.subText
                            )}
                        >
                            <DiamondIcon width={18} />
                            /Word: {props.lesson.gemsPerLetter}
                        </Typography>
                    </div>
                </div>
            </div>
            <div className={classes.right}>
                <TooltipWrapper
                    title={notEnoughInfo}
                    placement="left"
                    wrapperStyle={{ height: height }}
                    disabled={!props.notEnoughGems}
                >
                    {button}
                </TooltipWrapper>
            </div>
        </Card>
    )
}

export default LessonCard
