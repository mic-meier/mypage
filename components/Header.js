/** @jsxRuntime classic */
/** @jsx jsx */
import Link from 'next/link'
import React from 'react'
import { jsx, MenuButton } from 'theme-ui'

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <header
      sx={{
        variant: 'header',
      }}
    >
      <MenuButton onClick={() => setIsOpen(!isOpen)} />
      <button
        sx={{ variant: 'buttons.nav' }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Link href="/">
          <a
            sx={{
              variant: 'nav.title',
              display: [() => (isOpen ? 'flex' : 'none'), 'flex'],
            }}
          >
            El Mayo
          </a>
        </Link>
      </button>
      <div sx={{ mx: 'auto' }} />
      <button
        sx={{ variant: 'buttons.nav' }}
        onClick={() => isOpen && setIsOpen(!isOpen)}
      >
        <Link href="/blog">
          <a
            sx={{
              variant: 'nav.link',
              display: [() => (isOpen ? 'flex' : 'none'), 'flex'],
            }}
          >
            Blog
          </a>
        </Link>
      </button>
    </header>
  )
}
