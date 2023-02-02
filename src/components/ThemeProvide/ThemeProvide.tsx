import { BREAKPOINTS } from '@/theme/theme-vars'
import { ThemeProvider, DefaultTheme } from 'styled-components'

const ThemeProvide = ({ children }) => {
  const theme: DefaultTheme = {
    BREAKPOINTS: BREAKPOINTS,
  }

  return (
    <ThemeProvider theme={theme}>
      { children }
    </ThemeProvider>
  )
}

export default ThemeProvide;