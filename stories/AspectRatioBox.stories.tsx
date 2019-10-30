import { Container } from '@material-ui/core';
import { number } from '@storybook/addon-knobs';
import { storiesOf } from "@storybook/react";
import React from "react";
import AspectRatioBox from "../src/components/interface/AspectRatioBox";
import { highlightColors } from '../src/highlightColors';

storiesOf("AspectRatioBox", module)

.add("in container", () => (
    <Container maxWidth="xs">
        <AspectRatioBox
            width={number("width", 1)}
            height={number("height", 1)}
            style={{backgroundColor: highlightColors.green}}
        >
            &nbsp;
        </AspectRatioBox>
    </Container>
))


.add("full width", () => (
    <AspectRatioBox
        width={number("width", 16)}
        height={number("height", 3)}
        style={{backgroundColor: highlightColors.yellow}}
    >
        &nbsp;
    </AspectRatioBox>
));