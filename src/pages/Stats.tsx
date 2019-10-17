import { Typography } from "@material-ui/core";
import React, { FC } from "react";
import { useSetTitleOnMount } from "../components/context/TitleProvider";

const Stats : FC<{}> = () => {
    
    useSetTitleOnMount("Stats");

    return (
        <Typography variant="h5" align="center">Stats</Typography>
    ); 
}

export default Stats;