import { createGlobalStyle } from 'styled-components';

import GlobalStyles from './global'
import ConstantThemes from '@/theme/theme-vars'
import { createCssVars } from '@/utils/utils'
import ColorThemes, { DarkThemes, LightThemes } from '@/theme/color-vars'

const Styles = createGlobalStyle`
  ${GlobalStyles}

  :root,
  [data-theme]{
    ${createCssVars(ColorThemes, '--colors')};
    ${createCssVars(ConstantThemes, '-')};
  }

  :root[data-theme=light],
  [data-theme][data-theme=light] {
    ${createCssVars(LightThemes, '--colors')};
  }
  :root[data-theme=dark],
  [data-theme][data-theme=dark] {
    ${createCssVars(DarkThemes, '--colors')};
  }
`

export default Styles