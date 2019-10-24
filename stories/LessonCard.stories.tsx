import React from "react";
import { storiesOf } from "@storybook/react";
import LessonCard from "../src/components/interface/LessonCard";
import {boolean, number, text} from '@storybook/addon-knobs';
import { action } from "@storybook/addon-actions";

const defaultText = "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence of the Almighty, who formed us in his own image, and the breath";

storiesOf("LessonCard", module)
.add("example", () => {

    return <LessonCard 
        completed={boolean("completed", false)}
        index={number("index", 0)}
        lesson={{
            countsTowardsStats: boolean("countsTowardsStats", false),
            gemCost: number("gemCost", 500),
            gemsPerLetter: number("gemsPerLetter", 3),
            levelRequirement: 0,
            text: text("text", defaultText),
            xpForSuccess: number("xpForSuccess", 50)
        }}
        notEnoughGems={boolean("notEnoughGems", false)}
        onStartBtnClicked={action("onStartBtnClicked")}
    />
})
        