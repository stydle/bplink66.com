import React from "react";
import {
  PREFERS_LOCAL_KEY,
  PREFERS_THEME_KEY,
  PREFERS_THEME_CSS_PROP
} from "@/constants";

export const ContentContext = React.createContext<{
  colorMode: string;
  setColorMode: (string) => void;
  allowColorTransitions: boolean;
} | null>(null);

interface ContextProps {
  children: React.ReactNode;
}

export function ConfigProvider({ children }: ContextProps) {
  const initialColorValue = "light";
  const initialAllowColorTransitions = false;
  const [colorMode, rawSetColorMode] = React.useState(initialColorValue);
  const [allowColorTransitions, setAllowColorTransitions] = React.useState(
    initialAllowColorTransitions
  );

  React.useEffect(() => {
    const root = window.document.documentElement;
    const localColorValue = root.style.getPropertyValue(PREFERS_THEME_CSS_PROP);

    if (localColorValue !== initialColorValue) {
      rawSetColorMode(localColorValue);
    }
  }, []);

  const setColorMode = React.useCallback(
    (value) => {
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
    const listener = (event) => {
      const isDark = event.matches;
      setColorMode(isDark ? "dark" : "light");
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
  }, []);

  const value = React.useMemo(() => {
    return {
      colorMode,
      setColorMode,
      allowColorTransitions
    };
  }, [colorMode, setColorMode, rawSetColorMode, allowColorTransitions]);

  return (
    <ContentContext.Provider value={value}>{children}</ContentContext.Provider>
  );
}
