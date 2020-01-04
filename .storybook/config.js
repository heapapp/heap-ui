import { configure, addParameters, addDecorator } from "@storybook/react";
import { themes } from "@storybook/theming";
import ThemeDecorator from "./themeDecorator";

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

addDecorator(ThemeDecorator);

configure(require.context("../src", true, /\.stories\.(js|jsx)$/), module);
