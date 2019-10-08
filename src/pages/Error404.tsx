import { Typography } from "@material-ui/core";
import React, { FC } from "react";

type Props = {
};

const Error404 : FC<Props> = props => {
    return (
        <Typography variant="h5" align="center">Not Found</Typography>
    ); 
}

export default Error404;