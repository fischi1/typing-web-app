import { Typography } from "@material-ui/core";
import React, { FC } from "react";
import { useSetTitleOnMount } from "../components/context/TitleProvider";

const Help : FC<{}> = () => {

    useSetTitleOnMount("Help");
    
    return (
        <Typography variant="h5" align="center">Help</Typography>
    ); 
}

export default Help;