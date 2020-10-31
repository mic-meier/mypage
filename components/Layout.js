/** @jsxRuntime classic */
/** @jsx jsx */
import Head from 'next/head'
import React from 'react'
import { Container, jsx } from 'theme-ui'

import Header from './Header'

export default function Layout({ children, title }) {
  return (
    <React.Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf8" />
        <title>{title}</title>
      </Head>
      <Header />
      <Container sx={{ maxWidth: '3xl', px: 5 }}>{children}</Container>
    </React.Fragment>
  )
}
