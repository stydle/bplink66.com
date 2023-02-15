import React from "react";
import {
  PREFERS_LOCAL_KEY,
  PREFERS_THEME_KEY,
  PREFERS_THEME_CSS_PROP
} from "@/constants";

export enum ThemeColors {
  light = "light",
  dark = "dark"
}

const DefaultContext = {
  colorMode: ThemeColors.light,
  setColorMode: () => {},
  allowColorTransitions: false
};

export const ContentContext = React.createContext<{
  colorMode: ThemeColors;
  setColorMode: (value: ThemeColors) => void;
  allowColorTransitions: boolean;
}>(DefaultContext);

interface ContextProps {
  children: React.ReactNode;
}

export function ConfigProvider({ children }: ContextProps) {
  const {
    colorMode: initialColorValue,
    allowColorTransitions: initialAllowColorTransitions
  } = DefaultContext;
  const [colorMode, rawSetColorMode] =
    React.useState<ThemeColors>(initialColorValue);
  const [allowColorTransitions, setAllowColorTransitions] =
    React.useState<boolean>(initialAllowColorTransitions);

  React.useEffect(() => {
    const root = window.document.documentElement;
    const localColorValue = root.style.getPropertyValue(PREFERS_THEME_CSS_PROP);

    if (localColorValue !== initialColorValue) {
      rawSetColorMode(localColorValue as ThemeColors);
    }
  }, [initialColorValue]);

  const setColorMode = React.useCallback(
    (value: ThemeColors) => {
      if (!allowColorTransitions) {
        setAllowColorTransitions(true);
      }
      const root = window.document.documentElement;

      rawSetColorMode(value);
      root.setAttribute(PREFERS_THEME_KEY, value);
      root.style.setProperty(PREFERS_THEME_CSS_PROP, value);
      localStorage.setItem(PREFERS_LOCAL_KEY, value);
    },
    [allowColorTransitions]
  );

  React.useEffect(() => {
    const QUERY = "(prefers-color-scheme: dark)";
    const mediaQueryList = window.matchMedia(QUERY);
    const listener = (event: MediaQueryListEvent) => {
      const isDark = event.matches;
      setColorMode(isDark ? ThemeColors.dark : ThemeColors.light);
    };

    if (mediaQueryList.addEventListener) {
      mediaQueryList.addEventListener("change", listener);
    } else {
      mediaQueryList.addListener(listener);
    }

    return () => {
      if (mediaQueryList.removeEventListener) {
        mediaQueryList.removeEventListener("change", listener);
      } else {
        mediaQueryList.removeListener(listener);
      }
    };
  }, [setColorMode]);

  const value = React.useMemo(() => {
    return {
      colorMode,
      setColorMode,
      allowColorTransitions
    };
  }, [colorMode, setColorMode, allowColorTransitions]);

  return (
    <ContentContext.Provider value={value}>{children}</ContentContext.Provider>
  );
}
