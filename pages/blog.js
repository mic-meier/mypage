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

export default function BlogList({ sortedPostsData }) {
  return (
    <Layout title="blog">
      <div>
        {sortedPostsData.map(({ slug, date, title, tagline }) => (
          <div key={slug}>
            {slug} {date} {title} {tagline}{' '}
          </div>
        ))}
      </div>
    </Layout>
  )
}
