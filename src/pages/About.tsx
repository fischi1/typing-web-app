import { Container, Grid, Link, Typography } from "@material-ui/core"
import React, { FC } from "react"
import { useSetTitleOnMount } from "../components/context/TitleProvider"
import { appbarHeight } from "../components/general/AppContainer"
import HubButton from "../components/interface/HubButton"
import { highlightColors } from "../highlightColors"
import useLoadExampleData from "../hooks/useLoadExampleData"
import useResetApp from "../hooks/useResetApp"

const ExternalLink: FC<{ href: string }> = ({ href, children }) => (
    <Link href={href} rel="noopener noreferrer" target="_blank">
        {children}
    </Link>
)

const About: FC<{}> = () => {
    useSetTitleOnMount("About")

    const reset = useResetApp()
    const loadExampleData = useLoadExampleData()

    return (
        <Grid
            container
            justify="center"
            alignItems="center"
            style={{ height: `calc(100vh - ${appbarHeight})` }}
        >
            <Container maxWidth="md" style={{ textAlign: "center" }}>
                <Typography variant="h5">
                    Made by{" "}
                    <ExternalLink href="https://twitter.com/Fischinator">
                        <span style={{ color: highlightColors.blue }}>
                            fischi
                        </span>
                    </ExternalLink>
                </Typography>
                <div>&nbsp;</div>
                <ExternalLink href="https://github.com/fischi1/typing-web-app">
                    <Typography>
                        <span style={{ color: highlightColors.yellow }}>
                            View on github
                        </span>
                    </Typography>
                </ExternalLink>
                <div>&nbsp;</div>
                <ExternalLink href="https://lukasfischer.me">
                    <Typography>
                        <span style={{ color: highlightColors.yellow }}>
                            https://lukasfischer.me
                        </span>
                    </Typography>
                </ExternalLink>
                <div style={{ lineHeight: "7rem" }}>&nbsp;</div>
                <HubButton onClick={reset}>
                    <span style={{ fontSize: "1.4rem" }}>Reset user data</span>
                </HubButton>
                <HubButton onClick={loadExampleData}>
                    <span style={{ fontSize: "1.4rem" }}>Use example data</span>
                </HubButton>
            </Container>
        </Grid>
    )
}

export default About
