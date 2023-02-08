import React from "react";
import type { AppProps } from "next/app";

import GlobalStyles from "@/styles/index";
import { ConfigProvider } from "@/components/ConfigContext/ConfigContext";
import ThemeProvide from "@/components/ThemeProvide/ThemeProvide";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider>
      {/* theme */}
      <ThemeProvide>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
        {/* reset css style */}
        <GlobalStyles />
      </ThemeProvide>
    </ConfigProvider>
  );
}
