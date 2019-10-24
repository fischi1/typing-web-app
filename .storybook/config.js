import React from "react";
import GlobalStyleWrapper from "../src/components/interface/GlobalStyleWrapper";
import { withA11y } from '@storybook/addon-a11y';
import { addDecorator, configure, addParameters } from '@storybook/react';
import { themes } from '@storybook/theming';
import { withKnobs } from '@storybook/addon-knobs';

const req = require.context('../stories', true, /.stories.tsx$/);
function loadStories() {
  req.keys().forEach(req);
}
configure(loadStories, module);

addParameters({
    darkMode: {
      dark: { ...themes.dark },
      light: { ...themes.normal }
    }
});

const CenterDecorator = (storyFn) => (
  <GlobalStyleWrapper>
    {storyFn()}
  </GlobalStyleWrapper>
);
addDecorator(CenterDecorator);
addDecorator(withKnobs);

addDecorator(withA11y);