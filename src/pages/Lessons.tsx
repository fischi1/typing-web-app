import { Typography } from "@material-ui/core";
import React, { FC } from "react";
import { useSetTitleOnMount } from "../components/context/TitleProvider";

const Lessons : FC<{}> = () => {

    useSetTitleOnMount("Lessons");
    
    return (
        <Typography variant="h5" align="center">Lessons</Typography>
    ); 
}

export default Lessons;