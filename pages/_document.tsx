import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()],
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <script
            id="theme-hydration"
            dangerouslySetInnerHTML={{
              __html: `(function(){const isDark=window.matchMedia("(prefers-color-scheme: dark)").matches;const colorMode=localStorage.getItem("data-color-mode");const theme=("string"==typeof colorMode?("light"===colorMode?colorMode:"dark"):(isDark?"dark":"light"));const root=document.documentElement;root.setAttribute("data-theme",theme);root.style.setProperty("--color-scheme",theme)})();`
            }}
          ></script>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
