import React from "react";
import { ThemeProvider } from "styled-components";

const HeapThemeProvider = ({ children, theme }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default HeapThemeProvider;
