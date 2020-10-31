/** @jsxRuntime classic */
/** @jsx jsx */
import Link from 'next/link'
import { Container, jsx } from 'theme-ui'

export default function Header() {
  return (
    <header
      sx={{
        variant: 'header',
      }}
    >
      <Container
        sx={{
          display: 'flex',
          alignItems: 'flex-end',
          variant: 'header',
          maxWidth: '3xl',
          px: 5,
        }}
      >
        <Link href="/">
          <a
            sx={{
              variant: 'links.navtitle',
            }}
          >
            El Mayo
          </a>
        </Link>
        <div sx={{ mx: 'auto' }} />
        <Link href="/blog">
          <a sx={{ variant: 'links.navlink' }}>Blog</a>
        </Link>
        <Link href="/blog">
          <a sx={{ variant: 'links.navlink' }}>Blog</a>
        </Link>
      </Container>
    </header>
  )
}
