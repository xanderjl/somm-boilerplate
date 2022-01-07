import { ColorModeScript } from '@chakra-ui/react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { config } from 'theme/index'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang='en'>
        <Head>
          {/*  */}
          {/*  */}
        </Head>

        <body>
          <ColorModeScript initialColorMode={config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
