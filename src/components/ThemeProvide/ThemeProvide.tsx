import React from "react";
import { ThemeProvider, DefaultTheme } from "styled-components";
import { BREAKPOINTS } from "@/theme/theme-vars";

interface ThemeProps {
  children: React.ReactNode;
}

function ThemeProvide({ children }: ThemeProps) {
  const theme: DefaultTheme = {
    BREAKPOINTS
  };

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default ThemeProvide;
