import { Typography } from "@material-ui/core";
import React, { FC } from "react";
import { useSetTitleOnMount } from "../components/context/TitleProvider";

const Settings : FC<{}> = () => {

    useSetTitleOnMount("Settings");
    
    return (
        <Typography variant="h5" align="center">Help</Typography>
    ); 
}

export default Settings;