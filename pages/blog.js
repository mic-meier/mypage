/** @jsxRuntime classic */
/** @jsx jsx */
import format from 'date-fns/format'
import Link from 'next/link'
import { jsx } from 'theme-ui'

import Layout from '../components/Layout'
import { getSortedPostsData } from '../lib/getPostsData'

export const getStaticProps = async () => {
  const sortedPostsData = getSortedPostsData()

  return {
    props: {
      sortedPostsData,
    },
  }
}

function BlogListItem({ title, date, tagline, slug }) {
  const formattedDate = format(new Date(date), 'do MMMM yyyy')
  return (
    <div sx={{ variant: 'blogListItem.container' }}>
      <Link href={`/posts/${slug}`}>
        <a sx={{ variant: 'blogListItem.link' }}>
          <div>
            <h2 sx={{ variant: 'blogListItem.title' }}>{title}</h2>
            <div sx={{ variant: 'blogListItem.date' }}>{formattedDate}</div>
            <div sx={{ variant: 'blogListItem.tagline' }}>{tagline}</div>
          </div>
        </a>
      </Link>
    </div>
  )
}

export default function BlogList({ sortedPostsData }) {
  return (
    <Layout title="blog">
      <div>
        {sortedPostsData.map(({ slug, date, title, tagline }) => (
          <BlogListItem
            title={title}
            date={date}
            tagline={tagline}
            slug={slug}
            key={slug}
          />
        ))}
      </div>
    </Layout>
  )
}
