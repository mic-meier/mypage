/** @jsxRuntime classic */
/** @jsx jsx */
import Link from 'next/link'
import { jsx } from 'theme-ui'

export default function Header() {
  return (
    <header
      sx={{
        display: 'flex',
        alignItems: 'center',
        variant: 'styles.header',
      }}
    >
      <div sx={{ mx: 'auto' }} />
      <Link
        href="/"
        sx={{
          variant: 'styles.navtitle',
        }}
      >
        Hello
      </Link>
      <div sx={{ mx: 'auto' }} />
      <Link
        href="/blog"
        sx={{
          variant: 'stles.navlink',
        }}
      >
        Blog
      </Link>
    </header>
  )
}
