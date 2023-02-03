interface ColorModular {
  50: string
  100: string
  200: string
  300: string
  400: string
  500: string
  600: string
  700: string
  800: string
  900: string
}

export interface ThemeColors {
  // text
  text: string
  secondaryText: string
  // background
  background: string
  secondaryBackground: string
  // border
  border: string
  // card
  card: {
    bg: string
  }
  // button
  button: {
    gray: {
      bg: string
      active: string
    }
  }
  // navigation
  nav: {
    bg: string
  }
}

export interface Colors {
  white: string
  black: string
  transparent: string
  gray: ColorModular
  whiteAlpha: ColorModular
  primary: string
  blue: string
  blueActive: string
  link: {
    text: string
    active: string
  }
  heading: {
    shadow: string
    gradient: string
  }
  card: {
    shadow: string
    active: string
  }
}
