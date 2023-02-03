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
