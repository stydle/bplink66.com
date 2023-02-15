interface BodyTypes {
  font: string;
  size: string;
}

interface FontWeighTypes {
  normal: number;
  medium: number;
  bold: number;
}

interface FontSizeTypes {
  sm: string;
  normal: string;
}

interface LineHeightTypes {
  none: string;
  shorter: string;
  base: string;
  tall: string;
  menu: string;
}

interface SpacingTypes {
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
  7: string;
  8: string;
  9: string;
  10: string;
  12: string;
}

interface BorderRadiusTypes {
  none: string;
  sm: string;
  base: string;
  md: string;
  full: string;
}

interface ZIndexTypes {
  hide: string;
  auto: string;
  base: string;
  heading: string;
  menu: string;
}

interface SizesTypes {
  container: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
  max: string;
  icon: string;
  tag: string;
}

export interface ConstantTypes {
  body: BodyTypes;
  fontWeights: FontWeighTypes;
  fontSizes: FontSizeTypes;
  lineHeights: LineHeightTypes;
  spacing: SpacingTypes;
  borderRadius: BorderRadiusTypes;
  zIndex: ZIndexTypes;
  sizes: SizesTypes;
}
