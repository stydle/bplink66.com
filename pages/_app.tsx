import type { AppProps } from 'next/app'

import GlobalStyles from '@/styles/index'
import { ConfigProvider } from '@/components/ConfigContext/ConfigContext'
import ThemeProvide from '@/components/ThemeProvide/ThemeProvide'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider>
      {/* theme */}
      <ThemeProvide>
        {/* content */}
        <Component {...pageProps} />
        {/* reset css style */}
        <GlobalStyles />
      </ThemeProvide>
    </ConfigProvider>
  )
}
