import { Container, Grid, Typography } from "@material-ui/core";
import React, { FC } from "react";
import { useHistory } from "react-router";
import { useSetTitleOnMount } from "../components/context/TitleProvider";
import { appbarHeight } from "../components/general/AppContainer";
import HubButton from "../components/interface/HubButton";

const Home : FC<{}> = () => {

    useSetTitleOnMount("Hub");

    const history = useHistory();

    
    return (
        <Grid container justify="center" alignItems="center" style={{height: `calc(100vh - ${appbarHeight})`}}> 
            <Container maxWidth="md" style={{textAlign: "center"}}>
                <Typography color="secondary" variant="h6">You have completed 6 / 50 lessons so far</Typography>
                <Typography color="secondary" variant="h6">3 hours ago you completed your last lesson</Typography>
                <HubButton onClick={() => history.push("/lessons")}>
                    Start a lesson...
                </HubButton>
                <HubButton onClick={() => history.push("/stats")}>
                    View my stats
                </HubButton>
            </Container>
        </Grid>
    ); 
}

export default Home;