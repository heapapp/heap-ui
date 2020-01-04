import { configure, addParameters } from "@storybook/react";
import { themes } from "@storybook/theming";

const heapTheme = {
  ...themes.dark,
  appBg: "#19191C",
  appContentBg: "#1F1F23",
  barBg: "#1F1F23"
};

addParameters({
  options: {
    theme: heapTheme
  }
});

configure(require.context("../src", true, /\.stories\.(js|jsx)$/), module);
