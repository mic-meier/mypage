import { MDXProvider } from '@mdx-js/react'
import { ThemeProvider } from 'theme-ui'

import { components } from '../components/mdxcomponents/index'
import theme from '../theme/index'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <MDXProvider components={components}>
        <Component {...pageProps} />
      </MDXProvider>
    </ThemeProvider>
  )
}

export default MyApp
