import { CSS_COLORS_PREFIX, CSS_PREFIX } from "@/constants";
import { ConstantTypes } from "@/types/constants-vars.d";
import { ColorTypes, ThemeColorTypes } from "@/types/color-vars.d";

const getColorsVarsByKey = (colorKey: string, prefix = ""): string =>
  colorKey.split(".").reduce((acc, key) => `${acc}-${key}`, prefix);

export const color = (colorKey = "") => {
  const cssVar = getColorsVarsByKey(
    colorKey,
    `${CSS_PREFIX}${CSS_COLORS_PREFIX}`
  );

  return `var(${cssVar})`;
};

export const constant = (colorKey = "") => {
  const constantVar = getColorsVarsByKey(colorKey, "-");

  return `var(${constantVar})`;
};

const transformCssVars = (items: object, prefix = ""): string[] => {
  return Object.entries(items).flatMap(([key, value]) => {
    const varName = `${prefix}${key}`;

    if (typeof value === "object")
      return transformCssVars(value, `${varName}-`);

    return `${CSS_PREFIX}${varName}:${value}`;
  });
};

export const createCssVars = (
  themeColors: ConstantTypes | ColorTypes | ThemeColorTypes,
  prefix = ""
): string => transformCssVars(themeColors, prefix).join(";");
