/** @jsxRuntime classic */
/** @jsx jsx */
import Link from 'next/link'
import { jsx } from 'theme-ui'

export default function Header() {
  return (
    <header
      sx={{
        variant: 'header',
      }}
    >
      <Link href="/">
        <a
          sx={{
            variant: 'nav.title',
          }}
        >
          El Mayo
        </a>
      </Link>
      <div sx={{ mx: 'auto' }} />
      <Link href="/blog">
        <a sx={{ variant: 'nav.link' }}>Blog</a>
      </Link>
    </header>
  )
}
