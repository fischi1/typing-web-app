import { Typography } from "@material-ui/core"
import { action } from "@storybook/addon-actions"
import { text } from "@storybook/addon-knobs"
import { storiesOf } from "@storybook/react"
import React from "react"
import ChooseDialog from "../src/components/interface/ChooseDialog"
import DiamondIcon from "../src/components/interface/DiamondIcon"

storiesOf("ChooseDialog", module)
    .add("simple example", () => (
        <ChooseDialog onYes={action("onYes")} onNo={action("onNo")}>
            <Typography align="center">
                Spend 248 Gems to start this lesson?
            </Typography>
        </ChooseDialog>
    ))

    .add("blind text", () => (
        <ChooseDialog onYes={action("onYes")} onNo={action("onNo")}>
            <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                facilisis commodo turpis, vitae dapibus sapien blandit quis.
                Praesent porttitor a urna eget mollis. Nulla laoreet fringilla
                metus vitae tincidunt. Sed erat tortor, efficitur eu interdum
                non, iaculis consectetur leo. Fusce placerat erat elementum elit
                consequat, a mollis risus sagittis. Integer vitae ligula
                maximus, faucibus quam vel, lacinia tortor. Nam eget enim eu
                mauris sagittis auctor. In quis mollis nisi. Maecenas et magna
                dui.
            </Typography>
            <Typography>&nbsp;</Typography>
            <Typography>
                Donec pulvinar rutrum metus vel mollis. Nullam non pharetra ex,
                vitae blandit ante. Fusce sagittis, sapien sed convallis
                dignissim, quam orci euismod sapien, ac posuere orci purus ut
                turpis. Suspendisse potenti. Nunc eu sagittis augue, in
                vulputate massa. Nulla et augue sed arcu condimentum fringilla.
                Suspendisse potenti. Nullam vitae pharetra nulla. Nulla iaculis
                ligula ipsum, bibendum rutrum nisl tempor vitae
            </Typography>
        </ChooseDialog>
    ))

    .add("icon in text", () => (
        <ChooseDialog onYes={action("onYes")} onNo={action("onNo")}>
            <Typography align="center">
                Spend 248 <DiamondIcon width={18} /> to start this lesson?
            </Typography>
        </ChooseDialog>
    ))

    .add("button labels", () => (
        <ChooseDialog
            onYes={action("onYes")}
            onNo={action("onNo")}
            yesText={text("yesText", "I approve")}
            noText={text("noText", "I do not approve")}
        >
            <Typography align="center">
                Spend 248 Gems to start this lesson?
            </Typography>
        </ChooseDialog>
    ))
