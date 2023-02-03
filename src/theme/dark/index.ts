import { ThemeColors } from '@/types/color-vars'

const COLORS: ThemeColors = {
  text: 'var(--colors-gray-100)',
  secondaryText: 'var(--colors-gray-400)',
  background: 'var(--colors-gray-800)',
  secondaryBackground: 'rgb(1, 22, 39)',
  border: 'var(--colors-whiteAlpha-200)',
  card: {
    bg: 'var(--colors-gray-700)'
  },
  button: {
    gray: {
      bg: 'var(--colors-whiteAlpha-200)',
      active: 'var(--colors-whiteAlpha-300)'
    }
  },
  nav: {
    bg: 'var(--colors-whiteAlpha-300)'
  }
}

export default COLORS
