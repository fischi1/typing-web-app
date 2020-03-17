import { Container, Grid, Typography, useTheme } from "@material-ui/core"
import React, { FC } from "react"
import { useHistory } from "react-router"
import ReactTimeago from "react-timeago"
import { useGameResultHistoryState } from "../components/context/GameResultHistoryProvider"
import { useSetTitleOnMount } from "../components/context/TitleProvider"
import { useUserInfoState } from "../components/context/UserInfoProvider"
import { appbarHeight } from "../components/general/AppContainer"
import HubButton from "../components/interface/HubButton"
import { highlightColors } from "../highlightColors"
import useLessonCompletedCount from "../hooks/useLessonCompletedCount"

const Home: FC<{}> = () => {
    useSetTitleOnMount("Hub")

    const history = useHistory()
    const gameResultHistoryState = useGameResultHistoryState()
    const userInfoState = useUserInfoState()
    const theme = useTheme()
    const lessonCompletedInfo = useLessonCompletedCount()

    const lastGameResult =
        gameResultHistoryState.history.length === 0
            ? null
            : gameResultHistoryState.history[
                  gameResultHistoryState.history.length - 1
              ]

    return (
        <Grid
            container
            justify="center"
            alignItems="center"
            style={{ height: `calc(100vh - ${appbarHeight})` }}
        >
            <Container maxWidth="md" style={{ textAlign: "center" }}>
                <Typography
                    variant="h4"
                    style={{ marginBottom: theme.spacing(3) }}
                >
                    Hello{" "}
                    <span style={{ color: highlightColors.green }}>
                        {userInfoState.username}
                    </span>
                    !
                </Typography>
                <div style={{ marginBottom: theme.spacing(3.5) }}>
                    {!lastGameResult ? (
                        <Typography variant="h6">
                            You haven't completed any lesson yet
                        </Typography>
                    ) : (
                        <>
                            <Typography variant="h6">
                                You have completed{" "}
                                <span style={{ color: highlightColors.blue }}>
                                    {lessonCompletedInfo.completed} /{" "}
                                    {lessonCompletedInfo.amount}
                                </span>{" "}
                                lessons so far
                            </Typography>
                            <Typography variant="h6">
                                <span style={{ color: highlightColors.blue }}>
                                    <ReactTimeago date={lastGameResult.date} />
                                </span>{" "}
                                you completed your last lesson
                            </Typography>
                        </>
                    )}
                </div>
                <HubButton onClick={() => history.push("/lessons")}>
                    Start a lesson...
                </HubButton>
                {!!lastGameResult && (
                    <HubButton onClick={() => history.push("/stats")}>
                        View my stats
                    </HubButton>
                )}
            </Container>
        </Grid>
    )
}

export default Home
