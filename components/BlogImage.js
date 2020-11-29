/** @jsxRuntime classic */
/** @jsx jsx */

import Image from 'next/image'
import React from 'react'
import { jsx } from 'theme-ui'

function BlogImage({ url, alt }) {
  return (
    <div sx={{ my: 68 }}>
      <Image src={`${url}`} alt={alt} width={720} height={405} />
    </div>
  )
}

export default BlogImage
