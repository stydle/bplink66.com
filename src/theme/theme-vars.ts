import { Constants } from "@/types/constants-vars.d";
import { BreakpointSizes, Breakpoints } from "@/types/styled.d";

const ContainerSize: BreakpointSizes = {
  xs: 320,
  sm: 563,
  md: 768,
  lg: 1024,
  xl: 1440
};

export const BREAKPOINTS: Breakpoints = {
  xs: `(max-width: ${ContainerSize.xs}px)`,
  sm: `(min-width: ${ContainerSize.xs}px and max-width: ${ContainerSize.sm}px)`,
  md: `(min-width: ${ContainerSize.sm}px and max-width: ${ContainerSize.md}px)`,
  lg: `(min-width: ${ContainerSize.md}px and max-width: ${ContainerSize.lg}px)`,
  xl: `(min-width: ${ContainerSize.lg}px and max-width: ${ContainerSize.xl}px)`,
  xsAndSmaller: `(max-width: ${ContainerSize.xs}px)`,
  smAndSmaller: `(max-width: ${ContainerSize.sm}px)`,
  mdAndSmaller: `(max-width: ${ContainerSize.md}px)`,
  lgAndSmaller: `(max-width: ${ContainerSize.lg}px)`,
  xlAndSmaller: `(max-width: ${ContainerSize.xl}px)`,
  xsAndLarger: `(min-width: ${ContainerSize.xs + 1}px)`,
  smAndLarger: `(min-width: ${ContainerSize.sm + 1}px)`,
  mdAndLarger: `(min-width: ${ContainerSize.md + 1}px)`,
  lgAndLarger: `(min-width: ${ContainerSize.lg + 1}px)`,
  xlAndLarger: `(min-width: ${ContainerSize.xl + 1}px)`,
  mobile: `(max-width: ${ContainerSize.md}px)`,
  desktop: `(min-width: ${ContainerSize.md + 1}px)`
};

const ConstantThemes: Constants = {
  body: {
    font: "Helvetica Neue, Helvetica,PingFang SC, Tahoma,Arial, sans-serif",
    size: "16px"
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    bold: 700
  },
  fontSizes: {
    sm: "0.875rem",
    normal: "1rem"
  },
  lineHeights: {
    none: "1",
    shorter: "1.25",
    base: "1.5",
    tall: "1.8",
    menu: "2.25rem"
  },
  spacing: {
    1: "0.25rem",
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    10: "2.5rem",
    12: "3rem"
  },
  borderRadius: {
    none: "0",
    sm: "0.125rem",
    base: "0.25rem",
    md: "0.375rem",
    full: "9999px"
  },
  zIndex: {
    hide: "-1",
    auto: "auto",
    base: "0",
    heading: "1",
    menu: "10"
  },
  sizes: {
    container: ContainerSize,
    max: "960px",
    icon: "2.25rem",
    tag: "1.6rem"
  }
};

export default ConstantThemes;
