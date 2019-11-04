import { Button } from "@material-ui/core";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import React from "react";

storiesOf("Button", module)

.add("with text", () => (
    <div style={{margin: "3rem"}}>
        <Button onClick={action("onClick")}>Hello Button</Button>
    </div>
))

.add("with some emoji", () => (
    <div style={{margin: "3rem"}}>
        <Button onClick={action("onClick")}>
            <span role="img" aria-label="so cool">
                😀 😎 👍 💯
            </span>
        </Button>
    </div>
))

.add("disabled", () => <>
    <div style={{margin: "3rem"}}>
        <Button onClick={action("onClick")}>Normal Button</Button>
    </div>
    <div style={{margin: "3rem"}}>
        <Button
            onClick={action("onClick")}
            disabled
        >
            Disabled Button
        </Button>
    </div>
</>);
        