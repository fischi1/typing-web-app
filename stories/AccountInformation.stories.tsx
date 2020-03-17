import { number, text } from '@storybook/addon-knobs';
import { storiesOf } from "@storybook/react";
import React from "react";
import AccountInformation from "../src/components/interface/AccountInformation";

storiesOf("AccountInformation", module).add("example", () => (
    <AccountInformation
        username={text("username", "username")}
        lvl={number("lvl", 0)}
        curXP={number("curXP", 333)}
        nextLvlXP={number("nextLvlXP", 1000)}
        gems={number("gems", 5021)}
    />
))
