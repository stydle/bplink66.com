import { createGlobalStyle } from "styled-components";

import ConstantThemes from "@/theme/theme-vars";
import { createCssVars } from "@/utils/utils";
import ColorThemes, { DarkThemes, LightThemes } from "@/theme/color-vars";
import { CSS_COLORS_PREFIX } from "@/constants";
import GlobalStyles from "./global";

const Styles = createGlobalStyle`
  ${GlobalStyles}

  :root,
  [data-theme]{
    ${createCssVars(ColorThemes, `${CSS_COLORS_PREFIX}-`)};
    ${createCssVars(ConstantThemes)};
  }

  :root[data-theme=light],
  [data-theme][data-theme=light] {
    ${createCssVars(LightThemes, `${CSS_COLORS_PREFIX}-`)};
  }

  :root[data-theme=dark],
  [data-theme][data-theme=dark] {
    ${createCssVars(DarkThemes, `${CSS_COLORS_PREFIX}-`)};
  }
`;

export default Styles;
