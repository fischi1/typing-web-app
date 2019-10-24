import { Button } from "@material-ui/core";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import * as React from "react";

storiesOf("Button", module)
.add("with text", () => (
    <Button onClick={action("onClick")}>Hello Button</Button>
))
.add("with some emoji", () => (
    <Button onClick={action("onClick")}>
        <span role="img" aria-label="so cool">
            😀 😎 👍 💯
        </span>
    </Button>
));
        