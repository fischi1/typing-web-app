import { Typography } from "@material-ui/core";
import React, { FC } from "react";
import { useSetTitleOnMount } from "../components/context/TitleProvider";

const Home : FC<{}> = () => {

    useSetTitleOnMount("Hub");

    return (
        <Typography variant="h5" align="center">Home</Typography>
    ); 
}

export default Home;