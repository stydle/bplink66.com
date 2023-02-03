import { CSS_COLORS_PREFIX, CSS_CONSTANT_PREFIX } from '@/constants'

export const color = (colorKey: string = '') => {
  const cssVar = colorKey.split('.').reduce((acc, key) => acc + '-' + key, CSS_COLORS_PREFIX);
  return `var(${cssVar})`;
};

export const constant = (colorKey: string) => {
  const constantVar = colorKey.split('.').reduce((acc, key) => acc + '-' + key, CSS_CONSTANT_PREFIX);
  return `var(${constantVar})`;
};

const createCssVar = (before = '--') => {
  const transformCssVars: (items: unknown, prefix?: string) => string[] = (
    items,
    prefix = '-'
  ) =>
    Object.entries(items).flatMap(([key, value]) => {
      const varName = `${prefix}${key}`
      if (typeof value === 'object')
        return transformCssVars(value, `${varName}-`)
      return `${before}${varName}:${value}`
    })
  return transformCssVars
}

export const createCssVars: (
  themeColors: unknown,
  before?: string
) => string = (themeColors, before = '--') =>
  createCssVar(before)(themeColors).join(';')
