import { MDXProvider } from '@mdx-js/react'
import { ThemeProvider } from 'theme-ui'

import CodeBlock from '../components/CodeBlock'
import theme from '../theme'

const components = {
  // eslint-disable-next-line react/display-name
  pre: (props) => <div {...props} />,
  code: CodeBlock,
}

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
