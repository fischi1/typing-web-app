import React, { FC } from "react";
import { useSetTitleOnMount } from "../components/context/TitleProvider";
import HubButton from "../components/interface/HubButton";
import useResetApp from "../hooks/useResetApp";
import useLoadExampleData from "../hooks/useLoadExampleData";

const About : FC<{}> = () => {

    useSetTitleOnMount("About");

    const reset = useResetApp();
    const loadExampleData = useLoadExampleData();

    return (
		<>
            <HubButton onClick={reset}>Reset user data</HubButton>
            <HubButton onClick={loadExampleData}>Use example Data</HubButton>
        </>
    );
}

export default About;