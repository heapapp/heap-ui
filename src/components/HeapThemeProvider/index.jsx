import React from "react";
import { ThemeProvider } from "styled-components";

import defaultTheme from "../../theme";

const HeapThemeProvider = ({ children, theme = defaultTheme }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default HeapThemeProvider;
