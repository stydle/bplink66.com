import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    BREAKPOINTS: Breakpoints;
  }
}

export interface BreakpointSizes {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

export interface Breakpoints {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xsAndSmaller: string;
  smAndSmaller: string;
  mdAndSmaller: string;
  lgAndSmaller: string;
  xlAndSmaller: string;
  xsAndLarger: string;
  smAndLarger: string;
  mdAndLarger: string;
  lgAndLarger: string;
  xlAndLarger: string;
  mobile: string;
  desktop: string;
}
