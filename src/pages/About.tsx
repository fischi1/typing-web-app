import { Card, CardContent, Typography } from "@material-ui/core";
import React, { FC } from "react";
import { useSetTitleOnMount } from "../components/context/TitleProvider";

const About : FC<{}> = () => {

    useSetTitleOnMount("About");

    const card = (
        <Card>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>
                    Word of the Day
                </Typography>
                <Typography variant="h5" component="h2">
                    benevolent
                </Typography>
                <Typography color="textSecondary">
                adjective
                </Typography>
                <Typography component="p">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
                </Typography>
            </CardContent>
        </Card>
    );

    return (
		<div>     
			<Typography variant="h4">
				About
			</Typography>
			{card}
			{card}
			{card}
			{card}
			{card}
			{card}
			{card}
			{card}
		</div>
    );
}

export default About;