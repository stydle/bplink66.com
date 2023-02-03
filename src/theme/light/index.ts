import { ThemeColors } from '@/types/color-vars'

const COLORS: ThemeColors = {
  text: 'var(--colors-gray-800)',
  secondaryText: 'var(--colors-gray-500)',
  background: 'var(--colors-white)',
  secondaryBackground: 'var(--colors-gray-100)',
  border: 'var(--colors-gray-200)',
  card: {
    bg: 'var(--colors-white)'
  },
  button: {
    gray: {
      bg: 'var(--colors-gray-100)',
      active: 'var(--colors-gray-200)'
    }
  },
  nav: {
    bg: 'var(--colors-gray-100)'
  }
}

export default COLORS
