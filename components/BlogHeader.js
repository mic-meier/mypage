/** @jsxRuntime classic */
/** @jsx jsx */
import format from 'date-fns/format'
import React from 'react'
import { jsx } from 'theme-ui'

function BlogHeader({ title, date }) {
  const formattedDate = format(new Date(date), 'do MMMM yyyy')
  return (
    <div
      sx={{
        mb: 6,
        borderBottom: (theme) => `1px solid ${theme.colors.green[5]}`,
      }}
    >
      <h1 sx={{ variant: 'blogTitle' }}>{title}</h1>
      <div sx={{ variant: 'blogDate', mb: 2 }}>{formattedDate}</div>
    </div>
  )
}

export default BlogHeader
