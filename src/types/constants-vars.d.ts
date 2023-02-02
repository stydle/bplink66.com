
interface bodyTypes {
  font: string
}

interface fontWeighTypes {
  normal: number,
  medium: number,
  bold: number
}

interface fontSizeTypes {
  sm: string,
  normal: string
}

interface lineHeightTypes {
  none: string,
  shorter: string,
  base: string,
  tall: string,
  menu: string,
}

interface spacingTypes {
  1: string,
  2: string,
  3: string,
  4: string,
  5: string,
  6: string,
  7: string,
  8: string,
  9: string,
  10: string,
  12: string,
}

interface borderRadiusTypes {
  none: string,
  sm: string,
  base: string,
  md: string,
  full: string,
}

interface zIndexTypes {
  hide: string,
  auto: string,
  base: string,
  heading: string,
  menu: string,
}

interface sizesTypes {
  container: {
    xs: number,
    sm: number,
    md: number,
    lg: number,
    xl: number,
  },
  max: string,
  icon: string,
  tag: string
}

export interface Constants {
  body: bodyTypes;
  fontWeights: fontWeighTypes,
  fontSizes: fontSizeTypes,
  lineHeights: lineHeightTypes,
  spacing: spacingTypes,
  borderRadius: borderRadiusTypes,
  zIndex: zIndexTypes,
  sizes: sizesTypes
}